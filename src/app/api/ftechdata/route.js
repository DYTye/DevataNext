// // import {
// //     writeFileSync
// // } from "fs";
// // import dotenv from "dotenv";
// // dotenv.config({
// //     path: "../../../../.env.local"
// // });

// import { div } from "three/tsl";

// export async function GET() {
//   const WooUrl = `${process.env.WC_URL}/wp-json/wc/v3/products?exclude=3013,2619,2488,2486,2494`;
//   const key = process.env.WC_CONSUMER_KEY;
//   const secret = process.env.WC_CONSUMER_SECRET;

//   const buff = Buffer.from(`${key}:${secret}`, "utf-8");
//   const base64Auth = buff.toString("base64");

//   try {
//     const response = await fetch(WooUrl, {
//       headers: {
//         // 1. KEAMANAN: Pakai Authorization Header
//         Authorization: `Basic ${base64Auth}`,
//       },
//       // 2. EFISIENSI: Tambah caching
//       next: {
//         revalidate: 3600, // Cache selama 1 jam (3600 detik)
//       },
//     });

//     if (!response.ok) {
//             throw new Error(`WooCommerce API error! Status: ${response.status}`);
//         }

//         const body = await response.json();
//     const product = body.map((p) => ({
//       id: p.id,
//       name: p.name,
//       price: p.price,
//       image: p.images[0]?.src || "",
//       store: p.store.shop_name,
//     }));

//     const file = "woo-response.json";
//     return Response.json(product);
//   } catch (eror) {
//     console.log("gagal ftech data : ", eror);
//     return Response.json(
//       { message: "Gagal mengambil data dari WooCommerce" },
//       { status: 500 } // Kasih status 500 (Internal Server Error)
//     );
//   }

// }
