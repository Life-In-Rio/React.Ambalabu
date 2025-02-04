// src/components/ProductDetail.js
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error("Error fetching product detail:", error));
  }, [id]);

  if (!product) {
    return <p className="text-center text-gray-500 mt-4">Loading product details...</p>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-8 flex flex-col lg:flex-row items-center lg:items-start lg:gap-8 bg-gray-50 rounded-lg shadow-md max-w-5xl mx-auto">
        <div className="w-full lg:w-1/3">
          <img src={product.image} alt={product.title} className="w-full h-auto object-contain rounded-lg shadow-sm" />
        </div>
        <div className="w-full lg:w-2/3">
          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
          <p className="text-gray-700 text-lg mb-4">Rp. {product.price}</p>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-gray-500 mb-4">Category: {product.category}</p>
          <div className="flex gap-4">
            <button onClick={() => navigate("/")} className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg shadow hover:bg-gray-300">Back to Home</button>
            <button className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600">Add to Bag</button>
          </div>
          <p className="text-gray-500 mt-6 text-sm">Free shipping on all continental US orders.</p>
        </div>
      </div>
    </div>
  );
}
