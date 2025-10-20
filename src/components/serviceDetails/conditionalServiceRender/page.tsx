"use client";

import { Model3d } from "../../model3d";
import { TintAccordion } from "../../accordion";
import { PpfAccordion } from "../../ppfAccordion/page";
import { usePathname } from "next/navigation";
import { servicesArray, carWashIncludes } from "@/constants";
import { useTint } from "@/hooks/useTint";
import { ServiceBenefits } from "../serviceBenefits/page";

export default function ServiceDetails() {
  const { tintName } = useTint();
  const pathname = usePathname();
  const slug = pathname.split("/").pop();

  const currentService =
    slug === "carwash"
      ? carWashIncludes
      : servicesArray.find((item) => item.service === slug) || servicesArray[0];

  const isPPF = currentService.service === "paint-protection-film";
  const hasModel = !!currentService.threeDModel;

  if (!hasModel) {
    return <ServiceBenefits service={currentService} />;
  }

  return (
    <Model3d
      titleId={currentService.title}
      buttonId="block.model3d.square.button"
      modelSrc={currentService.threeDModel || ""}
      tintName={!isPPF ? tintName : undefined}>
      {isPPF ? <PpfAccordion /> : <TintAccordion />}
    </Model3d>
  );
}
