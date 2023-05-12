import Navbar1 from "@/components/Navbar1";
import ShopCard from "@/components/ShopCard";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container pt-10">
      <Navbar1 />
      <section className="mt-10 space-y-2">
        <div className="text-xl font-bold">Rekomendasi</div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-3">
          <ShopCard
            title="Thai Milk Tea"
            harga={15000}
            kemasan="Botol 300ml"
            imageLink="/thaitea.jpg"
          />
        </div>
      </section>

      <section className="mt-10 space-y-2">
        <div className="text-xl font-bold">Semua Menu</div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-3">
          <ShopCard
            title="Thai Milk Tea"
            harga={15000}
            kemasan="Botol 300ml"
            imageLink="/thaitea.jpg"
          />
        </div>
      </section>
    </main>
  );
}
