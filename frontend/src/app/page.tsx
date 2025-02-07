import AccentButton from "@/components/accent-button";
import Navbar from "../components/navbar";
import Image from "next/image";

const LandingPage = () => {
  return (
    <main>
      <div className="flex flex-row justify-center items-center h-[50vh] mt-20">
        <Image
          src="/hero-image.png"
          width={747}
          height={481}
          alt="Man with a lens"
          className="justify-center"
        />
      </div>

      <div className="flex flex-col gap-6 items-center mt-8">
        <p className="font-black text-3xl">
          See Through the Fake—Detect Deepfakes Here.
        </p>
        <AccentButton>Sign in with Google</AccentButton>
      </div>
    </main>
  );
};

export default LandingPage;
