export default function ProgramRoster({ roster }) {
    return (
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4">Program Roster</h2>
        <ul>
          {Object.entries(roster).map(([duty, child], index) => (
            <li
              key={index}
              className="flex justify-between items-center border-b py-2"
            >
              <span>{duty}</span>
              <span className="font-medium text-gray-700">{child}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  