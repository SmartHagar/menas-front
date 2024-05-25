/** @format */
import MenuTypes from "@/types/MenuTypes";
import {
  BsAsterisk,
  BsBandaid,
  BsBasket,
  BsHouseDoor,
  BsPeople,
} from "react-icons/bs";
const createUrl = (path: string) => `/admin${path}`;
const createUrlPetugas = (path: string) => `/petugas${path}`;
const ListMenu: MenuTypes[] = [
  {
    name: "Home",
    href: createUrl(""),
    icon: <BsHouseDoor />,
  },

  {
    name: "Jenis",
    href: createUrl("/jenis"),
    icon: <BsBasket />,
  },

  {
    name: "Satuan",
    href: createUrl("/satuan"),
    icon: <BsAsterisk />,
  },

  {
    name: "Dokter",
    href: createUrl("/dokter"),
    icon: <BsAsterisk />,
  },
  {
    name: "Jadwal Dokter",
    href: createUrl("/jadwal"),
    icon: <BsAsterisk />,
  },

  {
    name: "Petugas",
    href: createUrl("/petugas"),
    icon: <BsAsterisk />,
  },

  {
    name: "Obat",
    icon: <BsBandaid />,
    slug: "obat",
    subMenus: [
      {
        name: "Daftar Obat",
        href: createUrl("/obat/daftar"),
      },

      {
        name: "Obat Masuk",
        href: createUrl("/obat/masuk"),
      },
    ],
  },

  {
    name: "Gallery",
    href: createUrl("/gallery"),
    icon: <BsAsterisk />,
  },
  {
    name: "Laporan",
    icon: <BsBandaid />,
    slug: "laporan",
    subMenus: [
      {
        name: "Obat Masuk",
        href: createUrl("/laporan/masuk"),
      },

      {
        name: "Obat Keluar",
        href: createUrl("/laporan/keluar"),
      },

      {
        name: "Stok Obat",
        href: createUrl("/laporan/stok"),
      },
    ],
  },
];

const petugasMenu: MenuTypes[] = [
  {
    name: "Home",
    href: createUrlPetugas(""),
    icon: <BsHouseDoor />,
  },
  {
    name: "Pasien",
    href: createUrlPetugas("/pasien"),
    icon: <BsPeople />,
  },
  {
    name: "Resep",
    href: createUrlPetugas("/resep"),
    icon: <BsPeople />,
  },
];

export default ListMenu;

export { petugasMenu };
