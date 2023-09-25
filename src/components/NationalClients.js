import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "../index.css";

import { Pagination, Navigation } from "swiper/modules";

const NationalClients = () => {
  const clientsData = [
    {
      id: 1,
      name: "Artistics Fabric Mills",
      serviceOffered:
        "We have provided services such as Warping (Karl-Mayer), Ball Warping (Karl-Mayer), Sizing( Hakooba Karl-Mayers), Slasher Dyeing Seinging, Finishing and Sanforizing",
      location: "Karachi, Sindh",
    },
    {
      id: 2,
      name: "Artistics Garment Industries",
      serviceOffered:
        "We have provided services such as Warping (Beninger) and Slasher Dyeing",
      location: "Karachi, Sindh",
    },
    {
      id: 3,
      name: "Classic Denim",
      serviceOffered:
        "We have provided services such as Warping, Slasher Dyeing",
      location: "Karachi, Sindh",
    },
    {
      id: 4,
      name: "Union Denim",
      serviceOffered: "We have provided services such as  Sizing, Warping",
      location: "Karachi, Sindh",
    },
    {
      id: 5,
      name: "ZK Denim",
      serviceOffered:
        "We have provided services such as Warping, Sizing, Slasher Dyeing, Finishing",
      location: "Karachi, Sindh",
    },
    {
      id: 6,
      name: "National Textile",
      serviceOffered:
        "We have provided services such as Warping, Sizing ( Sucker Muller Hakooba )",
      location: "Karachi, Sindh",
    },
    {
      id: 7,
      name: "Raniyaal Textiles",
      serviceOffered:
        "We have provided services such as Warping ( Beninger ), Section Warping, Sizing ( Hakooba )",
      location: "Karachi, Sindh",
    },
    {
      id: 8,
      name: "ESSAK & SONS Textiles",
      serviceOffered:
        "We have provided services such as Warping, Sizing ( Tsudakoma )",
      location: "Karachi, Sindh",
    },
    {
      id: 9,
      name: "Olympia Textiles ",
      serviceOffered:
        "We have provided services such as Warping, Sizing ( Sucker Muller )",
      location: "Karachi, Sindh",
    },
    {
      id: 10,
      name: "FBI Textiles",
      serviceOffered: "We have provided service of Sizing ( Kuchuker )",
      location: "Karachi, Sindh",
    },
    {
      id: 11,
      name: "Ellite Denim",
      serviceOffered:
        "We have provided services such as Warping, Slasher Dyeing, Seinging, Finishing, Sanforizing",
      location: "Karachi, Sindh",
    },
    {
      id: 12,
      name: "Hajra Textiles",
      serviceOffered: "We have provided various Machines Services",
      location: "Karachi, Sindh",
    },
    {
      id: 13,
      name: "Rauf Textiles",
      serviceOffered: "We have provided service of All Over Unit",
      location: "Karachi, Sindh",
    },
    {
      id: 14,
      name: "STS Textiles ",
      serviceOffered: "We have provided service of Sizing ( Beninger )",
      location: "Faisalabad, Punjab",
    },
    {
      id: 15,
      name: "Raj Textiles",
      serviceOffered:
        "We have provided services such as Warping, Sizing ( Beninger & Sucker Muller )",
      location: "Lahore, Punjab",
    },
  ];
  return (
    <div
      name="National Clients"
      className=" w-full px-8 h-auto bg-sky-950 py-16 "
    >
      <div className="flex">
        <h2 className=" text-cyan-600 mx-auto text-5xl font-bold border-b-[1px] border-cyan-600 pb-4">
          National Clients
        </h2>
      </div>{" "}
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
        {clientsData.map(({ id, name, serviceOffered, location }) => (
          <SwiperSlide key={id}>
            <div className="relative block rounded-lg bg-sky-900 shadow-cyan-600 shadow-md my-16 h-60 text-cyan-600">
              <div className="p-6 ">
                <h5 className=" mb-3 text-xl font-medium leading-tight ">
                  {name}
                </h5>
                <p className="mb-4 text-cyan-600 text-justify">
                  {serviceOffered}
                </p>
                <hr className="bg-cyan-600 w-[85%] h-[1px] border-0 absolute bottom-12 " />
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

export default NationalClients;
