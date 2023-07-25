import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "../index.css";

import { Pagination, Navigation } from "swiper/modules";

const InterNationalClients = () => {
  const clientsData = [
    {
      id: 1,
      name: "NAVEYRA TEXTILES",
      serviceOffered:
        "Exported Sizing ( Hakooba ) from Pakistan and also deployed a team for contract",
      location: "Tanzania",
    },
  ];
  return (
    <div
      name="International Clients"
      className=" w-full px-8 h-auto bg-sky-700 py-16 "
    >
      <div className="flex">
        <h2 className=" text-sky-500 mx-auto text-5xl font-bold border-b-[1px] border-sky-500 pb-4">
          International Clients
        </h2>
        <hr className="bg-sky-500 h-[1px] border-0 " />{" "}
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
        className="Swiper text-white  cursor-pointer"
      >
        {clientsData.map(({ id, name, serviceOffered, location }) => (
          <SwiperSlide key={id}>
            <div className="rounded-lg bg-sky-900 shadow-sky-500 shadow-lg  max-w-sm mx-auto my-16 h-56 text-sky-500 relative ">
              <div className="p-6">
                <h5 className="mb-3 text-xl font-medium leading-tight">
                  {name}
                </h5>
                <p className="mb-4 text-sky-300 text-justify">
                  {serviceOffered}
                </p>
                <hr className="bg-sky-500 w-[88%] h-[1px] border-0 absolute bottom-12 " />
                <div className="flex items-center mt-2 absolute bottom-4  ">
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

export default InterNationalClients;
