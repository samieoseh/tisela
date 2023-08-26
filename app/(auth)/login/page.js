"use client";
import account from "@/service/appwriteConfig";
import { useRouter } from "next/navigation";
import { useState } from "react";
import "../../global.css";
import Link from "next/link";

const formTemplate = [
  { type: "email", name: "email", label: "Email address" },
  { type: "password", name: "password", label: "Password" },
];

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
    <div className="w-full flex flex-col mx-auto mt-0 bg-gray-100 rounded border">
      <form
        className="flex flex-col pt-8 w-4/5 mx-auto mt-0"
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
        {formTemplate.map((item) => (
          <div key={item.name} className="flex flex-col">
            <label>{item.label}</label>
            <input
              type={item.type}
              name={item.name}
              className="border border-gray-400 outline-none py-2 px-4 my-3 rounded focus:border-blue-500 text-sm"
            />
          </div>
        ))}

        <button className="w-full py-2 bg-blue-500 text-white rounded mt-5">
          Sign In
        </button>
      </form>
      <div className="mx-auto mt-2 text-sm">
        {errorState === true && (
          <p className="text-[red]">Invalid credentials</p>
        )}
      </div>
      <p className="mx-auto mt-2 text-sm pb-4">
        Don&quot;t have an account,{" "}
        <Link href="/signup" className="underline text-blue-500 ">
          Create one
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
