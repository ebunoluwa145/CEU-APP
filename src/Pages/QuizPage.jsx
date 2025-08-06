import { useState } from "react";
import quizData from "../data/quizData";

export default function QuizPage() {
  const [activeTab, setActiveTab] = useState("multipleChoice");
  const [difficulty, setDifficulty] = useState("easy");

  // Filter questions based on tab and difficulty
  const questions = quizData[activeTab].filter(
    (q) => q.difficulty === difficulty
  );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Bible Quiz</h1>

      {/* Tabs */}
      <div className="flex mb-4 border-b">
        {["multipleChoice", "trueFalse", "fillInTheBlank"].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 capitalize ${
              activeTab === tab
                ? "border-b-2 border-orange-500 font-semibold"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.replace(/([A-Z])/g, " $1")}
          </button>
        ))}
      </div>

      {/* Difficulty Dropdown */}
      <div className="mb-4">
        <label className="mr-2 font-medium">Difficulty:</label>
        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          className="border border-gray-300 px-3 py-2 rounded-md"
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      {/* Questions */}
      <div className="space-y-4">
        {questions.length > 0 ? (
          questions.map((q, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-4 rounded-md border border-gray-200"
            >
              <p className="font-semibold mb-2">
                {index + 1}. {q.question}
              </p>

              {activeTab === "multipleChoice" && (
                <ul className="space-y-2">
                  {q.options.map((option, i) => (
                    <li key={i} className="flex items-center">
                      <input
                        type="radio"
                        name={`q-${index}`}
                        value={option}
                        className="mr-2"
                      />
                      {option}
                    </li>
                  ))}
                </ul>
              )}

              {activeTab === "trueFalse" && (
                <div>
                  <label className="mr-4">
                    <input type="radio" name={`q-${index}`} value="true" /> True
                  </label>
                  <label>
                    <input type="radio" name={`q-${index}`} value="false" /> False
                  </label>
                </div>
              )}

              {activeTab === "fillInTheBlank" && (
                <input
                  type="text"
                  placeholder="Your answer"
                  className="border px-3 py-2 rounded-md w-full"
                />
              )}
            </div>
          ))
        ) : (
          <p className="text-gray-500">No questions available.</p>
        )}
      </div>
    </div>
  );
}
