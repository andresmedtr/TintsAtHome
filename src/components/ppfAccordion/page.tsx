"use client";

import { ppfColors } from "@/constants";
import { AccordionDetails } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionSummary } from "@mui/material";
import { FormattedMessage } from "react-intl";
import { rgbaToCss } from "@/utils/colorChange";
import { usePPF } from "@/hooks/usePpf";

export function PpfAccordion() {
  const { color, setColor } = usePPF();

  return (
    <Accordion className="border-b-1 border-gray-200 block">
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel1-content"
        id="panel1-header"
        className="cursor-pointer transition-all group">
        <p className="text-[#111111] font-semibold transition-all group-hover:underline group-hover:decoration-[#E52323]">
          <FormattedMessage id="block.model3d.square.ppf.accordion" />
        </p>
      </AccordionSummary>
      <AccordionDetails>
        <div className="grid grid-cols-10 xl:grid-cols-15 gap-2 place-items-center">
          {ppfColors.map((rgba, idx) => (
            <button
              key={idx}
              onClick={() => setColor(rgba)}
              className={`h-8 w-8 rounded-full border-2 transition-all ${
                JSON.stringify(color) === JSON.stringify(rgba)
                  ? "border-[#E52323] scale-110"
                  : "border-gray-300"
              }`}
              style={{ backgroundColor: rgbaToCss(rgba) }}
            />
          ))}
        </div>
      </AccordionDetails>
    </Accordion>
  );
}
