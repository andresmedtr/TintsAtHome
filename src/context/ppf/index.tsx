"use client";

import { createContext, useState } from "react";
import { PPFContextType } from "@/types/globalTypes";

export const PPFContext = createContext<PPFContextType | undefined>(undefined);

export const PPFProvider = ({ children }: { children: React.ReactNode }) => {
  // Default: white paint
  const [color, setColor] = useState<[number, number, number, number]>([
    1, 1, 1, 1,
  ]);

  return (
    <PPFContext.Provider value={{ color, setColor }}>
      {children}
    </PPFContext.Provider>
  );
};
