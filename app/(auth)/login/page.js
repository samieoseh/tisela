"use client";
import account from "@/service/appwriteConfig";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginPage = () => {
  const router = useRouter();
  const [errorState, setErrorState] = useState(false);
  const handleSubmit = async (formObj) => {
    console.log("Login", formObj.email, formObj.password);
    try {
      await account.createEmailSession(formObj.email, formObj.password);
      router.push("/");
    } catch (error) {
      setErrorState(true);
    }
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const formObj = {
            email: formData.get("email") ?? "",
            password: formData.get("password") ?? "",
          };

          handleSubmit(formObj);
        }}
      >
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />

        <button>Submit</button>
      </form>
      <div>
        {errorState === true && (
          <p className="text-[red]">Invalid credentials</p>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
