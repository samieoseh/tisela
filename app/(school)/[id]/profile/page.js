"use client";

const ProfilePage = ({ params }) => {
  return (
    <div>
      <h1>Profile page</h1>
      <h2>User id: {params.id}</h2>
    </div>
  );
};

export default ProfilePage;
