/** @format */

import InputTextDefault from "@/components/input/InputTextDefault";
import { FC, useEffect } from "react";

type Props = {
  register: any;
  errors: any;
  obatCek: any;
  setValue: any;
};

const ObatKeluar: FC<Props> = ({ register, errors, obatCek, setValue }) => {
  useEffect(() => {
    // Diperbarui setiap kali obatCek berubah
    // Pastikan struktur input diperbarui sesuai dengan perubahan obatCek
    register();
  }, [obatCek, register]);

  {
    return obatCek.map((item: any, index: number) => (
      <tr key={index}>
        <td className="w-4/5">
          <span>{item?.obat.nm_obat}</span>
        </td>
        <td>
          <InputTextDefault
            name={`obat.${index}.obat_masuk_id`}
            register={register}
            value={item.id}
            type="hidden"
          />
          <InputTextDefault
            name={`obat.${index}.jumlah`}
            register={register}
            required
            type="number"
            valueAsNumber
            max={item?.totalStok}
            min={1}
            defaultValue={item.keluar}
            errors={
              errors && errors.obat ? errors.obat[index]?.jumlah : undefined
            }
          />
        </td>
      </tr>
    ));
  }
};

export default ObatKeluar;
