/** @format */
"use client";
import { BASE_URL } from "@/services/baseURL";
import ShowData from "./ShowData";
import BtnDefault from "@/components/button/BtnDefault";

// type setDelete
type Delete = {
  id?: number | string;
  isDelete: boolean;
};

const StokObat = () => {
  const handleCetak = () => {
    const link = `${BASE_URL}/laporan/stokObat`;
    // open link new tap
    window.open(link, "_blank");
  };
  return (
    <div className="flex flex-col h-full w-full">
      <div>
        <div className="mb-4 flex justify-between">
          <p>Data Stok Obat</p>
          <div>
            <BtnDefault onClick={handleCetak}>Cetak</BtnDefault>
          </div>
        </div>
      </div>

      <ShowData />
    </div>
  );
};

export default StokObat;
