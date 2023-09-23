"use client";
import Image from "next/image";
import ProfileTab from "@/components/profile/ProfileTab.";
import { account, databases } from "@/service/appwriteConfig";
import { Query } from "appwrite";
import { LucideEdit } from "lucide-react";
import { useEffect, useState } from "react";
import { Container } from "@/components/shared/Wrapper";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
  const router = useRouter();
  const [userData, setUserData] = useState(null);
  const [userDetails, setUserDetails] = useState(null);

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

  const handleEdit = () => {
    router.push("/edit-profile");
  };

  return (
    <Container className="mt-16">
      {userData && userDetails ? (
        <div className="w-full flex flex-col justify-center items-center pb-4">
          <LucideEdit className="cursor-pointer" onClick={handleEdit} />
          <div className="w-full md:w-[70%] items-center">
            <div className="flex flex-col items-center  md:flex-row md:flex-start">
              <div>
                <div className="h-16 w-16 md:h-32 md:w-32   rounded-full relative overflow-hidden">
                  <Image
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    alt="user photo"
                    src="/mona.jpg"
                  />
                </div>
              </div>
              <div className="md:ml-8">
                <p className="text-sm text-center md:text-left text-gray-500 my-1">
                  @{userDetails.username}
                </p>
                <h1 className="text-2xl text-center md:text-left uppercase my-2 font-bold">
                  {userData.name}
                </h1>
                <p className="text-sm text-gray-500 md:text-left">
                  {userDetails.bio}
                </p>
              </div>
            </div>
            <div className="w-full flex justify-between mt-8 bg-gray-100 shadow-md">
              <div className="flex flex-col items-center px-2 py-2 border flex-1">
                <h4 className="text-2xl">{userDetails.completed}</h4>
                <p className="text-sm">Completed</p>
              </div>
              <div className="h-auto border-l border-gray-400 "></div>
              <div className="flex flex-col items-center px-2 py-2 flex-1">
                <h4 className="text-2xl">{userDetails.pending}</h4>
                <p className="text-sm">Pending</p>
              </div>
              <div className="h-auto border-l border-gray-400 "></div>
              <div className="flex flex-col items-center px-2 py-2 flex-1">
                <h4 className="text-2xl">{userDetails.score}</h4>
                <p className="text-sm">Score</p>
              </div>
            </div>{" "}
          </div>
          <ProfileTab />
        </div>
      ) : (
        <div>Loading</div>
      )}
    </Container>
  );
};

export default ProfilePage;
