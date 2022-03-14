import React from "react";

const Form = ({ children, className, ...props }) => {
  return (
    <form className={`${DEFAULT_FORM_STYLES} ${className}`} {...props}>
      {children}
    </form>
  );
};
const DEFAULT_FORM_STYLES =
  "mx-auto flex justify-between md:justify-center items-center flex-col md:flex-row";
export default Form;
