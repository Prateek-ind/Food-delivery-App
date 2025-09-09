import React from "react";
import { assets } from "../../../assets/frontend_assets/assets";

const AppDownload = () => {
  return (
    <div id="mobile-app" className="mt-8 pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <h2 className="font-semibold text-xl sm:text-5xl my-4">For Better Experience Download</h2>
      <h2 className="font-semibold text-xl sm:text-5xl my-4"> Tomato App</h2>
      <div className="flex flex-col sm:flex-row my-4 gap-4 ">
        <img className="cursor-pointer hover:scale-103 transition-all" src={assets.play_store} alt="" />
        <img className="cursor-pointer hover:scale-103 transition-all" src={assets.app_store} alt="" />
      </div>
    </div>
  );
};

export default AppDownload;
