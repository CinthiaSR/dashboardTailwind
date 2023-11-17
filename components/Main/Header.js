import React from "react";
import {
  RiNotification3Line,
  RiArrowDropDownLine,
  RiSearchLine,
  RiCheckboxBlankCircleFill,
} from "react-icons/ri";
const Header = () => {
  return (
    <>
      {/* header */}
      <header className="flex flex-col md:flex-row gap-4 items-center justify-between p-4 lg:pl-8 w-full ">
        {/* search */}
        <form className="w-full md:w-[50%] lg:w-[30%] order-1 md:order-none">
          <div className="relative">
            <RiSearchLine className="absolute left-2 top-3" />
            <input
              type="text"
              className="bg-gray-100 py-2 pl-8 pr-4 outline-none rounded-lg w-full"
              placeholder="Search"
            />
          </div>
        </form>
        {/* notifications */}
        <nav className="w-full md:w-[50%] lg:w-[70%] flex justify-center md:justify-end">
          <ul className="flex items-center gap-4">
            <li>
              <a href="#" className="relative">
                <RiNotification3Line className="text-xl" />
                <RiCheckboxBlankCircleFill className="absolute -right-5 top-3 text-xs text-red-500" />
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-1">
                Cinthia Sanchez
                <RiArrowDropDownLine />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
