/** @format */
"use client";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import PaginationDefault from "@/components/pagination/PaginationDefault";
import TablesDefault from "@/components/tables/TablesDefault";
import useObat from "@/stores/crud/Obat";
import { useSearchParams } from "next/navigation";
import React, { FC, useEffect, useState } from "react";

type DeleteProps = {
  id?: number | string;
  isDelete: boolean;
};

type Props = {
  setDelete: ({ id, isDelete }: DeleteProps) => void;
  setEdit: (row: any) => void;
};

const ShowData: FC<Props> = ({ setDelete, setEdit }) => {
  const { setObat, dtObat, setShowObat, showObat } = useObat();
  // state
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [height, setHeight] = useState<number>(0);
  // search params
  const searchParams = useSearchParams();

  const sortby = searchParams.get("sortby") || "";
  const order = searchParams.get("order") || "";
  const searchQuery = searchParams.get("search") || "";
  const fetchDataObat = async () => {
    const res = await setObat({
      page,
      limit,
      search: searchQuery,
      sortby,
      order,
    });
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
  const headTable = ["No", "Jenis Obat", "Nama", "Satuan", "Harga", "Aksi"];
  const tableBodies = ["jenis.nama", "nm_obat", "satuan.nama", "harga"];

  return (
    <div className="flex-1 flex-col max-w-full h-full grow overflow-auto">
      {isLoading ? (
        <LoadingSpiner />
      ) : (
        <div className="h-1/2">
          <div className="">
            <TablesDefault
              headTable={headTable}
              tableBodies={tableBodies}
              dataTable={dtObat.data}
              page={page}
              limit={limit}
              setEdit={setEdit}
              setDelete={setDelete}
              ubah={true}
              hapus={true}
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

export default ShowData;
