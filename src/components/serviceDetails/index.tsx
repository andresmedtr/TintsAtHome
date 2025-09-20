"use client";

import { FormattedMessage } from "react-intl";
import { usePathname } from "next/navigation";
import { servicesArray } from "@/constants";
import { motion } from "framer-motion";
import ModelViewer from "../modelViewer";
import { useTint } from "@/hooks/useTint";

type Service = {
  service: string;
  image: string;
  benefits: string[];
};

type Props = {
  service: Service;
};

export default function ServiceDetailClient({ service }: Props) {
  const { tintName } = useTint();
  const pathname = usePathname();
  const slug = pathname.split("/").pop(); // get last segment
  const currentService =
    servicesArray.find((item) => item.service === slug) || servicesArray[0];
  console.log(currentService);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold capitalize">
        {currentService.service}
      </h1>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}>
        {/* shadow-[0_8px_24px_rgba(0,0,0,0.8)] */}
        <div className="relative bg-[#F2F2F2] h-[400px] rounded-lg overflow-hidden flex items-center lg:h-[500px] shadow-xl">
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
            <p className="text-sm font-semibold text-[#111111]">
              <FormattedMessage id={tintName} />
            </p>
          </div>
          <ModelViewer
            src={currentService.threeDModel || "/3d/car.glb"}
            alt="Un modelo 3D"
            auto-rotate={true}
            camera-controls={true}
            className="h-[400px] lg:h-[700px] w-[300px] sm:w-[400px] md:w-[600px] lg:w-[700px] xl:w-[900px]"
          />
        </div>
      </motion.div>
    </div>
  );
}
