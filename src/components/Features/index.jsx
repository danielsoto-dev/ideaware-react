import React from "react";
import Announcements from "../../assets/announcements.png";
import Wiki from "../../assets/wiki.png";
import TeamDirectory from "../../assets/team_directory.png";
import TeamBgRect from "../../assets/team-rect.png";
import AnBgRect from "../../assets/an-rect.png";
import Recognition from "../../assets/recognition.png";
import { UpperPipe } from "../../icons/UpperPipe";
import { LowerPipe } from "../../icons/LowerPipe";
import { Star } from "../../icons/Star";
import { Circle } from "../../icons/Circle";
const DROPSHADOW =
  "drop-shadow-[0_50px_80px_rgba(0,42,106,0.1)] drop-shadow-[0_15px_40px_rgba(2,0,106,0.12)]";
const Features = () => {
  return (
    <div
      className={`md:text-xl lg:grid mx-auto px-6 justify-items-center items-center grid-rows-4 grid-cols-2 mt-24 ${DROPSHADOW} text-center lg:text-left max-w-[990px]`}
    >
      <div className="relative w-fit mx-auto">
        <img src={Announcements} className="lg:max-w-[450px] mx-auto" alt="" />
        <img
          src={AnBgRect}
          className="absolute h-16 -right-12 top-20 lg:top-32 lg:left-[-60px] -z-10 rounded-2xl lg:h-24"
          alt="Background gradient"
        />
      </div>
      <div className="lg:max-w-[365px] relative justify-self-end">
        <h2 className="mt-12 font-bold">Announcements</h2>
        <p className="mt-7">
          Your entire team in one place, with Engage your team with company wide
          announcements that entice engagement. The team homepage reveals
          everything going on with your team.
        </p>
        <UpperPipe className="hidden lg:block absolute left-[-190px] top-[220px] -z-10" />
        <Star
          fill="#00e69b"
          className="hidden lg:block absolute top-0 left-[-40px]"
        />
      </div>
      <img
        className="mt-24 mx-auto col-start-2 lg:max-w-[450px]"
        src={Wiki}
        alt=""
      />
      <div className="relative justify-self-start lg:max-w-[365px] row-start-2">
        <h2 className="mt-12 font-bold">Wiki</h2>
        <p className="mt-7">
          Create and share knowledge with your team. Whether it be company
          processes, presentations, content your team has created, anything!
          Find anything directly from Slack too.
        </p>
        <Circle
          fill="#FF6B08"
          className="absolute -z-10 -top-[329px] right-0 lg:top-[80px] lg:-right-[575px] "
        />
        <Star
          fill="#8642E1"
          className=" w-5 lg:w-auto absolute -z-10 right-5 top-[-20px] lg:top-0 lg:right-[-615px]"
        />
      </div>
      <div className="relative w-fit mx-auto">
        <img
          className="mt-24 mx-auto lg:max-w-[450px]"
          src={TeamDirectory}
          alt=""
        />
        <img
          src={TeamBgRect}
          className="absolute rotate-90 lg:rotate-0 bottom-3.5 -left-20 lg:top-72 lg:left-[-60px] -z-10 rounded-2xl h-24"
          alt="Background gradient"
        />
      </div>
      <div className="relative lg:max-w-[365px] justify-self-end">
        <h2 className="mt-12 font-bold ">Team directory</h2>
        <p className="mt-7">
          Your entire team in one place, with profile information, history,
          notes and more. You no longer need a clunky separate HR app.
        </p>
        <Star
          fill="#FF6B08"
          className="absolute w-5 lg:w-auto -z-10 top-[-20px] right-0 lg:left-[-615px]"
        />
        <LowerPipe className="absolute hidden lg:block -z-10 top-[-196px] left-[-190px]" />
      </div>
      <img
        className="mt-24 mx-auto col-start-2 lg:max-w-[450px]"
        src={Recognition}
        alt=""
      />
      <div className="relative justify-self-start lg:max-w-[365px] row-start-4">
        <h2 className="mt-12 font-bold">Recognition</h2>
        <p className="mt-5">
          Anyone can thank, recognize co workers for their effort. The activity
          feeds reveal all the great things happening on your team.
        </p>
        <Star
          fill="#FBDDFF"
          className="hidden lg:block absolute -z-10 top-[-60px] right-[-415px]"
        />
      </div>
    </div>
  );
};
export default Features;
