/** @format */
"use client";
import InputTextDefault from "@/components/input/InputTextDefault";
import SelectFromDb from "@/components/select/SelectFromDB";
import useJenisApi from "@/stores/api/Jenis";
import React, { FC, useEffect } from "react";

import "react-datepicker/dist/react-datepicker.css";
import useSatuanApi from "../../../../stores/api/Satuan";
import InputRupiah from "@/components/input/InputRupiah";

type Props = {
  register: any;
  errors: any;
  dtEdit: any;
  control: any;
  watch: any;
  setValue: any;
  showModal: boolean;
};

const BodyForm: FC<Props> = ({
  register,
  errors,
  control,
  dtEdit,
  watch,
  setValue,
  showModal,
}) => {
  const { setJenisAll, dtJenis } = useJenisApi();
  const { setSatuanAll, dtSatuan } = useSatuanApi();

  // memanggil data jenis dan satuan
  const fetchDataJenis = async ({ search }: any) => {
    await setJenisAll({
      search,
    });

    await setSatuanAll({
      search,
    });
  };
  useEffect(() => {
    fetchDataJenis({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal]);
  return (
    <>
      <InputTextDefault
        label="Nama Obat"
        name="nama"
        register={register}
        required
        minLength={3}
        errors={errors.nama}
        addClass="col-span-4"
      />
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
          addClass="col-span-4 lg:col-span-2"
        />
      )}
      {dtSatuan?.data && (
        <SelectFromDb
          label="Satuan"
          placeholder="Pilih Satuan"
          name="satuan_id"
          dataDb={dtSatuan?.data}
          body={["id", "nama"]}
          control={control}
          required
          errors={errors.satuan_id}
          addClass="col-span-4 lg:col-span-2"
        />
      )}
      <InputRupiah
        label="Harga Obat"
        name="harga"
        control={control}
        required
        errors={errors.harga}
        addClass="col-span-4"
      />
    </>
  );
};

export default BodyForm;
