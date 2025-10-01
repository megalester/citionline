import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="px-12 max-md:px-5 bg-white">
      <div className="flex-between max-md:!block">
        <div className="flex gap-3 max-md:justify-between">
          <Image
            src={"/images/citi-logo.svg"}
            alt="Citi"
            width={80}
            height={70}
            className="object-contain"
          />
          <Image
            src={"/images/fdic-insured.jpg"}
            alt="Citi"
            width={450}
            height={50}
            className="object-contain max-md:w-[250px]"
          />
        </div>
        <div className="max-md:hidden">
          <Image
            src={"/images/atm.jpg"}
            alt="Citi"
            width={180}
            height={70}
            className="object-contain"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
