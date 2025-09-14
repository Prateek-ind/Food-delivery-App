import React from "react";
import { assets } from "../../../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <footer
      id="contact-us"
      className="bg-neutral-900 text-gray-200 p-8 mt-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 rounded-lg"
    >
      <div className="w-full flex justify-between">
        <div className="max-w-sm">
          <img src={assets.logo} className="py-2" alt="" />
          <p className="py-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            saepe quis rerum similique maxime iste illum, animi sapiente,
            doloribus dolores voluptates reiciendis sequi, facere quia eius! Ab,
            velit sint? Necessitatibus.
          </p>
          <div className="flex gap-2 mt-2">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold">Company</h3>
          <ul className="py-4">
            <li className="py-1">Home</li>
            <li className="py-1">About Us</li>
            <li className="py-1">Delivery</li>
            <li className="py-1">Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold">Get in Touch</h3>
          <ul className="py-4">
            <li className="py-1">+1-121-2123232</li>
            <li className="py-1">contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr className="my-4" />
      <p className="text-center">
        Copyright 2024 © Tomato.com-All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
