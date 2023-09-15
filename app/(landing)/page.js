"use client";
import {
  Container,
  FooterContainer,
  HeroContainer,
} from "@/components/Wrapper";

import FeatureCard from "@/components/FeatureCard";
import Logo from "@/components/Logo";
import Image from "next/image";
import Link from "next/link";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import { LucideTwitter, LucideFacebook, LucideLinkedin } from "lucide-react";
import {
  customerSupport,
  featuresList,
  legalAndPoliciesLink,
} from "@/lib/constants";
import PopularCourseList from "@/components/PopularCourseList";
import Testimonials from "@/components/Testimonials";
import { useState } from "react";

const HomePage = () => {
  const [showLegalAndPolicies, setShowLegalAndPolices] = useState(false);
  const [showCustomerSupport, setShowCustomerSupport] = useState(false);

  return (
    <main>
      <HeroContainer>
        {/* Hero Section */}
        <section
          id="home"
          className=" lg:w-[80%] xl:w-[40%]  w-[90%] md:w-[90%] mx-auto h-auto flex flex-col flex-wrap lg:flex lg:flex-row  lg:gap-8 lg:justify-between "
        >
          <div className="mt-[25%] lg:mt-[20%] lg:w-2/4">
            <Slide duration={1500}>
              <h1 className="self-center text-7xl lg:text-4xl font-bold">
                LEARNING WITHOUT LIMITS...
              </h1>
              <p className="text-[1rem] mt-4">
                Break free from traditional boundaries. <br />
                With our e-learning resources, you can learn, grow, and thrive
                no matter where you are
              </p>
              <div className="mt-12">
                <Link
                  href="/signup"
                  className="inline mr-4 py-2 px-4 bg-blue-500 rounded text-white"
                >
                  Get Started
                </Link>
                <Link
                  href="/about"
                  className="inline mr-2 py-2 px-4 border border-gray-400 rounded text-[#111]"
                >
                  Learn More
                </Link>
              </div>
            </Slide>
          </div>
          <Zoom>
            <div className="">
              <Image
                src="/hero remove.png"
                alt="hero"
                height={333}
                width={375}
                objectFit="contain"
                className="mt-[15vh] z-40"
              />
            </div>
          </Zoom>
        </section>
        {/* End of Hero Section */}
      </HeroContainer>
      <Container>
        {/* Features Section */}
        <section
          id="features"
          className="mt-8 flex flex-col items-center justify-center"
        >
          <h2 className="text-center text-xl font-bold ">
            KEY FEATURES JUST FOR YOU
          </h2>
          <div className="md:grid md:grid-cols-2">
            <Fade cascade={true} duration={500}>
              {featuresList.map((feature, id) => (
                <FeatureCard key={id} {...feature} />
              ))}
            </Fade>
          </div>
        </section>
        {/* End of Features Section */}
        {/* Popular Courses Section */}
        <section>
          <h2 className="text-center text-xl font-bold mt-8">
            POPULAR COURSES
          </h2>
          <p className="text-center text-sm mb-8">
            Browse some of our high quality and popular courses
          </p>
          <PopularCourseList />
        </section>
        {/* End of Popular Courses Section */}
        <section className="mt-8 overflow-hidden">
          <h2 className="text-center text-xl font-bold">Testimonials</h2>
          <p className="text-center text-sm mb-8">
            Some samples of what our happy customers are saying
          </p>
          <div className="lg:w-2/4 lg:mx-auto">
            <Testimonials />
          </div>
        </section>
      </Container>
      <FooterContainer>
        <footer className="lg:w-[80%] xl:w-[40%]  w-[90%] md:w-[90%] mx-auto flex flex-col py-4 md:flex-row md:justify-between">
          <div className="flex flex-row justify-between md:flex-col md:justify-normal">
            <Logo />
            <div className="flex flex-row justify-between gap-x-4 md:justify-normal md:mt-4">
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
          <div className="mt-4 md:flex md:justify-between md:gap-16">
            <div
              onClick={() => setShowLegalAndPolices(!showLegalAndPolicies)}
              className="cursor-pointer md:cursor-default"
            >
              <h4 className="text-gray-300 border-b md:border-none border-gray-500 pt-4">
                Legal and Polices
              </h4>

              <div
                className={` ${
                  showLegalAndPolicies
                    ? "flex flex-col"
                    : "hidden  md:flex md:flex-col"
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
              className="cursor-pointer md:cursor-default"
            >
              <h4 className="text-gray-300 border-b md:border-none border-gray-500 pt-4">
                Customer Support
              </h4>
              <div
                className={`flex flex-col ${
                  showCustomerSupport
                    ? "flex flex-col"
                    : "hidden md:flex md:flex-col"
                }`}
              >
                {customerSupport.map((link, id) => (
                  <Link
                    href="/"
                    key={id}
                    className="pt-4 text-gray-400 text-sm "
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col mt-4 md:justify-between">
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
                  <button className="bg-blue-500 rounded px-2 py-1 text-gray-300 text-sm">
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
    </main>
  );
};

export default HomePage;
