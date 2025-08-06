import { useState } from "react";
import games from "../data/games";

export default function Games() {
  const [selectedGame, setSelectedGame] = useState(null);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-orange-600">Bible Games</h1>

      <div className="flex flex-wrap gap-4 justify-center">
        {games.map((game, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-5 flex items-center space-x-4 cursor-pointer border hover:shadow-xl transition"
            style={{ flex: "1 1 250px", maxWidth: "300px" }}
            onClick={() => setSelectedGame(game)}
          >
            <span className="text-5xl">{game.icon}</span>
            <div>
              <h2 className="text-lg font-semibold">{game.name}</h2>
              <p className="text-gray-600 text-sm">{game.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedGame && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white w-96 p-6 rounded-lg shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
              onClick={() => setSelectedGame(null)}
            >
              ✖
            </button>
            <h2 className="text-2xl font-bold mb-3">
              {selectedGame.icon} {selectedGame.name}
            </h2>
            <ul className="list-disc list-inside space-y-1">
              {selectedGame.instructions.map((step, i) => (
                <li key={i} className="text-gray-700">{step}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
