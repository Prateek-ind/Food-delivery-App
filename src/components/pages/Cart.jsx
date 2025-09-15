import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import Button from "../Button";
import Input from "../Input";

const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);

  const formattedUSD = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const subtotal = food_list.reduce((acc, item) => {
    if (cartItems[item._id] > 0) {
      return acc + cartItems[item._id] * item.price;
    }
    return acc;
  }, 0);

  const deliveryFee = 2;
  const total = subtotal + deliveryFee;

  return (
    <div className="pt-20 mt-24 w-full max-w-6xl mx-auto flex items-center justify-center">
      {Object.values(cartItems).reduce((a, b) => a + b, 0) > 0 ? (
        <div className="w-full px-4">
          <div className=" grid grid-cols-6 items-center gap-4 justify-center text-center font-semibold py-2">
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
                <div className="w-full">
                  <div
                    key={i}
                    className="  grid grid-cols-6 gap-4 items-center justify-center text-center"
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
          <div className="w-full py-8 mt-4 grid grid-cols-1 sm:grid-cols-2 gap-16 justify-between">
            <div className="">
              <h3 className="text-xl font-bold py-2">Cart Total</h3>
              <div className="flex items-center py-2 justify-between">
                <p>Subtotals</p>
                <p>{formattedUSD.format(subtotal)}</p>
              </div>
              <hr className="text-gray-400" />
              <div className="flex items-center py-2 justify-between">
                <p>Delivery Fee</p>
                <p>{formattedUSD.format(deliveryFee)}</p>
              </div>
              <hr className="text-gray-400" />
              <div className="flex items-center py-2 justify-between">
                <p className="font-bold">Total</p>
                <p>{formattedUSD.format(total)}</p>
              </div>
              <Button
                name="Proceed to Checkout"
                className="text-white bg-orange-500 px-4 py-2 rounded-lg shadow cursor-pointer hover:scale-105 hover:bg-orange-700"
              />
            </div>
            <div className="flex flex-col  gap-4 py-2">
              <p>If you have a promo code, enter here.</p>
              <div className="flex gap-8">
                <Input />
                <Button
                  name="Submit"
                  className="text-white bg-orange-500 px-4 py-2 rounded-lg shadow cursor-pointer hover:scale-105 hover:bg-orange-700"
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Your cart is empty please add items to checkout.</p>
      )}
    </div>
  );
};

export default Cart;
