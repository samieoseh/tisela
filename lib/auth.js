import { setCookie, deleteCookie } from "cookies-next";
import { v4 as uuidv4 } from "uuid";
import { Query } from "appwrite";

// Custom utility functions
import { apiState } from "./constants";
import { account, databases } from "@/service/appwriteConfig";
import { storeToDatabase, validateForm } from "./customUtils";

export const signup = async (
  email,
  password,
  name,
  setStatus,
  setErrorMessageList,
) => {
  setStatus(apiState.LOADING);
  setErrorMessageList([]);

  try {
    const userId = uuidv4();
    await account.create(userId, email, password, name);
    await account.createEmailSession(email, password);

    storeToDatabase(userId, email);

    const verificationUrl =
      process.env.NEXT_PUBLIC_ENVIRONMENT === "development"
        ? "http://localhost:3000/signup/confirmation"
        : "https://tisela.vercel.app/signup/confirmation";

    await account.createVerification(verificationUrl);

    setStatus(apiState.SUCCESS);
  } catch (error) {
    setStatus(apiState.FAILED);
    if (error.type === "user_already_exists") {
      setErrorMessageList(["User with provided email already exists"]);
    } else if (error.type === "general_rate_limit_exceeded") {
      throw new Error("Api Limit Exceeded, try again in one hour");
    } else {
      console.log(error);
      throw new Error("An error occured, please contact tech support");
    }
  }
};
export const login = async (
  email,
  password,
  setStatus,
  setErrorMessageList,
  router,
) => {
  setStatus(apiState.LOADING);
  setErrorMessageList([]);

  const { errors } = validateForm(email, password, null);

  if (errors.length === 0) {
    try {
      await account.createEmailSession(email, password);
      setCookie("auth", true, { maxAge: 60 * 60 * 60 * 6 * 24 });
      setStatus(apiState.SUCCESS);
      router.push("/profile");
    } catch (error) {
      setStatus(apiState.FAILED);
      if (error.type === "user_invalid_credentials") {
        setErrorMessageList(["Invalid username and/or password"]);
      } else if (error.type === "general_rate_limit_exceeded") {
        throw new Error("Api Limit Exceeded, try again in one hour");
      } else {
        throw new Error("An error occured, please contact tech support");
      }
    }
  } else {
    setStatus(apiState.FAILED);
    setErrorMessageList(errors);
  }
};
export const logout = async (router) => {
  await account.deleteSession("current");
  deleteCookie("auth");
  router.push("/login");
};

export const getCurrentUser = async () => {
  console.log("Fetching user");
  const user = await account.get();
  const data = await databases.listDocuments(
    process.env.NEXT_PUBLIC_DATABASE_ID,
    process.env.NEXT_PUBLIC_COLLECTION_ID,
    [Query.equal("email", user.email)],
  );
  console.log(user, data);
  if (user && data) {
    const userData = [
      {
        $id: data.documents[0].$id,
        name: user.name,
        email: data.documents[0].email,
        bio: data.documents[0].bio,
        completed: data.documents[0].completed,
        pending: data.documents[0].pending,
        score: data.documents[0].score,
        username: data.documents[0].username,
      },
    ];
    return userData;
  } else {
    throw new Error(`An error occured: ${error.message}`);
  }
};
