import {
    writeFileSync
} from "fs";
import dotenv from "dotenv";
dotenv.config({
    path: "../../../../.env.local"
});


export async function GET() {
    const WooUrl = `${process.env.WC_URL}/wp-json/wc/v3/products`
    const key = process.env.WC_CONSUMER_KEY;
    const secret = process.env.WC_CONSUMER_SECRET;


    const response = await fetch(`${WooUrl}?consumer_key=${key}&consumer_secret=${secret}`);
    const body = await response.json()
    const product = body.map(p => ({
        name: p.name,
        price: p.price,
        image: p.images[0] ?.src || '',
    }));

    const file = 'woo-response.json'
    return Response.json(product);
    // writeFileSync(file, JSON.stringify(product, null, 2), "utf8");

}