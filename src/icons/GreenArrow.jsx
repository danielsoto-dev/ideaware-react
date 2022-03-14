import React from "react";

export const GreenArrow = ({ width = "15", height = "8", className }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 15 8"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.999878 1L7.58977 7L14.1797 1"
        stroke="#00e69b"
        stroke-width="2"
      />
    </svg>
  );
};
