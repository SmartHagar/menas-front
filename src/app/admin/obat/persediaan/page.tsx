/** @format */
"use client";
import { useState } from "react";

import ShowData from "./ShowData";
import { Toaster } from "react-hot-toast";
import InputTextSearch from "@/components/input/InputTextSearch";

// type setDelete
type Delete = {
  id?: number | string;
  isDelete: boolean;
};

const ObatMasuk = () => {
  // state
  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-col h-full w-full">
      <div>
        <Toaster />
        <div className="mb-4 flex justify-between">
          <p>Silahkan Mengolah data ObatMasuk</p>
        </div>
        <InputTextSearch
          placeholder="Cari ObatMasuk"
          onChange={(e) => setSearch(e)}
        />
      </div>

      <ShowData search={search} />
    </div>
  );
};

export default ObatMasuk;
