"use client";

import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import { formTemplate } from "@/lib/constants";

const LoginPage = () => {
  const { errorMessageList, status, login } = useAuth();
  const handleSubmit = async (formObj) => {
    await login(formObj.email, formObj.password);
  };
  console.log(status);
  return (
    <div className="w-full flex flex-col mx-auto mt-0 bg-[#f9f9f9] rounded border">
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
              data-testid={item.id}
            />
          </div>
        ))}

        <button
          className={`w-full py-2 bg-blue-500 text-white rounded mt-5
          ${status == "loading" ? "opacity-50" : "opacity-100"}`}
          disabled={status === "loading"}
        >
          {status === "loading" ? "Signing In..." : "Sign In"}
        </button>
      </form>
      {status === "failed" && (
        <ul className="flex flex-col items-center justify-center flex-wrap">
          {errorMessageList.map((msg, index) => (
            <li
              key={index}
              className="text-sm md:text-xs text-red-500 mt-1 list-disc"
            >
              {msg}
            </li>
          ))}
        </ul>
      )}
      <p className="mx-auto mt-2 text-sm pb-4">
        Don&quot;t have an account,{" "}
        <Link href="/signup" className="underline text-blue-500 ">
          Create one
        </Link>
      </p>
      <p className="text-xs text-center pt-2 pb-4">
        Forgot password? Click{" "}
        <Link href={"/login"} className="underline text-blue-500">
          Here
        </Link>{" "}
        to reset password
      </p>
    </div>
  );
};

export default LoginPage;
