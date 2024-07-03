/** @format */
"use client";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import PaginationDefault from "@/components/pagination/PaginationDefault";
import TablesDefault from "@/components/tables/TablesDefault";
import useObatKeluar from "@/stores/crud/ObatKeluar";
import { FC, useEffect, useState } from "react";

type DeleteProps = {
  id?: number | string;
  isDelete: boolean;
};

type Props = {
  search: string;
};

const ShowData: FC<Props> = ({ search }) => {
  const { setObatKeluar, dtObatKeluar } = useObatKeluar();
  // state
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchDataObatKeluar = async () => {
    const res = await setObatKeluar({
      page,
      limit,
      search,
    });
    setIsLoading(false);
  };
  useEffect(() => {
    fetchDataObatKeluar();

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit]);
  // ketika search berubah
  useEffect(() => {
    setPage(1);
    fetchDataObatKeluar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  // table
  const headTable = [
    "No",
    "Nama Obat",
    "Satuan",
    "Jenis",
    "Jumlah",
    "Tgl. Keluar",
  ];
  const tableBodies = [
    "obat_masuk.obat.nm_obat",
    "obat_masuk.obat.satuan.nama",
    "obat_masuk.obat.jenis.nama",
    "jumlah",
    "resep.tgl_resep",
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
              dataTable={dtObatKeluar.data}
              page={page}
              limit={limit}
              ubah={false}
              hapus={false}
            />
          </div>
          {dtObatKeluar?.last_page > 1 && (
            <div className="mt-4">
              <PaginationDefault
                currentPage={dtObatKeluar?.current_page}
                totalPages={dtObatKeluar?.last_page}
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
