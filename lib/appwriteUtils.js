import { account } from "@/service/appwriteConfig";

export const getCurrentUser = async () => {
  try {
    const user = await account.get();
    return user;
  } catch (error) {
    console.log("Cannot get user, ", error);
  }
};
