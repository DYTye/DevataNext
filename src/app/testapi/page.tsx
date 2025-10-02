// file: app/page.js

// Fungsi ini adalah resep untuk mengambil data dari WordPress
async function getSiteData() {
  // Query GraphQL yang sama persis seperti di Thunder Client
  const query = `
    query InfoSitusDasar {
      generalSettings {
        title
        description
      }
    }
  `;

  // Kirim request ke WordPress menggunakan fetch
  const apiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;
  if (!apiUrl) {
    throw new Error('NEXT_PUBLIC_WORDPRESS_API_URL environment variable is not defined');
  }
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
    // Fitur canggih Next.js: Caching & Revalidasi
    // Cek data baru setiap 10 detik
    next: { revalidate: 10 }, 
  });

  // Jika request gagal, lempar error
  if (!response.ok) {
    throw new Error('Failed to fetch data from WordPress');
  }

  // Ambil data JSON dari response
  const json = await response.json();
  return json.data;
}

// Komponen Halaman Utama
export default async function HomePage() {
  // Panggil fungsi untuk mengambil data, dan tunggu hasilnya
  const data = await getSiteData();

  // Jika data belum ada (misalnya saat loading pertama kali), tampilkan pesan loading
  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-blue-400 mb-4">
          {/* Tampilkan judul situs dari WordPress */}
          {data.generalSettings.title}
        </h1>
        <p className="text-xl text-gray-300">
          {/* Tampilkan deskripsi situs dari WordPress */}
          {data.generalSettings.description}
        </p>
        <p className="mt-8 text-sm text-green-500 font-mono">
          🎉 Data ini berhasil diambil dari WordPress secara Headless! 🎉
        </p>
      </div>
    </main>
  );
}