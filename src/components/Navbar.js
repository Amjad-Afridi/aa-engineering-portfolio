import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { Link } from "react-scroll";
import logo from "../assets/logo-png.png";
const Navbar = () => {
  const [bars, setBar] = useState(true);
  const navElements = [
    {
      id: 1,
      name: "Home",
    },
    {
      id: 2,
      name: "About Us",
    },
    {
      id: 3,
      name: "Machine Services",
    },
    {
      id: 4,
      name: "Engineering Services",
    },
    {
      id: 5,
      name: "National Clients",
    },
    {
      id: 6,
      name: "International Clients",
    },
    {
      id: 7,
      name: "Contact Us",
    },
  ];
  return (
    <>
      {/* Navbar container */}
      <div className=" bg-sky-900 text-sky-200 w-full h-24">
        <div className="flex items-center justify-between px-2 lg:px-8  h-full">
          {/* logo section  */}
          <div>
            <img src={logo} alt="" className="h-24" />
          </div>

          {/* nav links */}
          <div className="flex-1 pl-8">
            <ul className="hidden md:flex justify-end gap-2 ">
              {navElements.map(({ name, id, styles }) => (
                <Link
                  key={id}
                  to={name}
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={50}
                  duration={500}
                  delay={500}
                  isDynamic={true}
                  className="text-sm lg:text-lg hover:text-sky-900 text-center
                  hover:bg-sky-200  hover:cursor-pointer p-2  rounded-md border-sky-500 transition delay-100  duration-500 "
                >
                  {name}
                </Link>
              ))}
            </ul>
            {bars ? (
              <div
                className="flex  justify-end md:hidden"
                onClick={() => setBar(!bars)}
              >
                <FaBars size={25} />
              </div>
            ) : (
              <div
                className="flex  justify-end md:hidden"
                onClick={() => setBar(!bars)}
              >
                <ImCross size={20} />
              </div>
            )}
          </div>
        </div>
        {!bars && (
          <div className="w-full absolute z-10">
            {
              <ul className="md:hidden flex flex-col justify-start  px-8 py-8 bg-sky-900 gap-4 ">
                {navElements.map(({ name, id }) => {
                  return (
                    <>
                      <Link
                        key={id}
                        to={name}
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={50}
                        duration={500}
                        delay={500}
                        isDynamic={true}
                        className="text-lg text-sky-300 hover:text-sky-600 hover:cursor-pointer"
                      >
                        {name}
                      </Link>
                      <hr className="border-0 h-[1px] bg-sky-200" />
                    </>
                  );
                })}
              </ul>
            }
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
