/** @format */

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { api } from "@/services/baseURL";
// api pasien
type Props = {
  page?: number;
  limit?: number;
  search?: string;
};

type Store = {
  dtPasien: any;
  setPasien: ({ page, limit, search }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  setPasienAll: ({ search }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
};

const usePasienApi = create(
  devtools<Store>((set, get) => ({
    dtPasien: [],
    setPasien: async ({ page = 1, limit = 10, search }) => {
      try {
        const response = await api({
          method: "get",
          url: `/pasien`,
          params: {
            limit,
            page,
            search,
          },
        });
        set((state) => ({ ...state, dtPasien: response.data }));
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
    setPasienAll: async ({ search }) => {
      try {
        const response = await api({
          method: "get",
          url: `/pasien/all`,
          params: {
            search,
          },
        });
        set((state) => ({ ...state, dtPasien: response.data }));
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

export default usePasienApi;
