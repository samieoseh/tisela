import Link from "next/link";
import Logo from "./Logo";
import { LucideChevronDown, LucideMenu, LucideSearch } from "lucide-react";
import { Container } from "./Wrapper";
import Avatar from "./Avatar";

const Header = () => {
  return (
    <Container className="m-2">
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
        <form className="flex-1 rounded">
          <div className="relative bg-[#f9f9f9] flex items-center justify-between border border-gray-500">
            <input
              type="text"
              placeholder="Search"
              className="pl-2 outline-none py-1 text-sm text-gray-700 flex-1 bg-[#f9f9f9]"
            />
            <LucideSearch
              height={20}
              width={20}
              className="cursor-pointer mx-4"
            />
          </div>
        </form>
        <div className="flex items-center">
          <Avatar />
          <LucideMenu />
        </div>
      </div>
    </Container>
  );
};

export default Header;
