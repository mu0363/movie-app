import type { CustomNextPage } from "next";
import { MainLayout } from "pages/_Layout";

const SignIn: CustomNextPage = () => {
  return (
    <div>
      <h1>SignIn</h1>
    </div>
  );
};

SignIn.getLayout = MainLayout;

export default SignIn;
