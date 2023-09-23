"use client";
import { Skeleton } from "../ui/skeleton";

const EditProfileLoading = () => {
  return (
    <div className="flex flex-col gap-8 md:w-[40rem]">
      <div className="flex flex-col border rounded p-4">
        <Skeleton className="h-4 w-24 rounded" />
        <Skeleton className="h-8 py-2 px-4 my-3 rounded" />
        <div className="flex justify-end">
          <Skeleton className="h-8 w-20 px-4 py-2 mt-4 rounded" />
        </div>
      </div>
      <div className="flex flex-col border rounded p-4">
        <Skeleton className="h-4 w-24 rounded" />
        <Skeleton className="h-8 py-2 px-4 my-3 rounded" />
        <div className="flex justify-end">
          <Skeleton className="h-8 w-20 px-4 py-2 mt-4 rounded" />
        </div>
      </div>
      <div className="flex flex-col border rounded p-4">
        <Skeleton className="h-4 w-24 rounded" />
        <Skeleton className="h-8 py-2 px-4 my-3 rounded" />
        <div className="flex justify-end">
          <Skeleton className="h-8 w-20 px-4 py-2 mt-4 rounded" />
        </div>
      </div>
      <div className="flex flex-col border rounded p-4">
        <Skeleton className="h-4 w-24 rounded" />
        <Skeleton className="h-8 py-2 px-4 my-3 rounded" />
        <Skeleton className="h-4 w-24 rounded" />
        <Skeleton className="h-8 py-2 px-4 my-3 rounded" />
        <div className="flex justify-end">
          <Skeleton className="h-8 w-20 px-4 py-2 mt-4 rounded" />
        </div>
      </div>
      <div className="flex flex-col border rounded p-4">
        <Skeleton className="h-4 w-24 rounded" />
        <Skeleton className="h-8 py-2 px-4 my-3 rounded" />
        <Skeleton className="h-4 w-24 rounded" />
        <Skeleton className="h-8 py-2 px-4 my-3 rounded" />
        <div className="flex justify-end">
          <Skeleton className="h-8 w-20 px-4 py-2 mt-4 rounded" />
        </div>
      </div>
    </div>
  );
};

export default EditProfileLoading;
