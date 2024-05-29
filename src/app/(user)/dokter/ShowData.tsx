/** @format */
"use client";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import PaginationDefault from "@/components/pagination/PaginationDefault";
import TablesDefault from "@/components/tables/TablesDefault";
import useJadwal from "@/stores/crud/Jadwal";
import { FC, useEffect, useState } from "react";

type Props = {
  search: string;
};

const ShowData: FC<Props> = ({ search }) => {
  const { setJadwal, dtJadwal } = useJadwal();
  // state
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchDataJadwal = async () => {
    const res = await setJadwal({
      page,
      limit,
      search,
    });
    setIsLoading(false);
  };
  useEffect(() => {
    fetchDataJadwal();

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit]);
  // ketika search berubah
  useEffect(() => {
    setPage(1);
    fetchDataJadwal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  // table
  const headTable = ["No", "Dokter", "Hari", "Jam Mulai", "Jam Selesai"];
  const tableBodies = ["dokter.nm_dokter", "hari", "jam_mulai", "jam_selesai"];
  return (
    <div className="flex-1 flex-col max-w-full h-full overflow-auto overflow-y-hidden">
      {isLoading ? (
        <LoadingSpiner />
      ) : (
        <>
          <TablesDefault
            headTable={headTable}
            tableBodies={tableBodies}
            dataTable={dtJadwal?.data as any}
            page={page}
            limit={limit}
            ubah={false}
            hapus={false}
          />
          {dtJadwal?.last_page > 1 && (
            <div className="mt-4">
              <PaginationDefault
                currentPage={dtJadwal?.current_page}
                totalPages={dtJadwal?.last_page}
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
