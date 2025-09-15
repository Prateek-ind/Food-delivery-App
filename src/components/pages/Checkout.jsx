import React from "react";
import Input from "../Input";
import CartTotal from "./Cart/CartTotal";

const Checkout = () => {
  return (
    <div>
      <form>
        <div>
          <Input />
          <Input />
        </div>
        <Input />
        <Input />
        <div>
          <Input />
          <Input />
        </div>
        <div>
          <Input />
          <Input />
        </div>
        <Input />
      </form>
      <CartTotal />
    </div>
  );
};

export default Checkout;
