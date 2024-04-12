import React, { useState } from "react";
import FirstOnBoardImage from "../../assets/image_13.png";
import OnboardLayout from "./Layout";
import SecondStep from "./SecondStep";

export default function FirstStep({ setBeforPage }) {
  const [secondPage, setSecondPage] = useState(false);

  const handleSecondPage = () => {
    setSecondPage(true);
  };
  return (
    <>
      {secondPage ? (
        <SecondStep setBeforPage={setBeforPage} />
      ) : (
        <OnboardLayout
          firstPage={true}
          setBeforPage={setBeforPage}
          image={FirstOnBoardImage}
          onHandleSecondPage={handleSecondPage}
        >
          <div className="flex justify-start flex-col gap-2 w-full">
            <h2 className="text-xl font-bold text-black">Track Your Goal</h2>

            <p className="text-md text-[#787878] ">
              Don’t worry if you have trouble determining your goals, We can
              help you determine your goals and track your goals
            </p>
          </div>
        </OnboardLayout>
      )}
    </>
  );
}
