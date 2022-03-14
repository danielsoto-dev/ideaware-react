import React from "react";

export const Circle = ({ className, fill, ...props }) => {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="40" cy="40" r="40" fill={fill} />
    </svg>
  );
};
