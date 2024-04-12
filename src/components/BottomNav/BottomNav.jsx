import {
  Camera,
  House,
  MagnifyingGlass,
  MessengerLogo,
  User,
} from "@phosphor-icons/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const BottomNav = () => {
  const [activeTab] = useState("home");

  return (
    <nav className="fixed bottom-0 w-full bg-white text-white p-4 flex justify-around shadow-lg z-100">
      <Link to="/" className="flex flex-col items-center text-[#7F7F7F] p-2 ">
        <House size={32} color="#7f7f7f" weight="regular" />
      </Link>

      <Link
        to="#"
        className="flex flex-col items-center flex flex-col items-center text-[#7F7F7F] p-2 "
      >
        <MessengerLogo size={32} color="#7f7f7f" weight="regular" />
      </Link>

      <Link
        to="/"
        className={`flex flex-col items-center flex flex-col items-center p-4 rounded-full ${
          activeTab === "home"
            ? "active text-white shadow-xl"
            : "text-[#7F7F7F] "
        }`}
      >
        <MagnifyingGlass size={32} weight="regular" />
      </Link>

      <Link
        to="#"
        className="flex flex-col items-center flex flex-col items-center text-[#7F7F7F] p-2 "
      >
        <Camera size={32} color="#7f7f7f" />
      </Link>

      <Link
        to="#"
        className="flex flex-col items-center flex flex-col items-center text-[#7F7F7F] p-2 "
      >
        <User size={32} color="#7f7f7f" />
      </Link>
    </nav>
  );
};

export default BottomNav;
