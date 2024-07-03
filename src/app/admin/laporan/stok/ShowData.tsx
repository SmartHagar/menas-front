/** @format */
"use client";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import PaginationDefault from "@/components/pagination/PaginationDefault";
import TablesDefault from "@/components/tables/TablesDefault";
import useObatMasukApi from "@/stores/api/ObatMasuk";
import hitungStok from "@/utils/HitungStokObat";
import { useSearchParams } from "next/navigation";
import { FC, useCallback, useEffect, useState } from "react";

const ShowData: FC = () => {
  const { setObatMasuk } = useObatMasukApi();
  // state
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [dtObat, setDtObat] = useState<any>([]);
  // search params
  const searchParams = useSearchParams();
  const sortby = searchParams.get("sortby") || "";
  const order = searchParams.get("order") || "";
  const getSearch = searchParams.get("search") || "";

  const fetchDataObat = useCallback(async () => {
    const res = await setObatMasuk({
      page,
      limit,
      search: getSearch,
      sortby,
      order,
    });
    setDtObat(hitungStok(res?.data));
    setIsLoading(false);
  }, [page, limit, getSearch, sortby, order, setObatMasuk]);
  useEffect(() => {
    fetchDataObat();
    return () => {};
  }, [page, limit, fetchDataObat]);
  // ketika search berubah
  useEffect(() => {
    setPage(1);
    fetchDataObat();
  }, [getSearch, sortby, order, fetchDataObat]);

  // table
  const headTable = ["No", "Nama", "Jenis Obat", "Tgl. Kadaluarsa", "Stok"];
  const tableBodies = [
    "obat.nm_obat",
    "obat.jenis.nama",
    "tgl_kadaluarsa",
    "totalStok",
  ];
  return (
    <div className="flex-1 flex-col max-w-full h-full overflow-auto">
      {isLoading ? (
        <LoadingSpiner />
      ) : (
        <>
          <div className="">
            <TablesDefault
              headTable={headTable}
              tableBodies={tableBodies}
              dataTable={dtObat.data}
              page={page}
              limit={limit}
              ubah={false}
              hapus={false}
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
        </>
      )}
    </div>
  );
};

export default ShowData;
