/** @format */

import Image from "next/image";

type Props = {};

const Tentang = (props: Props) => {
  return (
    <div className="flex flex-col gap-4 w-full max-w-screen-xl mx-auto">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold">STRUKTUR ORGANISASI</h2>
        <h2 className="text-2xl font-bold">PUSKESMAS HOM-HOM</h2>
      </div>
      <Image
        src="/images/Menas-Struktur-Organisasi.png"
        alt="struktur"
        width={300}
        height={300}
        className="mx-auto"
      />
    </div>
  );
};

export default Tentang;
