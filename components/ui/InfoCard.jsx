import Image from "next/image";
import React from "react";

const InfoCard = ({ subTitle, title, image, details }) => {
  return (
    <div className="rounded-lg p-4 col-flex justify-between w-[400px] h-[500px] border border-gray-300">
      <div>
        <p className="text-sm font-light pb-2">{subTitle}</p>
        <Image
          src={`/images/${image}`}
          alt="Info"
          width={370}
          height={210}
          className="object-contain rounded-md"
        />
        <h1 className="text-[24px] font-extrabold text-sec pt-2 pb-3">
          {title}
        </h1>
        <p>{details}</p>
      </div>

      <div className="w-[190px] mt-6">
        <button className="cursor-pointer w-full py-[10px] bg-primary rounded-lg font-bold text-white hover:!bg-[#054e7b]">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default InfoCard;
