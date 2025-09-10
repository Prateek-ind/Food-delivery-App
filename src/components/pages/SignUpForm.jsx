import React, { forwardRef } from "react";

const SignUpForm = forwardRef((props, ref) => {
  return (
    <form ref={ref} className="flex flex-col gap-4">
      <h2 className="text-2xl text-center font-semibold">Sign-In</h2>
      <div className="flex justify-between">
        <Input name="First Name" type="text" />
        <Input name="Last Name" type="text" />
      </div>
      <Input name="Email" type="email" />
      <div className="flex justify-between">
        <Input name="Password" type="password" />
        <Input name="Confirm-Password" type="password" />
      </div>
      <Button type="submit" name="Sign-Up" />
    </form>
  );
});

export default SignUpForm;
