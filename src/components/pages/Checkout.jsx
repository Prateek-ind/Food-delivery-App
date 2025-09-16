import React from "react";
import Input from "../Input";
import CartTotal from "./Cart/CartTotal";

const Checkout = () => {
  return (
    <div className="pt-20 mt-24 w-full max-w-6xl mx-auto mb-24 flex px-8 justify-between">
      <form className="flex  flex-col gap-2">
        <div className="flex gap-2">
          <Input  placeHolder="First Name"/>
          <Input  placeHolder="Last Name"/>
        </div>
        <Input  placeHolder="Email address"/>
        <Input placeHolder="Street"/>
        <div className="flex gap-2">
          <Input placeHolder="City"/>
          <Input placeHolder="State"/>
        </div>
        <div className="flex gap-2">
          <Input placeHolder="Pin Code"/>
          <Input placeHolder="Country"/>
        </div>
        <Input placeHolder="Phone"/>
      </form>
      <CartTotal proceedTo="PROCEED TO PAYMENT"/>
    </div>
  );
};

export default Checkout;
