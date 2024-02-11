/** @format */
"use client";
import InputDate from "@/components/input/InputDate";
import InputTextDefault from "@/components/input/InputTextDefault";
import { SelectDefault } from "@/components/select/SelectDefault";
import SelectFromDb from "@/components/select/SelectFromDB";
import useObatApi from "@/stores/api/Obat";
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
  tgl_masuk: any;
  setTgl_masuk: any;
  tgl_kadaluarsa: any;
  setTgl_kadaluarsa: any;
};

const BodyForm: FC<Props> = ({
  register,
  errors,
  control,
  dtEdit,
  watch,
  setValue,
  showModal,
  tgl_masuk,
  setTgl_masuk,
  tgl_kadaluarsa,
  setTgl_kadaluarsa,
}) => {
  const { setObatAll, dtObat } = useObatApi();
  // memanggil data obat
  const fetchDataObat = async ({ search }: any) => {
    await setObatAll({
      search,
    });
  };
  useEffect(() => {
    fetchDataObat({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal]);
  return (
    <>
      {dtObat?.data && (
        <SelectFromDb
          label="Obat"
          placeholder="Pilih Obat"
          name="obat_id"
          dataDb={dtObat?.data}
          body={["id", "nm_obat"]}
          control={control}
          required
          errors={errors.obat_id}
          addClass="col-span-4"
        />
      )}
      <InputTextDefault
        label="Jumlah"
        name="jumlah"
        register={register}
        required
        type="number"
        errors={errors.jumlah}
        addClass="col-span-4 lg:col-span-2"
      />
      <SelectDefault
        label="Layanan"
        defaultOption="Pilih Layanan"
        register={register}
        errors={errors}
        name="layanan"
        options={[
          { value: "IFK", label: "IFK" },
          { value: "BPJS", label: "BPJS" },
          { value: "Dll", label: "Dll" },
        ]}
        addClass="col-span-4 lg:col-span-2"
      />
      <InputDate
        label="Tgl. Masuk"
        name="tgl_masuk"
        control={control}
        startDate={tgl_masuk}
        setStartDate={setTgl_masuk}
        required
        errors={errors.tgl_masuk}
        addClass="col-span-4 lg:col-span-2"
      />
      <InputDate
        label="Tgl. Kadaluarsa"
        name="tgl_kadaluarsa"
        control={control}
        startDate={tgl_kadaluarsa}
        setStartDate={setTgl_kadaluarsa}
        required
        errors={errors.tgl_kadaluarsa}
        addClass="col-span-4 lg:col-span-2"
      />
    </>
  );
};

export default BodyForm;
