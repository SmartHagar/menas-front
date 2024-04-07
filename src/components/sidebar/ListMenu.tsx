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
