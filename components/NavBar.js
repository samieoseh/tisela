"use client";
import { getCurrentUser } from "@/lib/appwriteUtils";
import { account } from "@/service/appwriteConfig";
import { deleteCookie } from "cookies-next";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const NavBar = () => {
  const router = useRouter();

  const links = [
    { id: 1, href: "/", text: "Home" },
    { id: 2, href: "/courses", text: "Courses" },
    { id: 3, href: "/aboutus", text: "About Us" },
    { id: 4, href: "/contact", text: "Contact Us" },
    { id: 5, href: "/faqs", text: "FAQs" },
    { id: 6, href: "/privacy", text: "Privacy Policy" },
    { id: 7, href: "/terms", text: "Terms and Condition" },
  ];
  const [showNav, setShowNav] = useState(false);
  const handleClick = () => {
    setShowNav(!showNav);
  };
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(getCurrentUser());
    console.log(user);
  }, [user]);

  const handleLogout = async () => {
    console.log("logging out");
    try {
      await account.deleteSession("current");
      deleteCookie("auth", true, { maxAge: 60 * 60 * 60 * 24 });
      console.log("Logged out");
      router.push("/login");
    } catch (error) {
      console.log("Logout failed, ", error);
    }
  };

  return (
    <nav>
      {!showNav && <Menu onClick={handleClick} />}
      <ul
        className={`absolute top-0 right-0 bottom-0 bg-white border w-3/6 p-5 z-40 ${
          !showNav
            ? "transform translate-x-full transition-all duration-300 ease-in-out"
            : ""
        } ${
          showNav
            ? "transform translate-x-0 transition-all duration-300 ease-in-out"
            : ""
        }`}
      >
        <div className="flex justify-end px-2">
          <X onClick={handleClick} />
        </div>

        {links.map((link) => (
          <li
            key={link.id}
            className={`my-6 ${
              link.text === "Sign Up"
                ? "bg-[#000] border rounded [&>a]:text-white py-2 flex justify-center"
                : ""
            } ${
              link.text === "Login"
                ? "bg-[#fff] border rounded [&>a]:text-[#000] py-2 flex justify-center"
                : ""
            }`}
          >
            <Link href={link.href} className="text-sm">
              {link.text}
            </Link>
          </li>
        ))}
        {user ? (
          <button
            className="bg-[#000] border rounded text-white py-2 w-full flex justify-center"
            onClick={handleLogout}
          >
            Logout
          </button>
        ) : (
          <div>
            <li className="my-6 bg-[#fff] border rounded text-[#000] py-2 flex justify-center">
              <Link href="/login">Login</Link>
            </li>
            <li className=" my-6 bg-[#000] border rounded text-white py-2 flex justify-center">
              <Link href="/signup">Sign Up</Link>
            </li>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
