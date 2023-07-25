import React from "react";
import abb from "../assets/ee-machines-logos/ABB.png";
import bradley from "../assets/ee-machines-logos/Allen Bradley.png";
import BR from "../assets/ee-machines-logos/B & R.png";
import beckoff from "../assets/ee-machines-logos/Beckoff.png";
import deltaAutomation from "../assets/ee-machines-logos/Delta Automation.png";
import siemons from "../assets/ee-machines-logos/download.png";
import invt from "../assets/ee-machines-logos/INVT.png";
import lenze from "../assets/ee-machines-logos/Lenze.png";
import mitsubishi from "../assets/ee-machines-logos/mitsubishi.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../index.css";

import { Pagination, Navigation } from "swiper/modules";

const EngineeringServices = () => {
  const machines = [
    {
      id: 1,
      name: "Siemons",
      description: "We deal in PLC, HMI and Drives of Siemons",
      imagePath: siemons,
    },
    {
      id: 2,
      name: "ABB",
      description: "We deal in Drives of ABB",
      imagePath: abb,
    },
    {
      id: 3,
      name: "Delta Automation",
      description: "We deal in PLC, HMI and Drives of Delta Automation",
      imagePath: deltaAutomation,
    },
    {
      id: 4,
      name: "Mitsubishi",
      description: "We deal in PLC and Drives of Mitsubishi",
      imagePath: mitsubishi,
    },
    {
      id: 5,
      name: "INVT",
      description: "We deal in Drives of INVT",
      imagePath: invt,
    },
    {
      id: 6,
      name: "Allen Bradley",
      description: "We deal in PLC, HMI and Drives of Allen Bradley",
      imagePath: bradley,
    },
    {
      id: 7,
      name: "Beckoff",
      description: "We deal in PLC of Beckoff",
      imagePath: beckoff,
    },
    {
      id: 8,
      name: "B & R",
      description: "We deal in PLC of B & R",
      imagePath: BR,
    },
    {
      id: 9,
      name: "Lenze",
      description: "We deal in PLC and Drives of Lenze",
      imagePath: lenze,
    },
  ];
  return (
    <div
      name="Engineering Services"
      className="w-full px-8 h-auto bg-sky-700 py-16 "
    >
      <div className="flex mb-16">
        <h2 className=" text-sky-500 mx-auto text-5xl font-bold border-b-[1px] border-sky-500 pb-4">
          Our Engineering Services
        </h2>
      </div>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={60}
          breakpoints={{
            668: {
              width: 668,
              slidesPerView: 2,
            },
            1068: {
              width: 1068,
              slidesPerView: 3,
            },
            1468: {
              width: 1468,
              slidesPerView: 4,
            },
          }}
          pagination={{
            clickable: true,
          }}
          loop={true}
          modules={[Pagination, Navigation]}
          className="Swiper cursor-pointer"
        >
          {machines.map(({ imagePath, id, name, description }) => {
            return (
              <SwiperSlide key={id}>
                <div>
                  {" "}
                  <div className="block rounded-lg bg-sky-900 shadow-sky-500 shadow-lg mb-16 w-full h-[270px]">
                    <div className="pt-6">
                      <img
                        src={imagePath}
                        alt="imageArea"
                        className="h-32 w-40 border-[1px] border-sky-500 rounded-xl shadow-sky-500 shadow-md p-4 mx-auto "
                      />
                    </div>
                    <div className="p-6 text-center">
                      <h5 className="text-sky-500  mb-2 text-xl font-medium leading-tight dark:text-neutral-50">
                        {name}
                      </h5>
                      <p className="text-sky-200 mb-4  dark:text-neutral-200">
                        {description}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default EngineeringServices;
