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
        <div className="font-bold text-2xl">Checkout</div>
        <div className="w-[35px]"></div>
      </nav>
      <section className="mt-10">
        <div className="grid grid-cols-1 gap-4">
          <div className="flex flex-col items-center justify-center">
            <div>
              <p className="text-gray-500 text-center">
                Silahkan Melakukan Pembayaran Melalui QRIS berikut :
              </p>
            </div>
            <div className="mt-10">
              <Image
                src="/qris.svg"
                width={200}
                height={200}
                alt="Picture of the author"
              />
            </div>
            <div className="mt-12">
              <p className="font-medium text-center">Jumlah Pembayaran</p>
              <p className="text-5xl text-center font-bold">Rp66.000</p>
            </div>
          </div>
          <div className="flex items-center justify-center mt-10">
            <button className="px-6 py-3 bg-[#2E302F] text-[#FEFEFE] rounded-lg">
              KONFIRMASI PEMBAYARAN
            </button>
          </div>
        </div>
      </section>

      <section className="h-20"></section>
    </main>
  );
}
