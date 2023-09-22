"use client";
import { useState } from "react";
import { Container } from "../shared/Wrapper";
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";
import { Menu, X } from "lucide-react";
import Logo from "../shared/Logo";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <header className="border-b bg-border-300 fixed top-0 right-0 w-full z-40 bg-[#f9f9f9]">
      <Container className="flex justify-between items-center py-2 lg:py-0 flex-row lg:items-center">
        <Logo />
        {!showNav && (
          <Menu
            className="lg:hidden cursor-pointer"
            onClick={() => setShowNav(!showNav)}
          />
        )}
        <nav
          className={`fixed top-0 right-0 w-2/4 md:w-1/4 z-80 h-full bg-white lg:py-1 lg:relative lg:flex lg-[1261px]:justify-between md:items-center lg:bg-[#f9f9f9] lg:flex-1  ${
            showNav
              ? "transform translate-x-0 transition-all duration-300 ease-in-out"
              : "transform translate-x-full transition-all duration-300 ease-in-out lg:translate-x-0"
          }`}
        >
          <div className="flex justify-end m-4">
            {showNav && (
              <X onClick={() => setShowNav(!showNav)} className="lg:hidden" />
            )}
          </div>
          <LeftNav />
          <RightNav />
        </nav>
      </Container>
    </header>
  );
};

export default Header;
