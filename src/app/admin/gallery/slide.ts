/** @format */

import { BASE_URL } from "@/services/baseURL";
import GalleryTypes from "@/types/GalleryTypes";

const slide = (data: GalleryTypes[]) => {
  const dtImages = data?.map((row: GalleryTypes) => {
    return {
      src: `${BASE_URL}/${row?.picture}`,
      description: row.desc,
      width: 3840,
      height: 5760,
    };
  });
  console.log({ dtImages });
  return dtImages;
};

export default slide;
