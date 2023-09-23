import { useState } from "react";
import { useRouter } from "next/navigation";
import { setCookie, deleteCookie } from "cookies-next";
import { account } from "@/service/appwriteConfig";
import { v4 as uuidv4 } from "uuid";
import { isFormClean, storeToDatabase } from "@/lib/customUtils";

export const useAuth = () => {
  const router = useRouter();
  const [errorMessageList, setErrorMessageList] = useState([]);
  const [status, setStatus] = useState("idle");

  const login = async (email, password) => {
    setStatus("loading");
    setErrorMessageList([]);
    const { formClean, errors } = isFormClean(email, password, null);

    if (formClean) {
      try {
        await account.createEmailSession(email, password);
        setCookie("auth", true, { maxAge: 60 * 60 * 60 * 6 * 24 });
        setStatus("success");
        router.push("/profile");
      } catch (error) {
        const errors = [];
        if (error.type === "user_invalid_credentials") {
          setStatus("failed");
          errors.push("Invalid email and/or password");
          setErrorMessageList(errors);
        }
        if (error.type === "general_rate_limit_exceeded") {
          setStatus("failed");
          errors.push("Exceeded Api call limit, try again after 1 hour");
        }
        setErrorMessageList(errors);
      }
    } else {
      setStatus("failed");
      setErrorMessageList(errors);
    }
  };

  const logout = async () => {
    await account.deleteSession("current");
    deleteCookie("auth");
    router.push("/login");
  };

  const signup = async (email, password, name) => {
    setStatus("loading");
    setErrorMessageList([]);
    const { formClean, errors } = isFormClean(email, password, name);
    console.log(email);

    if (formClean) {
      try {
        const userId = uuidv4();
        await account.create(userId, email, password, name);
        await account.createEmailSession(email, password);

        // store user data in database
        storeToDatabase(userId, name, email);

        if (process.env.NEXT_PUBLIC_ENVIRONMENT === "development") {
          await account.createVerification(
            "http://localhost:3000/signup/confirmation",
          );
        } else {
          await account.createVerification(
            "https://tisela.vercel.app/signup/confirmation",
          );
        }
        setStatus("success");
      } catch (error) {
        if (error.type === "user_already_exists") {
          const errors = ["User with provided email already exists"];
          setErrorMessageList(errors);
        }
      }
    } else {
      setErrorMessageList(errors);
      setStatus("failed");
    }
  };

  return {
    status,
    errorMessageList,
    login,
    signup,
    logout,
  };
};
