/** @format */
"use client";
import { useState } from "react";

import ShowData from "./ShowData";
import BtnDefault from "@/components/button/BtnDefault";
import { BASE_URL } from "@/services/baseURL";

const ObatKeluar = () => {
  const [search, setSearch] = useState("");

  const handleCetak = () => {
    const link = `${BASE_URL}/laporan/obatKeluar`;
    // open link new tap
    window.open(link, "_blank");
  };

  return (
    <div className="flex flex-col h-full w-full">
      <div>
        <div className="mb-4 flex justify-between">
          <p>Data ObatKeluar</p>
          <div>
            <BtnDefault onClick={handleCetak}>Cetak</BtnDefault>
          </div>
        </div>
      </div>

      <ShowData search={search} />
    </div>
  );
};

export default ObatKeluar;
