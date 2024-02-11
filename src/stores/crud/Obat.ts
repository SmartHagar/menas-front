/** @format */

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { crud } from "@/services/baseURL";
import useLogin from "@/stores/auth/login";

// crud obat

type Props = {
  page?: number;
  limit?: number;
  search?: string;
  tipe?: string;
  sortby?: string;
  order?: string;
};

type Store = {
  dtObat: any;
  showObat: any;
  setObat: ({ page, limit, search, sortby, order }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  setShowObat: (id: string | number) => Promise<{
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
  setFormData: any;
};

const useObat = create(
  devtools<Store>((set, get) => ({
    setFormData: (row: any) => {
      const formData = new FormData();
      formData.append("jenis_id", row.jenis_id);
      formData.append("nama", row.nama);
      formData.append("satuan", row.satuan);
      formData.append("gambar", row.gambar);
      return formData;
    },
    dtObat: [],
    showObat: [],
    setObat: async ({ page = 1, limit = 10, search, sortby, order }) => {
      try {
        const token = await useLogin.getState().setToken();
        const response = await crud({
          method: "get",
          url: `/obat`,
          headers: { Authorization: `Bearer ${token}` },
          params: {
            limit,
            page,
            search,
            sortby,
            order,
          },
        });
        set((state) => ({ ...state, dtObat: response.data.data }));
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
    setShowObat: async (id) => {
      try {
        const token = await useLogin.getState().setToken();
        const response = await crud({
          method: "get",
          url: `/obat/${id}`,
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log({ response });
        set((state) => ({ ...state, showObat: response.data.data }));
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
      const formData = row?.gambar ? get().setFormData(row) : row;
      try {
        const token = await useLogin.getState().setToken();
        const res = await crud({
          method: "post",
          url: `/obat`,
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
          data: formData,
        });
        set((prevState: any) => ({
          dtObat: {
            last_page: prevState.dtObat.last_page,
            current_page: prevState.dtObat.current_page,
            data: [res.data.data, ...prevState.dtObat.data],
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
          url: `/obat/${id}`,
          headers: { Authorization: `Bearer ${token}` },
        });
        set((prevState: any) => ({
          dtObat: {
            last_page: prevState.dtObat.last_page,
            current_page: prevState.dtObat.current_page,
            data: prevState.dtObat.data.filter((item: any) => item.id !== id),
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
      delete row.id;
      const formData = row?.gambar ? get().setFormData(row) : row;
      const token = await useLogin.getState().setToken();
      const headersImg = {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      };
      try {
        const response = await crud({
          url: `/obat/${id}`,
          method: "post",
          headers: row?.gambar
            ? headersImg
            : {
                Authorization: `Bearer ${token}`,
              },
          data: formData,
          params: {
            _method: "PUT",
          },
        });
        set((prevState: any) => ({
          dtObat: {
            last_page: prevState.dtObat.last_page,
            current_page: prevState.dtObat.current_page,
            data: prevState.dtObat.data.map((item: any) => {
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

export default useObat;
