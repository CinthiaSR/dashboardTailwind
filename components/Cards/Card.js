import React from "react";
import {RiDropboxFill} from "react-icons/ri";
const Card = () => {
  return (
    <>
      {/* Cards */}
      <div className="bg-white rounded-2xl p-8 flex flex-col md:flex-row gap-8 w-full drop-shadow-lg border-2 border-transparent hover:border-purple-600">
        {/* icon */}
        <div className="w-full md:w-[10%] flex items-center justify-start md:justify-center">
          <RiDropboxFill className="text-7xl bg-purple-100 text-purple-600 p-4 rounded-md" />
        </div>
        {/* Card Title */}
        <div className="w-full md:w-[70%]">
          <h1 className="text-xl text-gray-500 flex items-center gap-4 mb-2">
            UX Designer
            <span className="text-xs py-1 px-2 bg-purple-100 text-purple-600 font-bold rounded-lg">
              Remote
            </span>
            <span className="text-xs py-1 px-2 bg-green-100 text-green-600 font-bold rounded-lg">
              Sketch
            </span>
          </h1>
          <p className="text-gray-500">Dropbox ---- Warzawa </p>
        </div>
        {/* time */}
        <div className="w-full md:w-[20%] flex flex-col items-end">
          <h3 className="text-xl text-gray-500 mb-2">8.8 - 13.7k PNL</h3>
          <p className="text-gray-500">2 days ago</p>
        </div>
      </div>
    </>
  );
};

export default Card;
