/** @format */
"use client";
import InputTextDefault from "@/components/input/InputTextDefault";
import ModalDefault from "@/components/modal/ModalDefault";
import toastShow from "@/utils/toast-show";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import BodyForm from "./BodyForm";
import useResep from "@/stores/crud/Resep";
import BtnDefault from "@/components/button/BtnDefault";
import Cookies from "js-cookie";

type Props = {
  showModal: boolean;
  setShowModal: (data: boolean) => void;
  dtEdit: any;
};

type Inputs = {
  id: number | string;
  nm_resep: string;
  jenkel: string;
  tgl_resep: string | Date;
  no_hp: number | string;
  alamat: number | string;
};

const Form = ({ showModal, setShowModal, dtEdit }: Props) => {
  // store
  const { addData, updateData } = useResep();
  // state
  const [tgl_resep, setTgl_resep] = useState<string | Date>("");
  const [petugas, setPetugas] = useState<any>({});
  // get petugas form cookie
  useEffect(() => {
    const dtPetugas = JSON.parse(Cookies.get("petugas") || "{}");
    setPetugas(dtPetugas);
    return () => {};
  }, [showModal]);

  // hook form
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
    watch,
  } = useForm<Inputs>();

  // reset form
  const resetForm = () => {
    setValue("id", "");
    setValue("nm_resep", "");
    setValue("jenkel", "");
    setValue("tgl_resep", "");
    setValue("no_hp", "");
    setValue("alamat", "");
  };

  // data edit
  useEffect(() => {
    if (dtEdit) {
      setValue("id", dtEdit.id);
      setValue("nm_resep", dtEdit.nm_resep);
      setValue("jenkel", dtEdit.jenkel);
      setValue("tgl_resep", dtEdit.tgl_resep);
      setTgl_resep(new Date(dtEdit.tgl_resep));
      setValue("no_hp", dtEdit.no_hp);
      setValue("alamat", dtEdit.alamat);
    } else {
      resetForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal, dtEdit]);
  // simpan data
  const onSubmit: SubmitHandler<Inputs> = async (row) => {
    console.log({ row });
    // return;
    // jika dtEdit tidak kosong maka update
    if (dtEdit) {
      const { data } = await updateData(dtEdit.id, row);
      toastShow({
        event: data,
      });
      setShowModal(false);
    } else {
      const { data } = await addData(row);
      console.log({ data });
      toastShow({
        event: data,
      });
      data?.type !== "success" ? null : resetForm();
    }
  };

  return (
    <ModalDefault
      title={`Resep - ${petugas.nm_petugas}`}
      showModal={showModal}
      setShowModal={setShowModal}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputTextDefault name="id" register={register} type="hidden" />

        <div className="grid grid-cols-4 gap-2 mb-4">
          <BodyForm
            register={register}
            errors={errors}
            dtEdit={dtEdit}
            control={control}
            watch={watch}
            setValue={setValue}
            showModal={showModal}
            tgl_resep={tgl_resep}
            setTgl_resep={setTgl_resep}
          />
        </div>
        <div>
          <BtnDefault onClick={handleSubmit(onSubmit)}>Simpan</BtnDefault>
        </div>
      </form>
    </ModalDefault>
  );
};

export default Form;
