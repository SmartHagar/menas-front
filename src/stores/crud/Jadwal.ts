/** @format */

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { crud } from "@/services/baseURL";
import useLogin from "@/stores/auth/login";
import JadwalTypes from "@/types/JadwalTypes";
// store jadwal
type Props = {
  page?: number;
  limit?: number;
  search?: string;
};

type Store = {
  dtJadwal: {
    last_page: number;
    current_page: number;
    data: JadwalTypes[];
  };

  showJadwal: JadwalTypes;

  setJadwal: ({ page, limit, search }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;

  setShowJadwal: (id: number | string) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;

  addData: (
    data: JadwalTypes
  ) => Promise<{ status: string; data?: any; error?: any }>;

  removeData: (
    id: number | string
  ) => Promise<{ status: string; data?: any; error?: any }>;

  updateData: (
    id: number | string,
    data: JadwalTypes
  ) => Promise<{ status: string; data?: any; error?: any }>;
};

const useJadwal = create(
  devtools<Store>((set, get) => ({
    dtJadwal: {
      last_page: 0,
      current_page: 0,
      data: [],
    },

    showJadwal: [] as unknown as JadwalTypes,
    setJadwal: async ({ page = 1, limit = 10, search }) => {
      try {
        const token = await useLogin.getState().setToken();
        const response = await crud({
          method: "get",
          url: `/jadwal`,
          headers: { Authorization: `Bearer ${token}` },
          params: {
            limit,
            page,
            search,
          },
        });
        set((state) => ({ ...state, dtJadwal: response.data.data }));
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
    setShowJadwal: async (id) => {
      try {
        const token = await useLogin.getState().setToken();
        const response = await crud({
          method: "get",
          url: `/jadwal/${id}`,
          headers: { Authorization: `Bearer ${token}` },
        });
        set((state) => ({ ...state, showJadwal: response.data.data }));
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
          url: `/jadwal`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: row,
        });
        set((prevState) => ({
          dtJadwal: {
            last_page: prevState.dtJadwal.last_page,
            current_page: prevState.dtJadwal.current_page,
            data: [res.data.data, ...prevState.dtJadwal.data],
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
          url: `/jadwal/${id}`,
          headers: { Authorization: `Bearer ${token}` },
        });
        set((prevState) => ({
          dtJadwal: {
            last_page: prevState.dtJadwal.last_page,
            current_page: prevState.dtJadwal.current_page,
            data: prevState.dtJadwal.data.filter((item: any) => item.id !== id),
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
          url: `/jadwal/${id}`,
          headers: { Authorization: `Bearer ${token}` },
          data: row,
        });
        set((prevState) => ({
          dtJadwal: {
            last_page: prevState.dtJadwal.last_page,
            current_page: prevState.dtJadwal.current_page,
            data: prevState.dtJadwal.data.map((item: any) => {
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

export default useJadwal;
