// import {
//     writeFileSync
// } from "fs";
// import dotenv from "dotenv";
// dotenv.config({
//     path: "../../../../.env.local"
// });


export async function GET() {
    const WooUrl = `${process.env.WC_URL}/wp-json/wc/v3/products?exclude=3013,2619,2488,2486,2494`
    const key = process.env.WC_CONSUMER_KEY;
    const secret = process.env.WC_CONSUMER_SECRET;


    const response = await fetch(`${WooUrl}&consumer_key=${key}&consumer_secret=${secret}&per_page=50`);
    const body = await response.json()
    const product = body.map(p => ({
        name: p.name,
        price: p.price,
        image: p.images[0] ?.src || '',
        store: p.store.shop_name,
    }));

    const file = 'woo-response.json'
    return Response.json(product);
    // return new Response(JSON.stringify(body, null, 2), {
    //     headers: {
    //         "Content-Type": "application/json"
    //     }
    // });
    // writeFileSync(file, JSON.stringify(product, null, 2), "utf8");

}