import React from "react";
const About = () => {
  return (
    <div name="About Us" className=" w-full px-8 h-auto bg-sky-950 py-16 ">
      <div className="flex flex-col gap-16 ">
        <h2 className=" text-[#33adb3] mx-auto text-5xl font-bold border-b-[1px] border-[#33adb3] pb-4">
          About Us
        </h2>
        {/*  */}
        <ol className=" ">
          <div className="flex flex-col gap-8 text-justify text-[#33adb3] max-w-screen-lg justify-center mx-auto ">
            <div className="flex flex-col justify-center gap-2 ">
              <h4 className="font-bold text-lg pl-6">Introduction</h4>
              <p className="text-sky-300 border-l-2 pl-6 border-[#33adb3] ">
                Welcome to our company, a leading provider of yarn process
                machines in the Textile sector. With a strong presence since
                2007, we have been catering to the major players in the
                industry, offering comprehensive solutions to meet their
                manufacturing needs. Under the experienced leadership of Mr.
                Sohail Abbasi, who possesses over 30 years of invaluable
                expertise in this field, we have established ourselves as a
                trusted partner for textile manufacturers worldwide
              </p>
            </div>
            <div className="flex flex-col gap-4 ">
              <h4 className="font-bold text-lg pl-6">Our Services</h4>
              <p className="text-sky-300 border-l-2 pl-6 border-[#33adb3]">
                Our extensive range of products includes top-of-the-line
                machinery for various stages of yarn processing. From Warping
                Machines and Sizing Machines to Slasher Dyeing Machines and
                Finishing Machines, we offer a diverse selection to optimize
                your production processes. Our commitment to quality ensures
                that our machines are reliable, efficient, and built to
                withstand the demands of the textile industry. In addition to
                our wide range of machines, we also provide Machine Spare Parts,
                both mechanical and electrical, to ensure uninterrupted
                operation and minimal downtime for our customers. Our team of
                skilled technicians is well-equipped to handle Machines
                Modification, PLC Programming, HMI Designing, and other related
                services, tailoring solutions to your specific requirements
              </p>
            </div>
            <div className="flex flex-col justify-center gap-2">
              <h4 className="text-lg font-bold pl-6">Our Preferences</h4>
              <p className="text-sky-300 border-l-2 pl-6 border-[#33adb3]">
                At our company, we prioritize customer satisfaction, striving to
                deliver exceptional products and services that enhance your
                productivity and profitability. We believe in building long-term
                relationships with our clients, understanding their unique
                needs, and providing them with reliable and innovative
                solutions. Experience the difference of working with a company
                that values expertise, quality, and customer-centricity. Contact
                us today to learn more about how we can support your textile
                manufacturing operations and help you stay ahead in a dynamic
                and competitive market{" "}
              </p>
            </div>
          </div>{" "}
        </ol>
      </div>
    </div>
  );
};

export default About;
