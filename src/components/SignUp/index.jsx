import React from "react";
import EmailForm from "../EmailForm";
const SignUp = () => {
  return (
    <div className="lg:text-xl flex flex-col md:flex-row mx-auto md:text-left mt-24 px-4 items-center md:items-end md:flex md:justify-around max-w-[954px]">
      <div className="max-w-[384px]">
        <p className="font-bold leading-6">Sign up for product updates:</p>
        <p className="mt-7">
          Ullamcorper orci, eu venenatis ac euismod vel purus tortor rhoncus
          mauri.
        </p>
      </div>
      <EmailForm
        btnName="Subscribe"
        className="h-auto hidden md:block md:m-0 mt-7"
      />
      <EmailForm btnName="Get early access" className="md:hidden  mt-7" />
    </div>
  );
};
export default SignUp;
