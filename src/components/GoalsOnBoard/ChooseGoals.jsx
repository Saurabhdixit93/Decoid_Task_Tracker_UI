import React from "react";
import Button from "../buttons/Button";
import { useNavigate } from "react-router-dom";

const CHECKBOXES = [
  {
    id: 1,
    name: "weightLoss",
    label: "Weight Loss",
    checked: false,
  },

  {
    id: 2,
    name: "muscleGain",
    label: "Muscle Gain",
    checked: false,
  },

  {
    id: 3,
    name: "flexibility",
    label: "Flexibility and Mobility",
    checked: false,
  },

  {
    id: 4,
    name: "generalFitness",
    label: "General Fitness",
    checked: false,
  },

  {
    id: 5,
    name: "specificTraining",
    label: "Event - specific training",
  },

  {
    id: 6,
    name: "mentalHealth",
    label: "Mindfulness and Mental Health",
    checked: false,
  },
];

export default function ChooseGoals() {
  const [checkBoxValues, setCheckBoxValues] = React.useState({});

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckBoxValues({ ...checkBoxValues, [name]: checked });
  };

  const navigate = useNavigate();
  const handleConfirm = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col gap-8 w-full p-4">
      <div className="flex justify-center w-full ">
        <h2 className="text-xl font-bold text-black">What are your goals?</h2>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {CHECKBOXES.map((checkbox, index) => (
          <div
            key={index}
            className="flex items-center gap-2 w-full justify-between bg-[#F1F1F1] p-3 rounded-lg"
          >
            <label
              htmlFor={checkbox.name}
              className="text-md text-[#2C2B2B] font-semibold"
            >
              {checkbox.label}
            </label>

            <input
              onChange={handleCheckboxChange}
              checked={checkBoxValues[checkbox.name] || false}
              value={checkbox.name}
              type="checkbox"
              name={checkbox.name}
              id={checkbox.name}
              className="w-4 h-4 border border-[#809AFF] "
            />
          </div>
        ))}
      </div>

      <Button type={"button"} title={"Confirm"} onClick={handleConfirm} />
    </div>
  );
}
