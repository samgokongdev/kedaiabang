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
        <div className="font-bold">Pesanan Saya</div>
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
        <div className="mb-5">
          <span className="font-lg">Pesanan Saya</span>
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <div className="flex flex-col justify-between rounded-lg border border-gray-700/50 p-4">
            <div className="text-xs">Invoice No : 202305101345</div>
            <div className="text-xs text-gray-400">
              Jumlah Pesanan : 3 Produk
            </div>
            <div className="py-2 text-lg font-bold">Rp66.000</div>
            <div className="text-xs bg-green-300 text-green-800 w-auto text-center rounded-full py-1">
              Selesai
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-lg border border-gray-700/50 p-4">
            <div className="text-xs">Invoice No : 202305101345</div>
            <div className="text-xs text-gray-400">
              Jumlah Pesanan : 3 Produk
            </div>
            <div className="py-2 text-lg font-bold">Rp66.000</div>
            <div className="text-xs bg-yellow-300 text-yellow-800 w-auto text-center rounded-full py-1">
              Proses
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-lg border border-gray-700/50 p-4">
            <div className="text-xs">Invoice No : 202305101345</div>
            <div className="text-xs text-gray-400">
              Jumlah Pesanan : 3 Produk
            </div>
            <div className="py-2 text-lg font-bold">Rp66.000</div>
            <div className="text-xs bg-red-300 text-red-800 w-auto text-center rounded-full py-1">
              Selesai
            </div>
          </div>
        </div>
      </section>

      <section className="h-20"></section>
    </main>
  );
}
