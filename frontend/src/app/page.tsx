"use client"
import { useState } from "react";
import Navbar from "../components/navbar";

const Detection = () => {
  const [selected, setSelected] = useState("text");
  const options = ["text", "image", "video", "audio"];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <Navbar />
      <h2 className="text-3xl font-semibold mb-6 text-center">
        See Through the Fake—Detect Deepfakes Here.
      </h2>
      <div className="flex space-x-4 mt-6 bg-gray-800 p-2 rounded-full">
        {options.map((option) => (
          <button
            key={option}
            className={`px-6 py-3 rounded-full text-white text-lg transition-colors duration-200 ${
              selected === option
                ? "bg-[#3A31D8]"
                : "bg-gray-700 hover:bg-[#252342]"
            }`}
            onClick={() => setSelected(option)}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        ))}
      </div>
      <div className="mt-8 w-[500px]">
        {selected === "text" && (
          <textarea
            className="w-full h-32 bg-black border border-gray-600 rounded-sm p-3 text-white text-lg"
            placeholder="Enter text here"
          />
        )}
        {selected === "text" && (
          <textarea
            className="w-full h-32 bg-black border border-gray-600 rounded-sm p-3 text-white text-lg"
            placeholder="Enter text here"
          />
        )}
      </div>
      <button className="mt-8 bg-[#0600C2] text-white px-8 py-3 rounded text-xl hover:opacity-80">
        Detect
      </button>
    </div>
  );
};

export default Detection;
