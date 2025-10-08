import Image from "next/image";
import Link from "next/link"

export default function Home() {
  return (
    <>
      <div className="bg-[#212121]">
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-white ">
          {/* Hero Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="mx-4 sm:mx-6">
              <h1 className="text-5xl lg:text-7xl font-bold mb-8">
                Solusi Jual Beli Aset 3D & Render
              </h1>
              <p className="text-lg font-light md:text-xl lg:text-2xl">
                Jual, beli, dan temukan aset 3D sesuai kebutuhan Anda. Layanan
                renderpal Pasar3D untuk menyelesaikan rendering dengan efisien.
                Solusi praktis bagi kreator 3D!
              </p>

              {/* CTA */}
              <div className="my-6 grid grid-cols-2 gap-6">
                <div>
                  <a
                    href="#"
                    className="relative py-4 flex w-full items-center justify-center overflow-hidden rounded-md"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#8000FF] to-[#FF007F] transition-opacity duration-300 hover:opacity-10"></div>
                    <span className="relative text-lg font-semibold text-white">
                      Cari Asset
                    </span>
                  </a>
                  <div className="font-semibold text-3xl ms-2">
                    <h3 className="pt-6">240K+</h3>
                    <h3>Total Asset</h3>
                  </div>
                </div>

                <div>
                  <Link
                    href="renderpal"
                    className="relative block w-full py-4 items-center flex justify-center"
                  >
                    <div className="absolute inset-0 rounded-md bg-gradient-to-r from-[#8000FF] to-[#FF007F]" />
                    <div className="absolute inset-[2px] rounded-md bg-[#212121] transition hover:opacity-10" />
                    <span className="relative text-lg font-semibold">
                      Mulai Render
                    </span>
                  </Link>
                  <div className="font-semibold text-3xl ms-2">
                    <h3 className="pt-6">120K+</h3>
                    <h3>Kreator</h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Preview */}
            <div className="w-full mx-auto bg-black rounded-2xl shadow-lg overflow-hidden my-10">
              <div>
                <Image
                  src="/home.png"
                  alt="Preview"
                  width={600}
                  height={400}
                  className="w-full h-120 object-cover rounded-t-2xl"
                />
              </div>
              <div className="py-3 bg-[#2E2E2E] px-6 w-full rounded-b-lg">
                <h1 className="text-3xl font-bold mb-3">Steampunk Girl</h1>
                <div className="flex justify-start">
                  <Image
                    src="https://placehold.co/30x30/png"
                    alt="avatar"
                    width={30}
                    height={30}
                    className="mr-3 rounded-full"
                  />
                  <p>Aditya Arrofi</p>
                </div>
              </div>
            </div>
          </div>

          {/* Asset */}
          <div className="mt-20 mb-12">
            <h3 className="font-bold text-3xl mb-4">Asset Yang Sedang Tren</h3>
            <p className="font-light text-xl">
              Lihatlah koleksi tren mingguan kami yang diperbarui.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
            <div className="bg-[#2E2E2E] p-4 rounded-2xl">
              <div className=""><Image src="/home.png" height={150} width={100}
                className="w-full object-cover rounded-2xl h-100" alt="" />
              </div>
              <div className="grid grid-cols-3 gap-2 mt-4">
                <div className="">
                  <Image src="https://placehold.co/200x200/png" height={200} width={200} className="w-full object-cover rounded-xl h-25"
                    alt="Thumbnail 1" />
                </div>
                <div className="">
                  <Image src="https://placehold.co/200x200/png" height={200} width={200} className="w-full object-cover rounded-xl h-25"
                    alt="Thumbnail 1" />
                </div>
                <div className="">
                  <Image src="https://placehold.co/200x200/png" height={200} width={200} className="w-full object-cover rounded-xl h-25"
                    alt="Thumbnail 1" />
                </div>

              </div>
              <div className="font-bold mt-4 ms-1">Steampunk Girl</div>
              <div className="mt-4 bg-[#212121] grid-cols-2 p-2 flex text-sm rounded-full">
                <Image src="https://placehold.co/30x30/png" height={30} width={30} alt="" className="mr-3 rounded-4xl" />
                <div className="flex items-center">Aditya Arrofi</div>
              </div>
            </div>

            <div className="bg-[#2E2E2E] p-4 rounded-2xl">
              <div className=""><Image src="/home.png" height={150} width={100}
                className="w-full object-cover rounded-2xl h-100" alt="" />
              </div>
              <div className="grid grid-cols-3 gap-2 mt-4">
                <div className="">
                  <Image src="https://placehold.co/200x200/png" height={200} width={200} className="w-full object-cover rounded-xl h-25"
                    alt="Thumbnail 1" />
                </div>
                <div className="">
                  <Image src="https://placehold.co/200x200/png" height={200} width={200} className="w-full object-cover rounded-xl h-25"
                    alt="Thumbnail 1" />
                </div>
                <div className="">
                  <Image src="https://placehold.co/200x200/png" height={200} width={200} className="w-full object-cover rounded-xl h-25"
                    alt="Thumbnail 1" />
                </div>

              </div>
              <div className="font-bold mt-4 ms-1">Steampunk Girl</div>
              <div className="mt-4 bg-[#212121] grid-cols-2 p-2 flex text-sm rounded-full">
                <Image src="https://placehold.co/30x30/png" height={30} width={30} alt="" className="mr-3 rounded-4xl" />
                <div className="flex items-center">Aditya Arrofi</div>
              </div>
            </div>

            <div className="bg-[#2E2E2E] p-4 rounded-2xl">
              <div className=""><Image src="/home.png" height={150} width={100}
                className="w-full object-cover rounded-2xl h-100" alt="" />
              </div>
              <div className="grid grid-cols-3 gap-2 mt-4">
                <div className="">
                  <Image src="https://placehold.co/200x200/png" height={200} width={200} className="w-full object-cover rounded-xl h-25"
                    alt="Thumbnail 1" />
                </div>
                <div className="">
                  <Image src="https://placehold.co/200x200/png" height={200} width={200} className="w-full object-cover rounded-xl h-25"
                    alt="Thumbnail 1" />
                </div>
                <div className="">
                  <Image src="https://placehold.co/200x200/png" height={200} width={200} className="w-full object-cover rounded-xl h-25"
                    alt="Thumbnail 1" />
                </div>

              </div>
              <div className="font-bold mt-4 ms-1">Steampunk Girl</div>
              <div className="mt-4 bg-[#212121] grid-cols-2 p-2 flex text-sm rounded-full">
                <Image src="https://placehold.co/30x30/png" height={30} width={30} alt="" className="mr-3 rounded-4xl" />
                <div className="flex items-center">Aditya Arrofi</div>
              </div>
            </div>

          </div>




          <div className="mt-20 mb-12">
            <h3 className="font-bold text-3xl mb-4">Kreator Teratas</h3>
            <p className="font-light text-xl">
              Lihat Kreator Berperingkat Teratas di Marketplace.
            </p>
          </div>

          {/* Section: Kreator Teratas */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-5">
            <div className="rounded-xl bg-[#2E2E2E]">
              <div className="flex justify-center">
                <div className="m-5">
                  <img src="https://placehold.co/100x100/png" height={100} width={100} alt="" className="rounded-full h-[100px] w-[100px]" />
                </div>
              </div>

              <div className="flex justify-center font-semibold">Kreator</div>
              <div className="flex justify-between p-4">
                <div className="ms-2 font-light">produk :</div>
                <div className="me-2 font-light">200</div>
              </div>
            </div>

            <div className="rounded-xl bg-[#2E2E2E]">
              <div className="flex justify-center">
                <div className="m-5">
                  <img src="https://placehold.co/100x100/png" height={100} width={100} alt="" className="rounded-full h-[100px] w-[100px]" />
                </div>
              </div>

              <div className="flex justify-center font-semibold">Kreator</div>
              <div className="flex justify-between p-4">
                <div className="ms-2 font-light">produk :</div>
                <div className="me-2 font-light">200</div>
              </div>
            </div>

            <div className="rounded-xl bg-[#2E2E2E]">
              <div className="flex justify-center">
                <div className="m-5">
                  <img src="https://placehold.co/100x100/png" height={100} width={100} alt="" className="rounded-full h-[100px] w-[100px]" />
                </div>
              </div>

              <div className="flex justify-center font-semibold">Kreator</div>
              <div className="flex justify-between p-4">
                <div className="ms-2 font-light">produk :</div>
                <div className="me-2 font-light">200</div>
              </div>
            </div>
          </div>


          {/* Section: Lebih Banyak asset */}
          <div className="mt-20 mb-12">
            <h3 className="font-bold text-3xl mb-4">Temukan Lebih Banyak Asset</h3>
            <p className="font-light text-xl">
              Jelajahi asset yang sedang tren.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-x-6 gap-y-0 mb-12">
            <div className="w-full mx-auto bg-black rounded-2xl shadow-lg overflow-hidden my-2">
              <div>
                <Image
                  src="/home.png"
                  alt="Preview"
                  width={600}
                  height={400}
                  className="w-full h-120 object-cover rounded-t-2xl"
                />
              </div>

              <div className="py-3  bg-[#2E2E2E] px-6 w-full rounded-b-lg">
                <h1 className="text-3xl font-bold mb-3">Steampunk Girl</h1>
                <div className="flex justify-start">
                  <Image src="https://placehold.co/30x30/png" height={30} width={30} alt="" className="mr-3 rounded-full" />
                  <p>Aditya Arrofi</p>
                </div>
              </div>
            </div>

            <div className="w-full mx-auto bg-black rounded-2xl shadow-lg overflow-hidden my-2">
              <div>
                <Image
                  src="/home.png"
                  alt="Preview"
                  width={600}
                  height={400}
                  className="w-full h-120 object-cover rounded-t-2xl"
                />
              </div>

              <div className="py-3  bg-[#2E2E2E] px-6 w-full rounded-b-lg">
                <h1 className="text-3xl font-bold mb-3">Steampunk Girl</h1>
                <div className="flex justify-start">
                  <Image src="https://placehold.co/30x30/png" height={30} width={30} alt="" className="mr-3 rounded-full" />
                  <p>Aditya Arrofi</p>
                </div>
              </div>
            </div>

            <div className="w-full mx-auto bg-black rounded-2xl shadow-lg overflow-hidden my-2">
              <div>
                <Image
                  src="/home.png"
                  alt="Preview"
                  width={600}
                  height={400}
                  className="w-full h-120 object-cover rounded-t-2xl"
                />
              </div>

              <div className="py-3  bg-[#2E2E2E] px-6 w-full rounded-b-lg">
                <h1 className="text-3xl font-bold mb-3">Steampunk Girl</h1>
                <div className="flex justify-start">
                  <Image src="https://placehold.co/30x30/png" height={30} width={30} alt="" className="mr-3 rounded-full" />
                  <p>Aditya Arrofi</p>
                </div>
              </div>
            </div>
          </div>

        </main>

        {/* Countdown Section */}
        <div
          className="relative h-[650px] w-full bg-cover bg-center text-white"
          style={{ backgroundImage: "url('https://placehold.co/1200x600/png')" }}
        >
          <div className="bg-opacity-70 absolute inset-0 bg-gradient-to-t from-[#BC13FE]/50 to-black">
            <div className="absolute bottom-10 w-full grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
              <div className="text-5xl font-bold">
                <div className="my-9 inline-flex items-center rounded-4xl bg-[#212121] px-4 py-2 text-xl">
                  <Image
                    src="https://placehold.co/30x30/png"
                    alt="avatar"
                    width={30}
                    height={30}
                    className="mr-3 rounded-full"
                  />
                  <span>Aditya Arrofi</span>
                </div>
                <div>Steampunk Hammer</div>
                <div className="my-10 text-sm font-semibold">
                  <a
                    href="#"
                    className="inline-block rounded-xl bg-amber-50 p-4 text-black"
                  >
                    Lihat Asset
                  </a>
                </div>
              </div>

              {/* Timer */}
              <div className="flex items-center justify-center">
                <div className="relative rounded-2xl bg-white/10 p-6 text-center shadow-lg backdrop-blur-lg">
                  <p className="mb-3 text-xs">Akan Dirilis</p>
                  <div className="flex space-x-4">
                    {["Jam", "Menit", "Detik"].map((label, idx) => (
                      <div key={idx}>
                        <div className="text-4xl font-bold">00</div>
                        <p className="mt-1 text-sm">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <main className="max-w-6xl mx-auto my-12 px-4 sm:px-6 lg:px-8 text-white">
          <div className="mt-20 mb-12">
            <h3 className="font-bold text-3xl mb-4">Bagaimana Cara Kerjanya</h3>
            <p className="font-light text-xl">Cari Tahu Cara Memulainya</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-5">
            <div className="rounded-xl bg-[#2E2E2E]">
              <div className="flex justify-center">
                <div className="m-5">
                  <img src="https://placehold.co/200x200/png" height={200} width={200} alt="" className="rounded-full" />
                </div>
              </div>

              <div className="flex justify-center font-semibold"> Jadilah Kreator</div>
              <div className="flex justify-between p-4">
                <div className="ms-2 font-light text-center text-md">Jadilah kreator di Pasar3D Anda untuk di jual di Pasar3D dan pamerkan  karya anda. </div>

              </div>
            </div>

            <div className="rounded-xl bg-[#2E2E2E]">
              <div className="flex justify-center">
                <div className="m-5">
                  <img src="https://placehold.co/200x200/png" height={200} width={200} alt="" className="rounded-full" />
                </div>
              </div>

              <div className="flex justify-center font-semibold">Buat Koleksi</div>
              <div className="flex justify-center p-4">
                <div className="ms-2 font-light text-center text-md">Unggah karya Anda dan siapkan koleksi Anda. Tambahkan deskripsi, tautan sosial, dan harga dasar.</div>

              </div>
            </div>

            <div className="rounded-xl bg-[#2E2E2E]">
              <div className="flex justify-center">
                <div className="m-5">
                  <img src="https://placehold.co/200x200/png" height={200} width={200} alt="" className="rounded-full" />
                </div>
              </div>

              <div className="flex justify-center font-semibold">Mulai Menghasilkan</div>
              <div className="flex justify-center p-4">
                <div className="ms-2 font-light text-center text-md">Pilih antara lelang dan daftar harga tetap. Mulailah menghasilkan uang dengan menjual Aset Anda.</div>

              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
