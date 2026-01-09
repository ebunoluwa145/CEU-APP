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
    <div className="p-4 bg-white min-h-screen">
      {/* Switcher Buttons */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex rounded-md shadow-sm border-2 border-gray-300 p-1">
          <button
            onClick={() => setView('H1')}
            className={`px-6 py-2 text-sm font-bold rounded-md ${
              view === 'H1' ? 'bg-orange-500 text-white' : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            JAN - JUN 2026
          </button>
          <button
            onClick={() => setView('H2')}
            className={`px-6 py-2 text-sm font-bold rounded-md ${
              view === 'H2' ? 'bg-orange-500 text-white' : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            JUL - DEC 2026
          </button>
        </div>
      </div>

      {/* Table Container with strong borders */}
      <div className="overflow-x-auto border-2 border-slate-400 rounded-sm shadow-sm">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-orange-500 text-white">
              {/* Thicker vertical lines using border-r-2 */}
              <th className="px-4 py-3 border-r-2 border-white text-center text-sm font-bold uppercase w-24">Month</th>
              <th className="px-4 py-3 border-r-2 border-white text-center text-sm font-bold uppercase w-32">Date</th>
              <th className="px-4 py-3 border-r-2 border-white text-center text-sm font-bold uppercase">Teacher 1</th>
              <th className="px-4 py-3 text-center text-sm font-bold uppercase">Teacher 2</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(groupedRoster).map(([month, rows]) =>
              rows.map((row, index) => (
                <tr key={`${month}-${index}`} className="border-b-2 border-slate-300">
                  {/* Month column with rowSpan and thick right border */}
                  {index === 0 && (
                    <td 
                      rowSpan={rows.length} 
                      className="bg-slate-100 px-4 py-4 text-center font-bold text-gray-800 border-r-2 border-slate-400 align-middle"
                    >
                      {month}
                    </td>
                  )}
                  {/* Individual cells with vertical dividers */}
                  <td className="px-4 py-3 text-sm text-gray-700 border-r-2 border-slate-300 font-medium whitespace-nowrap">
                    {row.date}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-800 border-r-2 border-slate-300 font-semibold">
                    {row.teacher1}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-800 font-semibold">
                    {row.teacher2}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      
      <p className="mt-4 text-xs text-gray-400 italic text-center">
        Showing roster for {view === 'H1' ? 'First' : 'Second'} Half of 2026
      </p>
    </div>
  );
}
