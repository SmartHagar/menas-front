/** @format */
"use client";
import { useCallback, useEffect, useState } from "react";

import ShowData from "./ShowData";
import ModalDelete from "@/components/modal/ModalDelete";
import useResep from "@/stores/crud/Resep";
import { Toaster } from "react-hot-toast";
import toastShow from "@/utils/toast-show";
import InputTextSearch from "@/components/input/InputTextSearch";
import BtnDefault from "@/components/button/BtnDefault";
import { useRouter, useSearchParams } from "next/navigation";

// type setDelete
type Delete = {
  id?: number | string;
  isDelete: boolean;
};

const Resep = () => {
  // store
  const { removeData } = useResep();
  // state
  const [showDelete, setShowDelete] = useState<boolean>(false);
  const [idDel, setIdDel] = useState<number | string>();
  const [search, setSearch] = useState("");

  // route
  const router = useRouter();

  const handleTambah = () => {
    router.push("/petugas/resep/form");
  };

  const setEdit = (row: any) => {
    router.push(`/petugas/resep/form?id=${row.id}`);
  };

  const setDelete = async ({ id, isDelete }: Delete) => {
    setIdDel(id);
    if (isDelete) {
      const { data } = await removeData(idDel);
      toastShow({
        event: data,
      });
      setShowDelete(false);
    } else setShowDelete(true);
  };

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
    <div className="flex flex-col h-full w-full">
      <div>
        <Toaster />
        <ModalDelete
          showDel={showDelete}
          setShowDel={setShowDelete}
          setDelete={setDelete}
        />
        <div className="mb-4 flex justify-between">
          <p>Silahkan Mengolah data Resep</p>
          <div>
            <BtnDefault onClick={handleTambah}>Tambah Data</BtnDefault>
          </div>
        </div>
        <InputTextSearch placeholder="Cari Resep" onChange={handleSearch} />
      </div>

      <ShowData setDelete={setDelete} setEdit={setEdit} />
    </div>
  );
};

export default Resep;
