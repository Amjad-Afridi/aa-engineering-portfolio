import React from "react";
import img1 from "../assets/gallery/img-gallery/img1.jpg";
import img2 from "../assets/gallery/img-gallery/img2.jpg";
import img3 from "../assets/gallery/img-gallery/img3.jpg";
import img4 from "../assets/gallery/img-gallery/img4.jpg";
import img5 from "../assets/gallery/img-gallery/img5.jpg";
import img6 from "../assets/gallery/img-gallery/img6.jpg";
import img7 from "../assets/gallery/img-gallery/img7.jpg";
import img8 from "../assets/gallery/img-gallery/img8.jpg";
import img9 from "../assets/gallery/img-gallery/img9.jpg";
import img10 from "../assets/gallery/img-gallery/img10.jpg";
import img11 from "../assets/gallery/img-gallery/img11.jpg";
import img12 from "../assets/gallery/img-gallery/img12.jpg";
import img13 from "../assets/gallery/img-gallery/img13.jpg";
import img14 from "../assets/gallery/img-gallery/img14.jpg";
import img15 from "../assets/gallery/img-gallery/img15.jpg";
import img16 from "../assets/gallery/img-gallery/img16.jpg";
import img17 from "../assets/gallery/img-gallery/img17.jpg";
import img18 from "../assets/gallery/img-gallery/img18.jpg";
import img19 from "../assets/gallery/img-gallery/img19.jpg";
import img20 from "../assets/gallery/img-gallery/img20.jpg";
import img21 from "../assets/gallery/img-gallery/img21.jpg";
import img22 from "../assets/gallery/img-gallery/img22.jpg";
import img23 from "../assets/gallery/img-gallery/img23.jpg";
import img24 from "../assets/gallery/img-gallery/img24.jpg";
import img25 from "../assets/gallery/img-gallery/img25.jpg";
import img26 from "../assets/gallery/img-gallery/img26.jpg";
import img27 from "../assets/gallery/img-gallery/img27.jpg";
import vid1 from "../assets/gallery/video-gallery/vid1.mp4";
import vid2 from "../assets/gallery/video-gallery/vid2.mp4";
import vid3 from "../assets/gallery/video-gallery/vid3.mp4";
import vid4 from "../assets/gallery/video-gallery/vid4.mp4";
import vid5 from "../assets/gallery/video-gallery/vid5.mp4";
import vid6 from "../assets/gallery/video-gallery/vid6.mp4";
import vid7 from "../assets/gallery/video-gallery/vid7.mp4";
import vid8 from "../assets/gallery/video-gallery/vid8.mp4";
import vid9 from "../assets/gallery/video-gallery/vid9.mp4";
import vid10 from "../assets/gallery/video-gallery/vid10.mp4";
import vid11 from "../assets/gallery/video-gallery/vid11.mp4";
import vid12 from "../assets/gallery/video-gallery/vid12.mp4";
import vid13 from "../assets/gallery/video-gallery/vid13.mp4";

import { Carousel } from "@material-tailwind/react";

const Gallery = () => {
  const imagesGallery = [
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
    {
      id: 13,
      src: img13,
    },
    {
      id: 14,
      src: img14,
    },
    {
      id: 15,
      src: img15,
    },
    {
      id: 16,
      src: img16,
    },
    {
      id: 17,
      src: img17,
    },
    {
      id: 18,
      src: img18,
    },
    {
      id: 19,
      src: img19,
    },
    {
      id: 20,
      src: img20,
    },
    {
      id: 21,
      src: img21,
    },
    {
      id: 22,
      src: img22,
    },
    {
      id: 23,
      src: img23,
    },
    {
      id: 24,
      src: img24,
    },
    {
      id: 25,
      src: img25,
    },
    {
      id: 26,
      src: img26,
    },
    {
      id: 27,
      src: img27,
    },
  ];
  const videoGallery = [
    {
      id: 1,
      src: vid1,
    },
    {
      id: 2,
      src: vid2,
    },
    {
      id: 3,
      src: vid3,
    },
    {
      id: 4,
      src: vid4,
    },
    {
      id: 5,
      src: vid5,
    },
    {
      id: 6,
      src: vid6,
    },
    {
      id: 7,
      src: vid7,
    },
    {
      id: 8,
      src: vid8,
    },
    {
      id: 9,
      src: vid9,
    },
    {
      id: 9,
      src: vid9,
    },
    {
      id: 10,
      src: vid10,
    },
    {
      id: 11,
      src: vid11,
    },
    {
      id: 12,
      src: vid12,
    },
    {
      id: 13,
      src: vid13,
    },
  ];
  return (
    <div name="Gallery" className="w-full px-8 h-auto py-24 bg-sky-950 ">
      <div className="flex mb-24">
        <h2 className=" text-cyan-600 mx-auto text-5xl font-bold border-b-[1px] border-cyan-600 pb-4">
          AA ENGINEERING GALLERY
        </h2>
      </div>
      <div className="flex md:flex-row flex-col justify-center items-center gap-16 md:gap-24 max-w-screen-lg mx-auto  ">
        <div className="max-w-sm shadow-cyan-600 shadow-md rounded-lg">
          <div className="flex w-full py-6 text-cyan-600 bg-sky-900 m-[-24px] rounded-t-lg mx-auto font-semibold justify-center shadow-cyan-600 shadow-md">
            Images Gallery
          </div>
          <Carousel
            className="rounded-xl my-auto bg-sky-900 shadow-cyan-600 "
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-5 left-2/4  z-50 flex -translate-x-2/4 gap-2 ">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                      activeIndex === i ? "w-8 bg-white" : "w-4 bg-gray-400"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
          >
            {imagesGallery.map(({ src, id }) => (
              <img
                className="flex h-[324px] w-full mb-6  pb-6 mt-4  "
                src={src}
              />
            ))}
          </Carousel>
        </div>

        <div className="max-w-sm shadow-cyan-600 shadow-md rounded-lg ">
          <div className="flex w-full py-6 text-cyan-600 bg-sky-900 m-[-24px] rounded-t-lg mx-auto font-semibold justify-center shadow-cyan-600 shadow-md">
            Video Gallery
          </div>
          <Carousel
            className="rounded-xl my-auto bg-sky-900"
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-5 left-2/4  z-50 flex -translate-x-2/4 gap-2 ">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                      activeIndex === i ? "w-8 bg-white" : "w-4 bg-gray-400"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
          >
            {videoGallery.map(({ src, id }) => (
              <video
                className="h-[384px] mt-[-40px] mb-6 rounded-lg pb-6 mx-auto"
                controls
              >
                <source src={src} type="video/mp4" />
              </video>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
