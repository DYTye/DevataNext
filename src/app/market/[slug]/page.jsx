// import Image from "next/image";
// import Link from "next/link";
// import Review from "../../components/review.jsx";

// export default async function MarketId({ params }) {
//   const { slug } = params;
//   console.log(`kode: ${slug}`);
//   const WooUrl = `${process.env.WC_URL}/wp-json/wc/v3/products/${slug}`;
//   const key = process.env.WC_CONSUMER_KEY;
//   const secret = process.env.WC_CONSUMER_SECRET;

//   const response = await fetch(
//     `${WooUrl}?consumer_key=${key}&consumer_secret=${secret}`
//   );
//   const p = await response.json();
//   const rating = 4;

//   if (!p) {
//     return <h1 className="text-white p-10">Produk tidak ditemukan 😢</h1>;
//   }

//   return (
//     <div className="grid grid-cols-2 gap-20 bg-[#212121] px-40 pt-15 text-white flex-center ">
//       <div>
//         <div className="mb-5">
//           <Image
//             src={p.images?.[0]?.src || ""}
//             alt={p.name}
//             height={800}
//             width={800}
//             className=""
//           />
//         </div>

//         <div className="bg-[#2E2E2E] rounded-2xl">
//           <div className="p-5">
//             <div className="text-md flex items-center gap-3">
//               <div>
//                 <Image
//                   src={p.images?.[0]?.src || ""}
//                   alt={p.name}
//                   height={50}
//                   width={50}
//                   className=" rounded-full"
//                 />
//               </div>
//               {p.store?.shop_name || "Tidak diketahui"}
//               <Review rating={Number(p.average_rating)} />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="flex flex-col justify-center">
//         <div className="flex gap-2">
//           <Review rating={Number(p.average_rating)} />
//           <div className="text-gray-400 text-sm">({p.rating_count} user feedback)</div>
//         </div>
//         <h1 className="text-3xl font-bold mb-3">{p.name}</h1>
//         <div className="text-lg flex justify-center gap-4">
//           <div className="font-bold text-blue-300 text-2xl">Rp.{p.price}-</div>
//           {p.regular_price !== p.price && (
//             <div className="font-light text-gray-100 line-through">
//               Rp.{p.regular_price}-
//             </div>
//           )}
//         </div>

//         <div className="p-10">
//           <hr />
//         </div>

//         <div className="grid grid-cols-2 gap-2 ">
//           <div>
//             <div>
//               <Link
//                 href="renderpal"
//                 className="relative block w-full py-4 items-center flex justify-center"
//               >
//                 <div className="absolute inset-0 rounded-md bg-gradient-to-r from-[#8000FF] to-[#FF007F]" />
//                 <div className="absolute inset-[2px] rounded-md bg-[#212121] transition hover:opacity-10" />
//                 <span className="relative text-lg font-semibold">
//                   Add to cart
//                 </span>
//               </Link>
//             </div>
//           </div>
//           <div>
//             <div className="p-5 bg-gradient-to-r from-[#8000FF] to-[#FF007F] transition-opacity duration-300 hover:opacity-10 rounded-xl">
//               <h1 className="font-bold text-center">BUY NOW</h1>
//             </div>
//           </div>
//         </div>

//         <div className="bg-[#2E2E2E] my-5 rounded-xl">
//           <div className="p-5 felx felx-col">
//             <div>100% Guarantee Safe Checkout</div>
//             <div>
//               <Image
//                 src="/payment.png"
//                 height={300}
//                 width={300}
//                 alt="payment"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
