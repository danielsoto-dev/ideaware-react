import React from "react";

const Footer = () => {
  return (
    <footer className="lg:grow lg:text-lg gap-10 text-left mt-12 px-4 md:p-0 flex justify-between md:justify-evenly items-start flex-wrap">
      <div className="basis-36 relative">
        <p className="mb-9 font-bold after:top-[38px] after:left-0 after:absolute after:content-[''] after:w-[16px] after:bg-[#00e69b] after:h-[2px]">
          Social Media
        </p>
        <div className="mt-4 flex justify-around gap-3 items-start flex-col">
          <a href="/">Discord</a>
          <a href="/">Twitter</a>
          <a href="/">Instagram</a>
        </div>
      </div>
      <div className="basis-36 relative">
        <p className="mb-9 font-bold after:top-[38px] after:left-0 after:absolute after:content-[''] after:w-[16px] after:bg-[#00e69b] after:h-[2px]">
          Company
        </p>
        <div className="mt-4 flex justify-around gap-3 items-start flex-col">
          <a href="/">Community</a>
          <a href="/">Blog</a>
        </div>
      </div>
      <div className="basis-36 relative">
        <p className="mb-9 font-bold after:top-[38px] after:left-0 after:absolute after:content-[''] after:w-[16px] after:bg-[#00e69b] after:h-[2px]">
          Resources
        </p>
        <div className="mt-4 flex justify-around gap-3 items-start flex-col">
          <a href="/">Contact us</a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
