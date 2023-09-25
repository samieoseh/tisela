"use client";

import Image from "next/image";
import Link from "next/link";

// Third Party Component
import { Fade } from "react-awesome-reveal";

// Custom Components
import { Container, HeroContainer } from "@/components/shared/Wrapper";
import FeatureCard from "@/components/landing/FeatureCard";
import PopularCourseList from "@/components/landing/PopularCourseList";
import Testimonials from "@/components/landing/Testimonials";

// Constants
import { featuresList } from "@/lib/constants";

const HomePage = () => {
  return (
    <main>
      <HeroContainer>
        {/* Hero Section */}
        <section
          id="home"
          className=" lg:w-[80%] xl:w-[40%]  w-[90%] md:w-[90%] mx-auto h-auto flex flex-col flex-wrap lg:flex lg:flex-row  lg:gap-8 lg:justify-between "
        >
          <div className="mt-[25%] lg:mt-[20%] lg:w-2/4">
            <h1 className="self-center text-7xl lg:text-4xl font-bold">
              LEARNING WITHOUT LIMITS...
            </h1>
            <p className="text-[1rem] mt-4">
              Break free from traditional boundaries. <br />
              With our e-learning resources, you can learn, grow, and thrive no
              matter where you are
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
          </div>

          <div className="hidden lg:block">
            <Image
              src="/hero remove.png"
              alt="hero"
              height={333}
              width={375}
              objectFit="contain"
              className="mt-[15vh] z-40"
            />
          </div>
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
    </main>
  );
};

export default HomePage;
