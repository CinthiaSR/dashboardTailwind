import React from "react";
import {useState} from "react";
import {
  RiDashboardLine,
  RiBriefcaseLine,
  RiCalendar2Line,
  RiMessage2Line,
  RiLogoutBoxLine,
  RiMenu3Fill,
  RiCloseLine,
} from "react-icons/ri";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const handleSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <>
      {/* SIDEBAR */}
      <div
        className={`fixed lg:static top-0 w-[68%] md:w-[50%] lg:w-full z-50 bg-white transition-all ${
          sidebar ? "-left-0" : "-left-full"
        } w-full h-full overflow-y-scroll col-span-1 p-8`}>
        {/* logo */}
        <div className="text-center p-8">
          <h1 className="uppercase font-bold tracking-[4px]">logo</h1>
        </div>
        <div className="flex flex-col justify-between h-[550px]">
          {/* menu */}
          <nav>
            <ul>
              {/* flex para alinear en la misma linea y item-center para centrarl, gap para separarlos entre si */}
              <li>
                <a
                  href=""
                  className="flex items-center gap-3 hover:bg-purple-500 p-4 text-gray-400 hover:text-white rounded-lg transition-colors font-semibold">
                  <RiDashboardLine />
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="flex items-center gap-3 hover:bg-purple-500 p-4 text-gray-400 hover:text-white rounded-lg transition-colors font-semibold">
                  <RiBriefcaseLine />
                  Job Board
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="flex items-center gap-3 hover:bg-purple-500 p-4 text-gray-400 hover:text-white rounded-lg transition-colors font-semibold">
                  <RiCalendar2Line />
                  Schedule
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="flex items-center gap-3 hover:bg-purple-500 p-4 text-gray-400 hover:text-white rounded-lg transition-colors font-semibold">
                  <RiMessage2Line />
                  Messenger
                </a>
              </li>
            </ul>
          </nav>
          {/* image en logout */}
          <div className="flex flex-col gap-4">
            <img src="img01.svg" alt="imagen" />
            {/* update */}
            <div className="bg-purple-50 p-8 flex flex-col gap-4 rounded-3xl">
              <h3 className="text-xl text-center">Get upgrade</h3>
              <p className="text-gray-500 text-center">
                lorem, ipsum dolor sit amet consectetur adipisicing...
              </p>
              <button className="bg-purple-600 text-white p-2 rounded-lg">
                Learn more
              </button>
            </div>
            <a
              href=""
              className="flex items-center gap-3 hover:bg-purple-500 p-4 text-gray-400 hover:text-white rounded-lg transition-colors font-semibold">
              <RiLogoutBoxLine />
              Logout
            </a>
          </div>
        </div>
      </div>
      {/* btn menu movil */}
      <button
        onClick={handleSidebar}
        className="block lg:hidden fixed bottom-4 right-4 bg-purple-600 p-2 text-white rounded-full text-2xl z-40">
        {sidebar ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>
    </>
  );
};

export default Sidebar;
