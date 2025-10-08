import Link from "next/link"


export default function TentangKami() {
    return (
        <div className="bg-[#212121] py-12">
            
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
                <div className="rounded-4xl bg-[#2A2A2A] text-white">
                    <div className="flex flex-col justify-start p-15 ">
                        <div className="text-7xl font-bold">Tentang Kami</div>
                        <div className="py-17">Selamat datang di Pasar3D.com, platform digital yang dirancang untuk memudahkan kebutuhan kreator 3D di Indonesia dan dunia! Kami hadir sebagai marketplace khusus untuk jual beli aset 3D sekaligus menyediakan layanan render farm yang andal dan transparan</div>
                        <Link href="/">
                            <div className="py-7">
                                <div className="w-sm bg-gradient-to-r from-[#8000FF] to-[#FF007F] p-5 w-xs flex justify-center rounded-4xl hover:opacity-60">Pelajari Lebih Lanjut</div>
                            </div></Link>

                    </div>
                </div>
            </div>
        </div>


    )
}


