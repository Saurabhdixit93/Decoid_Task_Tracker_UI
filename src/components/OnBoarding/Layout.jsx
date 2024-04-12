import { CaretRight } from "@phosphor-icons/react";
import React from "react";

export default function OnboardLayout({
  children,
  image,
  onHandleSecondPage,
  setBeforPage,
  firstPage,
}) {
  return (
    <div className="w-full h-full flex flex-col gap-10 p-4">
      <div className="flex justify-end w-full">
        <button
          className="text-[#819CFF] text-lg underline"
          onClick={() => setBeforPage(false)}
        >
          Skip
        </button>
      </div>
      <div className="w-full h-full flex items-center justify-center">
        <img
          className="w-4/5 h-4/5 object-contain "
          src={image}
          alt="onboard 1"
        />
      </div>

      {children}

      <div className="flex justify-end w-full">
        <button
          onClick={firstPage ? onHandleSecondPage : () => setBeforPage(false)}
          className="arrow-btn p-2 flex items-center justify-center rounded-full"
        >
          <CaretRight size={28} color="#ffffff" />
        </button>
      </div>
    </div>
  );
}
