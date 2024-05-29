/** @format */
"use client";
import { useState } from "react";

import ShowData from "./ShowData";
import Form from "./form/Form";
import ModalDelete from "@/components/modal/ModalDelete";
import { Toaster } from "react-hot-toast";
import toastShow from "@/utils/toast-show";
import BtnDefault from "@/components/button/BtnDefault";
import { useForm } from "react-hook-form";
import Cari from "@/components/bar/Cari";
import useJadwal from "@/stores/crud/Jadwal";
import InputTextSearch from "@/components/input/InputTextSearch";

// type setDelete
type Delete = {
  id?: number | string;
  isDelete: boolean;
};

const Jadwal = () => {
  // store
  const { removeData } = useJadwal();
  // state
  const [showModal, setShowModal] = useState(false);
  const [showDelete, setShowDelete] = useState<boolean>(false);
  const [idDel, setIdDel] = useState<number | string>();
  const [dtEdit, setDtEdit] = useState<any>();

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
      const { data } = await removeData(idDel as number);
      toastShow({
        event: data,
      });
      setShowDelete(false);
    } else setShowDelete(true);
  };

  // hook form
  const {
    register,
    control,
    formState: { errors },
    watch,
    setValue,
  } = useForm();

  const cariWatch = watch("cari");

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

        <Cari cariWatch={cariWatch} setValue={setValue} time={500} />

        <div className="mb-4 flex justify-between">
          <p>Silahkan Mengolah data Jadwal</p>
          <div>
            <BtnDefault onClick={handleTambah}>Tambah Data</BtnDefault>
          </div>
        </div>
        <InputTextSearch
          placeholder="Cari Dokter"
          onChange={(cari) => setValue("cari", cari)}
        />
      </div>

      <ShowData setDelete={setDelete} setEdit={setEdit} search={cariWatch} />
    </div>
  );
};

export default Jadwal;
