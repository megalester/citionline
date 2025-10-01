import Image from "next/image";
import React from "react";

const SectionCard = ({
  bgColor,
  image,
  title,
  subTitle,
  details,
  btnText,
  reverse,
}) => {
  const dir = reverse ? "row-reverse" : "row";
  return (
    <section
      className="w-full flex items-center p-16 max-md:p-7 gap-12 max-md:!flex-col"
      style={{ backgroundColor: bgColor, flexDirection: dir }}
    >
      <div className="w-1/2 max-md:w-full">
        <Image
          src={`/images/${image}`}
          alt="Info"
          width={545}
          height={310}
          className="object-contain rounded-2xl w-full"
        />
      </div>
      <div className="w-1/2 max-md:w-full">
        <p className="text-lg font-light">{subTitle}</p>
        <h1 className="text-[42px] font-extrabold text-sec pb-3">{title}</h1>
        <p>{details}</p>
        <div className="w-[190px] mt-6">
          <button className="cursor-pointer w-full py-[10px] bg-primary rounded-lg font-bold text-white hover:!bg-[#054e7b]">
            {btnText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default SectionCard;
