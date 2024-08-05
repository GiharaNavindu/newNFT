import React from "react";
import { NotificationsNone, Language, Settings } from "@mui/icons-material"; // Updated import for MUI v5
import "tailwindcss/tailwind.css"; // Make sure Tailwind CSS is imported

export default function Topbar() {
  return (
    <div className="w-full h-12 bg-white sticky top-0 z-50">
      <div className="h-full px-5 flex items-center justify-between">
        <div className="font-bold text-2xl text-darkblue cursor-pointer">
          lamaadmin
        </div>
        <div className="flex items-center">
          <div className="relative cursor-pointer mr-2 text-gray-700">
            <NotificationsNone />
            <span className="w-4 h-4 absolute top-0 right-0 bg-red-500 text-white rounded-full flex items-center justify-center text-xs">2</span>
          </div>
          <div className="relative cursor-pointer mr-2 text-gray-700">
            <Language />
            <span className="w-4 h-4 absolute top-0 right-0 bg-red-500 text-white rounded-full flex items-center justify-center text-xs">2</span>
          </div>
          <div className="cursor-pointer text-gray-700 mr-2">
            <Settings />
          </div>
          <img
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="w-10 h-10 rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
