/** @format */
"use client";
import React, { useCallback, useEffect, useState } from "react";

import ShowData from "./ShowData";
import Form from "./form/Form";
import ModalDelete from "@/components/modal/ModalDelete";
import useObat from "@/stores/crud/Obat";
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

const Obat = () => {
  // store
  const { removeData } = useObat();
  // state
  const [showModal, setShowModal] = useState(false);
  const [showDelete, setShowDelete] = useState<boolean>(false);
  const [idDel, setIdDel] = useState<number | string>();
  const [dtEdit, setDtEdit] = useState<any>();
  const [search, setSearch] = useState("");

  // route
  const router = useRouter();

  const handleTambah = () => {
    setShowModal(true);
    setDtEdit(null);
  };

  const setEdit = (row: any) => {
    setShowModal(true);
    setDtEdit(row);
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
        <Form
          dtEdit={dtEdit}
          showModal={showModal}
          setShowModal={setShowModal}
        />
        <ModalDelete
          showDel={showDelete}
          setShowDel={setShowDelete}
          setDelete={setDelete}
        />
        <div className="mb-4 flex justify-between">
          <p>Silahkan Mengolah data Obat</p>
          <div>
            <BtnDefault onClick={handleTambah}>Tambah Data</BtnDefault>
          </div>
        </div>
        <InputTextSearch
          placeholder="Cari Obat"
          onChange={handleSearch}
          search={search}
          setSearch={setSearch}
        />
      </div>

      <ShowData setDelete={setDelete} setEdit={setEdit} />
    </div>
  );
};

export default Obat;
