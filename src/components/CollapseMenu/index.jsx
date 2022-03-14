import React from "react";
import { GreenArrow } from "../../icons/GreenArrow";
const CollapseMenu = ({ className }) => {
  return (
    <div
      className={`text-left flex items-center justify-center min-h-[80px] px-4 relative w-full overflow-hidden ${className}`}
    >
      <div className="relative w-full">
        <input
          type="checkbox"
          className="peer absolute w-full top-0 bottom-0 inset-x-0 h-12 opacity-0 z-10 cursor-pointer"
        />
        <div className="h-12 w-full pl-5 flex items-center">
          <h1 className="font-bold">Lorem ipsum dolor sit amet?</h1>
        </div>
        <GreenArrow className="absolute top-[20px]  right-4 peer-checked:rotate-180 transition-transform duration-200 rotate-0" />
        <div className="overflow-hidden transition-all duration-200 max-h-0 peer-checked:max-h-full ">
          <div className="p-4 text-[#1e375c]">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
              bibendum accumsan lacus justo venenatis morbi aliquet quisque
              sapien. Scelerisque habitant felis sit mi. Justo gravida leo non
              bibendum accumsan lacus justo venenatis morbi aliquet quisque
              sapien.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CollapseMenu;
