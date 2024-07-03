/** @format */
"use client";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import PaginationDefault from "@/components/pagination/PaginationDefault";
import TablesDefault from "@/components/tables/TablesDefault";
import useResep from "@/stores/crud/Resep";
import { useSearchParams } from "next/navigation";
import { FC, useEffect, useState } from "react";
import CetakResep from "./CetakResep";
import { BsInfoCircleFill } from "react-icons/bs";
import ModalDefault from "@/components/modal/ModalDefault";

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
  const [showModalCetak, setShowModalCetak] = useState<boolean>(false);
  const [row, setRow] = useState<any>();
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
    "Kode",
    "Tgl. Resep",
    "Dokter",
    "Pasien",
    "Diagnosa",
    "Aturan",
    "Petugas",
    "Aksi",
  ];
  const tableBodies = [
    "kode_resep",
    "tgl_resep",
    "dokter.nm_dokter",
    "pasien.nm_pasien",
    "diagnosa",
    "aturan_obat",
    "petugas.nm_petugas",
  ];

  const costume = (row: any) => {
    return (
      <BsInfoCircleFill
        className="cursor-pointer select-none"
        onClick={() => handlePrint(row)}
      />
    );
  };

  const handlePrint = (row: any) => {
    setShowModalCetak(true);
    setRow(row);
  };

  return (
    <div className="flex-1 flex-col max-w-full h-full grow overflow-auto">
      <ModalDefault
        title={`Resep ${row?.pasien.nm_pasien}`}
        showModal={showModalCetak}
        setShowModal={setShowModalCetak}
      >
        <CetakResep data={row} />
      </ModalDefault>
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
              costume={costume}
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
