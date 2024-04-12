import React from "react";
import { Link } from "react-router-dom";
import GogleImage from "../../assets/google_icon.png";
import FaceBookImage from "../../assets/Vector.png";

export default function SocialLink({ title, type, toLink }) {
  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex items-center gap-2 w-full justify-center">
        <div className="flex items-center gap-4 justify-center">
          <button className="w-14 h-14 rounded-md border-2 border-[#7F7F7F] flex items-center justify-center">
            <img
              src={GogleImage}
              alt="GogleIcon"
              className="w-10 h-10 object-contain"
            />
          </button>

          <button className="w-14 h-14 rounded-md border-2 border-[#7F7F7F] flex items-center justify-center">
            <img
              src={FaceBookImage}
              alt="FaceBookIcon"
              className="w-10 h-10 object-contain"
            />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-2 justify-center w-full">
        <p className="text-black text-lg">{title}</p>
        <Link className="text-[#819CFF] text-lg underline" to={toLink}>
          {type}
        </Link>
      </div>
    </div>
  );
}
