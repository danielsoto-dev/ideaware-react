import React from "react";
// import { useMobileNavbar } from "../../contexts/mobile-navbar";
import { BurgerMenu } from "../../icons/BurgerMenu";
import { Logo } from "../../icons/Logo";
import Button from "../Button";
const Header = () => {
  //   const { isOpen, toggle, setIsOpen } = useMobileNavbar();
  return (
    <header>
      <nav className="flex justify-center md:justify-between items-center py-8 px-14">
        <BurgerMenu className="absolute left-4 md:hidden" />
        <Logo />
        <div>
          <ul className="font-semibold hidden md:flex justify-end items-center">
            <li className="mr-8">
              <a href="/">Community</a>
            </li>
            <li className="mr-8">
              <a href="/">Blog</a>
            </li>
            <Button type="outline">Get early access</Button>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
