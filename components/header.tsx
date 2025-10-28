import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return (

        <nav className="bg-[#212121] text-white  shadow-lg">
            <div className="max-w-full px-5 py-3 lg:px-10 flex items-center justify-between">


                <Link href="/">
                    <Image src="/logo.png" width={90} height={100} alt="Brand Logo" />
                </Link>


                <div id="navbarNavAltMarkup" className="hidden lg:flex lg:w-full lg:justify-center">
                    <div className="flex flex-col lg:flex-row lg:space-x-2 text-sm font-small">
                        <Link className="px-3 py-2 rounded hover:bg-gray-700 transition" href="/market">Assets</Link>
                        <Link className="px-3 py-2 rounded hover:bg-gray-700 transition" href="/renderpal">RenderPal</Link>
                        <Link className="px-3 py-2 rounded hover:bg-gray-700 transition" href="/tentangkami">Tentang Kami</Link>
                        <Link className="px-3 py-2 rounded hover:bg-gray-700 transition" href="/hubungikami">Hubungi Kami</Link>
                        

                        <button className="block lg:hidden mt-2 border border-white text-white py-1 px-3 rounded hover:bg-white hover:text-black transition">
                            Login
                        </button>
                    </div>
                </div>


                <div className="flex items-center space-x-3">

                    <form className="flex items-center space-x-2 hidden md:flex">
                        <input
                            className="w-32 py-1 px-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                            type="search" placeholder="Search" aria-label="Search" />
                        <i className="fas fa-search text-gray-400" />
                    </form>


                    {/* <button
                            className="block lg:hidden text-white hover:text-gray-400 transition"
                            type="button"
                            onClick={() => {
                                document
                                    .getElementById("navbarNavAltMarkup")
                                    ?.classList.toggle("hidden");
                            }}
                        >
                            <i className="fas fa-bars text-xl"></i>
                        </button> */}



                    <a href="#">
                        <button
                            className="hidden lg:block border border-white text-white py-1 px-4 rounded hover:bg-white hover:text-black transition">
                            Login
                        </button>
                    </a>
                </div>
            </div>
        </nav>

    );
}