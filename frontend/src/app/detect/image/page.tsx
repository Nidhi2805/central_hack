import AccentButton from "@/components/accent-button";
// import { StaticImageData } from "next/image";
import Image from "next/image";

// interface DetectImagePageProps {
//   image: StaticImageData;
//   outputImage: StaticImageData;
//   alt?: string;
// }

const DetectImagePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-16 justify-center h-[80vh]">
      <div className="bg-background-secondary rounded-[36px] flex flex-row w-fit px-6 py-12 gap-11 border-2 border-neutral">
        <Image
          src={"/temp/mugshot.png"}
          alt="my-goat"
          width={287}
          height={372}
        />
        <Image
          src={"/temp/crazy-mugshot.png"}
          alt="my-goat"
          width={287}
          height={372}
        />
      </div>
      <div className="flex flex-col gap-6 items-center">
        <Image
          src="/alert.svg"
          alt="This is AI generated"
          width={350}
          height={10}
        />
        <AccentButton>Detect More</AccentButton>
      </div>
    </div>
  );
};

export default DetectImagePage;
