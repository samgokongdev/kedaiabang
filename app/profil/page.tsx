import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container pt-10">
      <nav className="flex justify-between items-center">
        <div>
          <Link href={"/"}>
            <Image
              src="/back.svg"
              width={35}
              height={35}
              alt="Picture of the author"
            />
          </Link>
        </div>
        <div className="font-bold">Profil Saya</div>
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
        </div>
      </nav>
      <section className="mt-10">
        <div className="grid grid-cols-1 gap-3">
          <div className="flex items-center justify-between w-full rounded-lg border border-gray-700/50 p-4">
            <span>Pesanan Saya</span>
            <span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.29303 14.707C7.10556 14.5195 7.00024 14.2652 7.00024 14C7.00024 13.7348 7.10556 13.4805 7.29303 13.293L10.586 10L7.29303 6.70701C7.11087 6.51841 7.01008 6.26581 7.01236 6.00361C7.01463 5.74141 7.1198 5.4906 7.30521 5.30519C7.49062 5.11978 7.74143 5.01461 8.00363 5.01234C8.26583 5.01006 8.51843 5.11085 8.70703 5.29301L12.707 9.29301C12.8945 9.48054 12.9998 9.73485 12.9998 10C12.9998 10.2652 12.8945 10.5195 12.707 10.707L8.70703 14.707C8.5195 14.8945 8.26519 14.9998 8.00003 14.9998C7.73487 14.9998 7.48056 14.8945 7.29303 14.707Z"
                  fill="black"
                />
              </svg>
            </span>
          </div>

          <div className="flex items-center justify-between w-full rounded-lg border border-gray-700/50 p-4">
            <span>Profil Saya</span>
            <span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.29303 14.707C7.10556 14.5195 7.00024 14.2652 7.00024 14C7.00024 13.7348 7.10556 13.4805 7.29303 13.293L10.586 10L7.29303 6.70701C7.11087 6.51841 7.01008 6.26581 7.01236 6.00361C7.01463 5.74141 7.1198 5.4906 7.30521 5.30519C7.49062 5.11978 7.74143 5.01461 8.00363 5.01234C8.26583 5.01006 8.51843 5.11085 8.70703 5.29301L12.707 9.29301C12.8945 9.48054 12.9998 9.73485 12.9998 10C12.9998 10.2652 12.8945 10.5195 12.707 10.707L8.70703 14.707C8.5195 14.8945 8.26519 14.9998 8.00003 14.9998C7.73487 14.9998 7.48056 14.8945 7.29303 14.707Z"
                  fill="black"
                />
              </svg>
            </span>
          </div>

          <div>
            <button className="w-full p-4 bg-[#2E302F] text-[#FEFEFE] rounded-lg">
              SIGN OUT
            </button>
          </div>
        </div>
      </section>

      <section className="h-20"></section>
    </main>
  );
}
