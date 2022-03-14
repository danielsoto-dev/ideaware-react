import React from "react";
import CollapseMenu from "../CollapseMenu";
const FAQ = () => {
  return (
    <div className="lg:text-xl">
      <h1 className="mt-20 text-xl md:text-3xl font-bold">FAQ</h1>
      <CollapseMenu className="mt-14" />
      <hr className="mx-4 " />
      <CollapseMenu />
      <hr className="mx-4 " />
      <CollapseMenu />
      <hr className="mx-4 " />
      <CollapseMenu />
      <hr className="mx-4 " />
      <CollapseMenu />
      <hr className="mx-4 " />
      <CollapseMenu />
    </div>
  );
};
export default FAQ;
