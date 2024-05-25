/** @format */
// jadwal
interface JadwalTypes {
  id: string | number;
  dokter_id: string | number;
  hari: string;
  jam_mulai: string;
  jam_selesai: string;
  dokter: any;
}

export default JadwalTypes;
