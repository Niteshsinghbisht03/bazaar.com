import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Details from "./Details";
import Navigation from "./Navigation";
import { Route, Routes } from "react-router-dom";
import ProductListPage from "./ProductListPage";
import Pagenotfound from "./Pagenotfound";
import CartPage from "./CartPage";
import LoginForm from "./LoginForm";
import ChangePassword from "./ChangePassword";
import SignUp from "./SignUp";

export const UpdatedCart = React.createContext();

function App() {
  const path = window.location.pathname;

  const [productData, setProductData] = useState({});

  const saveDataString = localStorage.getItem("cart-item") || "{}";
  const saveData = JSON.parse(saveDataString);
  const [cart, setCart] = useState(saveData);

  function handleAddtoCart(productId, Count) {
    const oldCount = cart[productId] || 0;
    const newCart = { ...cart, [productId]: oldCount + Count };
    updateCart(newCart);
  }

  function updateCart(newCart) {
    setCart(newCart);
    const cartString = JSON.stringify(newCart);
    localStorage.setItem("cart-item", cartString);
  }

  const totalcount = Object.keys(cart).reduce(function (previous, current) {
    return previous + cart[current];
  }, 0);
  console.log("app me", totalcount);
  return (
    <UpdatedCart.Provider value={updateCart}>
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
            <Route
              path="/Cart/"
              element={<CartPage Cart={cart} totalCount={totalcount} />}
            ></Route>
            <Route path="/Product/signup" element={<SignUp />}></Route>
            <Route
              path="/Product/change-password"
              element={<ChangePassword />}
            ></Route>
            <Route path="/Product/Login" element={<LoginForm />}></Route>
          </Routes>
        </div>

        <Footer />
      </div>
    </UpdatedCart.Provider>
  );
}
export default App;
