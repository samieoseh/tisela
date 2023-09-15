"use client";

import Button from "@/components/Button";
import InputField from "@/components/InputField";
import { account, databases } from "@/service/appwriteConfig";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
import { useState } from "react";

const storeToDatabase = async (user_id, name, email) => {
  await databases.createDocument(
    process.env.NEXT_PUBLIC_DATABASE_ID,
    process.env.NEXT_PUBLIC_COLLECTION_ID,
    user_id,
    {
      name: name,
      email: email,
      current_level: "100",
    },
  );
};

const SignUpPage = () => {
  const [sentVerificationMsg, setSentVerificationMsg] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState(1);
  const [errorMessage, setErrorMessage] = useState([]);

  const isFormClean = (formObj) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const errors = [];

    if (formObj.name.length === 0) {
      errors.push("Name cannot be empty");
    }

    if (formObj.email.length === 0) {
      errors.push("Email cannot be empty");
    } else if (!emailRegex.test(formObj.email)) {
      errors.push("Email must be of this format: test@example.com");
    }

    if (formObj.password.length < 8) {
      errors.push("Password must contain at least 8 characters");
    }
    setErrorMessage(errors);
    const formIsClean = errors.length === 0 ? true : false;
    return formIsClean;
  };

  const handleSubmit = async (formObj) => {
    if (isFormClean(formObj)) {
      try {
        console.log("Form Clean");
        const user_id = uuidv4();
        await account.create(
          user_id,
          formObj.email,
          formObj.password,
          formObj.name,
        );
        await account.createEmailSession(formObj.email, formObj.password);
        // store user data in database
        storeToDatabase(user_id, formObj.name, formObj.email);

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
      } catch (error) {
        if (error.type === "user_already_exists") {
          const errors = ["User with provided email already exists"];
          setErrorMessage(errors);
        }
      }
    }
  };

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
        <ul className="ml-4">
          {errorMessage.map((msg, index) => (
            <li key={index} className="text-sm text-red-500 mt-1 list-disc">
              {msg}
            </li>
          ))}
        </ul>

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
            text={step < 3 ? "Next" : "Sign Up"}
            className="bg-blue-500 text-white"
            onClick={
              step < 3
                ? () => {
                    setStep(step + 1);
                  }
                : () => {
                    handleSubmit({ name, email, password });
                  }
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
        {sentVerificationMsg &&
          alert("Verification message has been sent to the provided email")}
      </div>
    </div>
  );
};

export default SignUpPage;
