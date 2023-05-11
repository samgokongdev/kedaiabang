import Image from "next/image";

export default function Home() {
  return (
    <main className="container pt-10">
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
      <section className="mt-10 space-y-2">
        <div className="text-xl font-bold">Rekomendasi</div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-3">
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
                <div className="font-bold text-xl">Rp16.000</div>
                <div className="text-xs text-gray-700/60">Kemasan : Botol</div>
              </div>
            </div>
            <div>
              <Image
                src="/plus.svg"
                width={30}
                height={30}
                alt="Picture of the author"
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 space-y-2">
        <div className="text-xl font-bold">Semua Menu</div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-3">
          <div className="flex items-center justify-between w-full  border-gray-600 border-2 rounded-lg px-4 py-3">
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
                <div className="font-bold text-xl">Rp16.000</div>
                <div className="text-xs text-gray-700/60">Kemasan : Botol</div>
              </div>
            </div>
            <div>
              <Image
                src="/plus.svg"
                width={30}
                height={30}
                alt="Picture of the author"
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
