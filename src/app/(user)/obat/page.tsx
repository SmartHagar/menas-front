/** @format */
"use client";
import { useCallback, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import useObatApi from "@/stores/api/Obat";
import GrafikStock from "@/components/grafik/GrafikStock";

type Props = {};

const Obat = (props: Props) => {
  const [search, setSearch] = useState("");

  // router
  const router = useRouter();
  // store
  const { setStock, dtStock } = useObatApi();
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

  // fetch data
  const fetchData = useCallback(async () => {
    try {
      await setStock({});
    } catch (error) {
      console.error("Failed to fetch stock data:", error);
    }
  }, [setStock]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

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
    <div className="flex flex-col gap-4 w-full max-w-screen-xl mx-auto mb-10">
      <div>
        <h2 className="text-2xl font-bold text-center">Grafik Stok Obat</h2>
        {dtStock && <GrafikStock dtStock={dtStock} />}
      </div>
      {/* <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold">DAFTAR STOK OBAT</h2>
        <h2 className="text-2xl font-bold">PUSKESMAS HOM-HOM</h2>
      </div>
      <div>
        <InputTextSearch placeholder="Cari Obat" onChange={handleSearch} />
      </div>
      <ShowData /> */}
    </div>
  );
};

export default Obat;
