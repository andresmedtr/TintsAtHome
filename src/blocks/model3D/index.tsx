"use client";

import { TintAccordion } from "@/components/accordion";
import { CustomButton } from "@/components/customButton";
import ModelViewer from "@/components/modelViewer";
import { useTint } from "@/hooks/useTint";
import { useSwitch } from "@/hooks/useToggle";
import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";

export const Model3D = () => {
  const { isActive } = useSwitch();
  const { tintName } = useTint();

  return (
    <section
      className="w-full h-fit flex flex-col justify-center items-center scroll-mt-[70]"
      id="home">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full h-fit text-center py-[25px] xl:py-[50px]">
        <h1 className="text-2xl font-bold title-primary md:text-4xl">
          <FormattedMessage id="block.model3d.title" />
        </h1>
        <p className="paragraph-primary">
          <FormattedMessage id="block.model3d.parapgrah" />
        </p>
      </motion.div>
      <div className="bg-white w-full h-fit flex justify-center py-[50px]">
        <div className="w-[80%] h-full flex flex-col-reverse items-center justify-between xl:flex-row">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-fit h-full flex flex-col gap-[20px]">
            <h1 className="text-2xl font-bold xl:text-5xl">
              <FormattedMessage id="block.model3d.square.title" />
            </h1>
            <div className="h-fit w-[90%] flex flex-col gap-[30px] text-sm xl:text-lg">
              <p>
                <FormattedMessage id="block.model3d.square.paragrah" />
              </p>
              <TintAccordion />
            </div>
            <CustomButton
              width="w-full lg:w-fit"
              id="block.model3d.square.button"
            />
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}>
            <div className="relative bg-[#F2F2F2] h-[400px] rounded-lg overflow-hidden flex items-center lg:h-[500px]">
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                <p className="text-sm font-semibold text-[#111111]">
                  <FormattedMessage id={tintName} />
                </p>
              </div>
              <ModelViewer
                src={
                  isActive
                    ? "https://vq4jjvoakgh0bglr.public.blob.vercel-storage.com/g_wagon-Lng1Z2L9WuWNGZXVDsKZhcHQUlFf0o.glb"
                    : "https://vq4jjvoakgh0bglr.public.blob.vercel-storage.com/house/house-GP4Zwy8YteIEFs1sAcyredbr91cvN9.glb"
                }
                alt="Un modelo 3D"
                auto-rotate={true}
                camera-controls={true}
                className="h-[400px] lg:h-[700px] w-[300px] sm:w-[400px] md:w-[600px] lg:w-[700px] xl:w-[900px]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
