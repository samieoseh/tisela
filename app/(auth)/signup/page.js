"use client";

import Link from "next/link";
import { LucideArrowRight } from "lucide-react";
import { useState } from "react";

// Custom utility functions
import { useAuth } from "@/hooks/useAuth";

// Custom Components
import StepOne from "@/components/auth/steps/StepOne";
import StepTwo from "@/components/auth/steps/StepTwo";
import StepThree from "@/components/auth/steps/StepThree";
import StepIndicator from "@/components/auth/steps/StepIndicator";

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState(1);
  const { status, signup } = useAuth();

  const handleSubmit = async () => {
    try {
      await signup(email, password, name);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  if (status === "success") {
    // setName("");
    // setEmail("");
    // setPassword("");
    // setStep(1);
  }

  console.log(status);
  return (
    <div className="w-full p-8 bg-[#f9f9f9] rounded border">
      <StepIndicator step={step} setStep={setStep} />
      <div>
        {step === 1 && (
          <StepOne
            name={name}
            setName={setName}
            onNext={() => setStep(step + 1)}
          />
        )}
        {step === 2 && (
          <StepTwo
            email={email}
            setEmail={setEmail}
            onBack={() => setStep(step - 1)}
            onNext={() => setStep(step + 1)}
          />
        )}
        {step === 3 && (
          <StepThree
            password={password}
            setPassword={setPassword}
            status={status}
            onBack={() => setStep(step - 1)}
            onNext={() => handleSubmit()}
          />
        )}
      </div>
      <div className="flex mt-8 items-center justify-center gap-4">
        <p className="text-sm text-gray-500">Have an account?</p>
        <Link
          href="/login"
          className="flex items-center justify-center text-blue-500 underline"
        >
          Login
          <LucideArrowRight height={20} width={20} />
        </Link>
      </div>
    </div>
  );
};

export default SignUpPage;
