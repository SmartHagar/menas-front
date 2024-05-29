/** @format */
"use client";
import InputTime from "@/components/input/InputTime";
import { SelectDefault } from "@/components/select/SelectDefault";
import SelectFromDb from "@/components/select/SelectFromDB";
import useDokterApi from "@/stores/api/Dokter";
import { FC, useEffect } from "react";

import "react-datepicker/dist/react-datepicker.css";

type Props = {
  register: any;
  errors: any;
  dtEdit: any;
  control: any;
  watch: any;
  setValue: any;
  showModal: boolean;
  timeStart: Date | string;
  timeFinish: Date | string;
};

const BodyForm: FC<Props> = ({
  register,
  errors,
  control,
  dtEdit,
  watch,
  setValue,
  showModal,
  timeStart,
  timeFinish,
}) => {
  const { setDokterAll, dtDokter } = useDokterApi();
  // get data
  const fetchOption = async () => {
    await setDokterAll({});
  };

  useEffect(() => {
    fetchOption();
    return () => {
      console.log("clean up");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {dtDokter?.data && (
        <SelectFromDb
          label="Dokter"
          placeholder="Pilih Dokter"
          name="dokter_id"
          dataDb={dtDokter?.data}
          body={["id", "nm_dokter"]}
          control={control}
          required
          errors={errors.dokter_id}
          addClass="col-span-4"
        />
      )}
      <SelectDefault
        label="Hari"
        defaultOption="Pilih Hari"
        register={register}
        errors={errors.hari}
        required
        name="hari"
        options={[
          { value: "Senin", label: "Senin" },
          { value: "Selasa", label: "Selasa" },
          { value: "Rabu", label: "Rabu" },
          { value: "Kamis", label: "Kamis" },
          { value: "Jumat", label: "Jumat" },
          { value: "Sabtu", label: "Sabtu" },
          { value: "Minggu", label: "Minggu" },
        ]}
        addClass="col-span-4 lg:col-span-2"
      />
      <InputTime
        label="Mulai"
        name="jam_mulai"
        control={control}
        initialValue={timeStart}
        required
        errors={errors.jam_mulai}
        addClass="col-span-4 lg:col-span-1"
      />
      <InputTime
        label="Seles"
        name="jam_selesai"
        control={control}
        initialValue={timeFinish}
        required
        errors={errors.jam_selesai}
        addClass="col-span-4 lg:col-span-1"
      />
    </>
  );
};

export default BodyForm;
