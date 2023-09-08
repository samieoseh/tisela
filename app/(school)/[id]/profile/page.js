"use client";
import Image from "next/image";

import ProfileTab from "@/components/ProfileTab.";
import { account, databases } from "@/service/appwriteConfig";
import { Query } from "appwrite";
import { useEffect, useState } from "react";
import Link from "next/link";

const ProfilePage = ({ user }) => {
  const [userData, setUserData] = useState(null);
  const [verificationStatus, setVerificationStatus] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      const user = await account.get();
      setVerificationStatus(user.emailVerification ? true : false);
      const data = await databases.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_COLLECTION_ID,
        [Query.equal("email", user.email)],
      );
      setUserData(data.documents[0]);
    };
    fetchUserData();
  }, []);

  return (
    <div>
      {userData && (
        <main className="w-11/12 mx-auto my-8 flex flex-col">
          <Link href="/">Go to Home</Link>
          <div className="flex flex-col items-center my-4">
            <div className="h-[64px] w-[64px] relative my-2">
              <Image
                src="/mona.jpg"
                alt="user photo"
                layout="fill"
                objectFit="cover"
                className="rounded-full "
              />
            </div>
            <h1 className="flex justify-between items-center text-2xl font-bold my-2 uppercase">
              {userData.name}
              {verificationStatus && (
                <span className="px-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="green"
                    className="w-6 h-6"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              )}
            </h1>
            <p className="text-center text-gray-600">{userData.email}</p>
            <p>{userData.city}</p>
            <p>Current Level: {userData.current_level}</p>
          </div>
          <div className="flex items-center gap-8 flex-col flex-wrap mt-8">
            <div className="bg-white w-36 rounded p-4 shadow-sm">
              <p className="text-center text-4xl font-bold">
                {userData.completed}
              </p>
              <p className="text-center text-xl pt-2">Lessons Completed</p>
            </div>
            <div className="bg-white w-36 rounded p-4 shadow-sm">
              <p className="text-center text-4xl font-bold">
                {userData.practice}
              </p>
              <p className="text-center text-xl pt-2">
                Practice Questions Completed
              </p>
            </div>
            <div className="bg-white w-36 rounded p-4 shadow-sm">
              <p className="text-center text-4xl font-bold">
                {userData.average}
              </p>
              <p className="text-center text-xl pt-2">Average Score</p>
            </div>
          </div>
          <ProfileTab />
        </main>
      )}
    </div>
  );
};

export default ProfilePage;
