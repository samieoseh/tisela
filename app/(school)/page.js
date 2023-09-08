"use client";
import Link from "next/link";
import { account } from "@/service/appwriteConfig";
import { useEffect, useState } from "react";
import { getCurrentUser } from "@/lib/appwriteUtils";
import { useRouter } from "next/navigation";
import { deleteCookie } from "cookies-next";

const HomePage = () => {
  const [userDetails, setUserDetails] = useState(null);
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await account.deleteSession("current");
      deleteCookie("auth", true, { maxAge: 60 * 60 * 60 * 24 });
      console.log("Logged out");
      router.push("/login");
    } catch (error) {
      console.log("Logout failed, ", error);
    }
  };

  useEffect(() => {
    const user = getCurrentUser();
    user.then((res) => setUserDetails(res));
  }, []);

  return (
    <div>
      <div className="flex flex-col">
        <Link href="/1/profile">Go to profile</Link>
        {userDetails && (
          <div>
            <h1>Welcome {userDetails.name}</h1>
          </div>
        )}
        <button onClick={handleLogout}>Log Out</button>
      </div>
    </div>
  );
};

export default HomePage;
