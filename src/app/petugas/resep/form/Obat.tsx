/** @format */

import InputCheck from "@/components/input/InputCheck";
import InputTextSearch from "@/components/input/InputTextSearch";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import PaginationDefault from "@/components/pagination/PaginationDefault";
import TablesDefault from "@/components/tables/TablesDefault";
import useObatMasuk from "@/stores/crud/ObatMasuk";
import hitungStok from "@/utils/HitungStokObat";
import { useRouter, useSearchParams } from "next/navigation";
import React, { FC, useCallback, useEffect, useState } from "react";

type Props = {
  register: any;
  watch: any;
  setObatCek: any;
  obatCek: any;
};

const Obat: FC<Props> = ({ register, watch, setObatCek, obatCek }) => {
  // store
  const { setObatMasuk } = useObatMasuk();
  // state
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [dtObat, setDtObat] = useState<any>([]);
  const [search, setSearch] = useState("");
  // route
  const router = useRouter();
  // search params
  const searchParams = useSearchParams();

  const sortby = searchParams.get("sortby") || "";
  const order = searchParams.get("order") || "";
  const searchQuery = searchParams.get("search") || "";
  const fetchDataObat = async () => {
    const res = await setObatMasuk({
      page,
      limit,
      search: searchQuery,
      sortby,
      order,
    });
    setDtObat(hitungStok(res?.data));
    setIsLoading(false);
  };
  useEffect(() => {
    fetchDataObat();

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit, searchParams]);
  // ketika search berubah
  useEffect(() => {
    setPage(1);
    fetchDataObat();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery, searchParams]);

  // table
  const headTable = [
    "No",
    "Nama",
    "Jenis Obat",
    "Tgl. Kadaluarsa",
    "Stok",
    "Aksi",
  ];
  const tableBodies = [
    "obat.nm_obat",
    "obat.jenis.nama",
    "tgl_kadaluarsa",
    "totalStok",
  ];
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

  const handleChange = (e: any) => {
    const target = e.target.value;
    const parsedRow = JSON.parse(target);

    // Periksa apakah objek sudah ada di dalam obatCek
    const isAlreadyChecked = obatCek.some(
      (item: any) => item.id === parsedRow.id
    );

    if (isAlreadyChecked) {
      // Jika sudah ada, maka hapus objek tersebut dari obatCek
      const updatedObatCek = obatCek.filter(
        (item: any) => item.id !== parsedRow.id
      );
      setObatCek(updatedObatCek);
    } else {
      // Jika belum ada, tambahkan objek tersebut ke dalam obatCek
      setObatCek([...obatCek, parsedRow]);
    }
  };

  const costume = (row: any, index: number) => {
    return (
      <InputCheck
        id={row.id}
        name="cek"
        register={register}
        value={JSON.stringify(row)}
        onChange={handleChange}
        checked={obatCek.some((obat: any) => obat.id === row.id)} // Set nilai checked berdasarkan keberadaan item dalam obatCek
      />
    );
  };

  return (
    <div className="flex-1 flex-col h-full grow overflow-y-hidden">
      {isLoading ? (
        <LoadingSpiner />
      ) : (
        <div className="border bg-white rounded-lg">
          <div>
            <h2 className="text-center text-xl my-2">Cari dan Pilih Obat</h2>
            <hr />
            <InputTextSearch
              placeholder="Cari Obat"
              onChange={handleSearch}
              addClass="mt-4 mx-2"
              search={search}
              setSearch={setSearch}
            />
          </div>
          <div className="">
            <TablesDefault
              headTable={headTable}
              tableBodies={tableBodies}
              dataTable={dtObat.data}
              page={page}
              limit={limit}
              ubah={false}
              hapus={false}
              costume={costume}
            />
          </div>
          {dtObat?.last_page > 1 && (
            <div className="mt-4">
              <PaginationDefault
                currentPage={dtObat?.current_page}
                totalPages={dtObat?.last_page}
                setPage={setPage}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Obat;
