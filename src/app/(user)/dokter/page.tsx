/** @format */
"use client";
import ShowData from "./ShowData";
import { useForm } from "react-hook-form";
import Cari from "@/components/bar/Cari";
import InputTextSearch from "@/components/input/InputTextSearch";

const Jadwal = () => {
  // hook form
  const {
    register,
    control,
    formState: { errors },
    watch,
    setValue,
  } = useForm();

  const cariWatch = watch("cari");

  return (
    <div className="flex flex-col gap-4 w-full max-w-screen-xl mx-auto">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold">Jadwal Praktek </h2>
      </div>
      <div className="w-full border">
        <Cari cariWatch={cariWatch} setValue={setValue} time={500} />
        <InputTextSearch
          placeholder="Cari Dokter"
          onChange={(cari) => setValue("cari", cari)}
        />
      </div>

      <ShowData search={cariWatch} />
    </div>
  );
};

export default Jadwal;
