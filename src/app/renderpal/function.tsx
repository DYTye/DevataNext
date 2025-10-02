"use client"                                   // (1)
import { useState } from "react";              // (2)

const EEVE = [                                  // (3)
  { id: 1, name: "evee1-100", price: 100 },
  { id: 2, name: "evee101-200", price: 200 },
  { id: 3, name: "evee201-300", price: 300 },
];

const CYCLES = [                                // (4)
  { id: 1, name: "cycles1-50", price: 500 },
  { id: 2, name: "cycles51-150", price: 800 },
  { id: 3, name: "cycles151-300", price: 1200 },
];

export default function RenderPal() {           // (5)
  const [engine, setEngine] = useState("EEVE"); // (6)
  const [frame, setFrame] = useState(0);        // (7)

  const engineData = engine === "EEVE" ? EEVE : CYCLES; // (8)
  const hargaPerFrame = engineData[0].price;            // (9)
  const total = hargaPerFrame * frame;                  // (10)

  return (                                           // (11)
    <div className="p-10 text-white">
      <h1 className="text-2xl font-bold">RenderPal Estimator</h1>

      <select
        onChange={(e) => setEngine(e.target.value)}   // (12)
        className="m-2 p-2 text-black rounded"
      >
        <option value="EEVE">EEVE</option>            // (13)
        <option value="CYCLES">CYCLES</option>
      </select>

      <input
        type="number"                                 // (14)
        placeholder="Jumlah Frame"
        className="m-2 p-2 text-black rounded"
        value={frame}                                 // (15)
        onChange={(e) => setFrame(Number(e.target.value))} // (16)
      />

      <p className="mt-4">Engine: {engine}</p>        // (17)
      <p>Harga per frame: Rp {hargaPerFrame}</p>     // (18)
      <p>Total Harga: Rp {total}</p>                 // (19)
    </div>
  );
}
