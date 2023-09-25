import { account, databases } from "@/service/appwriteConfig";
import { apiState } from "./constants";
import { validateForm } from "./customUtils";

export const updateName = async (name, setErrorMessageList) => {
  setErrorMessageList([]);

  const { errors } = validateForm(null, null, name);

  if (errors.length === 0) {
    try {
      await account.updateName(name);
      return apiState.SUCCESS;
    } catch (error) {
      console.log(error);
      return apiState.FAILED;
    }
  } else {
    setErrorMessageList(errors);
    return apiState.FAILED;
  }
};

export const updateEmail = async (id, email, password, setErrorMessageList) => {
  setErrorMessageList([]);

  const { errors } = validateForm(email, null, null);

  if (errors.length === 0) {
    try {
      await account.updateEmail(email, password);
      await databases.updateDocument(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_COLLECTION_ID,
        id,
        {
          email: email,
        },
      );
      return apiState.SUCCESS;
    } catch (error) {
      console.log(error);
      return apiState.FAILED;
    }
  } else {
    setErrorMessageList(errors);
    return apiState.FAILED;
  }
};

export const updatePassword = async (oldPassword, newPassword) => {};

export const updateUsername = async (id, username, setErrorMessageList) => {
  setErrorMessageList([]);

  const { errors } = validateForm(null, null, username);

  if (errors.length === 0) {
    try {
      await databases.updateDocument(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_COLLECTION_ID,
        id,
        {
          username: username,
        },
      );
      return apiState.SUCCESS;
    } catch (error) {
      console.log(error);
      return apiState.FAILED;
    }
  } else {
    setErrorMessageList(errors);
    setStatus("failed");
    return apiState.FAILED;
  }
};

export const updateBio = async (id, bio, setErrorMessageList) => {
  setErrorMessageList([]);

  const { errors } = validateForm(null, null, bio);

  if (errors.length === 0) {
    try {
      await databases.updateDocument(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_COLLECTION_ID,
        id,
        {
          bio: bio,
        },
      );
      return apiState.SUCCESS;
    } catch (error) {
      console.log(error);
      apiState.FAILED;
    }
  } else {
    setErrorMessageList(errors);
    setStatus("failed");
    apiState.FAILED;
  }
};

export const updatePhoto = async () => {};
