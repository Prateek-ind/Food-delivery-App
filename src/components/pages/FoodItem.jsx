import React, { useContext, useState } from "react";
import { assets } from "../../../assets/frontend_assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ name, id, image, price, description, category }) => {
  const { cartItems, addToCart, removeFromCart  } = useContext(StoreContext);

  const formattedUSD = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

 

  return (
    <div className="max-w-[250px] rounded-xl shadow-xl border border-gray-200 relative">
      <img className=" rounded-t-xl shadow-lg " src={image} alt="" />
      {!cartItems[id] ? (
        <img
          className="max-w-11 rounded-full shadow-xl absolute right-2 bottom-48"
          src={assets.add_icon_white}
          onClick={() => addToCart(id)}
        />
      ) : (
        <div className="bg-white p-1 rounded-full flex items-center gap-4 absolute right-2 bottom-48">
          <img
            className="rounded-full shadow-xl"
            src={assets.remove_icon_red}
            onClick={() => removeFromCart (id)}
            alt=""
          />
          <p className="text-lg font-semibold ">{cartItems[id]}</p>
          <img
            className="rounded-full shadow-xl"
            src={assets.add_icon_green}
            onClick={() => addToCart(id)}
            alt=""
          />
        </div>
      )}
      <div className="mt-2 mb-2 px-2 py-2 flex justify-between">
        <h3 className="mt-2 font-bold">{name}</h3>
        <img src={assets.rating_starts} className="object-contain" alt="" />
      </div>
      <p className="my-2 px-2 py-2 text-sm">{description}</p>
      <p className="my-2 px-2 py-2 font-semibold text-orange-700">
        {formattedUSD.format(price)}
      </p>
    </div>
  );
};

export default FoodItem;
