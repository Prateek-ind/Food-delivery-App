import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);
  return (
    <div className="pt-20 mt-8">
      <div className="">
        <div className="grid grid-cols-6 items-center justify-center text-center py-2">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, i) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={i} className="grid grid-cols-6 items-center justify-center text-center">
                <img src={item.image} className="w-24 p-4 " alt="" />
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>{item.price*(cartItems[item._id])}</p>
                <button onClick={()=>removeFromCart(item._id)}>X</button>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Cart;
