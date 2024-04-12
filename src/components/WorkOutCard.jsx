import React, { useState } from "react";

export default function WorkOutCard({ img, title, time }) {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  return (
    <div className="w-full shadow-xl p-4 bg-white rounded-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            className="w-14 h-14 rounded-full border-1"
            src={img}
            alt="temp value"
          />

          <div className="flex flex-col gap-0 items-start justify-start ">
            <h2 className="text-md font-normal text-[#2C2B2B]">{title}</h2>
            <p className="text-sm text-[#7F7F7F]"> {time} </p>
          </div>
        </div>

        <div>
          <label className="flex items-center cursor-pointer">
            <div className="relative">
              <input
                type="checkbox"
                className="sr-only"
                checked={isToggled}
                onChange={handleToggle}
              />
              <div
                className={`${
                  isToggled ? "bg-blue-600" : "bg-gray-200"
                } w-10 h-6 rounded-full shadow-inner transition-all duration-300`}
              />
              <div
                className={`${
                  isToggled ? "translate-x-4" : "translate-x-0"
                } toggle-dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full shadow-md transition-all duration-300`}
              />
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}
