import { useContext } from "react";
import { StoreContext } from "../../../context/StoreContext";
import Button from "../../Button";
import Input from "../../Input";
import { useNavigate } from "react-router-dom";
import CartTotal from "./CartTotal";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getCartTotal } =
    useContext(StoreContext);

  const formattedUSD = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const subtotal = getCartTotal();

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
                      className="font-bold text-red-500 hover:scale-105 cursor-pointer"
                    >
                      X
                    </button>
                  </div>
                  <hr className="text-gray-400" />
                </div>
              );
            }
          })}
          <CartTotal />
          <div className="flex flex-col  gap-4 py-2">
            <p>If you have a promo code, enter here.</p>
            <div className="flex gap-8">
              <Input placeHolder="Promo Code" />
              <Button
                name="Submit"
                className="text-white bg-gray-950 px-4 py-1 rounded-lg shadow cursor-pointer hover:scale-105 hover:bg-orange-700"
              />
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
