import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-background-secondary text-white py-4 px-6 flex justify-between items-center sticky top-0 left-0 z-50">
      <div className="w-12"></div>
      <div className="flex items-center space-x-2">
        <Image src="/logo.svg" alt="Logo" width={40} height={40} />
        <h1 className="text-3xl font-bold bg-gradient-to-r from-[#2D27CD] to-[#8E9DD3] text-transparent bg-clip-text">
          SudoShield
        </h1>
      </div>
      <Link href={"/history"}>
        <Image src="/clock.svg" alt="Clock" width={50} height={50} />
      </Link>
    </nav>
  );
}
