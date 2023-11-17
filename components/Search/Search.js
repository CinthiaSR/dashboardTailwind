import React from "react";
import {RiSearchLine, RiFilter3Line, RiMapPinUserFill} from "react-icons/ri";

const Search = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center mb-6">
        <form className="col-span-1 md:col-span-2">
          <div className="relative">
            <RiSearchLine className="absolute left-2 top-3 text-purple-600" />
            <input
              type="text"
              className="bg-white py-2 pl-8 pr-4 outline-none w-full"
              placeholder="Buscar"
            />
          </div>
        </form>
        {/* locations */}
        <form className="col-span-1">
          <div className="relative">
            <RiMapPinUserFill className="absolute left-2 top-3 text-purple-600" />
            <select
              type="text"
              className="bg-white py-[10px] pl-8 pr-4 outline-none w-full"
              placeholder="Search">
              <option>Anywhere</option>
            </select>
          </div>
        </form>
        {/* filters */}
        <form className="col-span-1">
          <div className="relative">
            <RiFilter3Line className="absolute left-2 top-3 text-purple-600" />
            <input
              type="text"
              className="bg-white py-2 pl-8 pr-4 outline-none w-full"
              placeholder="Filters"
            />
            <span className="absolute text-sm right-2 top-2 bg-purple-600 text-white py-1 px-[9px] rounded-full">
              4
            </span>
          </div>
        </form>
      </div>
    </>
  );
};

export default Search;
