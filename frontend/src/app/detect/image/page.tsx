import { StaticImageData } from "next/image";
import Image from "next/image";

interface DetectImagePageProps {
  image: StaticImageData;
  outputImage: StaticImageData;
  alt?: string;
}

const DetectImagePage: React.FC<DetectImagePageProps> = ({
  image,
  outputImage,
  alt,
}) => {
  return (
    <>
      <div className="bg-neutral">
        <Image src={image} alt={alt || "uploaded image"} />
        <Image src={outputImage} alt={"output image"} />
      </div>
    </>
  );
};

export default DetectImagePage;
