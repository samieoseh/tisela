"use client";

import account from "@/service/appwriteConfig";
import { useRouter, useSearchParams } from "next/navigation";

const ConfirmationPage = () => {
  const router = useRouter();
  const search = useSearchParams();
  const userId = search.get("userId");
  const secret = search.get("secret");

  if (userId) {
    const promise = account.updateVerification(userId, secret);
    console.log(userId, promise);
    router.push("/");
  }

  return <></>;
};

export default ConfirmationPage;
