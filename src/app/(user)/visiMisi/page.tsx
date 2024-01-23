/** @format */

import React from "react";

type Props = {};

const Tentang = (props: Props) => {
  return (
    <div className="flex flex-col gap-4 w-full max-w-screen-xl mx-auto">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold"> VISI DAN MISI</h1>
        <h1 className="text-3xl font-bold"> PUSKESMAS HOM-HOM</h1>
      </div>
      <div className="mt-4">
        <h1 className="text-3xl font-bold text-center uppercase"> Visi</h1>
        <p className="uppercase text-center text-2xl">
          puskesmas bikin masyarakat sehat dan mandiri
        </p>
      </div>
      <div className="flex flex-col items-center mt-4 gap-2">
        <h1 className="text-3xl font-bold text-center uppercase"> Misi</h1>
        <ul className="list-decimal list-inside text-2xl">
          <li>Menciptakan kemandirian masyrakat hidup sehat</li>
          <li>Memelihara dan meningkatkan pelayanan kesehatan yang bermutu</li>
          <li>
            Memelihara dan meningkatkan pelayanan kesehatan yang menyeluruh
            terpadu dan terjangkau
          </li>
          <li>
            Menyediakan sarana prasarana yang menunjang pelayanan kesehatan
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Tentang;
