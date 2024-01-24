/** @format */
import { BsBandaid, BsHouseDoor, BsLamp, BsPeople } from "react-icons/bs";
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
    icon: <BsBandaid />,
  },
  {
    name: "Satuan",
    href: createUrl("/satuan"),
    icon: <BsBandaid />,
  },

  {
    name: "Obat",
    href: createUrl("/obat"),
    icon: <BsPeople />,
  },

  {
    name: "Obat Masuk",
    href: createUrl("/obatMasuk"),
    icon: <BsLamp />,
  },

  {
    name: "Obat Keluar",
    href: createUrl("/obatKeluar"),
    icon: <BsHouseDoor />,
  },

  {
    name: "Persediaan",
    href: createUrl("/persediaan"),
    icon: <BsHouseDoor />,
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
