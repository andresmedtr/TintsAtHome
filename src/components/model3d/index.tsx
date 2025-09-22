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
            {children} {/* Accordion goes here */}
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

// "use client";

// import { FormattedMessage } from "react-intl";
// import { usePathname } from "next/navigation";
// import { servicesArray } from "@/constants";
// import { motion } from "framer-motion";
// import ModelViewer from "../modelViewer";
// import { useTint } from "@/hooks/useTint";
// import { TintAccordion } from "../accordion";
// import { CustomButton } from "../customButton";
// import { scrollToView } from "@/utils/scrollToView";

// export default function ServiceDetailClient() {
//   const { tintName } = useTint();
//   const pathname = usePathname();
//   const slug = pathname.split("/").pop(); // get last segment
//   const currentService =
//     servicesArray.find((item) => item.service === slug) || servicesArray[0];
//   console.log(currentService);

//   return (
//     <div className="">
//       <h1 className="text-3xl font-bold capitalize text-center mb-6 xl:text-4xl">
//         <FormattedMessage id={currentService.title} />
//       </h1>
//       <div className="w-full h-fit flex justify-center py-[80px]  bg-white">
//         <div className="w-[90%] h-full flex flex-col-reverse gap-[40px] items-center justify-between xl:flex-row">
//           <motion.div
//             initial={{ x: -100, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
//             className="w-full h-full flex flex-col gap-[20px]">
//             <h1 className="text-2xl font-bold text-center xl:text-5xl">
//               <FormattedMessage id="block.model3d.square.title" />
//             </h1>
//             <div className="h-fit w-[100%] flex flex-col gap-[30px] text-sm xl:text-lg">
//               <TintAccordion />
//             </div>
//             <CustomButton
//               classes="w-full lg:w-fit"
//               id="block.model3d.square.button"
//               onClick={() => scrollToView("#contact")}
//             />
//           </motion.div>
//           <motion.div
//             initial={{ x: 100, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}>
//             {/* shadow-[0_8px_24px_rgba(0,0,0,0.8)] */}
//             <div className="relative bg-[#F2F2F2] h-[400px] rounded-lg overflow-hidden flex items-center lg:h-[500px] shadow-xl">
//               <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
//                 <p className="text-sm font-semibold text-[#111111]">
//                   <FormattedMessage id={tintName} />
//                 </p>
//               </div>
//               <ModelViewer
//                 src={currentService.threeDModel || "/3d/car.glb"}
//                 alt="Un modelo 3D"
//                 auto-rotate={true}
//                 camera-controls={true}
//                 className="h-[400px] lg:h-[700px] w-[300px] sm:w-[400px] md:w-[600px] lg:w-[700px] xl:w-[900px]"
//               />
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }
