/** @format */

const hitungStok = (data: any) => {
  const obatMasuk = data.data;
  const dtObtMasuk = obatMasuk.data;
  const totalStok = dtObtMasuk.map((item: any) => {
    // sum array item.obat_keluar
    const obatKeluar = item.obat_keluar.reduce((a: any, b: any) => {
      return a + b.jumlah;
    }, 0);
    // count item.jumlah - obatKeluar
    return item.jumlah - obatKeluar;
  });
  //   add totalStok to obatMasuk
  obatMasuk.data = dtObtMasuk.map((item: any, index: number) => {
    return {
      ...item,
      totalStok: totalStok[index],
    };
  });
  return obatMasuk;
};

export default hitungStok;
