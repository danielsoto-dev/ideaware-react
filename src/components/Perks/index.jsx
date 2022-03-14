import React from "react";
import { Arrow } from "../../icons/Arrow";
import PerksMobile from "../../assets/mobile_perk.png";
import PerksDesktop from "../../assets/desktop_perk.png";
const Perks = () => {
  return (
    <>
      <div id="mobile-view" className="md:hidden">
        <img
          className="drop-shadow-[0_20px_60px_rgba(106,51,140,0.15)] w-[343px] h-[202px] mt-24 mx-auto rounded-lg border-2 border-neutral-200"
          src={PerksMobile}
          alt="A close-up view of the dashboard"
        />
        <div className="mt-20 text-left font-['Hand_Of_Sean'] px-4">
          <p className="ml-10">
            <Arrow className="inline absolute left-4" /> Add topics, such as
            Design, Marketing, HR to organize your updates into groups.
          </p>
          <p className="mt-8 ml-10">
            <Arrow className="inline absolute left-4" /> Activate leaderboards
            for some friendly competition!
          </p>
          <p className="mt-8 ml-10">
            <Arrow className="inline absolute left-4" /> Add an update or some
            news for your team
          </p>
        </div>
      </div>
      <div id="desktop-view" className="hidden md:block mt-36 px-4 ">
        <img
          className="max-w-[990px] mx-auto w-full"
          src={PerksDesktop}
          alt="A close-up view of the dashboard"
        />
      </div>
    </>
  );
};
export default Perks;
