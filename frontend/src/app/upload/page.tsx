"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import AccentButton from "@/components/accent-button";

const DetectionPage = () => {
  const [selected, setSelected] = useState("text");
  const [uploadStatus, setUploadStatus] = useState<string | null>(null);
  const [fileUploaded, setFileUploaded] = useState(false);
  const inputFileRef = useRef<HTMLInputElement | null>(null);
  const [responseData, setResponseData] = useState<any | null>(null);

  const options = ["text", "image", "video", "audio"];

  const handleFileUpload = async (e: React.FormEvent) => {
    e.preventDefault();

    const file = inputFileRef.current?.files?.[0];
    if (!file) {
      setUploadStatus("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://127.0.0.1:8000/upload/", {
        method: "POST",
        body: formData,
        credentials: "include",
        mode:'no-cors'
      });

      if (!response.ok) {
        setUploadStatus(`Upload failed: ${response.statusText}`);
        setFileUploaded(false);
        return;
      }

      const data = await response.text(); // Get raw HTML response
      setResponseData(data);
      setUploadStatus("File analyzed successfully.");
      setFileUploaded(true);
      console.log("less go")
    } catch (error) {
      console.error("Error uploading file:", error);
      setUploadStatus("An error occurred during file upload.");
      setFileUploaded(false);
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
              selected === option ? "bg-buttons-primary" : "hover:bg-buttons-secondary"
            }`}
            onClick={() => setSelected(option)}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        ))}
      </div>

      <form className="flex flex-col items-center" onSubmit={handleFileUpload}>
        <label
          htmlFor="file-upload"
          className={`mt-8 w-[500px] h-32 flex items-center justify-center bg-black border ${
            fileUploaded ? "border-green-500" : "border-gray-600"
          } rounded p-3 text-text text-lg text-center cursor-pointer hover:border-buttons-primary transition`}
        >
          <div className="flex flex-col items-center">
            <Image src="/upload.svg" alt="Upload" width={50} height={50} />
            <p className="mt-2 text-text">
              {fileUploaded ? "File uploaded successfully." : "Click here to upload"}
            </p>
          </div>
        </label>

        <input
          type="file"
          className="hidden"
          id="file-upload"
          ref={inputFileRef}
          onChange={() => setFileUploaded(false)}
        />

        <AccentButton className="mt-8" type="submit">
          Detect
        </AccentButton>
      </form>

      {uploadStatus && (
        <p className={`mt-4 text-lg ${uploadStatus.includes("successfully") ? "text-green-500" : "text-red-500"}`}>
          {uploadStatus}
        </p>
      )}

      {responseData && (
        <div className="mt-6 bg-gray-800 p-4 rounded-lg text-white max-w-xl overflow-auto">
          <h3 className="text-lg font-semibold">Analysis Result:</h3>
          <div dangerouslySetInnerHTML={{ __html: responseData }} />
        </div>
      )}
    </div>
  );
};

export default DetectionPage;
