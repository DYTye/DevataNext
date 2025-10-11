"use client"
import { useState } from "react";

const engineData = [
    { id: 1, name: "EEVE" },
    { id: 2, name: "CYCLES" },
]

const EEVE = [
    { id: 1, name: "1-32", price: 32 },
    { id: 2, name: "33-64", price: 64 },
    { id: 3, name: "65-100", price: 100 },
    { id: 4, name: "101-200", price: 120 },
    { id: 5, name: "201-300", price: 160 },
    { id: 6, name: "301-400", price: 200 },
    { id: 7, name: "401-500", price: 240 },
    { id: 8, name: "501-1000", price: 400 },
    { id: 9, name: "1001-2000", price: 800 },
    { id: 10, name: "2001-3000", price: 1200 },
];

const CYCLES = [
    { id: 1, name: "1-32", price: 80 },
    { id: 2, name: "33-64", price: 160 },
    { id: 3, name: "65-100", price: 250 },
    { id: 4, name: "101-200", price: 400 },
    { id: 5, name: "201-300", price: 550 },
    { id: 6, name: "301-400", price: 700 },
    { id: 7, name: "401-500", price: 850 },
    { id: 8, name: "501-1000", price: 1500 },
    { id: 9, name: "1001-2000", price: 2000 },
    { id: 10, name: "2001-3000", price: 2500 },
];

const resolusi = [
    { id: 1, name: "720p", price: 0.5 },
    { id: 2, name: "1080p", price: 1 },
    { id: 3, name: "1440p", price: 2 },
    { id: 4, name: "2160P", price: 4 },
]

export default function RenderPal() {
    const [engineSelected, setEngineSelected] = useState("");
    const [sampelSelected, setSampelSelected] = useState("");
    const [resolusiSelected, setResolusiSelected] = useState("");
    const [frameSelected, setFrameSelected] = useState("");

    const selectEngine = (event) => {
        setEngineSelected(event.target.value)
    };

    const selectSample = (event) => {
        setSampelSelected(Number(event.target.value))
    }

    const selectResolusi = (event) => {
        setResolusiSelected(Number(event.target.value))
    }
    const selectFrame = (event) => {
        setFrameSelected(event.target.value)
    }

    const sampleArray = engineSelected === "EEVE" ? EEVE : CYCLES;
    const harga = (sampleArray[sampelSelected]?.price || 0) * (Number(frameSelected) || 1) * (resolusi[resolusiSelected]?.price || 1);

    const handleOrder = async () => {
        const orderData = {
            engine: engineSelected,
            sample: sampleArray[sampelSelected]?.name,
            resolusi: resolusi[resolusiSelected]?.name,
            frame: frameSelected,
            harga,
            name: "RenderPal User",
            email: "user@renderpal.local",
        };

        try {
            const res = await fetch("/api/order", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(orderData),
            });

            const result = await res.json();
            console.log("Order result:", result);

            if (result.id && result.order_key) {

                const paymentUrl = `https://pasar3d.com/checkout/order-pay/${result.id}/?pay_for_order=true&key=${result.order_key}`;
                console.log("Redirect ke:", paymentUrl);


                window.location.href = paymentUrl;
            } else {
                alert("Gagal membuat order, cek console/log server.");
            }
        } catch (err) {
            console.error(err);
            alert("Error saat membuat order, lihat console.");
        }
    };



    return (
        <>

            <div className="bg-[#212121] min-h-screen text-white">
                <div className="mb-4">
                    <div className="p-12 text-center">
                        <h1 className="text-3xl font-bold">RenderPal Cost Estimator</h1>
                        <p className="mt-2">Render Cepat Mulai 100 Rupiah Tanpa Ganggu Proyek Kamu!</p>
                    </div>

                    <div className="flex justify-center">
                        <div className="flex flex-col justify-center bg-[#2E2E2E] p-20  w-200 rounded-4xl">
                            <select name="" value={engineSelected} onChange={selectEngine} id="" className="m-2 w-full rounded-xl bg-white p-3 text-gray-950">
                                <option value="" disabled>Select Render Engine</option>
                                {engineData.map((item) => (
                                    <option key={item.id} value={item.name}>{item.name}</option>
                                ))}

                            </select>



                            <div>
                                <select name="" id="" value={sampelSelected} onChange={selectSample} className="m-2 w-full rounded-xl bg-white p-3 text-gray-950">
                                    <option value="" disabled>Render Sample Page</option>
                                    {engineSelected === "EEVE" && (
                                        <>
                                            {EEVE.map((item, index) => (
                                                <option
                                                    key={item.id} value={index}>{item.name}</option>
                                            ))}
                                        </>
                                    )}

                                    {engineSelected === "CYCLES" && (
                                        <>
                                            {CYCLES.map((item, index) => (
                                                <option
                                                    key={item.id} value={index}>{item.name}</option>
                                            ))}</>
                                    )}
                                </select>
                            </div>
                            <div>
                                <input type="number" id="" value={frameSelected} onChange={selectFrame} className="m-2 w-full rounded-xl bg-white p-3 text-gray-950" placeholder="Enter frame" />
                            </div>
                            <div>
                                <select name="" id="" value={resolusiSelected} onChange={selectResolusi} className="m-2 w-full rounded-xl bg-white p-3 text-gray-950">
                                    <option value="" disabled>Resolusi</option>
                                    {resolusi.map((item, index) =>
                                        <option key={item.id} value={index}>{item.name}</option>)}
                                </select>
                            </div>






                        </div>
                    </div>


                </div>
                {frameSelected >= 1 && resolusiSelected !== "" && engineSelected !=="" && sampelSelected !=="" && (
                    <div className="bg-[#212121] text-white flex  justify-center">
                        <div className=" bg-[#2E2E2E] p-10 w-200 rounded-4xl">

                            <div className="flex justify-center">
                                <div className="m-4 p-4 border text-white  shadow-xl w-full">
                                    <div className="text-md mb-3">
                                        <div>Order Summary</div>
                                    </div>
                                    <div className="flex justify-between text-xs font-light mb-2">
                                        <div>Render Sample</div>
                                        <div>{engineSelected} {sampleArray[sampelSelected].name}</div>
                                    </div>
                                    <div className="flex justify-between text-xs font-light mb-2">
                                        <div>Cost per Frame</div>
                                        <div>Rp.{sampleArray[sampelSelected].price}</div>
                                    </div>
                                    <div className="flex justify-between text-xs font-light mb-2">
                                        <div>Total Frame</div>
                                        <div>{frameSelected}</div>
                                    </div>
                                    <div className="flex justify-between text-xs font-light mb-2">
                                        <div>Resolution</div>
                                        <div>{resolusi[resolusiSelected].name}</div>
                                    </div>
                                    <hr />
                                    <div className="flex justify-between text-xs font-light my-2">
                                        <div>Total</div>
                                        <div>{harga}</div>
                                    </div>
                                    <button
                                        onClick={handleOrder}
                                        className="relative py-2 flex w-full items-center justify-center overflow-hidden "
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-[#8000FF] to-[#FF007F] transition-opacity duration-300 hover:opacity-10"></div>
                                        <span className="relative text-xs font-semibold text-white">
                                            PROCEED TO CHECKOUT
                                        </span>
                                    </button>

                                </div>


                            </div>








                        </div>
                    </div>
                )}

            </div>
        </>
    )
}