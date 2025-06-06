"use client";
import React from "react";
import Image from "next/image";
import { footerInfo } from "@/constants";
import { FormattedMessage } from "react-intl";

export const Footer = () => {
  return (
    <footer className="w-full h-auto pt-[20px] bg-[#111111] ">
      <div className="py-10 container mx-auto text-white grid grid-cols-1 md:grid-cols-4 gap-8 px-5">
        <div className="grid-cols-1 text-center">
          <Image
            src="/logo/logo2.png"
            width={100}
            height={100}
            alt="TintBiz logo Navbar"
            className="mx-auto md:mx-0"
          />
          <p className="text-xs mt-2 max-w-xs mx-auto md:mx-0">
            <FormattedMessage id="footer.left.description" />
          </p>
        </div>
        {footerInfo.map((footerColumn) => (
          <div className="pt-6 " key={footerColumn.title}>
            <h3 className="text-xl mb-2 text-[#E52323] ">
              <FormattedMessage id={footerColumn.title} />
            </h3>
            {footerColumn.items?.map((item) => (
              <p className="text-sm" key={item}>
                <FormattedMessage id={item} />
              </p>
            ))}
          </div>
        ))}
      </div>
      <hr className="border-t border-[#E52323]  mb-4 mx-auto w-[90%] text-gray-300" />
      <div className="w-full text-white text-center text-sm pb-5 px-4">
        <p>
          <FormattedMessage id="footer.copyright" />
        </p>
        <p className="text-sm">
          Created by: <span>Andres</span> & <span>Rodrigo</span>
        </p>
      </div>
    </footer>
  );
};
