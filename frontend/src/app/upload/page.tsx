"use client";
import { useState } from "react";
import Navbar from "../../components/navbar";
import Image from "next/image";
import AccentButton from "@/components/accent-button";

const DetectionPage = () => {
  const [selected, setSelected] = useState("text");
  const options = ["text", "image", "video", "audio"];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("Uploaded file:", file.name);
    }
  };

  return (
    <div className="min-h-screen bg-black text-text flex flex-col items-center justify-center">
      <h2 className="text-3xl font-semibold mb-6 text-center">
        See Through the Fake—Detect Deepfakes Here.
      </h2>
      <div className="flex space-x-4 mt-6 bg-neutral p-2 rounded-full">
        {options.map((option) => (
          <button
            key={option}
            className={`px-6 py-3 rounded-full text-text text-lg transition-colors duration-200 ${
              selected === option
                ? "bg-buttons-primary"
                : "hover:bg-buttons-secondary"
            }`}
            onClick={() => setSelected(option)}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        ))}
      </div>
      <div>
        <label className="mt-8 w-[500px] h-32 flex items-center justify-center bg-black border border-gray-600 rounded p-3 text-text text-lg text-center cursor-pointer">
          {selected === "text" ? (
            <textarea
              className="w-full h-full bg-transparent text-text text-lg resize-none outline-none"
              placeholder="Enter text here"
            />
          ) : (
            <div className="flex flex-col items-center">
              <Image src="/upload.svg" alt="Upload" width={50} height={50} />
              <p className="mt-2 text-text">Click here to upload</p>
            </div>
          )}
        </label>
      </div>
      <input type="file" className="hidden" onChange={handleFileUpload} />
      <AccentButton className="mt-8">
        Detect
      </AccentButton>
    </div>
  );
};

export default DetectionPage;
