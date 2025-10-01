import React from "react";
import NavItem from "../ui/NavItem";
import { LiaSearchSolid } from "react-icons/lia";

const Nav = () => {
  return (
    <div
      className="bg-[#F0F5F7] flex-between px-12 mt-3 max-md:px-5 max-md:py-3"
      style={{ boxShadow: "0 1px 10px #0000001f" }}
    >
      <div className="flex gap-3 max-md:flex-wrap max-md:gap-2">
        <NavItem name={"Credit Cards"} />
        <NavItem name={"Banking"} />
        <NavItem name={"Lending"} />
        <NavItem name={"Investing"} />
        <NavItem name={"Wealth Management"} />
        <NavItem name={"Open an Account ›"} />
      </div>

      <div className="p-3 rounded-lg hover:bg-[#5E676B] text-primary hover:!text-white cursor-pointer max-md:hidden">
        <LiaSearchSolid size={30} />
      </div>
    </div>
  );
};

export default Nav;
