/** @format */
"use client";
import InputTextDefault from "@/components/input/InputTextDefault";
import { FC, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import InputDate from "@/components/input/InputDate";
import SelectFromDb from "@/components/select/SelectFromDB";
import usePasienApi from "@/stores/api/Pasien";
import useDokterApi from "@/stores/api/Dokter";
import InputTextArea from "@/components/input/InputTextArea";

type Props = {
  register: any;
  errors: any;
  dtEdit: any;
  control: any;
  watch: any;
  setValue: any;
  tgl_resep: any;
  setTgl_resep: any;
};

const BodyForm: FC<Props> = ({
  register,
  errors,
  control,
  dtEdit,
  watch,
  setValue,
  tgl_resep,
  setTgl_resep,
}) => {
  const { setPasienAll, dtPasien } = usePasienApi();
  const { setDokterAll, dtDokter } = useDokterApi();

  // memanggil data pasien dan dokter
  const fetchDataOption = async ({ search }: any) => {
    await setPasienAll({
      search,
    });

    await setDokterAll({
      search,
    });
  };
  useEffect(() => {
    fetchDataOption({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <InputTextDefault
        label="Kode Resep"
        name="kode_resep"
        register={register}
        required
        minLength={3}
        errors={errors.kode_resep}
        addClass="col-span-4 lg:col-span-2"
      />

      <InputDate
        label="Tgl. Resep"
        name="tgl_resep"
        control={control}
        startDate={tgl_resep}
        setStartDate={setTgl_resep}
        required
        errors={errors.tgl_resep}
        addClass="col-span-4 lg:col-span-2"
      />

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
          addClass="col-span-4 lg:col-span-2"
        />
      )}

      {dtPasien?.data && (
        <SelectFromDb
          label="Pasien"
          placeholder="Pilih Pasien"
          name="pasien_id"
          dataDb={dtPasien?.data}
          body={["id", "nm_pasien"]}
          control={control}
          required
          errors={errors.pasien_id}
          addClass="col-span-4 lg:col-span-2"
        />
      )}

      <InputTextDefault
        label="Diagnosa"
        name="diagnosa"
        register={register}
        required
        minLength={3}
        errors={errors.diagnosa}
        addClass="col-span-4"
      />

      <InputTextArea
        label="Aturan Obat"
        name="aturan_obat"
        register={register}
        required
        minLength={3}
        errors={errors.aturan_obat}
        addClass="col-span-4"
      />
    </>
  );
};

export default BodyForm;
