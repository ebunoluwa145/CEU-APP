import React from "react";

export default function UpcomingEvent() {
    return (
      <div className="my-10 flex items-center gap-6 bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 h-44 w-full max-w-lg mx-auto">
        {/* Date Badge */}
        <div className="bg-orange-500 text-white text-center rounded-full w-20 h-20 flex flex-col justify-center items-center shadow-md">
          <span className="text-2xl font-bold">10</span>
          <span className="text-sm">AUG</span>
        </div>
  
        {/* Event Details */}
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-semibold text-gray-900">Upcoming Event</h3>
          <p className="text-lg text-gray-600">Bible Quiz</p>
          <p className="text-sm text-gray-500 mt-1">📅 10/08/2025</p>
        </div>
      </div>
    );
  }
  
