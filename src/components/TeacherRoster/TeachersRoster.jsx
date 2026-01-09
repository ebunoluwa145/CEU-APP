import React, { useState } from 'react';

export default function TeachersRoster({ firstHalf, secondHalf }) {
  const [view, setView] = useState('H1');
  const activeRoster = view === 'H1' ? firstHalf : secondHalf;

  // Grouping data by month
  const groupedRoster = activeRoster.reduce((acc, row) => {
    if (!acc[row.month]) acc[row.month] = [];
    acc[row.month].push(row);
    return acc;
  }, {});

  return (
    <div className="p-4 bg-white min-h-screen">
      {/* View Toggle */}
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

      {/* Table with Thick Month Separators */}
      <div className="overflow-x-auto border-2 border-slate-800 rounded-sm">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-orange-500 text-white border-b-2 border-slate-800">
              <th className="px-4 py-3 border-r-2 border-slate-800 text-center text-sm font-bold uppercase w-24">Month</th>
              <th className="px-4 py-3 border-r-2 border-slate-800 text-center text-sm font-bold uppercase w-32">Date</th>
              <th className="px-4 py-3 border-r-2 border-slate-800 text-center text-sm font-bold uppercase">Teacher 1</th>
              <th className="px-4 py-3 text-center text-sm font-bold uppercase">Teacher 2</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(groupedRoster).map(([month, rows]) =>
              rows.map((row, index) => {
                // Check if this is the last row of the current month
                const isLastRowOfMonth = index === rows.length - 1;

                return (
                  <tr 
                    key={`${month}-${index}`} 
                    className={`
                      ${isLastRowOfMonth ? 'border-b-4 border-slate-900' : 'border-b border-slate-300'}
                    `}
                  >
                    {index === 0 && (
                      <td 
                        rowSpan={rows.length} 
                        className="bg-slate-100 px-4 py-4 text-center font-bold text-gray-900 border-r-2 border-slate-800 align-middle uppercase"
                      >
                        {month}
                      </td>
                    )}
                    <td className="px-4 py-3 text-sm text-gray-700 border-r-2 border-slate-300 font-medium">
                      {row.date}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-800 border-r-2 border-slate-300 font-semibold">
                      {row.teacher1}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-800 font-semibold">
                      {row.teacher2}
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
