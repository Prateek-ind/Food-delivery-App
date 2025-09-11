import React, { forwardRef } from "react";
import Input from "../Input";
import Button from "../Button";

const SignUpForm = forwardRef(({ setIsLoggedIn }, ref) => {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form Submitted");
  }

  return (
    <form
      ref={ref}
      onSubmit={handleSubmit}
      className="w-full flex flex-col gap-4"
    >
      <h2 className="text-2xl text-center font-semibold">Sign-Up</h2>
      <div className="flex gap-4 justify-between">
        <Input
          name="First Name"
          type="text"
          placeholder="Enter your First Name"
        />
        <Input
          name="Last Name"
          type="text"
          placeholder="Enter your Last Name"
        />
      </div>
      <Input name="Email" type="email" placeholder="Enter your Email" />
      <div className="flex gap-4 justify-between">
        <Input
          name="Password"
          type="password"
          placeholder="Enter your password"
        />
        <Input
          name="Confirm-Password"
          type="password"
          placeholder="Confirm Password"
        />
      </div>
      <div className="flex gap-2 items-center">
        <input type="checkbox" required />
        <p className="text-xs">
          By continuing, I agree to the terms of use and privacy policy.
        </p>
      </div>
      <Button
        type="submit"
        name="Create Account"
        className="w-fit rounded-xl mt-2 text-white px-4 py-2 bg-orange-500 hover:bg-orange-700 hover:scale-103 cursor-pointer"
      />
      
      <p className="py-2 text-gray-700 text-sm">
        If you are already registered please{" "}
        {
          <a
            className="text-orange-500 hover:font-bold cursor-pointer"
            onClick={() => setIsLoggedIn(true)}
          >
            Sign In
          </a>
        }{" "}
        here
      </p>
    </form>
  );
});

export default SignUpForm;
