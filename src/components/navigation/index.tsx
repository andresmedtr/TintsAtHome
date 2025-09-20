"use client";

import { NavbarFields } from "@/constants";
import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { usePathname, useRouter } from "next/navigation";

export const NavigationButtons = () => {
  const [activeTab, setActiveTab] = useState<string>(NavbarFields[0]);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = NavbarFields[0];
      NavbarFields.forEach((title) => {
        const anchor = title.split(".")[2].toLowerCase();
        const section = document.getElementById(anchor);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = title;
          }
        }
      });
      setActiveTab(currentSection);
    };

    if (pathname === "/") {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [pathname]);

  const handleClick = (title: string) => {
    const anchor = title.split(".")[2].toLowerCase();
    setActiveTab(title);

    if (pathname === "/") {
      const elem = document.getElementById(anchor);
      if (elem) elem.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${anchor}`);
    }
  };

  return (
    <>
      {NavbarFields.map((title) => {
        const isActive = activeTab === title;
        const anchor = title.split(".")[2].toLowerCase();
        return (
          <a
            href={`#${anchor}`}
            key={anchor}
            onClick={() => handleClick(title)}>
            <div
              className={`group relative cursor-pointer font-bold px-1 transition-colors duration-300 hover:text-[#E52323] ${
                isActive ? "text-[#E52323]" : "text-white"
              }`}>
              <FormattedMessage id={title} />
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-[#E52323] transition-transform duration-300 origin-center 
                          ${
                            isActive
                              ? "scale-x-100"
                              : "scale-x-0 group-hover:scale-x-100"
                          } w-full`}
              />
            </div>
          </a>
        );
      })}
    </>
  );
};
