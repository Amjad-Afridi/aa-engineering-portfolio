import { BsWhatsapp } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { ImLocation } from "react-icons/im";
import { TbDeviceLandlinePhone } from "react-icons/tb";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_0mt9zfp",
        "template_zswr7bd",
        form.current,
        "gsCm7Sej2f-4mz13n"
      )
      .then(
        (result) => {
          alert(" form submitted successfully " + result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const commonStyles =
    "p-2 text-lg w-full border-solid border-b-[1px] border-cyan-600 bg-transparent text-cyan-600 rounded-md outline-none placeholder-cyan-600";
  return (
    <div
      name="Contact Us"
      className="w-full h-auto bg-sky-950 py-24 px-8 mx-auto "
    >
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 text-cyan-600 ">
        {/* location */}
        <div className="max-w-xl">
          <h2 className="text-cyan-600 text-4xl font-bold mb-8 border-b-[1px] border-cyan-600 pb-4">
            Contact Us For More Information
          </h2>
          <div className="flex mb-4 items-center">
            <BsWhatsapp size={19} className="mr-2 " />
            <p className=" text-lg">+92-313-2886283 / +92-300-2886283</p>
          </div>
          <div className="flex mb-4 items-center">
            <TbDeviceLandlinePhone size={19} className="mr-2 " />
            <p className=" text-lg">02132576800</p>
          </div>
          <div className="flex mb-4 items-center">
            <HiOutlineMail size={25} className="mr-2 " />
            <p className="text-lg">
              sohailabbasi@aaengineerings.com / aaengineering92@gmail.com{" "}
            </p>
          </div>
          <div className="flex  mb-8 items-start">
            <ImLocation size={32} className="mr-2 text-lg" />
            <p className="text-lg">
              Plot # F445, near Sami Pharma, Sindh Industrial Trading Estate,
              Karachi, Karachi City, Sindh
            </p>
          </div>
          <div>
            <iframe
              title="AA Engineering Location"
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3618.888258373568!2d66.97568447537215!3d24.90179287790245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sPlot%20%23%20F445%2C%20near%20Sami%20Pharma%2C%20Sindh%20Industrial%20Trading%20Estate%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh!5e0!3m2!1sen!2s!4v1691361864201!5m2!1sen!2s"
              className="w-full rounded-md max-w-screen-sm h-[400px] mx-auto"
              style={{ border: 0 }}
              allowfullscreen=""
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col p-8 gap-8 w-full md:w-1/3 bg-sky-900 shadow-cyan-600 shadow-md rounded-md h-full mt-20"
        >
          <div>
            <input
              name="from_name"
              type="text"
              placeholder="Name"
              className={commonStyles}
              required
            />
          </div>
          <div>
            <input
              required
              name="mobile_num"
              type="text"
              placeholder="Contact Number"
              className={commonStyles}
            />
          </div>
          <div>
            {" "}
            <input
              required
              name="from_email"
              type="email"
              placeholder="Email Address"
              className={commonStyles}
            />
          </div>
          <div class="relative" data-te-input-wrapper-init>
            <textarea
              name="message"
              required
              className="p-2  text-lg w-full border-solid border-[1px] border-cyan-600 bg-transparent text-cyan-600 rounded-md placeholder-cyan-600 outline-none"
              rows="8"
              placeholder="Your message"
            ></textarea>
          </div>
          <div>
            {" "}
            <input
              type="submit"
              value="Submit"
              className="px-6 py-2 w-full text-cyan-600 hover:bg-cyan-600 font-bold bg-transparent hover:text-sky-900 delay-150 animation border-[1px] border-cyan-600 rounded-md duration-500 hover:cursor-pointer "
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
