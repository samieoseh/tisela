"use client";

import { useRouter } from "next/navigation";

const RequiredLogin = ({ children }) => {
  const router = useRouter();
  const token = localStorage.getItem("cookieFallback");
  if (token) {
    return children;
  } else {
    router.push("/login");
    return null;
  }
};

export default RequiredLogin;
