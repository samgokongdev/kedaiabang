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
        <div className="font-bold text-2xl">Keranjang</div>
        <div>
          <Link href={"/"}>
            <Image
              src="/home.svg"
              width={35}
              height={35}
              alt="Picture of the author"
            />
          </Link>
        </div>
      </nav>
      <section className="mt-10">
        <div className="grid grid-cols-1 gap-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex items-center justify-between w-full border-gray-600 border-2 rounded-lg px-4 py-3 hover:">
              <div className="flex space-x-4">
                <div>
                  <Image
                    src="/thaitea.jpg"
                    width={56}
                    height={62}
                    alt="Picture of the author"
                    className="rounded-md"
                  />
                </div>
                <div>
                  <div>Thai Milk Tea</div>
                  <div className="font-bold text-xl">2pcs @16000</div>
                  <div className="text-xs text-gray-700/60">
                    Kemasan : Botol
                  </div>
                </div>
              </div>
              <div className="font-bold text-xl">Rp32.000</div>
            </div>

            <div className="flex items-center justify-between w-full border-gray-600 border-2 rounded-lg px-4 py-3 hover:">
              <div className="flex space-x-4">
                <div>
                  <Image
                    src="/thaitea.jpg"
                    width={56}
                    height={62}
                    alt="Picture of the author"
                    className="rounded-md"
                  />
                </div>
                <div>
                  <div>Thai Milk Tea</div>
                  <div className="font-bold text-xl">2pcs @16000</div>
                  <div className="text-xs text-gray-700/60">
                    Kemasan : Botol
                  </div>
                </div>
              </div>
              <div className="font-bold text-xl">Rp32.000</div>
            </div>

            <div className="flex items-center justify-between w-full border-gray-600 border-2 rounded-lg px-4 py-3 hover:">
              <div className="flex space-x-4">
                <div>
                  <Image
                    src="/thaitea.jpg"
                    width={56}
                    height={62}
                    alt="Picture of the author"
                    className="rounded-md"
                  />
                </div>
                <div>
                  <div>Thai Milk Tea</div>
                  <div className="font-bold text-xl">2pcs @16000</div>
                  <div className="text-xs text-gray-700/60">
                    Kemasan : Botol
                  </div>
                </div>
              </div>
              <div className="font-bold text-xl">Rp32.000</div>
            </div>
          </div>
          <div className="flex flex-col mt-10 sm:mt-5">
            <span className="font-medium text-xl text-right">
              Total Pesanan Anda :
            </span>
            <span className="font-bold text-3xl text-right">Rp66.000</span>
            <button className="bg-[#2E302F] px-4 py-2 mt-4 font-bold text-[#FEFEFE] rounded-md">
              CHECKOUT
            </button>
          </div>
        </div>
      </section>

      <section className="h-20"></section>
    </main>
  );
}
