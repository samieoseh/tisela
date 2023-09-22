"use client";
import { LucideFacebook, LucideLinkedin, LucideTwitter } from "lucide-react";
import Logo from "./Logo";
import { FooterContainer } from "./Wrapper";
import Link from "next/link";
import { useState } from "react";
import { customerSupportLinks, legalAndPoliciesLink } from "@/lib/constants";

const Footer = () => {
  const [showLegalAndPolicies, setShowLegalAndPolices] = useState(false);
  const [showCustomerSupport, setShowCustomerSupport] = useState(false);
  return (
    <FooterContainer className="mt-8">
      <footer className="lg:w-[80%] xl:w-[40%]  w-[90%] md:w-[90%] mx-auto flex flex-col py-4 lg:flex-row lg:justify-between">
        <div className="flex flex-row justify-between lg:flex-col lg:justify-normal">
          <Logo />
          <div className="flex flex-row justify-between gap-x-4 lg:justify-normal lg:mt-4">
            <LucideFacebook
              width={20}
              height={20}
              color="d1d5db"
              className="fill-gray-300 hover:fill-blue-500 cursor-pointer transition-all duration-200 ease-in-out"
            />
            <LucideLinkedin
              width={20}
              height={20}
              color="d1d5db"
              className="fill-gray-300 hover:fill-blue-500 cursor-pointer transition-all duration-200 ease-in-out"
            />
            <LucideTwitter
              width={20}
              height={20}
              color="d1d5db"
              className="fill-gray-300 hover:fill-blue-500 cursor-pointer transition-all duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="mt-4 lg:flex lg:justify-between lg:gap-16">
          <div
            onClick={() => setShowLegalAndPolices(!showLegalAndPolicies)}
            className="cursor-pointer lg:cursor-default"
          >
            <h4 className="text-gray-300 border-b lg:border-none border-gray-500 pt-4">
              Legal and Polices
            </h4>

            <div
              className={` ${
                showLegalAndPolicies
                  ? "flex flex-col"
                  : "hidden  lg:flex lg:flex-col"
              }`}
            >
              {legalAndPoliciesLink.map((link, id) => (
                <Link
                  href="/"
                  key={id}
                  className="pt-4 text-gray-400 text-sm hover:text-white"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
          <div
            onClick={() => setShowCustomerSupport(!showCustomerSupport)}
            className="cursor-pointer lg:cursor-default"
          >
            <h4 className="text-gray-300 border-b lg:border-none border-gray-500 pt-4">
              Customer Support
            </h4>
            <div
              className={`flex flex-col ${
                showCustomerSupport
                  ? "flex flex-col"
                  : "hidden lg:flex lg:flex-col"
              }`}
            >
              {customerSupportLinks.map((link, id) => (
                <Link href="/" key={id} className="pt-4 text-gray-400 text-sm ">
                  {link}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col mt-4 lg:justify-between">
            <div className="flex flex-col">
              <Link href="/" className="text-gray-300 text-sm">
                Blogs
              </Link>
              <label className="pt-2 text-sm text-gray-300">
                Subscribe to our newsletter
              </label>
              <form className="mt-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="py-1 px-2 rounded text-sm outline-none text-gray-500 mr-4"
                />
                <button className="mt-2 bg-blue-500 rounded px-2 py-1 text-gray-100 text-sm">
                  Suscribe Now
                </button>
              </form>
            </div>
            <p className="text-center text-xs text-gray-400 mt-4">
              &copy; 2023
            </p>
          </div>
        </div>
      </footer>
    </FooterContainer>
  );
};

export default Footer;
