export default function CleaningRoster({ roster }) {
    return (
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4">Cleaning Roster</h2>
        <ul>
          {roster.map((child, index) => (
            <li
              key={index}
              className="flex justify-between items-center border-b py-2"
            >
              <span>Cleaner {index + 1}</span>
              <span className="font-medium text-gray-700">{child}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  