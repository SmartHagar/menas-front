/** @format */

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { api } from "@/services/baseURL";
// api obatMasuk
type Props = {
  page?: number;
  limit?: number;
  search?: string;
  sortby?: string;
  order?: string;
};

type Store = {
  dtObatMasuk: any;
  setObatMasuk: ({ page, limit, search, sortby, order }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  setObatMasukAll: ({ search }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
};

const useObatMasukApi = create(
  devtools<Store>((set, get) => ({
    dtObatMasuk: [],
    setObatMasuk: async ({ page = 1, limit = 10, search, sortby, order }) => {
      try {
        const response = await api({
          method: "get",
          url: `/obatMasuk`,
          params: {
            limit,
            page,
            search,
            sortby,
            order,
          },
        });
        set((state) => ({ ...state, dtObatMasuk: response.data.data }));
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
    setObatMasukAll: async ({ search }) => {
      try {
        const response = await api({
          method: "get",
          url: `/obatMasuk/all`,
          params: {
            search,
          },
        });
        set((state) => ({ ...state, dtObatMasuk: response.data }));
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

export default useObatMasukApi;
