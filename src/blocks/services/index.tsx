"use client";
import { Card } from "@/components/card";
import { servicesArray } from "@/constants";
import Link from "next/link";
import React from "react";
import { FormattedMessage } from "react-intl";
import { CarWash } from "../carWash";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export const Services = () => {
  return (
    <section
      id="services"
      className="scroll-mt-[70px] py-12 h-fit flex flex-col items-center justify-center services-section bg-fixed md:bg-center">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h1 className="text-xl font-bold md:text-4xl mb-4 text-[#E52323]">
            <FormattedMessage id="block.services.title.2" />
          </h1>
        </div>
      </div>
      <div className="w-full h-fit grid grid-cols md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 place-items-center text-md">
        {servicesArray.map((service) => (
          <Link key={service.service} href={`/services/${service.service}`}>
            <Card img={service.image} key={service.service} classes="mx-auto">
              <h3 className="w-fit text-white hover:text-red-500 transition-all duration-300 mb-4 text-start ms-2 md:text-lg md:font-extrabold border-b-2 border-red-500 pb-0.5">
                <FormattedMessage id={service.title} />
              </h3>
              <div className="flex flex-col gap-8 p-6">
                {service.benefits.map((benefit, id) => (
                  <div key={id} className="leading-relaxed text-white/90">
                    <div className="flex items-center gap-3">
                      {benefit.icon}
                      <p className="">
                        <FormattedMessage id={benefit.title} />
                      </p>
                    </div>
                  </div>
                ))}
                <div className="flex justify-end w-full text-white/70 italic hover:text-red-500 transition-all duration-300 cursor-pointer">
                  <p className="text-smitalic ">
                    <FormattedMessage id="block.services.learn.more" />
                  </p>
                  <KeyboardArrowRightIcon fontSize="small" />
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
      <CarWash />
    </section>
  );
};
