/** @format */

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { api } from "@/services/baseURL";
// api dokter
type Props = {
  page?: number;
  limit?: number;
  search?: string;
};

type Store = {
  dtDokter: any;
  setDokter: ({ page, limit, search }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  setDokterAll: ({ search }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
};

const useDokterApi = create(
  devtools<Store>((set, get) => ({
    dtDokter: [],
    setDokter: async ({ page = 1, limit = 10, search }) => {
      try {
        const response = await api({
          method: "get",
          url: `/dokter`,
          params: {
            limit,
            page,
            search,
          },
        });
        set((state) => ({ ...state, dtDokter: response.data }));
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
    setDokterAll: async ({ search }) => {
      try {
        const response = await api({
          method: "get",
          url: `/dokter/all`,
          params: {
            search,
          },
        });
        set((state) => ({ ...state, dtDokter: response.data }));
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

export default useDokterApi;
