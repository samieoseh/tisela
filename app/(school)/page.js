"use client";

import account from "@/service/appwriteConfig";
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
    <div>
      {userDetails && (
        <div>
          <h1>Welcome {userDetails.name}</h1>
          <button onClick={handleLogout}>Log Out</button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
