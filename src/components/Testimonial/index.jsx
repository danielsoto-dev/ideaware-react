import React from "react";
import Author from "../../assets/author.png";
const Testimonial = () => {
  return (
    <div className="px-8 md:p-0 mt-20 max-w-[660px] mx-auto">
      <blockquote
        className="text-[22px] md:text-[28px] leading-8 md:leading-10"
        cite="#"
      >
        “We've had less confusion with task responsibilities and deadlines,
        which has increased productivity and <br className="md:hidden" />{" "}
        efficiency.”
      </blockquote>
      <div className="mt-6 flex justify-center gap-4 items-center">
        <img className="w-[50px] h-[50px] rounded-full" src={Author} alt="" />
        <span className="md:text-[18px]">John Doe, Qrvey.</span>
      </div>
    </div>
  );
};
export default Testimonial;
