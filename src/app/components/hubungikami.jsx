import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import '@fortawesome/fontawesome-svg-core/styles.css'
import Image from "next/image";

export default function HubungiKami() {
    return(
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
                <div className="bg-[#2A2A2A] rounded-3xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                        <div className="p-10">
                            <div className="mb-10">
                                <h1 className="font-mono text-6xl mb-5">Kami di sini untuk menghubungkan dan membantu Anda</h1>
                                <p>Punya pertanyaan tentang pertemuan puncak? Butuh bantuan untuk pendaftaran atau perjalanan? Tim kami siap membantu Anda.</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
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
    )
}