import Image from "next/image";
import React from "react";

type PageProps = {
  title: string;
  harga: number;
  kemasan: string;
  imageLink: string;
};

function ShopCard({ title, harga, kemasan, imageLink }: PageProps) {
  const nominal = harga;
  const price = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(nominal);

  return (
    <div className="flex items-center justify-between w-full border-gray-600 border-2 rounded-lg px-4 py-3 hover:">
      <div className="flex space-x-4">
        <div>
          <Image
            src={imageLink}
            width={56}
            height={62}
            alt="Picture of the author"
            className="rounded-md"
          />
        </div>
        <div>
          <div>{title}</div>
          <div className="font-bold text-xl">{price}</div>
          <div className="text-xs text-gray-700/60">Kemasan : {kemasan}</div>
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
  );
}

export default ShopCard;
