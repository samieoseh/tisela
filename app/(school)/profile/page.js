"use client";
import Image from "next/image";
import { Query } from "appwrite";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Third Party Component
import { LucideEdit } from "lucide-react";

// Custom Components
import ProfileTab from "@/components/profile/ProfileTab.";
import { Container } from "@/components/shared/Wrapper";
import ProfileLoading from "@/components/loading/ProfileLoading";

// Constants
import { getCurrentUser } from "@/lib/auth";
import { useQuery } from "@tanstack/react-query";

const ProfilePage = () => {
  const router = useRouter();

  const query = useQuery({ queryKey: ["profile"], queryFn: getCurrentUser });
  const user = query.data ? query.data[0] : [];

  const handleEdit = () => {
    router.push("/edit-profile");
  };

  return (
    <Container className="mt-20">
      {query.isFetched ? (
        <div className="w-full flex flex-col justify-center items-center pb-4">
          <div className="w-full md:w-[70%] flex justify-end">
            <LucideEdit className="cursor-pointer" onClick={handleEdit} />
          </div>
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
                  @{user.username}
                </p>
                <h1 className="text-2xl text-center md:text-left uppercase my-2 font-bold">
                  {user.name}
                </h1>
                <p className="text-sm text-gray-500 md:text-left">{user.bio}</p>
              </div>
            </div>
            <div className="w-full flex justify-between mt-8 bg-gray-100 shadow-md">
              <div className="flex flex-col items-center px-2 py-2 border flex-1">
                <h4 className="text-2xl">{user.completed}</h4>
                <p className="text-sm">Completed</p>
              </div>
              <div className="h-auto border-l border-gray-400 "></div>
              <div className="flex flex-col items-center px-2 py-2 flex-1">
                <h4 className="text-2xl">{user.pending}</h4>
                <p className="text-sm">Pending</p>
              </div>
              <div className="h-auto border-l border-gray-400 "></div>
              <div className="flex flex-col items-center px-2 py-2 flex-1">
                <h4 className="text-2xl">{user.score}</h4>
                <p className="text-sm">Score</p>
              </div>
            </div>{" "}
          </div>
          <ProfileTab />
        </div>
      ) : (
        <ProfileLoading />
      )}
    </Container>
  );
};

export default ProfilePage;
