export default function RenderPal() {

    let EEVE = [
        {id:1, name:"evee1-100", price:100},
        {id:2, name:"evee101-200", price:200},
        {id:3, name:"evee201-300", price:300},
    ]

    let CYCLES = [
        {id:1,name:"cycles1-50",price:500},
        {id:2,name:"cycles51-150",price:800},
        {id:3,name:"cycles151-300",price:1200},
    ]

    let jmlFrame = 0;

    let totHarga = (EEVE[0].price || CYCLES[0].price) * jmlFrame;

    return (

        <div className="bg-[#212121] text-white">
            <div className="p-12 text-center">
                <h1 className="text-3xl font-bold">RenderPal Cost Estimator</h1>
                <p className="mt-2">Render Cepat Mulai 100 Rupiah Tanpa Ganggu Proyek Kamu!</p>
            </div>

            <div className="j flex justify-center">
                <div className="flex flex-col justify-center bg-[#2E2E2E] p-20 w-200 rounded-4xl">
                    <select name="" id="" className="m-2 w-full rounded-xl bg-white p-3 text-gray-950">
                        <option value="" disabled selected>Select Render Engine</option>
                        <option value="1">EEVE</option>
                        <option value="2">CYCLES</option>
                    </select>
                    <div>
                        <select name="" id="" className="m-2 w-full rounded-xl bg-white p-3 text-gray-950">
                            <option value="" disabled selected>Render Sample Page</option>
                            <option value="1">halo</option>
                            <option value="2">halo</option>
                        </select>
                    </div>
                    <div>
                        <select name="" id="" className="m-2 w-full rounded-xl bg-white p-3 text-gray-950">
                            <option value="1">halo</option>
                            <option value="2">halo</option>
                        </select>
                    </div>
                    <div>
                        <select name="" id="" className="m-2 w-full rounded-xl bg-white p-3 text-gray-950">
                            <option value="1">halo</option>
                            <option value="2">halo</option>
                        </select>
                    </div>
                </div>
            </div>
            

        </div>


    )
}