import React from "react";

export default function ScheduleHr({ width, label }) {
  return (
    <div className="flex items-center w-full">
      <div className="w-full border-t border-gray-300"></div>
      <div className="p-2 rounded-full text-white font-semibold text-sm whitespace-nowrap time_bg_hr ">
        {label}
      </div>
      <div className={`${width} border-t border-gray-300`}></div>
    </div>
  );
}
