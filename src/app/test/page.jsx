"use client";
import { useEffect, useState } from "react";

export default function WCTestPage() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = "https://next.js.test/wp-json/wc/v3/products";
        const ck = "ck_54aff84f62be44029cefde81ee03a368bc65a6e7";
        const cs = "cs_a29d2df72e6ad33be86e793e410e7cc478d006f7";

        const res = await fetch(url, {
          headers: {
            Authorization:
              "Basic " + btoa(`${ck}:${cs}`),
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const json = await res.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProducts();
  }, []);

  if (error) return <div className="text-red-600">Error: {error}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">WooCommerce Products</h1>
      <ul className="space-y-2">
        {data.map((product) => (
          <li key={product.id} className="border p-2 rounded">
            <strong>{product.name}</strong> — Rp{product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
