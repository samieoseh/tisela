import "../global.css";
import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: "400" });

const AuthLayout = ({ children }) => {
  return (
    <html className="h-full">
      <body
        className={`h-full flex w-4/5 mt-10 overflow-hidden md:w-2/6 items-center flex-col mx-auto ${poppins.className}`}
      >
        <h1 className="text-blue-500 text-4xl md:text-6xl font-bold  py-5">
          t<span className="text-[#40E0D0]">i</span>sela
        </h1>
        {children}
      </body>
    </html>
  );
};

export default AuthLayout;
