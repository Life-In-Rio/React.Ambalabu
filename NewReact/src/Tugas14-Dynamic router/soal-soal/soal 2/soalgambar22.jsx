// src/components/AxiosStore.js
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function AxiosStore() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || {};
  });

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const updateCart = (id, title, price, change) => {
    setCart((prevCart) => {
      const currentQuantity = prevCart[id]?.quantity || 0;
      const newQuantity = currentQuantity + change;

      if (newQuantity <= 0) {
        const { [id]: _, ...rest } = prevCart;
        return rest;
      }

      return {
        ...prevCart,
        [id]: { title, price, quantity: newQuantity },
      };
    });
  
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Store</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ShoppingCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            src={product.image}
            quantity={cart[product.id]?.quantity || 0}
            onUpdate={updateCart}
          />
        ))}
      </div>
    </div>
  );
}

function ShoppingCard({ id, title, price, src, quantity, onUpdate }) {
  return (
    <div className="border rounded-lg shadow-lg p-4 w-full flex flex-col transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:bg-gray-100">
      <Link to={`/product/${id}`} className="text-inherit no-underline">
        <img src={src} alt={title} className="w-full h-60 object-contain rounded-t-lg" />
        <div className="py-2 flex-grow">
          <h2 className="text-md font-semibold">{title}</h2>
          <p className="text-gray-700">Harga: Rp.{price}</p>
          <p className="text-gray-700">Quantity: {quantity}</p>
          <p className="text-gray-700">Total: Rp.{quantity * price}</p>
        </div>
      </Link>
      <div className="flex justify-between mt-2">
        <button className="bg-blue-500 text-white w-1/3 py-2 rounded-md" onClick={() => onUpdate(id, title, price, 1)}>Tambah</button>
        <button className="bg-red-500 text-white w-1/3 py-2 rounded-md" onClick={() => onUpdate(id, title, price, -1)}>Kurang</button>
      </div>
    </div>
  );
}
