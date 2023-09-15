import "../global.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Tisela",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.className} bg-[#f9f9f9] overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
