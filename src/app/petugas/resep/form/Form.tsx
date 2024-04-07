/** @format */
"use client";
import InputTextDefault from "@/components/input/InputTextDefault";
import ModalDefault from "@/components/modal/ModalDefault";
import toastShow from "@/utils/toast-show";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import BodyForm from "./BodyForm";
import useResep from "@/stores/crud/Resep";
import BtnDefault from "@/components/button/BtnDefault";
import Cookies from "js-cookie";
import Obat from "./Obat";
import { useRouter } from "next/navigation";
import ObatKeluar from "./ObatKeluar";

type Props = {
  dtEdit: any;
};

type Inputs = {
  id: number | string;
  petugas_id: number | string;
  kode_resep: string;
  pasien_id: number | string;
  tgl_resep: string | Date;
  dokter_id: number | string;
  diagnosa: string;
  obat: { obat_masuk_id: number | string; jumlah: number | string }[];
  cek: any;
};

const Form = ({ dtEdit }: Props) => {
  // store
  const { addData, updateData } = useResep();
  // state
  const [tgl_resep, setTgl_resep] = useState<string | Date>(new Date());
  const [petugas, setPetugas] = useState<any>({});
  const [obatCek, setObatCek] = useState<any>([]);
  // router
  const router = useRouter();
  // get petugas form cookie
  useEffect(() => {
    const dtPetugas = JSON.parse(Cookies.get("petugas") || "{}");
    setPetugas(dtPetugas);
    return () => {};
  }, []);

  // hook form
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
    watch,
    reset,
  } = useForm<Inputs>();

  const nowDate = `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`;
  // reset form
  const resetForm = () => {
    setValue("id", "");
    setValue("kode_resep", "");
    setValue("pasien_id", "");
    setValue("tgl_resep", nowDate);
    setValue("dokter_id", "");
    setValue("diagnosa", "");
  };
  // data edit
  useEffect(() => {
    if (dtEdit) {
      setValue("id", dtEdit.id);
      setValue("kode_resep", dtEdit.kode_resep);
      setValue("pasien_id", dtEdit.pasien_id);
      setValue("tgl_resep", dtEdit.tgl_resep);
      setTgl_resep(dtEdit.tgl_resep && new Date(dtEdit.tgl_resep));
      setValue("dokter_id", dtEdit.dokter_id);
      setValue("diagnosa", dtEdit.diagnosa);
      const obat =
        dtEdit?.obat_keluar &&
        dtEdit.obat_keluar.map((item: any) => {
          const keluar = item.jumlah;
          const masuk = item.obat_masuk;
          // add keluar to masuk
          return {
            ...masuk,
            keluar,
          };
        });
      setObatCek(obat);
    } else {
      resetForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dtEdit]);
  // simpan data
  const onSubmit: SubmitHandler<Inputs> = async (row) => {
    // add petugas_id in row
    row.petugas_id = petugas.id;
    // remove cek from row
    delete row.cek;

    row.obat = row.obat.filter((item: any) =>
      obatCek.some(
        (obat: any) => parseInt(obat.id) === parseInt(item.obat_masuk_id)
      )
    );
    console.log({ row });
    // return;
    // jika dtEdit tidak kosong maka update
    if (dtEdit) {
      const { data } = await updateData(dtEdit.id, row);
      toastShow({
        event: data,
      });
    } else {
      const { data } = await addData(row);
      console.log({ data });
      toastShow({
        event: data,
      });
    }
    router.push("/petugas/resep");
  };

  console.log({ obatCek });

  return (
    <>
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
            tgl_resep={tgl_resep}
            setTgl_resep={setTgl_resep}
          />
        </div>
        <div>
          <Obat
            register={register}
            watch={watch}
            obatCek={obatCek}
            setObatCek={setObatCek}
          />
        </div>
        {obatCek && obatCek.length > 0 ? (
          <div className="my-4 bg-white p-4">
            <h2 className="text-xl my-2">Informasi Obat Keluar</h2>
            <hr />
            <table className="w-full border-collapse text-left bg-white mt-4">
              <thead className="">
                <tr>
                  <th>Nama Obat</th>
                  <th>Jumlah</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 border-t border-gray-100 ">
                <ObatKeluar
                  errors={errors}
                  register={register}
                  obatCek={obatCek}
                  setValue={setValue}
                />
              </tbody>
            </table>
            <div>
              <BtnDefault type="submit" onClick={handleSubmit(onSubmit)}>
                Simpan
              </BtnDefault>
            </div>
          </div>
        ) : (
          <p>Belum ada obat dipilih</p>
        )}
      </form>
    </>
  );
};

export default Form;
