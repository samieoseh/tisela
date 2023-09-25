import { useState } from "react";
import { useRouter } from "next/navigation";

// Custom utility functions
import { apiState } from "@/lib/constants";
import { login, logout, signup } from "@/lib/auth";

export const useAuth = () => {
  const router = useRouter();
  const [errorMessageList, setErrorMessageList] = useState([]);
  const [status, setStatus] = useState(apiState.IDLE);

  return {
    status,
    errorMessageList,
    login: (email, password) =>
      login(email, password, setStatus, setErrorMessageList, router),
    signup: (email, password, name) =>
      signup(email, password, name, setStatus, setErrorMessageList),
    logout: () => logout(router),
  };
};
