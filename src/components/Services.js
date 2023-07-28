import React from "react";
import monfortStenter from "../assets/machine-names/monfort_Stenter.jpg";
import finishingTextile from "../assets/machine-names/finishing textile.jpg";
import prismBall from "../assets/machine-names/prism-ball-warping-machine.jpeg";
import ropeDying from "../assets/machine-names/Rope-Dying-1.jpeg";
import singeingMachine from "../assets/machine-names/Singeing-machine.jpeg";
import sizing from "../assets/machine-names/SIZING.jpeg";
import slasherDying1 from "../assets/machine-names/SLASHER-DYING-1.jpeg";
import slasherDying2 from "../assets/machine-names/SLASHER-DYING-2.jpeg";
import warping1 from "../assets/machine-names/Warping-Machine-1.jpeg";
import warping2 from "../assets/machine-names/warping-machine.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "../index.css";

import { Pagination, Navigation } from "swiper/modules";

const Services = () => {
  const machines = [
    {
      id: 1,
      name: "Finishing Textile",
      description:
        "Finishing textile machines are used to enhance the appearance, texture, and performance of fabrics. They apply treatments like dyeing, printing, coating, and mechanical processes to achieve the desired final product quality",
      imagePath: finishingTextile,
    },
    {
      id: 2,
      name: "Monfort Stenter",
      description:
        "The Monfort Stenter Machine is used in textile finishing processes to stretch, dry, and set fabrics using heat and tension, ensuring uniformity and improving the overall quality of the fabric",
      imagePath: monfortStenter,
    },
    {
      id: 3,
      name: "Prism Ball Warping Machine",
      description:
        "The Prism Ball Warping Machine is used in textile manufacturing to create unique yarn effects by warping and twisting fibers, producing vibrant and colorful fabrics",
      imagePath: prismBall,
    },
    {
      id: 4,
      name: "Rope Dyeing",
      description:
        "A Rope Dyeing Machine is used in the textile industry to apply indigo or other dyes to a continuous rope-like bundle of yarn, creating uniform and long-lasting coloration for denim fabric.",
      imagePath: ropeDying,
    },
    {
      id: 5,
      name: "Singeing Machine",
      description:
        "A Singeing Machine is used to remove protruding fibers from the surface of fabrics through controlled burning, resulting in a smooth and clean finish, enhancing the fabric's appearance and quality",
      imagePath: singeingMachine,
    },
    {
      id: 6,
      name: "Sizing",
      description:
        "Sizing machine is used in textile industry to apply a protective coating called sizing onto warp yarns, ensuring smoother weaving process and enhancing yarn strength and performance.",
      imagePath: sizing,
    },
    {
      id: 7,
      name: "Slasher Dyeing",
      description:
        "Slasher Dyeing Machine is used in the textile industry to apply dye onto fabrics or yarns, enabling efficient and uniform coloration of the materials during the dyeing process.",
      imagePath: slasherDying1,
    },
    {
      id: 8,
      name: "Slasher Dyeing",
      description:
        "Slasher Dyeing Machine is used in the textile industry to apply dye onto fabrics or yarns, enabling efficient and uniform coloration of the materials during the dyeing process.",
      imagePath: slasherDying2,
    },
    {
      id: 9,
      name: "Warping Machine",
      description:
        "A Warping Machine is used in textile manufacturing to create a warp beam by winding yarn from cones onto a beam, essential for the weaving process.",
      imagePath: warping1,
    },
    {
      id: 10,
      name: "Warping Machine",
      description:
        "A Warping Machine is used in textile manufacturing to create a warp beam by winding yarn from cones onto a beam, essential for the weaving process.",
      imagePath: warping2,
    },
  ];
  return (
    <div
      name="Machine Services"
      className="w-full px-8 h-auto bg-sky-950 py-16 "
    >
      <div className="flex mb-16">
        <h2 className=" text-[#33adb3] mx-auto text-5xl font-bold border-b-[1px] border-[#33adb3] pb-4">
          Machines Services
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
                  <div className="block rounded-lg bg-sky-900 shadow-sky-600 shadow-md mb-16 w-full h-[470px]">
                    <img
                      className="rounded-t-lg h-56 w-full object-cover"
                      src={imagePath}
                      alt="imageArea"
                    />
                    <div className="p-6">
                      <h5 className="text-[#33adb3] mb-2 text-xl  leading-tight font-bold">
                        {name}
                      </h5>
                      <p className="text-sky-300 mb-4 text-base  ">
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

export default Services;
