import Link from "next/link"
import '@fortawesome/fontawesome-svg-core/styles.css'
import Image from "next/image";
import HubungiKami from "../components/hubungikami"





export default function TentangKami() {
    return (
        <div className="bg-[#212121] py-12">

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
                <div className="rounded-4xl bg-[#2A2A2A] text-white">
                    <div className="flex flex-col justify-start p-15 ">
                        <div className="text-7xl font-bold font-mono">Tentang Kami</div>
                        <div className="py-17 text-xl">Selamat datang di Pasar3D.com, platform digital yang dirancang untuk memudahkan kebutuhan kreator 3D di Indonesia dan dunia! Kami hadir sebagai marketplace khusus untuk jual beli aset 3D sekaligus menyediakan layanan render farm yang andal dan transparan</div>
                        <Link href="/">
                            <div className="py-7">
                                <div className="w-sm bg-gradient-to-r from-[#8000FF] to-[#FF007F] p-5 w-xs flex justify-center rounded-4xl hover:opacity-60 text-xl">Pelajari Lebih Lanjut</div>
                            </div></Link>

                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 my-5 mb-10">
                    <div className="bg-[#8000FF] rounded-4xl">
                        <div className=" p-10">
                            <h1 className="text-7xl font-mono">Latar Belakang Pasar3D.com</h1>
                            <p className="text-lg mt-5 ps-10">Industri kreatif, khususnya di bidang 3D, terus berkembang pesat seiring meningkatnya permintaan akan aset digital dalam berbagai sektor seperti animasi, game, arsitektur, dan desain produk. Namun, kreator sering menghadapi tantangan seperti keterbatasan akses ke aset berkualitas, waktu rendering yang lama, serta biaya tinggi untuk menyelesaikan proyek.</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="bg-[#8000FF] rounded-4xl mb-5">
                            <div className="p-10">
                                <h1 className="font-mono text-7xl mb-5">Visi</h1>
                                <p className="text-md">Menjadi platform utama yang memberdayakan kreator 3D Indonesia untuk bersaing di tingkat global, dengan menyediakan solusi terintegrasi yang mendukung produktivitas, kreativitas, dan kolaborasi</p>
                            </div>
                        </div>
                        <div className="bg-amber-50 rounded-4xl text-black">
                            <div className="p-10">
                                <h1 className="font-mono text-7xl mb-5">Misi</h1>
                                <div className="text-md gap-4">
                                    <p>1.Membuka akses terhadap aset 3D berkualitas tinggi yang dapat digunakan dalam berbagai proyek kreatif.</p>
                                    <p>2. Menyediakan layanan render farm yang transparan, cepat, dan terjangkau untuk mendukung efisiensi produksi.</p>
                                    <p>3. Membangun komunitas kreator 3D yang kuat, inovatif, dan saling mendukung untuk mencapai potensi terbaik mereka</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-5">
                    <h1 className="font-mono text-8xl mb-5">Apa Yang Kami Tawarkan?</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                        <div className="bg-black rounded-3xl">
                            <div className="grid grid-cols-2 p-10">
                                <div className="font-mono">
                                    <h1>MARKETPLACE ASSET 3D</h1>
                                    <h1 className="text-9xl font-mono">01</h1>
                                </div>
                                <div>
                                    <p> Jelajahi koleksi aset digital berkualitas tinggi dari berbagai kategori. Baik Anda seorang pemula maupun profesional, kami memiliki sesuatu untuk setiap kebutuhan.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-black rounded-3xl">
                            <div className="grid grid-cols-2 p-10">
                                <div className="font-mono">
                                    <h1>RENDER SERVICE TRANSPARANT</h1>
                                    <h1 className="text-9xl font-mono">02</h1>
                                </div>
                                <div>
                                    <p> Jelajahi koleksi aset digital berkualitas tinggi dari berbagai kategori. Baik Anda seorang pemula maupun profesional, kami memiliki sesuatu untuk setiap kebutuhan.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>




            </div>
            <div className="mb-5 p-7">
                <h1 className="font-mono text-4xl mb-5">Kenapa Memilih Pasar 3D.com?</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
                    <div className="bg-black rounded-3xl">
                        <div className="p-10 ">
                            <h1 className="font-mono text-xl font-bold">KOMUNITAS KREATIF</h1>
                            <p className="py-10">"Kami membangun ekosistem untuk menghubungkan kraetor, meningkatkan kolaborasi, dan berbagi inspirasi"</p>
                        </div>
                    </div>
                    <div className="bg-[#8000FF] rounded-3xl">
                        <div className="p-10 ">
                            <h1 className="font-mono text-xl font-bold">SOLUSI KOMPERHENSIF</h1>
                            <p className="py-10">""Satu tempat untuk semua kebutuhan kreator 3D, mulai dari aset hingga rendering"</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-3xl text-black">
                        <div className="p-10 ">
                            <h1 className="font-mono text-xl font-bold">HARGA TERJANGKAU</h1>
                            <p className="py-10">"Biaya kompetitif untuk aset dan layanan, memastikan setiap kreator bisa mendapatkan nilai terbaik"</p>
                        </div>
                    </div>
                </div>
            </div>

            <HubungiKami></HubungiKami>

        </div>


    )
}


