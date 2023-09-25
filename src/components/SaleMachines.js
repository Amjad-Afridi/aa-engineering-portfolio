import React from "react";
import img1 from "../assets/machines-for-sale/m1/img1.jpeg";
import img2 from "../assets/machines-for-sale/m1/img2.jpeg";
import img3 from "../assets/machines-for-sale/m1/img3.jpeg";
import img4 from "../assets/machines-for-sale/m1/img4.jpeg";
import img5 from "../assets/machines-for-sale/m1/img5.jpeg";
import img6 from "../assets/machines-for-sale/m1/img6.jpeg";
import img7 from "../assets/machines-for-sale/m1/img7.jpeg";
import img8 from "../assets/machines-for-sale/m1/img8.jpeg";
import img9 from "../assets/machines-for-sale/m1/img9.jpeg";
import img10 from "../assets/machines-for-sale/m1/img10.jpeg";
import img11 from "../assets/machines-for-sale/m1/img11.jpeg";
import img12 from "../assets/machines-for-sale/m1/img12.jpeg";
import image1 from "../assets/machines-for-sale/m2/img1.jpeg";
import image2 from "../assets/machines-for-sale/m2/img2.jpeg";
import image3 from "../assets/machines-for-sale/m2/img3.jpeg";
import image4 from "../assets/machines-for-sale/m2/img4.jpeg";
import image5 from "../assets/machines-for-sale/m2/img5.jpeg";
import image6 from "../assets/machines-for-sale/m2/img6.jpeg";
import image7 from "../assets/machines-for-sale/m2/img7.jpeg";
import image8 from "../assets/machines-for-sale/m2/img8.jpeg";
import { Carousel } from "@material-tailwind/react";

const SalesMachines = () => {
  const machine1 = [
    {
      id: 1,
      src: img1,
    },
    {
      id: 2,
      src: img2,
    },
    {
      id: 3,
      src: img3,
    },
    {
      id: 4,
      src: img4,
    },
    {
      id: 5,
      src: img5,
    },
    {
      id: 6,
      src: img6,
    },
    {
      id: 7,
      src: img7,
    },
    {
      id: 8,
      src: img8,
    },
    {
      id: 9,
      src: img9,
    },
    {
      id: 10,
      src: img10,
    },
    {
      id: 11,
      src: img11,
    },
    {
      id: 12,
      src: img12,
    },
  ];
  const machine2 = [
    {
      id: 1,
      src: image1,
    },
    {
      id: 2,
      src: image2,
    },
    {
      id: 3,
      src: image3,
    },
    {
      id: 4,
      src: image4,
    },
    {
      id: 5,
      src: image5,
    },
    {
      id: 6,
      src: image6,
    },
    {
      id: 7,
      src: image7,
    },
    {
      id: 8,
      src: image8,
    },
  ];
  return (
    <div
      name="Machines For Sale"
      className="w-full px-8 h-auto bg-sky-950 py-16 "
    >
      <div className="flex mb-16 mx-auto">
        <div className="text-cyan-600 mx-auto text-5xl font-bold border-b-[1px] border-cyan-600 pb-8">
          Machines For Sales
        </div>
      </div>
      <div className="flex md:flex-row flex-col mx-auto  max-w-screen-lg gap-16">
        <div
          className="flex flex-col rounded-lg bg-sky-900 max-w-sm mx-auto
         shadow-cyan-600 shadow-md"
        >
          <Carousel
            className="rounded-xl  m-auto h-56"
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                      activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
          >
            {machine2.map(({ src, id }) => (
              <img
                src={src}
                alt="m1-images"
                className="h-56 w-full object-cover mx-auto"
              />
            ))}
          </Carousel>
          <div className="pt-4 px-6 ">
            <h5 className="text-cyan-600 mb-2 text-xl  leading-tight font-bold">
              Used Karl Mayer Machine
            </h5>
            <p className="text-cyan-600 mb-4 text-base text-justify">
              Used Karl mayer cotton sizing machine for sale. year 2017 - like
              new machine working width: 3800 mm beam winder diameter: 1250 mm 2
              size boxes, width: 2000 mm 12 dryer cylinder, width: 2000 mm, dia
              800 mm beam stand: 16 pcs cooking tank: 2 pcs condition running
              delivery immediately
            </p>
          </div>
        </div>
        <div className="flex flex-col rounded-lg bg-sky-900 max-w-sm mx-auto shadow-cyan-600 shadow-md">
          <Carousel
            className="rounded-xl h-56"
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                      activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
          >
            {machine1.map(({ src, id }) => (
              <img
                src={src}
                alt="m1-images"
                className="h-56 w-full object-cover mx-auto"
              />
            ))}
          </Carousel>
          <div className="py-4 px-6">
            <h5 className="text-cyan-600 mb-2 text-xl  leading-tight font-bold">
              Suckur Muller
            </h5>
            <p className="text-cyan-600 mb-4 text-base  text-justify">
              320 cm Sucker Muller sizing machine 2005 model with 1000 mm beam
              flynchas capacity. size box double DIP double NIP 12 cylinder 24
              beam creel running condition
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesMachines;
