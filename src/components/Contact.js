import { BsWhatsapp } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { ImLocation } from "react-icons/im";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("Sent email");
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
    "p-2 text-lg w-full border-solid border-b-[1px] border-sky-300 bg-transparent text-sky-300 rounded-md outline-none";
  return (
    <div
      name="Contact Us"
      className="w-full h-auto bg-sky-950 py-16 px-8 mx-auto "
    >
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 text-sky-300 ">
        {/* location */}
        <div>
          <h2 className="text-[#33adb3] text-4xl font-bold mb-8 border-b-[1px] border-[#33adb3] pb-4">
            Contact Us For More Information
          </h2>
          <div className="flex mb-4 items-center">
            <BsWhatsapp size={17} className="mr-2 " />
            <p className=" text-lg">92313-28862283 / 92300-28862283</p>
          </div>
          <div className="flex mb-4 items-center">
            <HiOutlineMail size={20} className="mr-2 " />
            <p className="text-lg">aaengineering92gmail.com</p>
          </div>
          <div className="flex mb-8 items-center">
            <ImLocation size={20} className="mr-2 text-lg" />
            <p className="text-lg">
              F 278 A Near Sami Pharma, Rashidabad, SITE Karachi
            </p>
          </div>
          <div>
            <iframe
              title="AA Engineering Location"
              src="https://www.google.com/maps/d/embed?mid=1AbUPT1O-M8vtwaKOy7lhAwKEkjiPp24&ehbc=2E312F"
              className="w-full rounded-md max-w-screen-sm h-[400px] mx-auto"
            ></iframe>
          </div>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col p-8 gap-8 w-full md:w-1/3 bg-sky-900 shadow-sky-600 shadow-md rounded-md h-full"
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
              className="p-2 text-lg w-full border-solid border-[1px] border-sky-300 bg-transparent text-sky-300 rounded-md outline-none"
              rows="8"
              placeholder="Your message"
            ></textarea>
          </div>
          <div>
            {" "}
            <input
              type="submit"
              value="Submit"
              className="px-6 py-2 w-full text-sky-300 hover:bg-sky-300 font-bold bg-transparent hover:text-sky-900 delay-150 animation border-[1px] border-sky-300 rounded-md duration-500 hover:cursor-pointer "
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
