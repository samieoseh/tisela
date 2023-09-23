"use client";
import { Container } from "@/components/shared/Wrapper";
import useUpdate from "@/hooks/useUpdate";
import { account, databases } from "@/service/appwriteConfig";
import { Query } from "appwrite";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LucideArrowLeft } from "lucide-react";
import { LucideEye } from "lucide-react";
import { deleteAccount } from "@/lib/customUtils";
import EditProfileLoading from "@/components/loading/EditProfileLoading";

const EditProfilePage = () => {
  const [userData, setUserData] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [password, setUserPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const {
    updateName,
    updateEmail,
    updateBio,
    updateUsername,
    updatePassword,
    updatePhoto,
  } = useUpdate();

  useEffect(() => {
    const fetchUserData = async () => {
      const user = await account.get();
      setUserData(user);
      const data = await databases.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_COLLECTION_ID,
        [Query.equal("email", user.email)],
      );
      setUserDetails(data.documents[0]);
    };
    fetchUserData();
  }, []);

  return (
    <Container className="mt-16">
      <div className="flex gap-2 items-center mb-8 text-sm">
        <LucideArrowLeft />
        <Link href="/profile" className="underline">
          Back to Profile
        </Link>
      </div>
      {userData && userDetails ? (
        <div className="flex flex-col gap-8 md:w-[40rem]">
          <div className="flex flex-col border rounded p-4">
            <label className="text-sm font-bold">Name</label>
            <input
              type="text"
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
              className="border border-gray-400 outline-none py-2 px-4 my-3 rounded focus:border-blue-500 text-xs"
              value={userData.name}
            />
            <div className="flex justify-end">
              <button
                className="px-4 py-2 mt-4 rounded text-sm shadow:sm bg-gray-300 text-gray-700 hover:bg-blue-500 hover:text-white transition-all duration-150 ease-in-out shadow-sm"
                onClick={(e) => updateName(userData.name)}
              >
                Update
              </button>
            </div>
          </div>
          <div className="flex flex-col border rounded p-4">
            <label className="text-sm font-bold">Username</label>
            <input
              type="text"
              onChange={(e) =>
                setUserDetails({ ...userDetails, username: e.target.value })
              }
              className="border border-gray-400 outline-none py-2 px-4 my-3 rounded focus:border-blue-500 text-xs"
              value={userDetails.username}
            />
            <div className="flex justify-end">
              <button
                className="px-4 py-2 mt-4 rounded text-sm shadow:sm bg-gray-300 text-gray-700 hover:bg-blue-500 hover:text-white transition-all duration-150 ease-in-out shadow-sm"
                onClick={(e) =>
                  updateUsername(userDetails.$id, userDetails.username)
                }
              >
                Update
              </button>
            </div>
          </div>
          <div className="flex flex-col border rounded p-4">
            <label className="text-sm font-bold">Bio</label>
            <textarea
              type="text"
              onChange={(e) =>
                setUserDetails({ ...userDetails, bio: e.target.value })
              }
              className="border border-gray-400 outline-none py-2 px-4 my-3 rounded focus:border-blue-500 text-xs"
              value={userDetails.bio}
            />
            <div className="flex justify-end">
              <button
                className="px-4 py-2 mt-4 rounded text-sm shadow:sm bg-gray-300 text-gray-700 hover:bg-blue-500 hover:text-white transition-all duration-150 ease-in-out shadow-sm"
                onClick={(e) => updateBio(userDetails.$id, userDetails.bio)}
              >
                Update
              </button>
            </div>
          </div>
          <div className="flex flex-col border rounded p-4">
            <label className="text-sm font-bold">Email</label>
            <input
              type="email"
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
              className="border border-gray-400 outline-none py-2 px-4 my-3 rounded focus:border-blue-500 text-xs"
              value={userData.email}
            />
            <label className="text-sm font-bold">Password</label>
            <div className="flex w-full border border-gray-400 my-3 items-center rounded  bg-white focus:border-blue-500">
              <input
                type={passwordVisible ? "text" : "password"}
                onChange={(e) => setUserPassword(e.target.value)}
                className="border-none outline-none py-2 px-4 bg-transparent text-xs flex-1"
                value={password}
              />
              <LucideEye
                className="mr-2 cursor-pointer"
                onClick={() => setPasswordVisible(true)}
              />
            </div>
            <div className="flex justify-end">
              <button
                className="px-4 py-2 mt-4 rounded text-sm shadow:sm bg-gray-300 text-gray-700 hover:bg-blue-500 hover:text-white transition-all duration-150 ease-in-out shadow-sm"
                onClick={(e) => updateEmail(userData.email, password)}
                value={userData.email}
              >
                Update
              </button>
            </div>
          </div>
          <div className="flex flex-col border rounded p-4">
            <label className="text-sm font-bold">Old Password</label>
            <div className="flex w-full border border-gray-400 my-3 items-center rounded  bg-white focus:border-blue-500">
              <input
                type={passwordVisible ? "text" : "password"}
                onChange={(e) => setOldPassword(e.target.value)}
                className="border-none outline-none py-2 px-4 bg-transparent text-xs flex-1"
                value={oldPassword}
              />
              <LucideEye
                className="mr-2 cursor-pointer"
                onClick={() => setPasswordVisible(true)}
              />
            </div>
            <label className="text-sm font-bold">New Password</label>
            <div className="flex w-full border border-gray-400 my-3 items-center rounded  bg-white focus:border-blue-500">
              <input
                type={passwordVisible ? "text" : "password"}
                onChange={(e) => setNewPassword(e.target.value)}
                className="border-none outline-none py-2 px-4 bg-transparent text-xs flex-1"
                value={newPassword}
              />
              <LucideEye
                className="mr-2 cursor-pointer"
                onClick={() => setPasswordVisible(true)}
              />
            </div>
            <div className="flex justify-end">
              <button
                className="px-4 py-2 mt-4 rounded text-sm shadow:sm bg-gray-300 text-gray-700 hover:bg-blue-500 hover:text-white transition-all duration-150 ease-in-out shadow-sm"
                onClick={(e) => updatePassword(userData.email, password)}
                value={userData.email}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      ) : (
        <EditProfileLoading />
      )}
    </Container>
  );
};

export default EditProfilePage;
