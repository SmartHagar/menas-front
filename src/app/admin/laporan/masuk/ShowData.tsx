/** @format */
"use client";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import PaginationDefault from "@/components/pagination/PaginationDefault";
import TablesDefault from "@/components/tables/TablesDefault";
import useObatMasuk from "@/stores/crud/ObatMasuk";
import { FC, useEffect, useState } from "react";

type DeleteProps = {
  id?: number | string;
  isDelete: boolean;
};

type Props = {
  search: string;
};

const ShowData: FC<Props> = ({ search }) => {
  const { setObatMasuk, dtObatMasuk } = useObatMasuk();
  // state
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchDataObatMasuk = async () => {
    const res = await setObatMasuk({
      page,
      limit,
      search,
    });
    setIsLoading(false);
  };
  useEffect(() => {
    fetchDataObatMasuk();

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit]);
  // ketika search berubah
  useEffect(() => {
    setPage(1);
    fetchDataObatMasuk();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  // table
  const headTable = [
    "No",
    "Nama Obat",
    "Jumlah",
    "Layanan",
    "Tgl. Masuk",
    "Tgl. Kadaluarsa",
  ];
  const tableBodies = [
    "obat.nm_obat",
    "jumlah",
    "layanan",
    "tgl_masuk",
    "tgl_kadaluarsa",
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
              dataTable={dtObatMasuk.data}
              page={page}
              limit={limit}
              ubah={false}
              hapus={false}
            />
          </div>
          {dtObatMasuk?.last_page > 1 && (
            <div className="mt-4">
              <PaginationDefault
                currentPage={dtObatMasuk?.current_page}
                totalPages={dtObatMasuk?.last_page}
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
