export default function TeachersRoster({ roster }) {
    const groupedRoster = roster.reduce((acc, row) => {
      if (!acc[row.month]) acc[row.month] = [];
      acc[row.month].push(row);
      return acc;
    }, {});
  
    return (
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
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
    );
  }
  