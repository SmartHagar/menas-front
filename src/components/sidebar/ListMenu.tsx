/** @format */
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
const ListMenu = [
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
    href: createUrl("/obat"),
    icon: <BsBandaid />,
  },

  {
    name: "Obat Masuk",
    href: createUrl("/obatMasuk"),
    icon: <BsBuildingAdd />,
  },

  {
    name: "Obat Keluar",
    href: createUrl("/obatKeluar"),
    icon: <BsBuildingDash />,
  },
];

const pegawaiMenu = [
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
