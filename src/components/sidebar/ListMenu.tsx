/** @format */
import MenuTypes from "@/types/MenuTypes";
import {
  BsAsterisk,
  BsBandaid,
  BsBasket,
  BsBuildingAdd,
  BsBuildingDash,
  BsHouseDoor,
  BsLamp,
  BsPeople,
} from "react-icons/bs";
const createUrl = (path: string) => `/admin${path}`;
const createUrlPegawai = (path: string) => `/pegawai${path}`;
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

      {
        name: "Obat Keluar",
        href: createUrl("/obat/keluar"),
      },
    ],
  },
];

const pegawaiMenu: MenuTypes[] = [
  {
    name: "Home",
    href: createUrlPegawai("/"),
    icon: <BsHouseDoor />,
  },
  {
    name: "Jawaban",
    href: createUrlPegawai("/jawaban"),
    icon: <BsPeople />,
  },
];

export default ListMenu;

export { pegawaiMenu };
