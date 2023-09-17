"use client";
import Link from "next/link";
import Logo from "./Logo";
import { LucideChevronDown, LucideMenu, LucideSearch } from "lucide-react";
import { Container, FooterContainer } from "./Wrapper";
import Avatar from "./Avatar";
import { useState } from "react";

const Header = () => {
  const handleSubmit = () => {
    console.log("Searched");
  };
  const [showSearch, setShowSearch] = useState(false);
  return (
    <header className="fixed top-0 right-0 w-full border-b border-gray-300 z-20 bg-[#f9f9f9]">
      <Container className="py-2">
        <div className="flex justify-between items-center">
          <Logo />
          <ul className="hidden">
            <li>
              <Link href="/courses">Courses</Link>
            </li>
            <li>
              <Link href="/profile">Profile</Link>
            </li>
            <li>
              <Link href="/learning">Learning</Link>
            </li>
            <li>
              <Link href="/saved">Saved Courses</Link>
            </li>
            <li>
              <Link href="/notifications">Notifications</Link>
            </li>
            <li>
              <Link href="/messages">Messages</Link>
            </li>
            <li>
              <Link href="/preferences">Preferences</Link>
            </li>
            <li>
              <Link href="/settings">Settings</Link>
            </li>
            <br />
            <li>
              <Link href="/help">Help</Link>
            </li>
            <li>
              <Link href="/faq">FaQ</Link>
            </li>
            <li>
              <Link href="/feedback">Feedback and Suggestion</Link>
            </li>
            <br />
            <li>
              <Link href="/logout">Logout</Link>
            </li>
          </ul>
          <div className="flex items-center">
            <LucideSearch
              height={20}
              width={20}
              className="cursor-pointer mx-4"
              onClick={() => setShowSearch(!showSearch)}
            />
            <Avatar />
            <LucideMenu />
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
            className={`pl-2 outline-none border border-gray-700 py-1 mt-2 flex-1 text-sm text-gray-700 bg-[#f9f9f9] z-20 ${
              showSearch ? "" : "hidden"
            }`}
          />
        </form>
      </Container>
    </header>
  );
};

export default Header;
