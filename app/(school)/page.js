"use client";

import account from "@/service/appwriteConfig";
import { useEffect, useState } from "react";
import useUserStore from "@/store/UserStore";

const HomePage = () => {
  // get user details
  const [userDetails, setUserDetails] = useUserStore((state) => [
    state.userDetails,
    state.setUserDetails,
  ]);

  useEffect(() => {
    const user = account.get();
    user.then((res) => setUserDetails(res));
  }, [setUserDetails]);

  const userDetails2 = useUserStore((state) => state.userDetails);
  console.log(userDetails2);

  return (
    <div>
      {userDetails && <h1>Welcome {userDetails.name}</h1>}
      <h1>Home page</h1>
    </div>
  );
};

export default HomePage;
