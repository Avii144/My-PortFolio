import React from "react";
import profile from "../Assets/img.jpeg";
import { TypeAnimation } from "react-type-animation";
const Hero = () => {
  const heroBg = import.meta.env.VITE_HERO_BG;
  const fullName = import.meta.env.VITE_FULL_NAME;
  return (
    <>
      <section
        id="home"
        className=" w-full h-screen flex items-center px-16 bg-cover  bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${heroBg})`,
        }}
      >
        <div className="mt-[20%]">
          <div className="relative z-10  text-white w-full my-[10%]">
            <p className=" antialiased  text-red-800 font-cursive text-8xl ">
              {fullName}
            </p>
            <span className="text-4xl font-cursive text-black mt-2  inline-block">
              Iam "
              {
                <TypeAnimation
                  className="text-6xl  mt-2 border-b-2 border-red-400 inline-block"
                  sequence={[
                    "Developer!",
                    1000,
                    "Freelancer!",
                    1000,
                    "Photographer!",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              }
              "
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
