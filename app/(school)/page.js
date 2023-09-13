"use client";
import { Container, HeroContainer } from "@/components/Wrapper";
import CourseCard from "@/components/CourseCard";
import FeatureCard from "@/components/FeatureCard";
import Logo from "@/components/Logo";
import Image from "next/image";
import Link from "next/link";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import { featuresList } from "@/lib/constants";
import PopularCourseList from "@/components/PopularCourseList";
import Testimonials from "@/components/Testimonials";

const HomePage = () => {
  // const [userCookie, setCookie] = useState(null);

  // useEffect(() => {
  //   const user = getCurrentUser();
  //   setCookie(user);
  // }, []);

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
            <div className="hidden lg:block w-[30rem] h-[30rem] mt-[15vh] relative flex-1">
              <Image
                src="/hero remove.png"
                alt="hero"
                layout="fill"
                objectFit="cover"
                className=""
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
          <h2 className="text-center text-2xl font-bold ">
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
          <h2 className="text-center text-2xl font-bold mt-8">
            POPULAR COURSES
          </h2>
          <p className="text-center text-sm mb-8">
            Browse some of our high quality and popular courses
          </p>
          <PopularCourseList />
        </section>
        {/* End of Popular Courses Section */}
        <section className="mt-8">
          <h2 className="text-center text-xl font-bold">Testimonials</h2>
          <p className="text-center text-sm mb-8">
            Some samples of what our happy customers are saying
          </p>
          <div className="lg:w-2/4 lg:mx-auto">
            <Testimonials />
          </div>
        </section>
        <section>
          <h2>MEET THE INSTRUCTORS</h2>
        </section>
        <footer>
          <div>
            <Logo />
            {/* Some quotes that automatically changes */}
            <div>{/* External social media links */}</div>
          </div>
          <div>
            <div>
              <h4>Legal and Polices</h4>
              <Link href="/">Privacy Policy</Link>
              <Link href="/">Terms of Service</Link>
              <Link href="/">Refund Policy</Link>
              <Link href="/">Accessibility Statement</Link>
              <Link href="/">Cookie policy</Link>
              <Link href="/">Terms and Condition</Link>
              <Link href="/">Copyright Information</Link>
            </div>
            <div>
              <h4>Customer Support</h4>
              <Link href="/">FAQs</Link>
              <Link href="/">Contact Us</Link>
              <Link href="/">Support</Link>
              <Link href="/">Feedback and Suggestion</Link>
            </div>
            <div>
              <h4>Content and Information</h4>
              <Link href="/">Blogs</Link>
              <label>Subscribe to our newsletter</label>
              <form>
                <input type="email" />
                <button>Suscribe Now</button>
              </form>
              <Link href="/">Careers</Link>
            </div>
          </div>
        </footer>
      </Container>
    </main>
  );
};

export default HomePage;
