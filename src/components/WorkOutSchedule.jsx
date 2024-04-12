import { CaretLeft, CaretRight, Plus } from "@phosphor-icons/react";
import React from "react";
import ScheduleButtons from "./Schedules/ScheduleButtons";
import ScheduleHr from "./Schedules/ScheduleHr";

export default function WorkOutSchedule({ onClose }) {
  const dates = [
    {
      date: "Sun",
      day: 5,
      id: 1,
      isCurrent: false,
    },

    {
      date: "Mon",
      day: 6,
      id: 2,
      isCurrent: true,
    },
    {
      date: "Tue",
      day: 7,
      id: 3,
      isCurrent: false,
    },

    {
      date: "Wed",
      day: 8,
      id: 4,
      isCurrent: false,
    },
  ];

  const times = [
    {
      time: "06:00 AM",
      id: 1,
    },

    {
      time: "07:00 AM",
      id: 2,
      isCustomHr: true,
    },

    {
      time: "08:00 AM",
      id: 3,
      isCustomHr: false,
    },

    {
      time: "09:00 AM",
      id: 4,
      isCustomHr: true,
    },

    {
      time: "10:00 AM",
      id: 5,
      isCustomHr: false,
    },

    {
      time: "11:00 AM",
      id: 6,
      isCustomHr: false,
    },

    {
      time: "12:00 PM",
      id: 7,
      isCustomHr: false,
    },
  ];
  return (
    <div className="w-full p-4 flex flex-col gap-8 pb-40">
      <div className="flex flex-col gap-1 w-full">
        <div className="flex items-center justify-between gap-4 w-1/2 mt-2">
          <button onClick={onClose} className="p-1  bg-[#F1F1F1] rounded-sm">
            <CaretLeft size={22} />
          </button>

          <h2 className="text-xl font-bold text-[#2C2B2B] whitespace-nowrap">
            Workout Schedule
          </h2>
        </div>

        <div className="w-full flex justify-center">
          <button className="flex items-center gap-1">
            <CaretLeft size={14} />
            April 2024
            <CaretRight size={14} />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 w-full">
        {dates.map((dateItem, index) => (
          <ScheduleButtons
            key={index}
            dateItem={dateItem}
            isCurrent={dateItem.isCurrent}
          />
        ))}
      </div>

      <div className="flex flex-col gap-4 w-full relative">
        {times.map((timeItem, index) => {
          const customHr = timeItem.isCustomHr;
          const is7Am = timeItem.time === "07:00 AM";

          return (
            <div key={index} className="flex flex-col gap-1 w-full">
              <p className="text-md font-medium text-[#2C2B2B]">
                {timeItem.time}
              </p>

              {customHr ? (
                <ScheduleHr
                  label={
                    is7Am
                      ? "Ab's Workout, 07:30 am"
                      : "Upperbody Workout, 09:00 am"
                  }
                  width={is7Am ? "w-10" : "w-full"}
                />
              ) : (
                <hr className="w-full border-t border-gray-300" />
              )}
            </div>
          );
        })}

        <div className="absolute bottom-5 right-0">
          <button className="time_bg_hr p-4 rounded-full text-white">
            <Plus size={30} color="#fff" />
          </button>
        </div>
      </div>
    </div>
  );
}
