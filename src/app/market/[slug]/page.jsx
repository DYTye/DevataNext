export default async function MarketId({params}) {
  const { slug } = params;
  console.log(`kode: ${slug}`);
  const WooUrl = `${process.env.WC_URL}/wp-json/wc/v3/products/${slug}`;
  const key = process.env.WC_CONSUMER_KEY;
  const secret = process.env.WC_CONSUMER_SECRET;

  const response = await fetch(
    `${WooUrl}?consumer_key=${key}&consumer_secret=${secret}`
  );
  const p = await response.json();

  if (!p) {
    return <h1 className="text-white p-10">Produk tidak ditemukan 😢</h1>;
  }

  return (
    <div className="p-10 text-white">
      <h1 className="text-3xl font-bold mb-3">{p.name}</h1>
      <p className="text-lg mb-5">Harga: Rp {p.price}</p>
      <img
        src={p.images?.[0]?.src || ""}
        alt={p.name}
        width={300}
        className="rounded-lg"
      />
      <p className="text-sm mt-2">
        Toko: {p.store?.shop_name || "Tidak diketahui"}
      </p>
    </div>
  );
}
