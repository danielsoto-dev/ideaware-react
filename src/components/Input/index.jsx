import React from "react";

const Input = ({ name, labelName, ...props }) => {
  const displayLabel = labelName && <label htmlFor={name}>{labelName}</label>;
  return (
    <>
      {displayLabel}
      <input
        className={`${PRIMARY_INPUT_STYLES} ${props.className}`}
        id={name}
        {...props}
      />
    </>
  );
};
const PRIMARY_INPUT_STYLES =
  "px-5 py-3.5 md:mr-4 max-w-[320px] h-[50px] border-blue-900 border rounded-lg placeholder-blue-900 focus:outline-none focus:shadow-outline focus:border-blue-700";
export default Input;
