import React from "react";

export default function Button({ type, title, onClick }) {
  return (
    <button
      onClick={onClick}
      type={type}
      className="w-full rounded-lg p-3 bg-gradient-to-r from-blue-600 to-blue-300 text-white"
    >
      {title}
    </button>
  );
}
