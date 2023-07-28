import React from "react";
import logo from "../assets/logo-png.png";
const Home = () => {
  return (
    <div
      name="Home"
      className="w-full h-auto md:h-screen bg-sky-950 px-8 pt-24 md:py-16"
    >
      <div className=" h-full flex flex-col md:flex-row gap-12 justify-center items-center  max-w-lg-screen mx-auto">
        <div className="flex flex-col gap-8  max-w-xl   text-[#33adb3] text-justify">
          <h1 className="text-5xl xl:text-6xl max-w-lg border-b-[1px] border-[#33adb3] pb-4">
            <span className="text-sky-300">AA</span> ENGINEERING
          </h1>
          <p className="text-sky-300 text-lg max-w-md ">
            Leading yarn machine provider since 2007. Top-notch machinery for
            global textile manufacturers, led by Mr. Sohail Abbasi's expertise.
            Quality, reliability, and innovation with Warping, Sizing, Slasher
            Dyeing, and Finishing Machines. Spare Parts & specialized services
            available. Prioritizing customer satisfaction for enhanced
            productivity & profitability. Contact us now!
          </p>
        </div>
        <div className="max-w-xl text-sky-300">
          <img src={logo} alt="logo" className="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
