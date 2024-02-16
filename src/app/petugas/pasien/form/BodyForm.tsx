/** @format */
"use client";
import InputTextDefault from "@/components/input/InputTextDefault";
import React, { FC, useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import InputRadio from "@/components/input/InputRadio";
import InputDateMinMax from "@/components/input/InputDateMinMax";
import {
  differenceInDays,
  differenceInMonths,
  differenceInYears,
} from "date-fns";

type Props = {
  register: any;
  errors: any;
  dtEdit: any;
  control: any;
  watch: any;
  setValue: any;
  showModal: boolean;
  tgl_lahir: any;
  setTgl_lahir: any;
};

const BodyForm: FC<Props> = ({
  register,
  errors,
  control,
  dtEdit,
  watch,
  setValue,
  showModal,
  tgl_lahir,
  setTgl_lahir,
}) => {
  // state
  const [umur, setUmur] = useState<string>("");
  const tglLahir = watch("tgl_lahir");
  const hitungUmur = (tglLahir: string) => {
    const tglDate = new Date(tglLahir);
    // Tanggal hari ini
    const today = new Date();

    // Perbedaan umur dalam tahun, bulan, dan hari
    const umurTahun = differenceInYears(today, tglDate);
    const umurBulan = differenceInMonths(today, tglDate) % 12; // Sisa bulan setelah tahun dihitung
    const umurHari = differenceInDays(today, tglDate);

    console.log({ umurTahun, umurBulan, umurHari });

    setUmur(`${umurTahun} Thn, ${umurBulan} Bln, ${umurHari} Hri`);
  };
  useEffect(() => {
    tglLahir && hitungUmur(tglLahir);

    return () => {};
  }, [tglLahir]);

  return (
    <>
      <InputTextDefault
        label="Nama Pasien"
        name="nm_pasien"
        register={register}
        required
        minLength={3}
        errors={errors.nm_pasien}
        addClass="col-span-4"
      />
      <div className="flex col-span-4 items-center gap-2">
        <InputDateMinMax
          label="Tgl. Lahir"
          name="tgl_lahir"
          control={control}
          startDate={tgl_lahir}
          setStartDate={setTgl_lahir}
          required
          errors={errors.tgl_lahir}
          addClass="col-span-4 lg:col-span-2"
          maxDate={new Date().setDate(new Date().getDate() - 2)}
        />
        {umur && <span>{umur}</span>}
      </div>
      {/* jenkel */}
      <div className="col-span-4 lg:col-span-2">
        <div className="w-[100%]">
          <label className="block py-2 text-sm font-medium text-gray-700 tracking-wide">
            Jenis Kelamin
          </label>
          <div className="flex gap-2">
            <InputRadio
              id="Laki-laki"
              name="jenkel"
              value="Laki-laki"
              register={register}
              required
              defaultChecked={dtEdit?.jenkel === "Laki-laki"}
            />
            <InputRadio
              id="Perempuan"
              name="jenkel"
              value="Perempuan"
              register={register}
              required
              defaultChecked={dtEdit?.jenkel === "Perempuan"}
            />
          </div>
          {errors?.jenkel?.type === "required" && (
            <p className="text-red-500 font-inter italic text-sm">
              Jenis kelamin tidak boleh kosong
            </p>
          )}
        </div>
      </div>
      <InputTextDefault
        label="No. HP"
        name="no_hp"
        register={register}
        required
        minLength={3}
        errors={errors.no_hp}
        addClass="col-span-4"
      />
      <InputTextDefault
        label="Alamat"
        name="alamat"
        register={register}
        required
        minLength={3}
        errors={errors.alamat}
        addClass="col-span-4"
      />
    </>
  );
};

export default BodyForm;
