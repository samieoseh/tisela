"use client";

import { useRouter } from "next/navigation";

const RequiredLogin = (Component) => {
  return function WrappedComponent(props) {
    const router = useRouter();
    const token = localStorage.getItem("cookieFallback");
    if (token) {
      return <Component {...props} />;
    } else {
      router.push("/login");
    }
  };
};

export default RequiredLogin;
