/** @format */

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { api } from "@/services/baseURL";
// api obat
type Props = {
  page?: number;
  limit?: number;
  search?: string;
};

type Store = {
  dtObat: any;
  dtStock: any;
  setObat: ({ page, limit, search }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  setObatAll: ({ search }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  setStock: ({}: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
};

const useObatApi = create(
  devtools<Store>((set, get) => ({
    dtObat: [],
    dtStock: [],
    setObat: async ({ page = 1, limit = 10, search }) => {
      try {
        const response = await api({
          method: "get",
          url: `/obat`,
          params: {
            limit,
            page,
            search,
          },
        });
        set((state) => ({ ...state, dtObat: response.data }));
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
    setObatAll: async ({ search }) => {
      try {
        const response = await api({
          method: "get",
          url: `/obat/all`,
          params: {
            search,
          },
        });
        set((state) => ({ ...state, dtObat: response.data }));
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
    setStock: async ({}) => {
      try {
        const response = await api({
          method: "get",
          url: `/obat/stock`,
        });
        set((state) => ({ ...state, dtStock: response.data.data }));
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

export default useObatApi;
