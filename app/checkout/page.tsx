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
        <form>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div className="space-y-4">
              {/* NAMA PEMESAN   */}
              <div className="flex flex-col space-y-2">
                <label className="font-bold">Nama Pemesan</label>
                <input
                  type="text"
                  className="border-black/50 border text-gray-700 font-semibold text-xs rounded-lg py-4 px-3 bg-[#FEFEFE] w-full focus:outline-none focus:border-black/70 focus:ring-1 focus:ring-black/70"
                  placeholder="Contoh : John Doe"
                />
              </div>
              {/* ALAMAT PEMESAN   */}
              <div className="flex flex-col space-y-2">
                <label className="font-bold">Alamat Pemesan</label>
                <select className="border-black/50 border text-gray-700 font-semibold text-xs rounded-lg py-4 px-3 bg-[#FEFEFE] w-full focus:outline-none focus:border-black/70 focus:ring-1 focus:ring-black/70">
                  <option>
                    Silahkan Pilih dari beberapa alamat di bawah ini
                  </option>
                  <option value="Gedung Radjiman Widyodiningrat, Sudirman, Jakarta">
                    Gedung Radjiman Widyodiningrat, Sudirman, Jakarta
                  </option>
                  <option value="Gedung Radjiman Widyodiningrat, Sudirman, Jakarta">
                    Mandiri Tower, Sudirman, Jakarta
                  </option>
                </select>
              </div>
              <div className="flex flex-col space-y-2">
                <label className="font-bold">Nomor Whatsapp</label>
                <input
                  type="text"
                  className="border-black/50 border text-gray-700 font-semibold text-xs rounded-lg py-4 px-3 bg-[#FEFEFE] w-full focus:outline-none focus:border-black/70 focus:ring-1 focus:ring-black/70"
                  placeholder="Contoh : 08*********0"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="font-bold">Catatan</label>
                <textarea
                  id="message"
                  className="border-black/50 border text-gray-700 font-semibold text-xs rounded-lg py-4 px-3 bg-[#FEFEFE] w-full focus:outline-none focus:border-black/70 focus:ring-1 focus:ring-black/70"
                  placeholder="isikan catatan terkait pengiriman, Contoh : titip di receptionist"
                  rows={4}
                ></textarea>
              </div>
            </div>
            <div>
              <div className="space-y-4">
                <span className="font-bold">Konfirmasi Pesanan Anda</span>
                <div className="flex flex-col">
                  <div className="flex justify-between">
                    <span>Thai Milk Tea (2)</span>
                    <span>Rp16.000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Choco Hazlenut (2)</span>
                    <span>Rp50.000</span>
                  </div>
                  <div>
                    <hr className="h-px my-3 border border-gray-700" />
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold">Total</span>
                    <span className="font-bold">Rp50.000</span>
                  </div>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-[#2E302F] px-4 py-2 mt-4 font-medium text-[#FEFEFE] rounded-md w-full"
                >
                  BAYAR SEKARANG
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>

      <section className="h-20"></section>
    </main>
  );
}
