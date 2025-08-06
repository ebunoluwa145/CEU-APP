import { useState, useEffect } from "react";

export default function AddChild(){

    const [childName, setChildName] = useState("");
  const [children, setChildren] = useState([]);

  // Load saved children from localStorage on mount
  useEffect(() => {
    const savedChildren = JSON.parse(localStorage.getItem("children")) || [];
    setChildren(savedChildren);
  }, []);

  // Save to localStorage whenever children list changes
  useEffect(() => {
    localStorage.setItem("children", JSON.stringify(children));
  }, [children]);

  const addChild = () => {
    if (childName.trim() === "") return;
    setChildren([...children, childName]);
    setChildName("");
  };

  const removeChild = (index) => {
    const updatedChildren = children.filter((_, i) => i !== index);
    setChildren(updatedChildren);
  };
    return(

        <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6 py-12">
        <h1 className="text-3xl font-bold text-gray-800">Register Child</h1>
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Enter child name"
            value={childName}
            onChange={(e) => setChildName(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-orange-300"
          />
          <button
            onClick={addChild}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md"
          >
            + Add Child
          </button>
        </div>
      </div>

      {/* List of children */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-2">Children List</h2>
        {children.length === 0 ? (
          <p className="text-gray-500">No children added yet.</p>
        ) : (
          <ul>
            {children.map((name, index) => (
              <li
                key={index}
                className="flex justify-between items-center border-b py-2"
              >
                {name}
                <button
                  onClick={() => removeChild(index)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
        

    )
}