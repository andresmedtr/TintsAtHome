import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { FormattedMessage } from "react-intl";
import { ChooseTInts } from "../chooseTints";
import { useTint } from "@/hooks/useTint";

export const TintAccordion = () => {
  const { tintName, tintDescription } = useTint();
  return (
    <>
      <Accordion className="border-b-1 border-gray-200 hidden xl:block">
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1-content"
          id="panel1-header"
          className="cursor-pointer transition-all group">
          <p className="text-[#111111] font-semibold transition-all group-hover:underline group-hover:decoration-[#E52323]">
            <FormattedMessage id="block.model3d.square.accordion" />
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <ChooseTInts>
            {({ name, description, tone }) => (
              <>
                <div className="flex flex-col">
                  <p className="font-semibold text-[#111111]">
                    <FormattedMessage id={name} />
                  </p>
                  <p className="text-sm text-[#333333]">
                    <FormattedMessage id={description} />
                  </p>
                </div>
                <div
                  className="w-[50px] h-[50px] border border-gray-300 rounded"
                  style={{ backgroundColor: tone }}></div>
              </>
            )}
          </ChooseTInts>
        </AccordionDetails>
      </Accordion>
      <div className="w-full flex overflow-x-auto xl:hidden px-2 gap-2">
        <ChooseTInts>
          {({ name, tone }) => (
            <>
              <div
                className="w-[20px] h-[20px] border border-gray-300 rounded"
                style={{ backgroundColor: tone }}></div>
              <div className="flex flex-col">
                <p className="font-semibold text-[#111111]">
                  <FormattedMessage id={name} />
                </p>
              </div>
            </>
          )}
        </ChooseTInts>
      </div>
      <div className="mb-6 bg-[#F2F2F2] p-3 rounded lg:hidden">
        <p className="text-sm font-semibold text-[#111111]">
          <FormattedMessage id={tintName} />
        </p>
        <p className="text-xs text-[#333333]">
          <FormattedMessage id={tintDescription} />
        </p>
      </div>
    </>
  );
};
