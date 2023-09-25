"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

// Third Party Component / Functions
import { LucideArrowLeft } from "lucide-react";
import { LucideEye } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

// Custom Components
import EditProfileLoading from "@/components/loading/EditProfileLoading";
import { Container } from "@/components/shared/Wrapper";

// Custom Utility Functions
import { useUpdate } from "@/hooks/useUpdate";
import { getCurrentUser } from "@/lib/auth";
import { refetchQueries } from "@/lib/customUtils";

// Constants
import { apiState } from "@/lib/constants";

const EditProfilePage = () => {
  const [password, setUserPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [newPasswordVisible, setNewPasswordVisible] = useState(false);
  const [oldPasswordVisible, setOldPasswordVisible] = useState(false);
  const [user, setUser] = useState(null);

  const { updateName, updateEmail, updateBio, updateUsername } = useUpdate();

  const { data, isLoading } = useQuery({
    queryKey: ["edit-profile"],
    queryFn: getCurrentUser,
  });

  const queryClient = useQueryClient();

  useEffect(() => {
    console.log("calling useEffect");
    if (!isLoading) {
      setUser(data[0]);
    }
  }, [data, isLoading]);

  return (
    <Container className="mt-16">
      <Link href="/profile" className="flex gap-2 items-center mb-8 text-sm">
        <LucideArrowLeft />
        <p className="underline">Back to Profile</p>
      </Link>
      {user ? (
        <div className="flex flex-col gap-8 md:w-[40rem]">
          <div className="flex flex-col border rounded p-4">
            <label className="text-sm font-bold">Name</label>
            <input
              type="text"
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              className="border border-gray-400 outline-none py-2 px-4 my-3 rounded focus:border-blue-500 text-xs"
              value={user.name}
            />
            <div className="flex justify-end">
              <button
                className="px-4 py-2 mt-4 rounded text-sm shadow:sm bg-gray-300 text-gray-700 hover:bg-blue-500 hover:text-white transition-all duration-150 ease-in-out shadow-sm"
                onClick={async () => {
                  const status = await updateName(user.name);
                  if (status === apiState.SUCCESS) {
                    await refetchQueries(queryClient, [
                      "edit-profile",
                      "profile",
                    ]);
                    alert("'Name' successfully changed");
                  }
                }}
              >
                Update
              </button>
            </div>
          </div>
          <div className="flex flex-col border rounded p-4">
            <label className="text-sm font-bold">Username</label>
            <input
              type="text"
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              className="border border-gray-400 outline-none py-2 px-4 my-3 rounded focus:border-blue-500 text-xs"
              value={user.username}
            />
            <div className="flex justify-end">
              <button
                className="px-4 py-2 mt-4 rounded text-sm shadow:sm bg-gray-300 text-gray-700 hover:bg-blue-500 hover:text-white transition-all duration-150 ease-in-out shadow-sm"
                onClick={async () => {
                  const status = await updateUsername(user.$id, user.username);
                  if (status === apiState.SUCCESS) {
                    await refetchQueries(queryClient, [
                      "edit-profile",
                      "profile",
                    ]);
                    alert("'Username' successfully changed");
                  }
                }}
              >
                Update
              </button>
            </div>
          </div>
          <div className="flex flex-col border rounded p-4">
            <label className="text-sm font-bold">Bio</label>
            <textarea
              type="text"
              onChange={(e) => setUser({ ...user, bio: e.target.value })}
              className="border border-gray-400 outline-none py-2 px-4 my-3 rounded focus:border-blue-500 text-xs"
              value={user.bio}
            />
            <div className="flex justify-end">
              <button
                className="px-4 py-2 mt-4 rounded text-sm shadow:sm bg-gray-300 text-gray-700 hover:bg-blue-500 hover:text-white transition-all duration-150 ease-in-out shadow-sm"
                onClick={async () => {
                  const status = await updateBio(user.$id, user.bio);
                  if (status === apiState.SUCCESS) {
                    await refetchQueries(queryClient, [
                      "edit-profile",
                      "profile",
                    ]);
                    alert("'Bio' successfully changed");
                  }
                }}
              >
                Update
              </button>
            </div>
          </div>
          <div className="flex flex-col border rounded p-4">
            <label className="text-sm font-bold">Email</label>
            <input
              type="email"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="border border-gray-400 outline-none py-2 px-4 my-3 rounded focus:border-blue-500 text-xs"
              value={user.email}
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
                height={20}
                width={20}
                className="mr-2 cursor-pointer"
                onClick={() => setPasswordVisible(!passwordVisible)}
              />
            </div>
            <div className="flex justify-end">
              <button
                className="px-4 py-2 mt-4 rounded text-sm shadow:sm bg-gray-300 text-gray-700 hover:bg-blue-500 hover:text-white transition-all duration-150 ease-in-out shadow-sm"
                onClick={async () => {
                  const status = await updateEmail(
                    user.$id,
                    user.email,
                    password,
                  );
                  if (status === apiState.SUCCESS) {
                    await refetchQueries(queryClient, [
                      "edit-profile",
                      "profile",
                    ]);
                    alert("'Email' successfully changed");
                  }
                }}
                value={user.email}
              >
                Update
              </button>
            </div>
          </div>
          <div className="flex flex-col border rounded p-4">
            <label className="text-sm font-bold">Old Password</label>
            <div className="flex w-full border border-gray-400 my-3 items-center rounded  bg-white focus:border-blue-500">
              <input
                type={oldPasswordVisible ? "text" : "password"}
                onChange={(e) => setOldPassword(e.target.value)}
                className="border-none outline-none py-2 px-4 bg-transparent text-xs flex-1"
                value={oldPassword}
              />
              <LucideEye
                height={20}
                width={20}
                className="mr-2 cursor-pointer"
                onClick={() => setOldPasswordVisible(!oldPasswordVisible)}
              />
            </div>
            <label className="text-sm font-bold">New Password</label>
            <div className="flex w-full border border-gray-400 my-3 items-center rounded  bg-white focus:border-blue-500">
              <input
                type={newPasswordVisible ? "text" : "password"}
                onChange={(e) => setNewPassword(e.target.value)}
                className="border-none outline-none py-2 px-4 bg-transparent text-xs flex-1"
                value={newPassword}
              />
              <LucideEye
                height={20}
                width={20}
                className="mr-2 cursor-pointer"
                onClick={() => setNewPasswordVisible(!newPasswordVisible)}
              />
            </div>
            <div className="flex justify-end">
              <button
                className="px-4 py-2 mt-4 rounded text-sm shadow:sm bg-gray-300 text-gray-700 hover:bg-blue-500 hover:text-white transition-all duration-150 ease-in-out shadow-sm"
                value={user.email}
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
