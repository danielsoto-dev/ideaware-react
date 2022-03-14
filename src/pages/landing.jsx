import React from "react";
import Header from "../components/Header";
import EmailForm from "../components/EmailForm";
import { HeroIconMobile } from "../icons/HeroIconMobile";
import { HeroIconDesktop } from "../icons/HeroIconDesktop";
import Partners from "../components/Partners";
import EngageTeam from "../components/EngageTeam";
import Perks from "../components/Perks";
import Testimonial from "../components/Testimonial";
import WaitingList from "../components/WaitingList";
import FAQ from "../components/FAQ";
import SignUp from "../components/SignUp";
import Features from "../components/Features";
import Signature from "../components/Signature";
import Footer from "../components/Footer";
import { Ideaware } from "../icons/Ideaware";
export const Landing = () => {
  return (
    <>
      <Header />{" "}
      <div className="md:max-w-[950px] mx-auto">
        <div className="mx-auto mt-12 mb-[-50px] flex justify-center">
          <HeroIconMobile className="md:hidden" />
          <HeroIconDesktop className="hidden md:block" />
        </div>
        <p className="max-w-[580px] min-w-[343px] mx-auto px-4 md:text-xl">
          <span className="font-bold">Weware means:</span> Easy to find
          knowledge, content and proceses. Announcements, team engagement,
          recognition and profiles. 🙌
        </p>
        <EmailForm btnName="Get early access" className="mt-12" />
        <Perks />
        <Partners />
        <EngageTeam />
        <Features />
        <Testimonial />
      </div>
      <WaitingList />
      <div className="md:max-w-[950px] mx-auto">
        <FAQ />
        <SignUp />
        <hr className="mt-12 mx-4 " />
        <div className="lg:flex lg:flex-wrap items-center mb-36">
          <Footer />
          <Signature />
        </div>
        <p className="text-left ml-4 mb-4 relative left-0">
          © 2021 Weware Co. Built with 💙 by <Ideaware />
        </p>
      </div>
    </>
  );
};
