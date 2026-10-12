import Image from "next/image";

export default function CardShowcase() {
  return (
    <div className="relative mt-4 w-full flex justify-center items-center px-4 overflow-hidden pb-12">
      <div className="relative w-full max-w-5xl">
        
        {/* Mobile Screens (hidden on md and larger) */}
        <div className="block md:hidden max-w-sm mx-auto">
          <Image
            src="/card-mobile.png"
            alt="Our Tech Services Stack (Mobile View)"
            width={720}
            height={900}
            priority
            className="w-full h-auto object-contain drop-shadow-[0_15px_35px_rgba(0,0,0,0.8)]"
          />
        </div>

        {/* Tablet & Desktop Screens (hidden on smaller screen widths) */}
        <div className="hidden md:block">
          <Image
            src="/cards.png"
            alt="Tech Services - Frontend, Backend, Fullstack, DevOps, Mobile (Desktop View)"
            width={1920}
            height={1080}
            priority
            className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
          />
        </div>

      </div>
    </div>
  );
}