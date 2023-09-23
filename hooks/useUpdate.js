import { isFormClean } from "@/lib/customUtils";
import { account, databases } from "@/service/appwriteConfig";
import { useState } from "react";

const useUpdate = () => {
  const [errorMessageList, setErrorMessageList] = useState([]);
  const [status, setStatus] = useState("idle");

  const updateName = async (name) => {
    setErrorMessageList([]);
    setStatus("loading");

    const { formClean, errors } = isFormClean(null, null, name);

    if (formClean) {
      try {
        await account.updateName(name);
        alert("'Name' successfully changed");
      } catch (error) {
        console.log(error);
      }
    } else {
      setErrorMessageList(errors);
      setStatus("failed");
    }
  };
  const updateEmail = async (email, password) => {
    setErrorMessageList([]);
    setStatus("loading");

    const { formClean, errors } = isFormClean(email, null, null);

    if (formClean) {
      try {
        await account.updateEmail(email, password);
        alert("'Email and Password' successfully changed");
      } catch (error) {
        console.log(error);
      }
    } else {
      setErrorMessageList(errors);
      setStatus("failed");
    }
  };
  const updatePhoto = async () => {};
  const updateBio = async (id, bio) => {
    setErrorMessageList([]);
    setStatus("loading");

    const { formClean, errors } = isFormClean(null, null, bio);

    if (formClean) {
      try {
        await databases.updateDocument(
          process.env.NEXT_PUBLIC_DATABASE_ID,
          process.env.NEXT_PUBLIC_COLLECTION_ID,
          id,
          {
            bio: bio,
          },
        );
        alert("'Bio' successfully changed");
      } catch (error) {
        console.log(error);
      }
    } else {
      setErrorMessageList(errors);
      setStatus("failed");
    }
  };
  const updateUsername = async (id, username) => {
    console.log(id);
    setErrorMessageList([]);
    setStatus("loading");

    const { formClean, errors } = isFormClean(null, null, username);

    if (formClean) {
      try {
        await databases.updateDocument(
          process.env.NEXT_PUBLIC_DATABASE_ID,
          process.env.NEXT_PUBLIC_COLLECTION_ID,
          id,
          {
            username: username,
          },
        );
        alert("'Username' successfully changed");
      } catch (error) {
        console.log(error);
      }
    } else {
      setErrorMessageList(errors);
      setStatus("failed");
    }
  };
  const updatePassword = async (oldPassword, newPassword) => {
    // TODO: create a hash password attribute in database
  };
  return {
    updateName,
    updateEmail,
    updatePhoto,
    updateBio,
    updateUsername,
  };
};

export default useUpdate;
