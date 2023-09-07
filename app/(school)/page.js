"use client";

import { account } from "@/service/appwriteConfig";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const HomePage = () => {
  const router = useRouter();
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("cookieFallback");
      if (token !== null) {
        setUserDetails(await account.get());
      } else {
        router.push("/login");
      }
    };
    fetchUserData();
  }, []);

  const handleLogout = async () => {
    await account.deleteSession("current");
    localStorage.removeItem("cookieFallback");
    console.log("Logged out");
    router.push("/login");
  };

  return (
    <div className="flex flex-col">
      <Link href="/1/profile">Go to profile</Link>
      {userDetails && (
        <div>
          <h1>Welcome {userDetails.name}</h1>
        </div>
      )}
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default HomePage;
