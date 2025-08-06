import React from "react";

export default function Card({ icon, title, onClick }) {
  return (
    <div
      className="flex flex-col items-center justify-center w-40 h-40 
                 bg-gradient-to-br from-orange-500 to-pink-600
                 text-white rounded-2xl shadow-lg 
                 cursor-pointer hover:-translate-y-2 
                 transition-transform"
      onClick={onClick}
    >
      <div className="text-4xl mb-2">{icon}</div>
      <p className="text-lg font-semibold">{title}</p>
    </div>
  );
}
