import React, { useState } from "react";
import Footer from "./Footer";
import Details from "./Details";
import Navigation from "./Navigation";
import { Route, Routes } from "react-router-dom";
import ProductListPage from "./ProductListPage";
import Pagenotfound from "./Pagenotfound";
import CartPage from "./CartPage";

function App() {
  const path = window.location.pathname;

  const saveDataString = localStorage.getItem("cart-item") || "{}";
  const saveData = JSON.parse(saveDataString);

  const [cart, setcart] = useState(saveData);

  function handleAddtoCart(productId, Count) {
    const oldCount = cart[productId] || 0;
    const newCart = { ...cart, [productId]: oldCount + Count };
    setcart(newCart);
    const cartString = JSON.stringify(newCart);
    localStorage.setItem("cart-item", cartString);
  }

  const totalcount = Object.keys(cart).reduce(function (previous, current) {
    return previous + cart[current];
  }, 0);

  return (
    <div className="flex flex-col h-screen overflow-scroll bg-gray-200">
      <Navigation productCount={totalcount} />

      <div className="grow">
        <Routes>
          <Route index element={<ProductListPage />}></Route>
          <Route
            path="/Product/:id"
            element={<Details onAddToCart={handleAddtoCart} />}
          ></Route>
          <Route path="*" element={<Pagenotfound />}></Route>
          <Route path="/Cart/" element={<CartPage />}></Route>
        </Routes>
      </div>

      <Footer />
    </div>
  );
}
export default App;
