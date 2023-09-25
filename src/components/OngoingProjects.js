import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "../index.css";

import { Pagination, Navigation } from "swiper/modules";

const OngoingProjects = () => {
  const projects = [
    {
      id: 1,
      name: "SLASHER DYEING",
      serviceOffered:
        "Machine Working Domain: Providing, Modifying, complete installation of Sizing and Slasher Dyeing, PLC Programming, HMI Designing",
      location: "Elite Denim, Hub Industrial State, Karachi",
    },
  ];
  return (
    <div
      name="International Clients"
      className=" w-full px-8 h-auto bg-sky-950 py-16 "
    >
      <div className="flex">
        <h2 className=" text-cyan-600 mx-auto text-5xl font-bold border-b-[1px] border-cyan-600 pb-4">
          Ongoing Projects
        </h2>
        <hr className="bg-cyan-600 h-[1px] border-0 " />{" "}
      </div>{" "}
      <Swiper
        slidesPerView={1}
        spaceBetween={60}
        // breakpoints={{
        //   668: {
        //     width: 668,
        //     slidesPerView: 2,
        //   },
        //   1068: {
        //     width: 1068,
        //     slidesPerView: 3,
        //   },
        //   1468: {
        //     width: 1468,
        //     slidesPerView: 4,
        //   },
        // }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Pagination, Navigation]}
        className="Swiper  cursor-pointer"
      >
        {projects.map(({ id, name, serviceOffered, location }) => (
          <SwiperSlide key={id}>
            <div className="rounded-lg bg-sky-900 shadow-cyan-600 shadow-md  max-w-sm mx-auto my-16 text-cyan-600 relative ">
              <div className="p-6">
                <h5 className="mb-3 text-xl font-medium leading-tight">
                  {name}
                </h5>
                <p className="mb-6 text-cyan-600 text-justify">
                  {serviceOffered}
                </p>
                <hr className="bg-cyan-600 border-0 w-full h-[1px]  " />
                <div className="flex items-center mt-4 ">
                  <CiLocationOn size={18} className="mr-2" />
                  <p>{location}</p>
                </div>{" "}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OngoingProjects;
