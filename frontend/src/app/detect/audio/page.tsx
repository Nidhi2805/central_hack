import AccentButton from "@/components/accent-button";
import Navbar from "../../../components/navbar";
import Image from "next/image";

const DetectionResult = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <div className="bg-gray-900 p-6 rounded-lg flex flex-col items-center mt-6">
        <Image src="/audio.svg" alt="Audio Icon" width={370} height={370} />
      </div>
      <div className="mt-6">
        <Image src="/alert.svg" alt="Alert Icon" width={350} height={68} />
      </div>
      <p className="mt-4 text-lg">12% chance of being AI generated</p>
      <AccentButton>Detect More</AccentButton>
    </div>
  );
};

export default DetectionResult;
