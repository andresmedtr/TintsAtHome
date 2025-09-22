import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { TranslateProvider } from "@/provider/translate";
import { Navbar } from "@/components/navbar";
import { SwitchProvider } from "@/provider/switch";
import { TintProvider } from "@/provider/tint";
import { Footer } from "@/components/footer";
import { GoogleTagManager } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import { PPFProvider } from "@/context/ppf";

export const viewport = {
  themeColor: "#E52323",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tints at Home | Window Tinting Experts",
  description: "Tints to the comfortness of your home",
  authors: [
    { name: "Rodrigo Celis", url: "https://github.com/Congrak" },
    { name: "Andres Medina", url: "https://github.com/andresmedtr" },
  ],
  icons: {
    icon: [
      { url: "/favicon.svg", sizes: "32x32", type: "image/svg" },
      { url: "/favicon.svg", sizes: "16x16", type: "image/svg" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",
  other: {
    "msapplication-TileColor": "#E52323",
    "msapplication-config": "/browserconfig.xml",
    "mask-icon": "/safari-pinned-tab.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <GoogleTagManager gtmId="GTM-5X767H55" />
      </head>
      <body
        className={`${montserrat.className} flex flex-col row items-center bg-[#F2F2F2] `}>
        <TranslateProvider>
          <SwitchProvider>
            <PPFProvider>
              <TintProvider>
                <Navbar />
                <div className="max-w-[2000px] w-full">{children}</div>
                <Analytics />
                <Footer />
              </TintProvider>
            </PPFProvider>
          </SwitchProvider>
        </TranslateProvider>
      </body>
    </html>
  );
}
