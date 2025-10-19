"use client";
import Image from "next/image";
import { useEffect, useState } from "react"


export default function Market() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("/api/ftechdata");
            const data = await res.json();
            setProducts(data);
        }
        fetchData();
    }, []);
    return (

        <>
            <div className="bg-[#212121] pb-10">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
                    <div className="pt-10 mb-5">
                        <h1 className="text-4xl font-bold py-5">Telusuri Marketplace</h1>
                        <p>Jelajahi lebih dari 50 ribu aset di Marketplace</p>
                    </div>

                    <div className="border rounded-3xl opacity-20">
                        <div className="py-3 flex">
                            <input type="text" placeholder="cari asset favorite anda" className="ps-5" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#2A2A2A] w-full">
                <div className="flex justify-center">
                    <div className="py-5 pr-40 font-bold">Kreator</div>
                    <div className="py-5 pl-40 font-bold">Aset</div>
                </div>
            </div>

            <div className="bg-[#212121] pb-10">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-white p-10">
                    <div className="grid grid-cols-3 gap-5">
                        {products.map((p, index) => (
                            
                            <div className="w-full bg-transparent rounded-2xl my-5 flex flex-col justify-between h-[500px] font-mono">
                                    <Image
                                        src={p.image}
                                        alt={p.name}
                                        width={200}
                                        height={400}
                                        className="w-full h-[300px] object-cover rounded-t-2xl"
                                    />
                                <div className="py-3 bg-[#2E2E2E] px-6 w-full rounded-b-lg flex flex-col justify-between flex-1">
                                    <h1 className="text-md font-bold line-clamp-1">{p.name}</h1>
                                    <div className="flex flex-col justify-start">
                                        <div className="mb-5 flex">
                                            <Image
                                                src={p.image}
                                                alt="avatar"
                                                width={30}
                                                height={30}
                                                className="mr-3 rounded-full"
                                            />
                                            <p>{p.store}</p>
                                        </div>
                                        <div>
                                            <p className="opacity-30 mb-2">Harga</p>
                                            <p className="mb-7">Rp.{p.price}</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>

                </div>
            </div>
        </>

    )
}