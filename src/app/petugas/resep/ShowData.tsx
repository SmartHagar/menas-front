/** @format */
"use client";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import PaginationDefault from "@/components/pagination/PaginationDefault";
import TablesDefault from "@/components/tables/TablesDefault";
import useResep from "@/stores/crud/Resep";
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
  const { setResep, dtResep } = useResep();
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
  const fetchDataResep = async () => {
    const res = await setResep({
      page,
      limit,
      search: searchQuery,
      sortby,
      order,
    });
    setIsLoading(false);
  };
  useEffect(() => {
    fetchDataResep();

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit, searchParams]);
  // ketika search berubah
  useEffect(() => {
    setPage(1);
    fetchDataResep();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery, searchParams]);

  // table
  const headTable = [
    "No",
    "Nama Resep",
    "Tgl. Lahir",
    "Jenkel",
    "No. HP",
    "Alamat",
    "Aksi",
  ];
  const tableBodies = ["nm_resep", "tgl_lahir", "jenkel", "no_hp", "alamat"];

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
              dataTable={dtResep.data}
              page={page}
              limit={limit}
              setEdit={setEdit}
              setDelete={setDelete}
              ubah={true}
              hapus={true}
            />
          </div>
          {dtResep?.last_page > 1 && (
            <div className="mt-4">
              <PaginationDefault
                currentPage={dtResep?.current_page}
                totalPages={dtResep?.last_page}
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
