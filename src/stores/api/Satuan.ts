/** @format */

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { api } from "@/services/baseURL";
// api satuan
type Props = {
  page?: number;
  limit?: number;
  search?: string;
};

type Store = {
  dtSatuan: any;
  setSatuan: ({ page, limit, search }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  setSatuanAll: ({ search }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
};

const useSatuanApi = create(
  devtools<Store>((set, get) => ({
    dtSatuan: [],
    setSatuan: async ({ page = 1, limit = 10, search }) => {
      try {
        const response = await api({
          method: "get",
          url: `/satuan`,
          params: {
            limit,
            page,
            search,
          },
        });
        set((state) => ({ ...state, dtSatuan: response.data }));
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
    setSatuanAll: async ({ search }) => {
      try {
        const response = await api({
          method: "get",
          url: `/satuan/all`,
          params: {
            search,
          },
        });
        set((state) => ({ ...state, dtSatuan: response.data }));
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

export default useSatuanApi;
