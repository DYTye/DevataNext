export default function Footer() {
    return (

        <footer>
            <div className="sm:px-6 lg:px-8 bg-[#212121] text-gray-300">

                <div className="flex flex-col lg:flex-row items-center justify-between py-8">
                    <div className="mb-6 lg:mb-0">
                        <a href="#" className="text-3xl font-bold text-white tracking-wider">PASAR3D</a>
                    </div>
                    <div className="flex w-full max-w-sm">
                        <input type="email" placeholder="Email Anda" className="w-full px-4 py-2 text-gray-200 bg-gray-700 border border-gray-600 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400" />
                        <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-r-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500">
                            Subscribe
                        </button>
                    </div>
                </div>

                <hr className="border-t border-gray-700" />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">

                    <div>
                        <h6 className="text-sm font-semibold text-white uppercase tracking-wider mb-8">Tentang Kami</h6>
                        <ul className="space-y-3">
                            <li><a href="#" className="flex items-center text-gray-400 hover:text-white mb-8"><span>Solusi Jual Beli Aset 3D & Render</span></a></li>
                            <li><a href="#" className="flex items-center text-gray-400 hover:text-white mb-8"><span>Bergabunglah dengan komunitas kami</span></a></li>
                        </ul>
                    </div>

                    <div>
                        <h6 className="text-sm font-semibold text-white uppercase tracking-wider mb-8">Jelajahi</h6>
                        <ul className="space-y-3">
                            <li><a href="#" className="flex items-center text-gray-400 hover:text-white mb-8"><span>Pasar</span></a></li>
                            <li><a href="#" className="flex items-center text-gray-400 hover:text-white mb-8"><span>Peringkat</span></a></li>
                            <li><a href="#" className="flex items-center text-gray-400 hover:text-white mb-8"><span>Hubungkan dompet</span></a></li>
                        </ul>
                    </div>

                    <div>
                        <h6 className="text-sm font-semibold text-white uppercase tracking-wider mb-8">Bergabunglah dengan komunitas kami</h6>
                        <ul className="space-y-3">
                            <li><a href="#" className="flex items-center text-gray-400 hover:text-white"><span>Dapatkan promosi dan pembaruan eksklusif langsung di kotak masuk Anda.</span></a></li>
                        </ul>
                    </div>

                </div>

                <hr className="border-t border-gray-700" />

                <div className="py-6">
                    <p className="text-center text-gray-500 text-sm">Devata @ 2025. All rights reserved</p>
                </div>

            </div>
        </footer>



    );
}