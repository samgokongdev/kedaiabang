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
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-6">
          <div className="flex flex-col space-y-5">
            <div className="w-full h-[360px] sm:h-[480px] relative">
              <Image
                alt="thaitea"
                src="/thaitea.jpg"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="mt-5 sm:mt-0">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-gray-800">
                Thai Milk Tea
              </div>
              <div>
                <p className="text-xs text-gray-600 text-justify">
                  Thai Milk Tea terbuat dari campuran teh hitam, susu, gula, dan
                  rempah-rempah seperti kayu manis, jahe, dan biji pala. Minuman
                  ini memiliki rasa manis dan creamy yang disukai banyak orang.
                  Sajikan dengan es batu untuk memperoleh sensasi yang
                  menyegarkan.
                </p>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center space-x-4 mt-8">
                <button>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25 20H15M35 20C35 21.9698 34.612 23.9204 33.8582 25.7403C33.1044 27.5601 31.9995 29.2137 30.6066 30.6066C29.2137 31.9995 27.5601 33.1044 25.7403 33.8582C23.9204 34.612 21.9698 35 20 35C18.0302 35 16.0796 34.612 14.2597 33.8582C12.4399 33.1044 10.7863 31.9995 9.3934 30.6066C8.00052 29.2137 6.89563 27.5601 6.14181 25.7403C5.38799 23.9204 5 21.9698 5 20C5 16.0218 6.58035 12.2064 9.3934 9.3934C12.2064 6.58035 16.0218 5 20 5C23.9782 5 27.7936 6.58035 30.6066 9.3934C33.4196 12.2064 35 16.0218 35 20Z"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <span className="text-4xl font-bold">1</span>
                <button>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 15V20M20 20V25M20 20H25M20 20H15M35 20C35 21.9698 34.612 23.9204 33.8582 25.7403C33.1044 27.5601 31.9995 29.2137 30.6066 30.6066C29.2137 31.9995 27.5601 33.1044 25.7403 33.8582C23.9204 34.612 21.9698 35 20 35C18.0302 35 16.0796 34.612 14.2597 33.8582C12.4399 33.1044 10.7863 31.9995 9.3934 30.6066C8.00052 29.2137 6.89563 27.5601 6.14181 25.7403C5.38799 23.9204 5 21.9698 5 20C5 16.0218 6.58035 12.2064 9.3934 9.3934C12.2064 6.58035 16.0218 5 20 5C23.9782 5 27.7936 6.58035 30.6066 9.3934C33.4196 12.2064 35 16.0218 35 20Z"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex items-center justify-center mt-6 mb-8">
                <span className="font-black text-xl"> Rp16.000</span>
              </div>
              <div className="flex mt-3">
                <button className="w-full bg-[#2E302F] text-[#FEFEFE] font-bold tracking-wide px-4 py-2 rounded-lg">
                  TAMBAHKAN
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="h-20"></section>
    </main>
  );
}
