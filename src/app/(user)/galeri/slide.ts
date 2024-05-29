/** @format */

import { BASE_URL } from "@/services/baseURL";
import GalleryTypes from "@/types/GalleryTypes";

const slide = (data: GalleryTypes[]) => {
  const dtImages = data?.map((row: GalleryTypes) => {
    return {
      src: `${BASE_URL}/${row?.picture}`,
      description: row.desc,
      width: 1080,
      height: 1440,
    };
  });
  return dtImages;
};

export default slide;
