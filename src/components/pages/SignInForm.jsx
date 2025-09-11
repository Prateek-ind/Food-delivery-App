import Input from "../Input";
import Button from "../Button";
import { forwardRef } from "react";

const SignInForm = forwardRef(({ props, setIsLoggedIn }, ref) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login form submitted");
  };
  return (
    <form onSubmit={handleSubmit} ref={ref} className="flex flex-col gap-4">
      <h2 className="text-2xl text-center font-semibold">Sign-In</h2>
      <Input name="Email" type="email" placeholder="Enter your email" />
      <Input
        name="Password"
        type="password"
        placeholder="Enter your password"
      />
      <Button
        type="submit"
        name="Log-In"
        className="w-fit rounded-xl mt-2 text-white px-4 py-2 bg-orange-500 hover:bg-orange-700 hover:scale-103 cursor-pointer"
      />
      <p className="py-2 text-gray-700 text-sm">
        If you are not registered please 
        {
          <a
            className="text-orange-500 hover:font-bold cursor-pointer"
            onClick={() => setIsLoggedIn(false)}
          >
            Sign Up
          </a>
        }{" "}
        here
      </p>
    </form>
  );
});

export default SignInForm;
