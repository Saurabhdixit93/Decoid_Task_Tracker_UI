import { CaretLeft, Warning } from "@phosphor-icons/react";
import React from "react";
import ChartImage from "../assets/Chart_Full.png";
import WorkOutCard from "./WorkOutCard";
import WorkOutImage from "../assets/Ellipse_2.png";
import UpperBodyImage from "../assets/Ellipse_1.png";
import NextTrainCard from "./NextTrainCard";
import WorkOutSchedule from "./WorkOutSchedule";

const UPCOMING_WORKOUTS = [
  {
    id: 1,
    title: "Full Body Workout",
    time: "Today 3pm",
    img: WorkOutImage,
  },

  {
    id: 2,
    title: "Upper Body Workout",
    time: "4 Feb, 3:30 pm",
    img: UpperBodyImage,
  },
];
export default function WorkoutTracker() {
  const [isSeeMore, setIsSeeMore] = React.useState(false);

  const handleSeeMore = () => {
    setIsSeeMore(!isSeeMore);
  };
  return (
    <>
      {isSeeMore ? (
        <WorkOutSchedule onClose={handleSeeMore} />
      ) : (
        <div className="w-full p-4 flex flex-col gap-8 pb-40 ">
          <div className="flex items-center justify-between gap-4 w-1/2 mt-2">
            <button className="p-1  bg-[#F1F1F1] rounded-sm">
              <CaretLeft size={22} />
            </button>

            <h2 className="text-xl font-bold text-[#2C2B2B] whitespace-nowrap">
              Workout Tracker
            </h2>
          </div>

          <div className="w-full flex flex-col gap-4">
            <div className="flex w-full justify-end">
              <div className="flex items-center gap-3">
                <h2 className="text-sm text-[#2C2B2B]"> Good job</h2>
                <h2 className="text-sm text-[#2C2B2B]">less then 320cal</h2>
              </div>
            </div>
            <img src={ChartImage} alt="ChartImage" className="w-full h-full" />
          </div>

          <div className="warn_bg w-full p-2 rounded-lg border border-[#4545450A]">
            <div className="flex items-center gap-2 w-full">
              <Warning size={40} color="#7E96FF" />

              <h2 className="text-sm font-medium text-[#2C2B2B]">
                You've burned fewer calories than yesterday. Time to get moving!
              </h2>
            </div>
          </div>

          <div className="flex flex-col gap-6 w-full">
            <div className="flex items-center justify-between w-full">
              <h2 className="text-lg font-bold text-[#2C2B2B]">
                Upcoming Workout
              </h2>
              <button
                className="text-sm font-bold text-[#7F7F7F]"
                onClick={handleSeeMore}
              >
                See more
              </button>
            </div>

            <div className="flex flex-col gap-4 w-full">
              {UPCOMING_WORKOUTS.map((item, index) => (
                <WorkOutCard
                  key={index}
                  img={item.img}
                  title={item.title}
                  time={item.time}
                />
              ))}
            </div>

            <div className="flex flex-col gap-4 w-full">
              <h2 className="text-lg font-bold text-[#2C2B2B]">
                What Do You Want to Train
              </h2>

              <NextTrainCard />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
