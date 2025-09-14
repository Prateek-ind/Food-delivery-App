import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);

  const formattedUSD = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="pt-20 mt-24 max-w-7xl px-8 flex items-center justify-center">
      {Object.values(cartItems) > 0 ? (
        <div className="">
          <div className="grid grid-cols-6 items-center gap-4 justify-center text-center font-semibold py-2">
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
                <div className="">
                  <div
                    key={i}
                    className="grid grid-cols-6 gap-4 items-center justify-center text-center"
                  >
                    <img
                      src={item.image}
                      className="w-24 p-2 mx-auto "
                      alt=""
                    />
                    <p>{item.name}</p>
                    <p>{formattedUSD.format(item.price)}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>
                      {formattedUSD.format(item.price * cartItems[item._id])}
                    </p>
                    <button
                      onClick={() => removeFromCart(item._id)}
                      className="font-bold text-orange-500 hover:scale-105 cursor-pointer"
                    >
                      X
                    </button>
                  </div>
                  <hr className="text-gray-400" />
                </div>
              );
            }
          })}
        </div>
      ) : (
        <p>Your cart is empty please add items to checkout.</p>
      )}
    </div>
  );
};

export default Cart;
