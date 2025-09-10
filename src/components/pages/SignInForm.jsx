import Input from "../Input";
import Button from "../Button";

const SignInForm = forwardRef((props, ref) => {
  return (
    <form ref={ref} className="flex flex-col gap-4">
      <h2 className="text-2xl text-center font-semibold">Sign-In</h2>
      <Input name="Email" type="email" />
      <Input name="Password" type="password" />
      <Button type="submit" name="Log-In" />
    </form>
  );
});

export default SignInForm;
