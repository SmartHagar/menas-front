/** @format */
"use client";
import InputTextDefault from "@/components/input/InputTextDefault";
import ModalDefault from "@/components/modal/ModalDefault";
import toastShow from "@/utils/toast-show";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import BodyForm from "./BodyForm";
import useObatMasuk from "@/stores/crud/ObatMasuk";
import BtnDefault from "@/components/button/BtnDefault";

type Props = {
  showModal: boolean;
  setShowModal: (data: boolean) => void;
  dtEdit: any;
};

type Inputs = {
  id: number | string;
  obat_id: number | string;
  jumlah: string | number;
  tgl_masuk: string | Date;
  tgl_kadaluarsa: string | Date;
  layanan: string;
};

const Form = ({ showModal, setShowModal, dtEdit }: Props) => {
  // store
  const { addData, updateData } = useObatMasuk();
  // state
  const [tgl_masuk, setTgl_masuk] = useState<string | Date>(new Date());
  const [tgl_kadaluarsa, setTgl_kadaluarsa] = useState<string | Date>();
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
    setValue("obat_id", "");
    setValue("jumlah", "");
    setValue("tgl_masuk", "");
    setTgl_masuk("");
    setTgl_kadaluarsa("");
    setValue("tgl_kadaluarsa", "");
    setValue("layanan", "");
  };

  // data edit
  useEffect(() => {
    if (dtEdit) {
      setValue("id", dtEdit.id);
      setValue("obat_id", dtEdit.obat_id);
      setValue("jumlah", dtEdit.jumlah);
      setValue("tgl_masuk", dtEdit.tgl_masuk);
      setTgl_masuk(new Date(dtEdit.tgl_masuk));
      setTgl_kadaluarsa(new Date(dtEdit.tgl_kadaluarsa));
      setValue("tgl_kadaluarsa", dtEdit.tgl_kadaluarsa);
      setValue("layanan", dtEdit.layanan);
    } else {
      resetForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal, dtEdit]);
  // simpan data
  const onSubmit: SubmitHandler<Inputs> = async (row) => {
    console.log({ row });
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
      title="Form ObatMasuk"
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
            tgl_masuk={tgl_masuk}
            setTgl_masuk={setTgl_masuk}
            tgl_kadaluarsa={tgl_kadaluarsa}
            setTgl_kadaluarsa={setTgl_kadaluarsa}
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
