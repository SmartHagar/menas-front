/** @format */

import getProperty from "@/services/getProperty";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import {
  BsArrowDownShort,
  BsArrowUpShort,
  BsFillEmojiSunglassesFill,
  BsFillPencilFill,
  BsFillTrashFill,
} from "react-icons/bs";

type Props = {
  headTable: string[];
  dataTable: [];
  tableBodies: string[];
  setEdit: (data: any) => void;
  setDelete?: ({
    id,
    isDelete,
  }: {
    id?: number | string;
    isDelete: boolean;
  }) => void;
  limit: number;
  page: number;
  ubah: boolean;
  hapus: boolean;
  pekerjaan?: boolean;
  costume?: any;
};

const TablesDefault = (props: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [clickCount, setClickCount] = useState<number>(0);
  const [bodyTable, setBodyTable] = useState<string>();
  const [order, setOrder] = useState<string>();
  // membuat no urut
  const showNo = (index: number) => {
    let noUrut = (props.page - 1) * props.limit + index;
    return noUrut + 1;
  };
  // mengambil parame
  const sortby = searchParams.get("sortby");
  // mengambil urutan
  const sortBy = (name: string, index?: number) => {
    // simpan body table
    setBodyTable(name);
    // Jika nama yang diklik sama dengan nama sebelumnya, tambahkan 1 pada hitungan sebelumnya, jika tidak, mulai dari 1
    const newCount = name === sortby ? clickCount + 1 : 1;
    // Tentukan apakah urutan harus naik atau turun berdasarkan apakah hitungan ganjil atau genap
    const sortOrder = newCount % 2 === 0 ? "desc" : "asc";
    // Memperbarui query string dengan sortby baru
    router.push(`?sortby=${name}&order=${sortOrder}`);
    // Simpan jumlah klik yang baru
    setClickCount(newCount);
    // simpan order
    setOrder(sortOrder);
  };
  useEffect(() => {
    return sortBy(sortby || "");
  }, []);
  return (
    <table className="w-full border-collapse text-left bg-white">
      <thead className="">
        <tr>
          {props.headTable &&
            props.headTable.map((row, index) => {
              const body = props.tableBodies[index - 1];
              return (
                <th
                  key={index}
                  scope="col"
                  className={`px-6 py-4 ${
                    !(row === "Aksi" || row === "No") && "cursor-pointer"
                  }`}
                  onClick={() => {
                    !(row === "Aksi" || row === "No") && sortBy(body, index);
                  }}
                >
                  <div className="flex items-center gap-1">
                    {row}
                    {bodyTable === body && (
                      <span className="flex">
                        <BsArrowUpShort
                          className={`${order === "desc" && "hidden"}`}
                        />
                        <BsArrowDownShort
                          className={`${order === "asc" && "hidden"}`}
                        />
                      </span>
                    )}
                  </div>
                </th>
              );
            })}
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100 border-t border-gray-100 ">
        {/* loop tr */}
        {props.dataTable &&
          props.dataTable.map((row: any, index) => {
            const { id } = row;
            return (
              <tr key={index}>
                <td className="px-6 py-4 rounded-l-xl">{showNo(index)}</td>
                {/* loop td */}
                {props.tableBodies.map((column, index) => {
                  return (
                    <td key={index} className={`px-6 py-4 whitespace-nowrap`}>
                      {getProperty(row, column)}
                    </td>
                  );
                })}
                {/* aksi */}
                <td className="px-6 py-4 rounded-r-xl">
                  <div className="flex flex-row gap-2">
                    {/*  */}
                    {props.costume && props.costume(row)}
                    {props.ubah && (
                      <BsFillPencilFill
                        onClick={() => props.setEdit(row)}
                        size={20}
                        className="cursor-pointer hover:text-yellow-500"
                        title="Ubah"
                      />
                    )}
                    {props.hapus && (
                      <BsFillTrashFill
                        onClick={() =>
                          props?.setDelete &&
                          props?.setDelete({ id, isDelete: false })
                        }
                        size={20}
                        className="cursor-pointer hover:text-red-700"
                        title="Hapus"
                      />
                    )}
                  </div>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default TablesDefault;
