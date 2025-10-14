import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import '@fortawesome/fontawesome-svg-core/styles.css'
import Image from "next/image";





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

                <div className="grid grid-cols-2 gap-5 my-5 mb-10">
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

                    <div className="grid grid-cols-2 gap-5">
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
                <div className="grid grid-cols-3 gap-5">
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

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
                <div className="bg-[#2A2A2A] rounded-3xl">
                    <div className="grid grid-cols-2">
                        <div className="p-10">
                            <div className="mb-10">
                                <h1 className="font-mono text-6xl mb-5">Kami di sini untuk menghubungkan dan membantu Anda</h1>
                                <p>Punya pertanyaan tentang pertemuan puncak? Butuh bantuan untuk pendaftaran atau perjalanan? Tim kami siap membantu Anda.</p>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="felx flex-col">
                                    <div className="mb-10">
                                        <h1 className="my-5 font-mono font-bold">CONTACT US</h1>
                                        <p>+62 821-5111-2141</p>
                                    </div>
                                    <div>
                                        <h1 className="my-5 font-mono font-bold">EMAIL</h1>
                                        <p>admin@pasar3d.com</p>
                                    </div>
                                </div>
                                <div className="felx flex-col">
                                    <div className="mb-10">
                                        <h1 className="my-5 font-mono font-bold">Location</h1>
                                        <p>Padang, Sumatra Barat</p>
                                    </div>
                                    <div>
                                        <h1 className="my-5 font-mono font-bold">Follow US</h1>
                                        <p className="gap-4">
                                            <FontAwesomeIcon
                                                icon={faFacebook}
                                                className="text-xl hover:scale-110 transition"
                                            />
                                            <FontAwesomeIcon
                                                icon={faLinkedin}
                                                className="text-xl hover:scale-110 transition"
                                            />
                                            <FontAwesomeIcon
                                                icon={faInstagram}
                                                className="text-xl hover:scale-110 transition"
                                            />
                                            <FontAwesomeIcon
                                                icon={faYoutube}
                                                className="text-xl hover:scale-110 transition"
                                            />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white m-10 rounded-4xl text-black h-125">
                            <div className="p-10">
                                <h1 className="font-mono font-bold text-xl">HUBUNGI KAMI</h1>
                                <p className="font-extralight">Jangkau kami untuk pertanyaan tentang tiket, kemitraan, atau detail acara.</p>

                                <div className="my-7">
                                    <input type="text" className="" placeholder="Nama" />
                                    <hr />
                                </div>
                                <div className="my-7">
                                    <input type="text" className="" placeholder="Email" />
                                    <hr />
                                </div>
                                <div className="my-7">
                                    <input type="text" className="" placeholder="Subjek" />
                                    <hr />
                                </div>
                                <div className="my-7 mt-10">
                                    <input type="text" className="" placeholder="Pesan" />
                                    <hr />
                                </div>

                                <div className="text-white flex justify-center bg-gradient-to-r from-[#8000FF] to-[#FF007F]  w-50 rounded-3xl hover:opacity-60">
                                    <div className="p-3">
                                        <button className="" type="submit">Kirim Pesan</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <Image
                        src="/map.jpg"
                        alt="map"
                        width={1000}
                        height={50}
                        className=" p-10 w-full h-auto rounded-lg"/>
                        
                    </div>



                </div>
            </div>

        </div>


    )
}


