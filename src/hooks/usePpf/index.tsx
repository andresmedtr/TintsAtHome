import { useContext } from "react";
import { PPFContext } from "@/context/ppf";

export const usePPF = () => {
  const context = useContext(PPFContext);
  if (!context) {
    throw new Error("usePPF must be used within a PPFProvider");
  }
  return context;
};
