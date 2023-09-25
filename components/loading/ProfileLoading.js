"use client";
import { Skeleton } from "../ui/skeleton";

const ProfileLoading = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center pb-4 mt-25">
      <div className="w-full md:w-[70%] items-center">
        <div className="flex flex-col items-center  md:flex-row md:flex-start">
          <Skeleton className="h-16 w-16 md:h-32 md:w-32   rounded-full " />
          <div className="md:ml-8 flex flex-col items-center md:justify-start md:items-start">
            <Skeleton className="h-4 w-24 my-1" />
            <Skeleton className="h-8 w-24 my-1" />
            <Skeleton className="h-4 w-64 my-1" />
          </div>
        </div>
        <div className="w-full flex mt-8">
          <Skeleton className="h-16 w-full" />
        </div>
      </div>

      <Skeleton className="h-16 w-full mt-4" />
    </div>
  );
};

export default ProfileLoading;
