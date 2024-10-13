"use client";

import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import ServicesNav from "./services/ServicesNav";
import ServiceTabs from "./services/ServiceTabs";

const Services = () => {
  const [activeTab, setActiveTab] = useState("haircut");

  return (
    <section className="py-16 bg-[#f7f7f7]">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h3 className="text-lg text-customGold font-bold">Our Services</h3>
          <h2 className="text-5xl font-bold text-[#0F1212] mt-2">
            Popular Hair Cutting <br /> And Salon
          </h2>
        </div>

        <ServicesNav activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="flex gap-5 mt-16 h-fit mx-auto justify-between max-lg:px-5 max-lg:flex-col items-center">
          <ServiceTabs activeTab={activeTab} setActiveTab={setActiveTab} />

          <div className="h-[391px] mt-8 max-w-[590px] flex flex-col justify-between items-start">
            <h3 className="text-3xl max-w-80 font-bold text-[#0F1212]  mb-4">
              Best Facial Hair Trim At Home Treatment
            </h3>
            <p className="text-[#333334] text-base font-normal">
              Phasellus vitae purus ac urna consequat facilisis a vel leo.
              Maecenas hendrerit lacus mollis. Fusce in leo lectus. Phasellus
              leo mi, pellentesque nec risus malesuada, volutpat porta ligula.
            </p>

            <ul className="mb-6 space-y-2">
              <li className="flex items-center">
                <span className="mr-2 text-[rgb(213,176,98)] font-bold bg-[rgb(218,199,159)] rounded-full text-base">
                  <FaCheck width={12} height={12} className="m-3" />
                </span>
                Easy to use salon special offer navigation
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-[rgb(213,176,98)] font-bold bg-[rgb(218,199,159)] rounded-full text-base">
                  <FaCheck width={12} height={12} className="m-3" />
                </span>
                We care about our customers satisfaction
              </li>
            </ul>

            <button className="w-[270px] flex items-center justify-center h-[60px] px-[41px] py-[17px] bg-customGold text-base font-black text-white mb-4 md:mb-0 whitespace-nowrap">
              BOOKING APPOINTMENT
              <span className="ml-2 inline-flex">
                <i className="fas fa-chevron-right text-white text-[12px]"></i>
                <i className="fas fa-chevron-right -ml-[2px] text-white text-[12px]"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
