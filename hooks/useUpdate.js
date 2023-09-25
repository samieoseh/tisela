import {
  updateBio,
  updateEmail,
  updateName,
  updatePassword,
  updateUsername,
} from "@/lib/update";

import { useState } from "react";

export const useUpdate = () => {
  const [errorMessageList, setErrorMessageList] = useState([]);

  return {
    errorMessageList,
    updateName: (name) => updateName(name, setErrorMessageList),
    updateEmail: (id, email, password) =>
      updateEmail(id, email, password, setErrorMessageList),
    updatePassword: (oldPassword, newPassword) =>
      updatePassword(oldPassword, newPassword, setErrorMessageList),
    updateBio: (id, bio) => updateBio(id, bio, setErrorMessageList),
    updateUsername: (id, username) =>
      updateUsername(id, username, setErrorMessageList),
  };
};
