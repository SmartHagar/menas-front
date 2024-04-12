/** @format */
"use client";
import React, { useCallback, useEffect, useState } from "react";
import ShowData from "./ShowData";
import InputTextSearch from "@/components/input/InputTextSearch";
import { useRouter, useSearchParams } from "next/navigation";

type Props = {};

const Tentang = (props: Props) => {
  const [search, setSearch] = useState("");

  // router
  const router = useRouter();

  // search params
  const searchParams = useSearchParams();
  const sortby = searchParams.get("sortby") || "";
  const order = searchParams.get("order") || "";
  const getSearch = searchParams.get("search") || "";
  // pertama kali render
  useEffect(() => {
    setSearch(getSearch);

    return () => {};
  }, [getSearch]);

  const handleSearch = useCallback(
    (cari: string) => {
      router.push(`?search=${cari}&sortby=${sortby}&order=${order}`);
    },
    [router, sortby, order]
  );
  // effect ketika search berubah
  useEffect(() => {
    handleSearch(search);

    return () => {};
  }, [handleSearch, search]);

  return (
    <div className="flex flex-col gap-4 w-full max-w-screen-xl mx-auto">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold">DAFTAR STOK OBAT</h2>
        <h2 className="text-2xl font-bold">PUSKESMAS HOM-HOM</h2>
      </div>
      <div>
        <InputTextSearch
          placeholder="Cari Resep"
          onChange={handleSearch}
          setSearch={setSearch}
          search={search}
        />
      </div>
      <ShowData />
    </div>
  );
};

export default Tentang;
