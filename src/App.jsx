import React from "react";
import Navbar from "./components/pages/Navbar";
import Home from "./components/pages/Home";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/pages/Cart";
import PlaceOrder from "./components/pages/PlaceOrder";

const App = () => {
  return (
    <main id="navbar" className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
      </Routes>
    </main>
  );
};

export default App;
