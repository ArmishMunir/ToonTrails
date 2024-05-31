import Image from "next/image";
import Button from "./Button";
function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-3 bg-zinc-900">
      <div className="flex flex-row gap-3 justify-between items-center">
        <div className="cursor-pointer hover:animate-ping ">
          <Image src="/logo.png" alt="logo" width={70} height={70} />
        </div>
        <p className="text-2xl italic font-bold">Toon Trails</p>
      </div>

      <Button text="Play Now" />
    </nav>
  );
}

export default Navbar;
