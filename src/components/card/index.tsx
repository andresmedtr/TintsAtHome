import Image from "next/image";
import { CardProps } from "../../types/globalTypes";

export const Card = ({ img, classes, children }: CardProps) => {
  return (
    <div
      className={`rounded-xl overflow-hidden shadow-md w-full  ${
        img && "bg-[#1a1a1a] max-w-[320px]"
      } transition-all duration-300 transform hover:scale-105  hover:shadow-[0_8px_24px_rgba(229,35,35,0.5)] cursor-pointer`}>
      {img ? (
        <div className="relative w-full h-[200px]">
          <Image
            src={img}
            alt="Card image"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover image"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1a1a1a]/60" />
        </div>
      ) : (
        ""
      )}
      <div className={`rounded-xl ${classes ? classes : "p-6 gap-4"}`}>
        {children}
      </div>
    </div>
  );
};
