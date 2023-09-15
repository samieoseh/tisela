import { getCurrentUser } from "@/lib/appwriteUtils";
import { account } from "@/service/appwriteConfig";
import { deleteCookie } from "cookies-next";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const RightNav = ({ showNav }) => {
  const router = useRouter();

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
    <ul className="p-4 lg:p-4">
      {user ? (
        <button className="" onClick={handleLogout}>
          Logout
        </button>
      ) : (
        <div className="block lg:flex lg:gap-4">
          <Link
            href="/login"
            className="block w-auto py-1 px-4 text-center  border rounded text-[#000]  text-sm mb-4 lg:mb-0"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="block w-auto py-1 px-4 text-center bg-[#000] border rounded text-[#fff] text-sm mb-4 lg:mb-0"
          >
            Sign Up
          </Link>
        </div>
      )}
    </ul>
  );
};

export default RightNav;
