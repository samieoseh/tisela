"use client";

import useUserStore from "@/store/UserStore";

const ProfilePage = ({ params }) => {
  const userDetails = useUserStore((state) => state.userDetails);
  console.log(userDetails);
  return (
    <div>
      <h1>Profile page</h1>
      <h2>User id: {params.id}</h2>
    </div>
  );
};

export default ProfilePage;
