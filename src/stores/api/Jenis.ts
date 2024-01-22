/** @format */

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { api } from "@/services/baseURL";
// api jenis
type Props = {
  page?: number;
  limit?: number;
  search?: string;
};

type Store = {
  dtJenis: any;
  setJenis: ({ page, limit, search }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  setJenisAll: ({ search }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
};

const useJenisApi = create(
  devtools<Store>((set, get) => ({
    dtJenis: [],
    setJenis: async ({ page = 1, limit = 10, search }) => {
      try {
        const response = await api({
          method: "get",
          url: `/jenis`,
          params: {
            limit,
            page,
            search,
          },
        });
        set((state) => ({ ...state, dtJenis: response.data }));
        return {
          status: "berhasil",
          data: response.data,
        };
      } catch (error: any) {
        return {
          status: "error",
          error: error.response.data,
        };
      }
    },
    setJenisAll: async ({ search }) => {
      try {
        const response = await api({
          method: "get",
          url: `/jenis/all`,
          params: {
            search,
          },
        });
        set((state) => ({ ...state, dtJenis: response.data }));
        return {
          status: "berhasil",
          data: response.data,
        };
      } catch (error: any) {
        return {
          status: "error",
          error: error.response.data,
        };
      }
    },
  }))
);

export default useJenisApi;
