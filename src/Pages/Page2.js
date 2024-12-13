import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function Page2() {
  const logos = [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      alt: "Google",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      alt: "Amazon",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      alt: "Apple",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      alt: "Microsoft",
    },
  ];

  gsap.registerPlugin(ScrollTrigger);
  useGSAP(function () {
    gsap.from(".rotateText", {
      transform: "rotateX(-80deg)",
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".rotateText",
        start: "top 60%",
        end: "top -270%",
        scrub: 2,
      },
    });
  });

  return (
    <div className="text-center p-10 md:p-20 text-black" id="section1">
      {/* Intro Text */}
      <h3 className="uppercase text-gray-500 font-[anzo3] text-sm md:text-lg lg:text-xl">
        Portfolio is Good ? Interview Call : No call
      </h3>

      {/* Rotating Text Sections */}
      <div className="mt-20 md:mt-40 rotateText">
        <h1 className="uppercase text-black text-[80px] sm:text-[150px] md:text-[300px] lg:text-[450px] font-[anzo4] leading-[70px] sm:leading-[150px] md:leading-[260px] lg:leading-[360px]">
          Impactfull
        </h1>
      </div>
      <div className="rotateText">
        <h1 className="uppercase text-black text-[80px] sm:text-[150px] md:text-[300px] lg:text-[450px] font-[anzo4] leading-[70px] sm:leading-[150px] md:leading-[260px] lg:leading-[360px]">
          Development
        </h1>
      </div>
      <div className="rotateText">
        <h1 className="uppercase text-black text-[80px] sm:text-[150px] md:text-[300px] lg:text-[450px] font-[anzo4] leading-[70px] sm:leading-[150px] md:leading-[260px] lg:leading-[360px]">
          with Mern
        </h1>
      </div>
      <div className="rotateText">
        <h1 className="uppercase text-black text-[80px] sm:text-[150px] md:text-[300px] lg:text-[450px] font-[anzo4] leading-[70px] sm:leading-[150px] md:leading-[260px] lg:leading-[360px]">
          Stack
        </h1>
      </div>
      <div className="rotateText">
        <h1 className="uppercase text-black text-[80px] sm:text-[150px] md:text-[300px] lg:text-[450px] font-[anzo4] leading-[70px] sm:leading-[150px] md:leading-[260px] lg:leading-[360px]">
          that works!
        </h1>
      </div>

      {/* Logos Section */}
      <div className="flex flex-wrap justify-center items-center gap-5 sm:gap-8 p-5 md:p-10 bg-white">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain hover:scale-110 transition-transform duration-300"
          />
        ))}
      </div>
    </div>
  );
}

export default Page2;
