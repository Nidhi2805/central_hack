import Navbar from "../../../components/navbar";
import Image from "next/image";

const DetectionResult = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <Navbar />
      <div className="bg-gray-900 p-6 rounded-lg flex flex-col items-center mt-6">
        <Image src="/audio.svg" alt="Audio Icon" width={370} height={370} />
      </div>
      <div className="mt-6">
        <Image src="/alert.svg" alt="Alert Icon" width={350} height={68} />
      </div>
      <p className="mt-4 text-lg">12% chance of being AI generated</p>
      <button className="mt-6 bg-[#0600C2] text-white px-6 py-3 rounded text-lg hover:opacity-80">
        Detect More
      </button>
    </div>
  );
};

export default DetectionResult;
