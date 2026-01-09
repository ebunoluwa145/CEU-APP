import React, { useState } from 'react';

export default function TeachersRoster({ firstHalf, secondHalf }) {
  const [view, setView] = useState('H1');

  const activeRoster = view === 'H1' ? firstHalf : secondHalf;

  const groupedRoster = activeRoster.reduce((acc, row) => {
    if (!acc[row.month]) acc[row.month] = [];
    acc[row.month].push(row);
    return acc;
  }, {});

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      {/* Tab Toggle Switch */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex rounded-md shadow-sm bg-white p-1 border-2 border-gray-300">
          <button
            onClick={() => setView('H1')}
            className={`px-4 py-2 text-sm font-bold rounded-md transition-all ${
              view === 'H1' ? 'bg-orange-600 text-white shadow-inner' : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            JAN - JUN
          </button>
          <button
            onClick={() => setView('H2')}
            className={`px-4 py-2 text-sm font-bold rounded-md transition-all ${
              view === 'H2' ? 'bg-orange-600 text-white shadow-inner' : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            JUL - DEC
          </button>
        </div>
      </div>

      {/* Desktop View - Thicker Borders Applied */}
      <div className="hidden md:block overflow-x-auto bg-white shadow-xl rounded-lg">
        <table className="w-full border-collapse border-2 border-gray-800">
          <thead>
            <tr className="bg-orange-600 text-white text-left uppercase text-sm tracking-wider">
              <th className="px-6 py-4 border-2 border-gray-800">Month</th>
              <th className="px-6 py-4 border-2 border-gray-800">Date</th>
              <th className="px-6 py-4 border-2 border-gray-800">Teacher 1</th>
              <th className="px-6 py-4 border-2 border-gray-800">Teacher 2</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(groupedRoster).map(([month, rows]) =>
              rows.map((row, index) => (
                <tr key={`${month}-${index}`} className="hover:bg-orange-50 transition-colors">
                  {index === 0 && (
                    <td 
                      rowSpan={rows.length} 
                      className="px-6 py-4 font-black text-gray-900 bg-gray-100 border-2 border-gray-800 text-center uppercase"
                    >
                      {month}
                    </td>
                  )}
                  <td className="px-6 py-4 text-sm font-bold text-gray-700 border-2 border-gray-800">{row.date}</td>
                  <td className="px-6 py-4 text-sm font-bold text-gray-900 border-2 border-gray-800 bg-white">{row.teacher1}</td>
                  <td className="px-6 py-4 text-sm font-bold text-gray-900 border-2 border-gray-800 bg-white">{row.teacher2}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View - Thicker Dividers */}
      <div className="md:hidden space-y-8">
        {Object.entries(groupedRoster).map(([month, rows]) => (
          <div key={month}>
            <h2 className="text-2xl font-black text-gray-900 mb-4 px-2 border-l-8 border-orange-600 uppercase tracking-tighter">
              {month}
            </h2>
            <div className="space-y-4">
              {rows.map((row, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow-md border-2 border-gray-800 overflow-hidden">
                  <div className="bg-orange-600 px-4 py-2 border-b-2 border-gray-800 flex justify-between items-center">
                    <span className="font-black text-white text-lg">{row.date}</span>
                    <span className="text-[10px] font-bold text-orange-100 uppercase tracking-widest">Sunday Service</span>
                  </div>
                  <div className="p-4 grid grid-cols-2 gap-0 divide-x-2 divide-gray-800">
                    <div className="pr-2">
                      <span className="text-[10px] text-gray-500 block uppercase font-black mb-1">Teacher 1</span>
                      <span className="text-md font-bold text-gray-900">{row.teacher1}</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-[10px] text-gray-500 block uppercase font-black mb-1">Teacher 2</span>
                      <span className="text-md font-bold text-gray-900">{row.teacher2}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
