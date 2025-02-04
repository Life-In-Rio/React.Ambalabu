// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AxiosStore from "./soalgambar22";
import ProductDetail from "./soalgambar2";

export default function AxiosShop() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AxiosStore />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}
