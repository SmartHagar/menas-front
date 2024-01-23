/** @format */

import React from "react";
import { BASE_URL } from "./baseURL";
import Image from "next/image";
import moment from "moment";

const getProperty = (obj: any, prop: any) => {
  const angkatan = obj?.thn_angkatan?.substring(2);
  const mhs_angkatan = obj?.mhs?.thn_angkatan?.substring(2);
  let parts = prop.split(".");
  if (Array.isArray(parts)) {
    let last = parts.length > 1 ? parts.pop() : parts;
    // memisahkan properti dalam bentuk array
    let l = parts.length,
      i = 1,
      current = parts[0];
    while ((obj = obj[current]) && i < l) {
      current = parts[i];
      i++;
    }
    if (typeof obj === "object") {
      return obj ? obj[last] : "";
    }
    if (prop === "tgl_masuk" || prop === "tgl_kadaluarsa" || prop === "tgl") {
      return moment(obj).format("DD/MM/YYYY");
    }
    if (prop === "gambar" || prop === "foto") {
      return (
        obj && (
          <Image src={`${BASE_URL}/${obj}`} width={100} height={100} alt="" />
        )
      );
    }
    if (prop === "file") {
      return (
        obj && (
          <a href={`${BASE_URL}/${obj}`} target="_blank">
            Lihat File
          </a>
        )
      );
    }
    return <p className="capitalize">{obj}</p>;
  } else {
    // eslint-disable-next-line no-throw-literal
    throw "parts is not valid array";
  }
};

export default getProperty;
