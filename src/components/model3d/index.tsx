"use client";

import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";
import { CustomButton } from "../customButton";
import { scrollToView } from "@/utils/scrollToView";
import ModelViewer from "../modelViewer";
import { HeroSectionProps } from "@/types/globalTypes";

export function Model3d({
  titleId,
  buttonId,
  modelSrc,
  tintName,
  children,
}: HeroSectionProps) {
  return (
    <div className="w-full h-fit flex justify-center py-[80px] bg-white">
      <div className="w-[90%] h-full flex flex-col-reverse gap-[40px] items-center justify-between xl:flex-row">
        {/* Left side */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full h-full flex flex-col gap-[20px]">
          <h1 className="text-2xl font-bold text-center xl:text-5xl">
            <FormattedMessage id={titleId} />
          </h1>
          <div className="h-fit w-[100%] flex flex-col gap-[30px] text-sm xl:text-lg">
            {children} {/* Accordion */}
          </div>
          <CustomButton
            classes="w-full lg:w-fit"
            id={buttonId}
            onClick={() => scrollToView("#contact")}
          />
        </motion.div>

        {/* Right side */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}>
          <div className="relative bg-[#F2F2F2] h-[400px] rounded-lg overflow-hidden flex items-center lg:h-[500px] shadow-xl">
            {tintName && (
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                <p className="text-sm font-semibold text-[#111111]">
                  <FormattedMessage id={tintName} />
                </p>
              </div>
            )}
            <ModelViewer
              src={modelSrc}
              alt="3D Model"
              auto-rotate={true}
              camera-controls={true}
              className="h-[400px] lg:h-[700px] w-[300px] sm:w-[400px] md:w-[600px] lg:w-[700px] xl:w-[900px]"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
