import React from "react";
import BetterWork from "../../assets/betterworks.png";
import Bucket from "../../assets/bucket.png";
import Hyperia from "../../assets/hyperia.png";
import LeapCure from "../../assets/leapcure.png";
import Luna from "../../assets/luna.png";
import Mesh from "../../assets/mesh.png";
const Partners = () => {
  return (
    <>
      <h1 className="mt-24 text-xl md:text-3xl font-bold px-4 ">
        Distributed teams brought together
      </h1>
      <div className="flex mt-4 mx-auto justify-around max-h-[260px] max-w-[960px] flex-wrap items-center min-w-[300px]">
        <img className="max-w-[140px] mt-5 basis-1/2" src={Luna} alt="" />
        <img className="max-w-[140px] mt-5 basis-1/2" src={Bucket} alt="" />
        <img className="max-w-[140px] mt-5 basis-1/2" src={Mesh} alt="" />
        <img className="max-w-[140px] mt-5 basis-1/2" src={LeapCure} alt="" />
        <img className="max-w-[140px] mt-5 basis-1/2" src={BetterWork} alt="" />
        <img className="max-w-[140px] mt-5 basis-1/2" src={Hyperia} alt="" />
      </div>
    </>
  );
};
export default Partners;
