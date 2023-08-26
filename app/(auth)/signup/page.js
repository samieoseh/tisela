"use client";
import account from "@/service/appwriteConfig";
import { ID } from "appwrite";
import Link from "next/link";
import { useState } from "react";

const formTemplate = [
  { type: "text", name: "name", placeholder: "Full Name (optional)" },
  { type: "email", name: "email", placeholder: "Enter email" },
  { type: "password", name: "name", placeholder: "Enter Password" },
  { type: "password", name: "name", placeholder: "Confirm Password" },
];
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
    <div className="w-full bg-gray-100 rounded">
      <form
        className="flex flex-col pt-8 w-4/5 mx-auto mt-0"
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
        {formTemplate.map((item) => (
          <input
            key={item.name}
            type={item.type}
            name={item.name}
            placeholder={item.placeholder}
            className="border border-gray-400 outline-none py-2 px-4 mb-4 rounded focus:border-blue-500"
          />
        ))}

        <button>Submit</button>
      </form>
      <p>
        Have an account? <Link href="/login">Login</Link>
      </p>
      <div>
        {sentVerificationMsg && (
          <p>Verification message has been sent to the provided email</p>
        )}
      </div>
    </div>
  );
};

export default SignUpPage;
