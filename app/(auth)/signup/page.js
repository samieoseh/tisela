"use client";

import account from "@/service/appwriteConfig";
import { ID } from "appwrite";
import Link from "next/link";
import { useState } from "react";

const InputField = ({ label, type, value, onChange }) => (
  <div className="flex flex-col">
    <label className="py-2">{label}</label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      className="px-4 py-3 outline-none rounded border w-full border-gray-300 focus:border-blue-500 focus:shadow-sm"
    />
  </div>
);

const StepButton = ({ text, onClick }) => (
  <div className="w-full flex justify-end">
    <button
      onClick={onClick}
      className="bg-blue-500 px-4 py-2 mt-6 rounded shadow:sm text-white"
    >
      {text}
    </button>
  </div>
);

const SignUpPage = () => {
  const [sentVerificationMsg, setSentVerificationMsg] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState(1);

  const handleStep = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      handleSubmit({ name, email, password });
    }
  };

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

  return (
    <div className="w-full px-8 border">
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
        <StepButton
          text={step < 3 ? "Next" : "Done"}
          onClick={step < 3 ? () => setStep(step + 1) : () => handleStep()}
        />
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
