import React, { useState } from "react";
import Navbar from "./components/pages/Navbar";
import Home from "./components/pages/Home";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/pages/Cart";
import Checkout from "./components/pages/Checkout";
import Footer from "./components/pages/Footer";
import SignInForm from "./components/pages/SignInForm";
import Modal from "./components/pages/Modal";
import SignUpForm from "./components/pages/SignUpForm";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <main id="navbar" className="">
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Checkout />} />
      </Routes>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {isLoggedIn ? (
          <SignInForm setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <SignUpForm setIsLoggedIn={setIsLoggedIn}/>
        )}
      </Modal>
      <Footer />
    </main>
  );
};

export default App;
