import React from "react";
import FullImageNext from "../assets/Ellipse_5.png";
export default function NextTrainCard() {
  return (
    <div className="flex items-center justify-between w-full bg-[#8CB1FF99] p-4 rounded-xl">
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-medium leading-tight">Full Body Workout</h2>
        <ul className="flex gap-1 flex-col">
          <li className="font-normal">Arms</li>
          <li className="font-normal">Chest</li>
        </ul>
      </div>
      <div>
        <img
          src={FullImageNext}
          alt="FullImageNext"
          className="w-20 h-20 rounded-full"
        />
      </div>
    </div>
  );
}
