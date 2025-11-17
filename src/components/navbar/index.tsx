import Image from "next/image";
import { NavigationButtons } from "../navigation";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="w-full h-[70px] pt-[20px] bg-[#111111] flex flex-col items-center justify-center shadow-2xl sticky top-0 z-[1] md:pt-0">
      <div className="max-w-[2000px] w-full h-full flex flex-row justify-between px-[15px]">
        <div className="w-fit h-full">
          <Link href="/">
            <Image
              src="/logo/tintsNewLogo.webp"
              priority
              width={100}
              height={100}
              alt="TintBiz logo Navbar"
              sizes="(max-width: 768px) 80px, 100px"
              className="w-fit h-full"
            />
          </Link>
        </div>
        <div className="w-fit h-full flex-row items-center gap-[50px] hidden md:flex m-auto">
          <NavigationButtons />
        </div>
      </div>
      <div className="flex flex-row w-full h-full pb-[20px] justify-evenly bg-[#111111] md:hidden m-auto">
        <NavigationButtons />
      </div>
    </nav>
  );
};
