// export default function TeachersRoster({ roster }) {
//     const groupedRoster = roster.reduce((acc, row) => {
//       if (!acc[row.month]) acc[row.month] = [];
//       acc[row.month].push(row);
//       return acc;
//     }, {});
  
//     return (
//       <div className="overflow-x-auto bg-white shadow-md rounded-lg">
//         <table className="w-full border-2 border-gray-400">
//           <thead>
//             <tr className="bg-orange-500 text-white">
//               <th className="border-2 px-4 py-2 w-32">Month</th>
//               <th className="border-2 px-4 py-2 w-32">Date</th>
//               <th className="border-2 px-4 py-2">Teacher 1</th>
//               <th className="border-2 px-4 py-2">Teacher 2</th>
//             </tr>
//           </thead>
//           <tbody>
//             {Object.entries(groupedRoster).map(([month, rows]) =>
//               rows.map((row, index) => (
//                 <tr
//                   key={index}
//                   className={`hover:bg-gray-50 ${
//                     index === rows.length - 1 ? "border-b-4 border-gray-600" : ""
//                   }`}
//                 >
//                   {index === 0 && (
//                     <td
//                       rowSpan={rows.length}
//                       className="border-2 px-4 py-2 font-bold text-center bg-gray-200"
//                     >
//                       {month}
//                     </td>
//                   )}
//                   <td className="border-2 px-4 py-2">{row.date}</td>
//                   <td className="border-2 px-4 py-2">{row.teacher1}</td>
//                   <td className="border-2 px-4 py-2">{row.teacher2}</td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     );
//   }



export default function TeachersRoster({ roster }) {
  const groupedRoster = roster.reduce((acc, row) => {
    if (!acc[row.month]) acc[row.month] = [];
    acc[row.month].push(row);
    return acc;
  }, {});

  return (
    <div className="p-2 sm:p-4">
      {/* DESKTOP VIEW: Hidden on small screens, shown on md+ */}
      <div className="hidden md:block overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="w-full border-2 border-gray-400">
          <thead>
            <tr className="bg-orange-500 text-white">
              <th className="border-2 px-4 py-2 w-32">Month</th>
              <th className="border-2 px-4 py-2 w-32">Date</th>
              <th className="border-2 px-4 py-2">Teacher 1</th>
              <th className="border-2 px-4 py-2">Teacher 2</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(groupedRoster).map(([month, rows]) =>
              rows.map((row, index) => (
                <tr
                  key={index}
                  className={`hover:bg-gray-50 ${
                    index === rows.length - 1 ? "border-b-4 border-gray-600" : ""
                  }`}
                >
                  {index === 0 && (
                    <td
                      rowSpan={rows.length}
                      className="border-2 px-4 py-2 font-bold text-center bg-gray-200"
                    >
                      {month}
                    </td>
                  )}
                  <td className="border-2 px-4 py-2">{row.date}</td>
                  <td className="border-2 px-4 py-2">{row.teacher1}</td>
                  <td className="border-2 px-4 py-2">{row.teacher2}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* MOBILE VIEW: Shown on small screens, hidden on md+ */}
      <div className="md:hidden space-y-8">
        {Object.entries(groupedRoster).map(([month, rows]) => (
          <div key={month} className="space-y-4">
            {/* Month Header */}
            <div className="bg-orange-500 text-white text-center py-2 font-bold rounded-t-lg shadow-sm">
              {month}
            </div>
            
            {/* Weekly Cards */}
            <div className="space-y-3">
              {rows.map((row, index) => (
                <div 
                  key={index} 
                  className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden shadow-sm"
                >
                  {/* Date Header */}
                  <div className="bg-gray-100 border-b border-gray-300 px-4 py-2 flex justify-between items-center">
                    <span className="font-bold text-gray-700">{row.date}</span>
                    <span className="text-xs text-gray-500 uppercase font-semibold">Sunday</span>
                  </div>
                  
                  {/* Teachers Grid */}
                  <div className="grid grid-cols-2 divide-x divide-gray-200">
                    <div className="p-3">
                      <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold mb-1">Teacher 1</p>
                      <p className="text-sm font-medium text-gray-800">{row.teacher1}</p>
                    </div>
                    <div className="p-3">
                      <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold mb-1">Teacher 2</p>
                      <p className="text-sm font-medium text-gray-800">{row.teacher2}</p>
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
  
