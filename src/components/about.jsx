import React from "react";
import CountUp from "react-countup";
import { obj } from "../assets/assets";
function About() {
  return (
    <div className=" mt-16">
      <h1 className="flex gap-3 items-end  text-gray-600 mb-10 font-bold h-4 text-2xl  md:text-3xl">
        About
        <img className="h-8" src={obj.logo} alt="" />
      </h1>
      <div className="md:flex gap-5 overflow-hidden">
        <img className="md:w-[450px]" src={obj.avatar} alt="" />
        <div>
          <div className=" mt-10 mb-10 flex gap-6 md:gap-10 w-[415px]">
            <div>
              <div className="text-primary text-2xl md:text-3xl">
                <CountUp end={20} duration={4} />+
              </div>
              <h1 className="text-gray-600 font-bold">Projects</h1>
            </div>
            <div>
              <div className="text-primary text-2xl  md:text-3xl">
                <CountUp end={5} duration={4} />+
              </div>
              <h1 className="text-gray-600 font-bold">Awards</h1>
            </div>
            <div>
              <div className="text-primary text-2xl  md:text-3xl">
                <CountUp end={10} duration={4} />+
              </div>
              <h1 className="text-gray-600 font-bold">Pending</h1>
            </div>
            <div>
              <div className="text-primary text-2xl  md:text-3xl">
                <CountUp end={15} duration={4} />+
              </div>
              <h1 className="text-gray-600 font-bold">Refferals</h1>
            </div>
          </div>
          <p className="text-gray-600">
            At KevTech, we're driven by a passion for helping businesses grow
            through smart, scalable digital solutions. Every project we take on
            is rooted in strategy, creativity, and a clear understanding of your
            goals. Whether it's a website, a custom system, or a full digital
            transformation we bring intention, innovation, and impact to
            everything we build.
          </p>
        </div>
      </div>
      {/* more */}
      <div className="w-full mt-10 bg-primary  relative h-[550px] md:h-[420px] rounded-sm p-4">
        {/* left section */}
        <div>
          <h1 className="font-bold md:text-3xl max-w-[600px] mb-[50px] text-2xl leading-snug text-white">
            Did you know KevTech is offering free services for the first 10
            clients?
          </h1>
          <p className="text-white text-sm mb-4">
            click free trial and enjoy free service in web development{" "}
          </p>
          <div className="relative">
            <button className="p-2  bg-gray-100 text-black rounded-sm">
              free Trial
            </button>
            <img className="absolute mb-[-25px]" src={obj.whiteArrow} alt="" />
          </div>
        </div>
        <img
          className="absolute bottom-0 h-[350px] right-0"
          src={obj.about}
          alt=""
        />
      </div>
      {/* gallery */}
      <div className=" mt-16 lg:grid lg:grid-cols-2 lg:gap-5  space-y-10 md:space-y-10">
        <div className="bg-indigo-100 md:flex md:gap-5 shadow-sm rounded-sm p-4">
          <img className=" md:h-[200px]" src={obj.explore1} alt="" />
          <p className="mt-0 text-sm md:text-1xl text-gray-600">
            At KevTech, we don’t just talk about results we build them.  Our
            gallery showcases real-world projects crafted with purpose,
            creativity, and precision.  Each product reflects our commitment to
            helping businesses thrive through smart digital solutions.  Whether
            it's a sleek website or a powerful business tool, we let our work
            speak for itself.  Dive into our gallery and see how we turn ideas
            into impactful digital experiences. <br />
            <button className="mt-5 cursor-pointer p-2 rounded-sm bg-primary text-white">
              Learn more
            </button>
          </p>
        </div>
        <div className="bg-indigo-100 md:flex md:gap-5 shadow-sm rounded-sm p-4">
          <img className=" md:h-[200px]" src={obj.explore2} alt="" />
          <p className="mt-0 text-sm md:text-1xl text-gray-600">
            At KevTech, we believe that quality digital solutions shouldn’t
            break the bank. That’s why we offer affordable, flexible pricing
            tailored to fit businesses of all sizes. Whether you're a startup or
            a growing brand, our packages are designed to give you maximum value
            without compromising on quality. <br />
            <button className="mt-5 p-2 cursor-pointer rounded-sm bg-primary text-white">
              Pricing
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
