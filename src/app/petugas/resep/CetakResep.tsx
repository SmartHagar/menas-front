/** @format */

import BtnDefault from "@/components/button/BtnDefault";
import Image from "next/image";
import React, { FC, Ref } from "react";
import { BsPrinterFill } from "react-icons/bs";
import ReactToPrint from "react-to-print";

type Props = {
  data?: any; // Placeholder for data you want to print
};

const CetakResep: FC<Props> = ({ data }) => {
  const componentRef = React.useRef<any>(null);
  console.log({ data });
  return (
    <div>
      <div ref={componentRef} className="print-agreement">
        <div className="border-b justify-center gap-2 hidden">
          {/* logo kabupaten */}
          <div>
            <Image
              src="/images/kab_jayawijaya.png"
              alt="logo"
              width={80}
              height={80}
            />
          </div>
          {/* kop */}
          <div className="flex flex-col items-center w-full">
            <h3 className="uppercase font-bold text-lg text-center">
              pemerintah daerah kabupaten jayawijaya
            </h3>
            <h3 className="uppercase text-lg font-bold text-center">
              dinas kesehatan
            </h3>
            <h3 className="uppercase text-lg font-bold text-center">
              pusat kesehatan hom-hom
            </h3>
            <p className="text-sm italic">Jl.</p>
          </div>
          {/* logo dinas kesehatan */}
          <div>
            <Image
              src="/images/logo_kesehatan.png"
              alt="logo"
              width={80}
              height={80}
            />
          </div>
        </div>
        <div className="flex-col items-center w-full justify-center mb-8 hidden">
          <h2 className="uppercase text-2xl font-bold tracking-[.20em]">
            resep obat
          </h2>
          <h3 className="italic text-xl">{data.dokter.nm_dokter}</h3>
          <p className="text-sm self-end">Wamena, {data.tgl_resep}</p>
        </div>
        {/* daftar obat */}
        <div className="">
          <table className="w-full table-auto border-collapse border">
            <thead className="border">
              <tr>
                <th className="border">No</th>
                <th className="border">Nama Obat</th>
                <th className="border">Jumlah</th>
              </tr>
            </thead>
            <tbody>
              {data.obat_keluar.map((item: any, index: number) => (
                <tr key={index}>
                  <td className="border text-center">{index + 1}</td>
                  <td className="border px-4">
                    {item.obat_masuk.obat.nm_obat}
                  </td>
                  <td className="border text-center">{item.jumlah}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* data pasien */}
        <div className="my-8">
          <table>
            <tbody>
              <tr>
                <td className="">Nama Pasien</td>
                <td className=" px-4">: {data.pasien.nm_pasien}</td>
              </tr>
              <tr>
                <td className="">Jenis Kelamin</td>
                <td className=" px-4">: {data.pasien.jenkel}</td>
              </tr>
              <tr>
                <td className="">Diagnosa</td>
                <td className=" px-4">: {data.diagnosa}</td>
              </tr>
              <tr>
                <td className="">Alamat</td>
                <td className=" px-4">: {data.pasien.alamat}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <ReactToPrint
        trigger={() => (
          <BtnDefault>
            <div className="flex items-center gap-2">
              <BsPrinterFill />
              <span>Cetak</span>
            </div>
          </BtnDefault>
        )}
        content={() => componentRef.current}
      />
    </div>
  );
};

export default CetakResep;
