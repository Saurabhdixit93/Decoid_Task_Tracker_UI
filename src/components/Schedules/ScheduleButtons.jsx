import React from "react";

export default function ScheduleButtons({ isCurrent, dateItem }) {
  return (
    <div
      className={`flex flex-col gap-0 h-[6.5rem] ${
        isCurrent ? "date_bg" : "bg-white"
      } rounded-lg p-4 shadow-sm`}
    >
      <h2
        className={`text-md font-medium ${
          isCurrent ? "text-white" : "text-[#2C2B2B]"
        } text-center`}
      >
        {dateItem.date}
      </h2>
      <p
        className={`text-3xl font-bold ${
          isCurrent ? "text-white" : "text-[#2C2B2B]"
        } text-center`}
      >
        {dateItem.day}
      </p>
    </div>
  );
}
