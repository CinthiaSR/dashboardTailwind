"use client";
import React from "react";
import {RiCloseLine, RiArrowDropDownLine} from "react-icons/ri";
import Sidebar from "@/components/Main/Sidebar";
import Header from "@/components/Main/Header";
import Card from "@/components/Cards/Card";
import Search from "@/components/Search/Search";

export default function Home() {
  return (
    <div className="min-h-screen grid grid-col-1 lg:grid-cols-6">
      <Sidebar />
      {/* CONTENT */}
      <div className="col-span-5">
        <Header />
        {/* contenido */}
        <div className="p-4 lg:p-12 bg-gray-100">
          {/* title */}
          <div className="mb-8">
            <h1 className="text-3xl font-semibold">Job Board</h1>
          </div>
          {/* Buscador */}
          <Search />
          {/* tags */}
          <div className="flex items-center flex-wrap gap-4 mb-20">
            <span className="bg-white flex items-center gap-4 py-2 pl-4 pr-6 rounded-full">
              <button className="bg-purple-100 p-1 rounded-full text-purple-600 text-xs">
                <RiCloseLine />
              </button>
              <span className="text-gray-500">Design</span>
            </span>
            <span className="bg-white flex items-center gap-4 py-2 pl-4 pr-6 rounded-full">
              <button className="bg-purple-100 p-1 rounded-full text-purple-600 text-xs">
                <RiCloseLine />
              </button>
              <span className="text-gray-500">Regular</span>
            </span>
            <span className="bg-white flex items-center gap-4 py-2 pl-4 pr-6 rounded-full">
              <button className="bg-purple-100 p-1 rounded-full text-purple-600 text-xs">
                <RiCloseLine />
              </button>
              <span className="text-gray-500">Full Time</span>
            </span>
            <span className="bg-white flex items-center gap-4 py-2 pl-4 pr-6 rounded-full">
              <button className="bg-purple-100 p-1 rounded-full text-purple-600 text-xs">
                <RiCloseLine />
              </button>
              <span className="text-gray-500">B2B</span>
            </span>
            <buttom className="text-gray-500 ml-4">Clear all</buttom>
          </div>
          {/* Results */}
          <div className="flex items-center justify-between pl-2 mb-8">
            <p className="text-gray-500">
              We've found{" "}
              <span className="text-purple-600 font-semibold">523</span> jobs!
            </p>
            <p className="flex items-center gap-2">
              Sort By
              <span className="text-purple-600 font-semibold hover:cursor-pointer">
                Date
              </span>
              <RiArrowDropDownLine />
            </p>
          </div>
          {/* Cards */}
          <Card />
        </div>
      </div>
    </div>
  );
}
