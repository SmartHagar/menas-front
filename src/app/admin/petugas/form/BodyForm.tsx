/** @format */
"use client";
import InputTextDefault from "@/components/input/InputTextDefault";
import { SelectDefault } from "@/components/select/SelectDefault";
import React, { FC } from "react";

import "react-datepicker/dist/react-datepicker.css";

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
  return (
    <>
      <InputTextDefault
        label="Nama Petugas"
        name="nm_petugas"
        register={register}
        required
        minLength={2}
        errors={errors.nm_petugas}
        addClass="col-span-4"
      />
      <SelectDefault
        label="Jabatan"
        defaultOption="Pilih Jabatan"
        register={register}
        errors={errors}
        name="jabatan"
        options={[
          { value: "Penanggung Jawab", label: "Penanggung Jawab" },
          { value: "Asisten Opotik", label: "Asisten Opotik" },
        ]}
        addClass="col-span-4 lg:col-span-2"
      />
    </>
  );
};

export default BodyForm;
