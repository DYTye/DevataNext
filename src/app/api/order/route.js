import https from "https";

const EEVE = [{
        id: 1,
        name: "1-100 ",
        price: 100
    },
    {
        id: 2,
        name: "101-200 ",
        price: 200
    },
    {
        id: 3,
        name: "201-300",
        price: 300
    },
];

const CYCLES = [{
        id: 1,
        name: "1-50 ",
        price: 500
    },
    {
        id: 2,
        name: "51-150 ",
        price: 800
    },
    {
        id: 3,
        name: "151-300 ",
        price: 1200
    },
];

const resolusi = [{
        id: 1,
        name: "Full HD",
        price: 2
    },
    {
        id: 2,
        name: "2k",
        price: 3
    },
    {
        id: 3,
        name: "4k",
        price: 4
    },
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
                    product_id: 65, // id dari product generic
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