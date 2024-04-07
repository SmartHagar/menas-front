/** @format */

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { crud } from "@/services/baseURL";
import useLogin from "@/stores/auth/login";
// store obatMasuk
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
  setShowObatMasuk: (id: number | string) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  addData: (data: any) => Promise<{ status: string; data?: any; error?: any }>;
  removeData: (
    data: any
  ) => Promise<{ status: string; data?: any; error?: any }>;
  updateData: (
    id: number | string,
    data: any
  ) => Promise<{ status: string; data?: any; error?: any }>;
};

const useObatMasuk = create(
  devtools<Store>((set, get) => ({
    dtObatMasuk: [],
    setObatMasuk: async ({ page = 1, limit = 10, search, sortby, order }) => {
      try {
        const token = await useLogin.getState().setToken();
        const response = await crud({
          method: "get",
          url: `/obatMasuk`,
          headers: { Authorization: `Bearer ${token}` },
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
          error: error.response?.data,
        };
      }
    },
    setShowObatMasuk: async (id) => {
      try {
        const token = await useLogin.getState().setToken();
        const response = await crud({
          method: "get",
          url: `/obatMasuk/${id}`,
          headers: { Authorization: `Bearer ${token}` },
        });
        set((state) => ({ ...state, dtObatMasuk: response.data.data }));
        return {
          status: "berhasil",
          data: response.data,
        };
      } catch (error: any) {
        return {
          status: "error",
          error: error.response?.data,
        };
      }
    },
    addData: async (row) => {
      try {
        const token = await useLogin.getState().setToken();
        const res = await crud({
          method: "post",
          url: `/obatMasuk`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: row,
        });
        set((prevState) => ({
          dtObatMasuk: {
            last_page: prevState.dtObatMasuk.last_page,
            current_page: prevState.dtObatMasuk.current_page,
            data: [res.data.data, ...prevState.dtObatMasuk.data],
          },
        }));
        return {
          status: "berhasil tambah",
          data: res.data,
        };
      } catch (error: any) {
        return {
          status: "error",
          data: error.response.data,
        };
      }
    },
    removeData: async (id) => {
      try {
        const token = await useLogin.getState().setToken();
        const res = await crud({
          method: "delete",
          url: `/obatMasuk/${id}`,
          headers: { Authorization: `Bearer ${token}` },
        });
        set((prevState) => ({
          dtObatMasuk: {
            last_page: prevState.dtObatMasuk.last_page,
            current_page: prevState.dtObatMasuk.current_page,
            data: prevState.dtObatMasuk.data.filter(
              (item: any) => item.id !== id
            ),
          },
        }));
        return {
          status: "berhasil hapus",
          data: res.data,
        };
      } catch (error: any) {
        return {
          status: "error",
          data: error.response.data,
        };
      }
    },
    updateData: async (id, row) => {
      try {
        const token = await useLogin.getState().setToken();
        const response = await crud({
          method: "PUT",
          url: `/obatMasuk/${id}`,
          headers: { Authorization: `Bearer ${token}` },
          data: row,
        });
        set((prevState) => ({
          dtObatMasuk: {
            last_page: prevState.dtObatMasuk.last_page,
            current_page: prevState.dtObatMasuk.current_page,
            data: prevState.dtObatMasuk.data.map((item: any) => {
              if (item.id === id) {
                return {
                  ...item,
                  ...response.data.data,
                };
              } else {
                return item;
              }
            }),
          },
        }));
        return {
          status: "berhasil update",
          data: response.data,
        };
      } catch (error: any) {
        return {
          status: "error",
          data: error.response.data,
        };
      }
    },
  }))
);

export default useObatMasuk;
