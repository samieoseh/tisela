"use client";

import Button from "@/components/shared/Button";
import InputField from "@/components/shared/InputField";
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState(1);
  const { status, signup, errorMessageList } = useAuth();

  const handleSubmit = async (formObj) => {
    await signup(formObj.email, formObj.password, formObj.name);
  };

  if (status === "success") {
    // setName("");
    // setEmail("");
    // setPassword("");
    // setStep(1);
  }

  console.log(status);
  return (
    <div className="w-full px-8">
      <div className="flex justify-between mt-4 mb-12">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className={`flex items-center justify-between ${
              index !== 2 ? "flex-1" : ""
            }`}
          >
            <div
              onClick={() => setStep(index + 1)}
              className={`h-8 w-8 rounded-full transition-all ease-in-out cursor-pointer ${
                step === index + 1
                  ? "bg-blue-400 shadow-md scale-125"
                  : "bg-gray-200"
              } flex items-center justify-center`}
            >
              <p className="text-sm text-white">{index + 1}</p>
            </div>
            {index !== 2 && (
              <div
                className={`h-[2px] flex-1 ${
                  step === index + 1 ? "bg-blue-400" : "bg-gray-200"
                }`}
              ></div>
            )}
          </div>
        ))}
      </div>
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
        {status === "failed" && (
          <ul className="ml-4">
            {errorMessageList.map((msg, index) => (
              <li key={index} className="text-sm text-red-500 mt-1 list-disc">
                {msg}
              </li>
            ))}
          </ul>
        )}
        <div
          className={`w-full flex ${
            step > 1 ? "justify-between" : "justify-end"
          }`}
        >
          {step > 1 && (
            <Button
              className="bg-white text-blue-500 border"
              onClick={step > 1 ? () => setStep(step - 1) : null}
            >
              Back
            </Button>
          )}

          <Button
            className={`bg-blue-500 text-white ${
              status === "loading" ? "opacity-50" : "opacity:0"
            }`}
            onClick={
              step < 3
                ? () => {
                    setStep(step + 1);
                  }
                : () => {
                    handleSubmit({ name, email, password });
                  }
            }
          >
            {status === "loading"
              ? "Signing Up..."
              : step < 3
              ? "Next"
              : "Sign Up"}
          </Button>
        </div>
      </div>
      <p className="text-center text-sm mt-6 text-gray-500">
        Have an account?{" "}
        <Link href="/login" className="text-black underline">
          Login
        </Link>
      </p>
    </div>
  );
};

export default SignUpPage;
