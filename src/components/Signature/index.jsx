import React from "react";

import { Logo } from "../../icons/Logo";
const Signature = () => {
  return (
    <div className="mx-auto max-w-[250px] mt-20 mb-8 lg:m-0 flex justify-center lg:text-right items-center flex-col gap-4">
      <Logo className="lg:ml-auto" />

      <p>Ullamcorper orci, venenatis ac euismod vel purus tortor rhoncu.</p>
    </div>
  );
};
export default Signature;
