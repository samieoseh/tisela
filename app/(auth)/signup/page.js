"use client";
import account from "@/service/appwriteConfig";
import { ID } from "appwrite";
import { useState } from "react";

const SignUpPage = () => {
  const [sentVerificationMsg, setSentVerificationMsg] = useState(false);

  const handleSubmit = async (formObj) => {
    // TODO: perform regex to email
    // TODO: check if password is same as confirmed password
    // TODO: check if password contains at least a special character, a number and it is at least 8 characters long
    try {
      await account.create(
        ID.unique(),
        formObj.email,
        formObj.password,
        formObj.name,
      );
      await account.createEmailSession(formObj.email, formObj.password);

      const verifiedUser = await account.createVerification(
        "http://localhost:3000/signup/confirmation",
      );

      setSentVerificationMsg(true);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const formObj = {
            name: formData.get("name") ?? "",
            email: formData.get("email") ?? "",
            password: formData.get("password") ?? "",
            confirmPassword: formData.get("confirmPassword") ?? "",
          };
          handleSubmit(formObj);
        }}
      >
        <input type="text" name="name" placeholder="Full Name" />
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
        />
        <button>Submit</button>
      </form>
      <div>
        {sentVerificationMsg && (
          <p>Verification message has been sent to the provided email</p>
        )}
      </div>
    </div>
  );
};

export default SignUpPage;
