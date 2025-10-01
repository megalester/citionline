import React from "react";

const NavItem = ({ name }) => {
  return (
    <div className="hover:bg-[#5E676B] text-[#333] rounded-xl px-3 max-md:px-2 max-md:py-1 py-3 font-semibold text-lg   cursor-pointer hover:text-slate-50 max-md:text-sm max-md:py-2">
      {name}
    </div>
  );
};

export default NavItem;
