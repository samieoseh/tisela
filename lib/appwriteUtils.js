import { account } from "@/service/appwriteConfig";
import { hasCookie } from "cookies-next";
export const getCurrentUser = () => {
  try {
    const cookie = hasCookie("auth");
    return cookie;
  } catch (error) {
    console.log("Cannot get user, ", error);
  }
};
