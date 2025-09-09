import React, { useState } from "react";
import { assets } from "../../../assets/frontend_assets/assets";
import Button from "../Button";
import ExploreMenu from "./ExploreMenu";
import Header from "../Header";
import FoodDisplay from "./FoodDisplay";
import Footer from "./Footer";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    
      <div className="mt-8 pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <Header />
      
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category}/>
      <Footer/>
    </div>
  );
};

export default Home;
