/** @format */

"use client";
import { FC } from "react";
import { Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type Props = {
  dtStock: any[];
};

// Fungsi untuk menghasilkan warna secara dinamis
const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const GrafikStock: FC<Props> = ({ dtStock = [] }) => {
  const labels = dtStock.map((item) => item.nm_obat);
  const stokAkhir = dtStock.map((item) => item.stok_akhir);

  // Menghasilkan warna yang berbeda untuk setiap item
  const backgroundColors = dtStock.map(() => getRandomColor());
  const borderColors = backgroundColors.map((color) =>
    color.replace("0.6", "1")
  );

  const chartData = {
    labels,
    datasets: [
      {
        label: "Stok Akhir",
        data: stokAkhir,
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Stok Akhir Obat",
      },
    },
  };

  return <Bar data={chartData} options={options as any} height={100} />;
};

export default GrafikStock;
