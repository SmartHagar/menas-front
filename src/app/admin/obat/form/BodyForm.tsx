/** @format */
"use client";
import InputDate from "@/components/input/InputDate";
import InputFile from "@/components/input/InputFile";
import InputRadio from "@/components/input/InputRadio";
import InputTextDefault from "@/components/input/InputTextDefault";
import { SelectDefault } from "@/components/select/SelectDefault";
import SelectFromDb from "@/components/select/SelectFromDB";
import useJenisApi from "@/stores/api/Jenis";
import React, { FC, useEffect } from "react";

import "react-datepicker/dist/react-datepicker.css";

type Props = {
  register: any;
  errors: any;
  dtEdit: any;
  control: any;
  watch: any;
  setValue: any;
  showModal: boolean;
  myFile: any;
  setMyFile: any;
};

const BodyForm: FC<Props> = ({
  register,
  errors,
  control,
  dtEdit,
  watch,
  setValue,
  showModal,
  myFile,
  setMyFile,
}) => {
  const { setJenisAll, dtJenis } = useJenisApi();
  // memanggil data jenis
  const fetchDataJenis = async ({ search }: any) => {
    await setJenisAll({
      search,
    });
  };
  useEffect(() => {
    fetchDataJenis({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal]);
  return (
    <>
      {dtJenis?.data && (
        <SelectFromDb
          label="Jenis"
          placeholder="Pilih Jenis"
          name="jenis_id"
          dataDb={dtJenis?.data}
          body={["id", "nama"]}
          control={control}
          required
          errors={errors.jenis_id}
          addClass="col-span-4"
        />
      )}

      <InputTextDefault
        label="Nama Obat"
        name="nama"
        register={register}
        required
        minLength={3}
        errors={errors.nama}
        addClass="col-span-4 lg:col-span-2"
      />

      <SelectDefault
        label="Satuan"
        defaultOption="Pilih Satuan"
        register={register}
        errors={errors}
        name="satuan"
        options={[
          { value: "Ampul", label: "Ampul" },
          { value: "Tablet", label: "Tablet" },
          { value: "Kapsul", label: "Kapsul" },
          { value: "Kantong", label: "Kantong" },
          { value: "Vial", label: "Vial" },
          { value: "Botol", label: "Botol" },
        ]}
        addClass="col-span-4 lg:col-span-2"
      />

      <InputFile
        label="Gambar"
        name="gambar"
        register={register}
        accept="image/*"
        errors={errors.gambar}
        addClass="col-span-4"
        setValue={setValue}
        fileEdit={dtEdit?.gambar}
        myFile={myFile}
        setMyFile={setMyFile}
        required
      />
    </>
  );
};

export default BodyForm;
