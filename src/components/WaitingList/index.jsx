import React from "react";
// import BgImage from "../../assets/waitlist.png";
import EmailForm from "../EmailForm";
const WaitingList = () => {
  return (
    <div
      className={`pt-8 px-4 md:p-0 mt-20 text-center md:text-left mx-auto max-w-[343px] md:max-w-[1152px] min-h-[500px] md:min-h-full text-white bg-cover bg-no-repeat bg-[url('./assets/waitlist.png')] md:rounded-3xl md:bg-[url('./assets/Desktop_waitinglist.png')] md:flex justify-end`}
    >
      <div className="md:basis-1/2 md:pl-6 md:pr-4 lg:pr-16 lg:pt-10">
        <div className="font-bold text-[22px] lg:text-3xl ">
          <p className="md:leading-[48px]">
            Interested in early access?
            <br /> Join the waitlist
          </p>
        </div>
        <p className="md:mt-4 md:text-lg">
          <span>(releasing Q1 2022)</span>
        </p>
        <EmailForm
          btnName="Get early access"
          className="mt-10 md:mt-4 lg:mt-10"
        />
      </div>
    </div>
  );
};
export default WaitingList;
