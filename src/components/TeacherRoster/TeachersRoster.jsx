import React, { useState } from 'react';

export default function TeachersRoster({ firstHalf, secondHalf }) {
  const [view, setView] = useState('H1'); // State to handle half toggle

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
        <div className="inline-flex rounded-md shadow-sm bg-white p-1 border">
          <button
            onClick={() => setView('H1')}
            className={`px-4 py-2 text-sm font-medium rounded-md ${
              view === 'H1' ? 'bg-orange-500 text-white' : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            Jan - Jun
          </button>
          <button
            onClick={() => setView('H2')}
            className={`px-4 py-2 text-sm font-medium rounded-md ${
              view === 'H2' ? 'bg-orange-500 text-white' : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            Jul - Dec
          </button>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:block overflow-x-auto bg-white shadow-lg rounded-xl border border-gray-200">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-orange-600 text-white text-left uppercase text-xs tracking-wider">
              <th className="px-6 py-4">Month</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Teacher 1</th>
              <th className="px-6 py-4">Teacher 2</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(groupedRoster).map(([month, rows]) =>
              rows.map((row, index) => (
                <tr key={`${month}-${index}`} className="border-b border-gray-100 hover:bg-orange-50 transition-colors">
                  {index === 0 && (
                    <td rowSpan={rows.length} className="px-6 py-4 font-bold text-gray-900 bg-gray-50/50 border-r border-gray-200">
                      {month}
                    </td>
                  )}
                  <td className="px-6 py-4 text-sm text-gray-600">{row.date}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-800">{row.teacher1}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-800">{row.teacher2}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-8">
        {Object.entries(groupedRoster).map(([month, rows]) => (
          <div key={month} className="animate-fadeIn">
            <h2 className="text-xl font-bold text-gray-800 mb-4 px-2 border-l-4 border-orange-500">{month}</h2>
            <div className="space-y-4">
              {rows.map((row, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  <div className="bg-gray-50 px-4 py-2 border-b border-gray-100 flex justify-between">
                    <span className="font-bold text-orange-600">{row.date}</span>
                    <span className="text-xs text-gray-400">Sunday Service</span>
                  </div>
                  <div className="p-4 grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-[10px] text-gray-400 block uppercase font-bold">Teacher 1</span>
                      <span className="text-sm font-medium text-gray-900">{row.teacher1}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-400 block uppercase font-bold">Teacher 2</span>
                      <span className="text-sm font-medium text-gray-900">{row.teacher2}</span>
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
