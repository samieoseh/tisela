import Image from "next/image";
import { Quote } from "lucide-react";
import { Slide } from "react-awesome-reveal";

const Testimonials = () => {
  return (
    <div className="mt-8">
      <Slide duration={1500} direction="right">
        <div className="t-container">
          <div className="t-text">
            <Quote
              style={{
                height: "48px",
                width: "48px",
                color: "gray",
              }}
            />
            <quote className="t-quote">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              rhoncus orci sed risus fringilla, ut rhoncus turpis tincidunt.
              Aenean lobortis pretium placerat. Ut ultricies lectus ut congue
              pretium. Donec dolor.
            </quote>
            <p className="t-name">Arthur James</p>
          </div>
          <div className="t-image-bg">
            <div className="h-48 w-full relative">
              <Image
                src="/male 1bg.png"
                layout="fill"
                objectFit="cover"
                objectPosition="top"
                alt=""
              />
            </div>
          </div>
        </div>
      </Slide>
      <Slide duration={1500} direction="left">
        <div className="t-container">
          <div className="t-image-bg">
            <div className="h-48 w-full relative">
              <Image
                src="/female 1bg.png"
                layout="fill"
                objectFit="cover"
                objectPosition="top"
                alt=""
              />
            </div>
          </div>
          <div className="t-text">
            <Quote
              style={{
                height: "48px",
                width: "48px",
                color: "gray",
              }}
            />
            <quote className="t-quote">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              rhoncus orci sed risus fringilla, ut rhoncus turpis tincidunt.
              Aenean lobortis pretium placerat. Ut ultricies lectus ut congue
              pretium. Donec dolor.
            </quote>
            <p className="t-name">Joyce Michaels</p>
          </div>
        </div>
      </Slide>
      <Slide duration={1500} direction="right">
        <div className="t-container">
          <div className="t-text">
            <Quote
              style={{
                height: "48px",
                width: "48px",
                color: "gray",
              }}
            />
            <quote className="t-quote">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              rhoncus orci sed risus fringilla, ut rhoncus turpis tincidunt.
              Aenean lobortis pretium placerat. Ut ultricies lectus ut congue
              pretium. Donec dolor.
            </quote>
            <p className="t-name">Peace Gibson</p>
          </div>
          <div className="t-image-bg">
            <div className="h-48 w-full relative">
              <Image
                src="/female 1bg.png"
                layout="fill"
                objectFit="cover"
                objectPosition="top"
                alt=""
              />
            </div>
          </div>
        </div>
      </Slide>
      <Slide duration={1500} direction="left">
        <div className="t-container">
          <div className="t-image-bg">
            <div className="h-48 w-full relative">
              <Image
                src="/male 2bg.png"
                layout="fill"
                objectFit="cover"
                objectPosition="top"
                alt=""
              />
            </div>
          </div>
          <div className="t-text">
            <Quote
              style={{
                height: "48px",
                width: "48px",
                color: "gray",
              }}
            />
            <quote className="t-quote">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              rhoncus orci sed risus fringilla, ut rhoncus turpis tincidunt.
              Aenean lobortis pretium placerat. Ut ultricies lectus ut congue
              pretium. Donec dolor.
            </quote>
            <p className="t-name">Alvin Musk</p>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Testimonials;
