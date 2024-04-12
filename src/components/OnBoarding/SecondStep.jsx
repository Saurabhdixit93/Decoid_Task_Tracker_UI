import React from "react";
import SecondOnBoardImage from "../../assets/image_16.png";
import OnboardLayout from "./Layout";

export default function SecondStep({ setBeforPage }) {
  return (
    <OnboardLayout
      firstPage={false}
      setBeforPage={setBeforPage}
      image={SecondOnBoardImage}
    >
      <div className="flex justify-start flex-col gap-2 w-full">
        <h2 className="text-xl font-bold text-black">Get Burn</h2>

        <p className="text-md text-[#787878] ">
          Let’s keep burning to achieve your goals, it hurts only temporarily,
          if you give up now you will be in pain forever
        </p>
      </div>
    </OnboardLayout>
  );
}
