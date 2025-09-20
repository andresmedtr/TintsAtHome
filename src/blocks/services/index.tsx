"use client";
import { Card } from "@/components/card";
import { servicesArray } from "@/constants";
import Link from "next/link";
import React from "react";
import { FormattedMessage } from "react-intl";
import { CarWash } from "../carWash";

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
      <div className="w-full h-fit flex flex-col gap-5 justify-evenly items-center md:flex-row">
        {servicesArray.map((service) => (
          <Link key={service.service} href={`/services/${service.service}`}>
            <h3>
              <FormattedMessage id={service.title} />
            </h3>
            <Card img={service.image} key={service.service}>
              <div className="flex flex-col gap-8 p-6">
                {service.benefits.map((id) => (
                  <div
                    key={id}
                    className="text-base leading-relaxed text-white/90">
                    <FormattedMessage id={id} />
                  </div>
                ))}
              </div>
            </Card>
          </Link>
        ))}
      </div>
      <CarWash />
    </section>
  );
};
