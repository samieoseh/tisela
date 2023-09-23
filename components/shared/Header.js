"use client";
import Link from "next/link";
import Logo from "./Logo";
import { LucideChevronDown, LucideMenu, LucideSearch, X } from "lucide-react";
import { Container } from "./Wrapper";
import Avatar from "./Avatar";
import { useState } from "react";
import { mainLinks } from "@/lib/constants";
import { useAuth } from "@/hooks/useAuth";

const Header = () => {
  const { logout } = useAuth();
  const handleLogout = async () => {
    await logout();
  };

  const [showNav, setShowNav] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  return (
    <header className="fixed top-0 right-0 w-full border-b border-gray-300 z-20 bg-[#f9f9f9]">
      <Container className="py-2">
        <div className="flex justify-between items-center">
          <Logo />
          <ul
            className={`fixed h-full top-0 right-0 bg-white py-10 px-4 w-2/4 text-sm transformtransition-all duration-300 ease-in-out ${
              showNav ? "translate-x-0" : " translate-x-full "
            }`}
          >
            <X
              className="fixed top-0 right-0 m-4 cursor-pointer"
              onClick={() => setShowNav(!showNav)}
            />
            {mainLinks.map((link, index) => (
              <li key={index} className="mt-6">
                <Link href={link.href}>{link.text}</Link>
              </li>
            ))}
            <button
              className={`${"mt-4 py-1 px-4 block w-full text-center border border-gray-500 rounded text-[#000]"}`}
              onClick={handleLogout}
            >
              Log Out
            </button>
          </ul>
          <div className="flex items-center">
            <LucideSearch
              height={20}
              width={20}
              className="cursor-pointer mx-4"
              onClick={() => setShowSearch(!showSearch)}
            />
            <Avatar />
            <LucideMenu
              className="cursor-pointer"
              onClick={() => setShowNav(!showNav)}
            />
          </div>
        </div>
        <form
          className="rounded w-full flex"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <input
            type="text"
            placeholder="Search"
            className={`pl-2 outline-none rounded border border-gray-500 py-1 mt-2 flex-1 text-sm text-gray-700 bg-[#f9f9f9] z-20 ${
              showSearch ? "" : "hidden"
            }`}
          />
        </form>
      </Container>
    </header>
  );
};

export default Header;
