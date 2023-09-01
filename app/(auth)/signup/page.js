"use client";

import Button from "@/components/Button";
import InputField from "@/components/InputField";
import account from "@/service/appwriteConfig";
import { ID } from "appwrite";
import Link from "next/link";
import { useState } from "react";

const SignUpPage = () => {
  const [sentVerificationMsg, setSentVerificationMsg] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState(1);

  const handleSubmit = async (formObj) => {
    // TODO: perform regex to email

    try {
      await account.create(
        ID.unique(),
        formObj.email,
        formObj.password,
        formObj.name,
      );
      await account.createEmailSession(formObj.email, formObj.password);

      if (process.env.NEXT_PUBLIC_ENVIRONMENT === "development") {
        const verifiedUser = await account.createVerification(
          "http://localhost:3000/signup/confirmation",
        );
      } else {
        const verifiedUser = await account.createVerification(
          "https://tisela.vercel.app/signup/confirmation",
        );
      }

      setSentVerificationMsg(true);
    } catch (e) {
      console.log(e);
    }
  };
  console.log(step);
  return (
    <div className="w-full px-8">
      <div className="">
        {step === 1 && (
          <InputField
            label="Full Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )}
        {step === 2 && (
          <InputField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        )}
        {step === 3 && (
          <InputField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        )}
        <div
          className={`w-full flex ${
            step > 1 ? "justify-between" : "justify-end"
          }`}
        >
          {step > 1 && (
            <Button
              text={"Back"}
              className="bg-white text-blue-500 border"
              onClick={step > 1 ? () => setStep(step - 1) : null}
            />
          )}

          <Button
            text={step < 3 ? "Next" : "Done"}
            className="bg-blue-500 text-white"
            onClick={
              step < 3
                ? () => setStep(step + 1)
                : () => handleSubmit({ name, email, password })
            }
          />
        </div>
      </div>
      <p className="text-center text-sm mt-6 text-gray-500">
        Have an account?{" "}
        <Link href="/login" className="text-black underline">
          Login
        </Link>
      </p>
      <div className="flex justify-center">
        {sentVerificationMsg && (
          <p className="text-xs mt-4">
            Verification message has been sent to the provided email
          </p>
        )}
      </div>
    </div>
  );
};

export default SignUpPage;
