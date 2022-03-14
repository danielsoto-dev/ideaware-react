import React from "react";

const Button = ({ children, type, className, ...props }) => {
  if (type === "outline") {
    return (
      <button className={`${OUTLINE_BUTTON_STYLES} ${className}`} {...props}>
        {children}
      </button>
    );
  }
  return (
    <button className={`${PRIMARY_BUTTON_STYLES} ${className}`} {...props}>
      {children}
    </button>
  );
};

const PRIMARY_BUTTON_STYLES =
  "bg-[#00e69b] min-w-fit px-5 py-3 rounded-lg font-bold text-white";
const OUTLINE_BUTTON_STYLES =
  "border-2 border-[#00e69b] rounded-lg px-5 py-3 bg-transparent font-extrabold text-[#00e69b]";
export default Button;
