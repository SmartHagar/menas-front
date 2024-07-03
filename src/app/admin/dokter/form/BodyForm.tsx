/** @format */
"use client";
import InputTextDefault from "@/components/input/InputTextDefault";
import { SelectDefault } from "@/components/select/SelectDefault";
import { FC } from "react";

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
        label="Nama Dokter"
        name="nm_dokter"
        register={register}
        required
        minLength={2}
        errors={errors.nm_dokter}
        addClass="col-span-4"
      />
      <SelectDefault
        label="Spesialis"
        defaultOption="Pilih Spesialis"
        required
        register={register}
        errors={errors.spesialis}
        name="spesialis"
        options={[
          { value: "Umum", label: "Umum" },
          { value: "Gigi", label: "Gigi" },
          { value: "Penyakit Dalam", label: "Penyakit Dalam" },
        ]}
        addClass="col-span-4"
      />
    </>
  );
};

export default BodyForm;
