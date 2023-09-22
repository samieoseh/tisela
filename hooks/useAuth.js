import { useState } from "react";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";
import { account, databases } from "@/service/appwriteConfig";
import { v4 as uuidv4 } from "uuid";
import { generateFromEmail } from "unique-username-generator";

export const useAuth = () => {
  const router = useRouter();
  const [errorMessageList, setErrorMessageList] = useState([]);
  const [status, setStatus] = useState("idle");

  const login = async (email, password) => {
    setStatus("loading");
    setErrorMessageList([]);

    if (isFormClean(email, password)) {
      try {
        await account.createEmailSession(email, password);
        setCookie("auth", true, { maxAge: 60 * 60 * 60 * 6 * 24 });
        setStatus("success");
        router.push("/profile");
      } catch (error) {
        console.log(error.type);
        if (error.type === "user_invalid_credentials") {
          setStatus("failed");
          const errors = ["Invalid email and/or password"];
          setErrorMessageList(errors);
        }
        if (error.type === "general_rate_limit_exceeded") {
          setStatus("failed");
          const errors = [
            "Exceeded Api call limit, please try again after 1 hour",
          ];
          setErrorMessageList(errors);
        }
      }
    } else {
      setStatus("failed");
    }
  };

  const signup = async (name, email, password) => {
    setErrorMessageList([]);
    if (isFormClean(name, email, password)) {
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
      } catch (error) {
        if (error.type === "user_already_exists") {
          const errors = ["User with provided email already exists"];
          setErrorMessageList(errors);
        }
      }
    }
  };

  const isFormClean = (email, password, name = null) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const errors = [];

    if (name !== null && name.length === 0) {
      errors.push("Name cannot be empty");
    }

    if (email.length === 0) {
      errors.push("Email cannot be empty");
    } else if (!emailRegex.test(email)) {
      errors.push("Email must be of this format: test@example.com");
    }

    if (password.length < 8) {
      errors.push("Password must contain at least 8 characters");
    }
    setErrorMessageList(errors);
    const formIsClean = errors.length === 0 ? true : false;
    return formIsClean;
  };

  const storeToDatabase = async (user_id, fullname, email) => {
    const username = generateFromEmail(email);
    await databases.createDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID,
      process.env.NEXT_PUBLIC_COLLECTION_ID,
      user_id,
      {
        username: username,
        email: email,
      },
    );
  };

  return {
    status,
    errorMessageList,
    login,
    signup,
  };
};
