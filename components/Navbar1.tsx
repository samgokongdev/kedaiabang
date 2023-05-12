import Image from "next/image";

export default function Navbar1() {
  return (
    <nav className="flex justify-between items-center">
      <div>
        <Image
          src="/logo.svg"
          width={122.5}
          height={36}
          alt="Picture of the author"
        />
      </div>
      <div className="flex">
        <div className="relative flex">
          <Image
            src="/cart.svg"
            width={34}
            height={34}
            alt="Picture of the author"
          />
          <span className="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white text-xs font-bold  leading-tight text-center">
            5
          </span>
        </div>
        <div>
          <Image
            src="/profile.svg"
            width={34}
            height={34}
            alt="Picture of the author"
          />
        </div>
      </div>
    </nav>
  );
}
