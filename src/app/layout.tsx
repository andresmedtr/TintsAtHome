import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { TranslateProvider } from "@/provider/translate";
import { Navbar } from "@/components/navbar";
import { SwitchProvider } from "@/provider/switch";
import { TintProvider } from "@/provider/tint";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TintsAtHome",
  description: "Tints to the comfortness of your home",
  authors: [
    { name: "Rodrigo Celis", url: "https://github.com/Congrak" },
    { name: "Andres Medina", url: "https://github.com/andresmedtr" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${montserrat.className} flex flex-col row items-center bg-[#F2F2F2] `}>
        <TranslateProvider>
          <SwitchProvider>
            <TintProvider>
              <Navbar />
              <div className="max-w-[3000px] w-full">{children}</div>
            </TintProvider>
          </SwitchProvider>
        </TranslateProvider>
      </body>
    </html>
  );
}
