import  { useContext } from "react";
import { StoreContext } from "../../../context/StoreContext";
import Button from "../../Button";

import { useNavigate } from "react-router-dom";

const CartTotal = () => {
  const { getCartTotal } =
    useContext(StoreContext);

  const formattedUSD = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const navigate = useNavigate();
  const subtotal = getCartTotal();

  const deliveryFee = 2;
  const total = subtotal + deliveryFee;
  return (
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
          onClick={() => navigate("/order")}
          className="text-white bg-orange-500 px-4 py-2 rounded-lg shadow cursor-pointer
               hover:scale-105 hover:bg-orange-700 flex items-center justify-center"
        >
          PROCEED TO CHECKOUT
        </Button>
      </div>
    </div>
  );
};

export default CartTotal;
