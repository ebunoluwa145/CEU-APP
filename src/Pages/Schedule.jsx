import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProgramRoster from "../components/ProgramRooster/ProgramRoster";
import CleaningRoster from "../components/CleaningRoster/CleaningRoster";
import TeachersRoster from "../components/TeacherRoster/TeachersRoster.jsx"
import teachersData from "../data/teachersData.js"

export default function Schedule() {
  const [children, setChildren] = useState([]);
  const [programRoster, setProgramRoster] = useState({});
  const [cleaningRoster, setCleaningRoster] = useState([]);
  const [activeTab, setActiveTab] = useState("program");

  useEffect(() => {
    const savedChildren = JSON.parse(localStorage.getItem("children")) || [];
    setChildren(savedChildren);
  }, []);

  const generateRoster = () => {
    if (children.length === 0) return;

    const shuffled = [...children].sort(() => 0.5 - Math.random());
    const duties = {};

    // Program roster assignments
    duties["Opening Prayer"] = shuffled[0] || "TBD";
    duties["Praise & Worship"] = `${shuffled[1] || "TBD"} & ${shuffled[2] || "TBD"}`;
    duties["1st Hymn"] = shuffled[3] || "TBD";
    duties["Worship"] = shuffled[4] || "TBD";
    duties["Choir"] = "CEU Choir"; // Fixed
    duties["Bible Reading"] = shuffled[5] || "TBD";
    duties["2nd Hymn"] = shuffled[6] || "TBD";
    duties["Tenant"] = shuffled[7] || "TBD";
    duties["Preaching"] = "Teacher"; // Fixed

    // Cleaning roster: pick 2 children, fallback if less
    const cleaning = shuffled.slice(8, 10);
    const cleaningRoster = [
      cleaning[0] || shuffled[0] || "TBD",
      cleaning[1] || shuffled[1] || "TBD",
    ];

    setProgramRoster(duties);
    setCleaningRoster(cleaningRoster);
  };

  useEffect(() => {
    generateRoster();
  }, [children]);

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6 py-12">
        <h1 className="text-3xl font-bold text-gray-800">Sunday Roster</h1>
        <div>
        <button
          onClick={generateRoster}
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md"
        >
          🔄 Regenerate
        </button>

      <Link to="/add-child"><button
      className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 ml-4 rounded-md"
    >
      ➕ Register Child
    </button></Link> 
            
        </div>
        
      </div>

      {/* Tabs */}
      <div className="flex mb-4 border-b">
        <button
          className={`px-4 py-2 ${
            activeTab === "program"
              ? "border-b-2 border-orange-500 font-semibold"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("program")}
        >
          Program Roster
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === "cleaning"
              ? "border-b-2 border-orange-500 font-semibold"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("cleaning")}
        >
          Cleaning Roster
        </button>

        <button
          className={`px-4 py-2 ${activeTab === "teachers" ? "border-b-2 border-orange-500" : ""}`}
          onClick={() => setActiveTab("teachers")}
        >
          Teachers
        </button>
      </div>

      {/* Content */}
      {children.length === 0 ? (
        <p className="text-gray-500">No children registered yet.</p>
      ) : (
        <div>
          {activeTab === "program" && <ProgramRoster roster={programRoster} />}
          {activeTab === "cleaning" && <CleaningRoster roster={cleaningRoster} />}
          {activeTab === "teachers" && <TeachersRoster roster={teachersData} />}
        </div>
      )}
    </div>
  );
}
