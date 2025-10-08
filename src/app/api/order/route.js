import https from "https";

const EEVE = [
    { id: 1, name: "1-32", price: 32 },
    { id: 2, name: "33-64", price: 64 },
    { id: 3, name: "65-100", price: 100 },
    { id: 4, name: "101-200", price: 120 },
    { id: 5, name: "201-300", price: 160 },
    { id: 6, name: "301-400", price: 200 },
    { id: 7, name: "401-500", price: 240 },
    { id: 8, name: "501-1000", price: 400 },
    { id: 9, name: "1001-2000", price: 800 },
    { id: 10, name: "2001-3000", price: 1200 },
];

const CYCLES = [
    { id: 1, name: "1-32", price: 80 },
    { id: 2, name: "33-64", price: 160 },
    { id: 3, name: "65-100", price: 250 },
    { id: 4, name: "101-200", price: 400 },
    { id: 5, name: "201-300", price: 550 },
    { id: 6, name: "301-400", price: 700 },
    { id: 7, name: "401-500", price: 850 },
    { id: 8, name: "501-1000", price: 1500 },
    { id: 9, name: "1001-2000", price: 2000 },
    { id: 10, name: "2001-3000", price: 2500 },
];

const resolusi = [
    { id: 1, name: "144p", price: 2 },
    { id: 2, name: "240p", price: 3 },
    { id: 3, name: "480p", price: 4 },
    { id: 4, name: "720p", price: 2 },
    { id: 5, name: "1080p", price: 3 },
    { id: 6, name: "1440p", price: 4 },
    { id: 7, name: "2160P", price: 4 },
];

export async function POST(req) {
    try {
        const body = await req.json();

        // Hitung harga di backend
        const sampleArray = body.engine === "EEVE" ? EEVE : CYCLES;
        const harga =
        (sampleArray.find((s) => s.name === body.sample)?.price || 0) *
        (Number(body.frame) || 1) *
        (resolusi.find((r) => r.name === body.resolusi)?.price || 1);



        const wooUrl = `${process.env.WC_URL}/wp-json/wc/v3/orders`;
        const key = process.env.WC_CONSUMER_KEY;
        const secret = process.env.WC_CONSUMER_SECRET;

        console.log("Authorization header:", "Basic " + Buffer.from(`${key}:${secret}`).toString("base64"));
        const agent = new https.Agent({
            rejectUnauthorized: false
        }); // self-signed

        console.log("WC_URL:", process.env.WC_URL);
        console.log("WC_KEY:", !!process.env.WC_CONSUMER_KEY);
        console.log("WC_SECRET:", !!process.env.WC_CONSUMER_SECRET);

        const resWoo = await fetch(wooUrl, {

            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Basic " + Buffer.from(`${key}:${secret}`).toString("base64"),
            },
            body: JSON.stringify({
                payment_method: "bacs",
                payment_method_title: "Direct Bank Transfer",
                set_paid: false,
                billing: {
                    first_name: body.name || "RenderPal User",
                    email: body.email || "user@renderpal.local",
                },
                line_items: [{
                    product_id: 3013, // id dari product generic
                    quantity: Number(body.frame) || 1,
                    name: `${body.engine} - ${body.sample} (${body.resolusi})`,
                    total: harga.toString(),
                }, ],
            }),
            agent: new https.Agent({
                rejectUnauthorized: false
            }), // self-signed SSL
        });

        const text = await resWoo.text();
        console.log("WooCommerce Response:", text);

        const result = resWoo.ok ? JSON.parse(text) : {
            error: text
        };
        return new Response(JSON.stringify(result), {
            status: resWoo.ok ? 200 : resWoo.status
        });
    } catch (err) {
        console.error("❌ Error creating order:", err);
        return new Response(JSON.stringify({
            error: err.message
        }), {
            status: 500
        });
    }
}