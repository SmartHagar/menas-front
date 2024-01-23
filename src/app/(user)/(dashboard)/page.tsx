/** @format */

import { Button } from "flowbite-react";
import Image from "next/image";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div>
      <div className="relative h-screen">
        <div className="bg-puskesmas absolute inset-0 -top-28 md:-top-44 bg-cover bg-top">
          <div className="h-full w-full bg-black bg-opacity-50">
            <div className="flex flex-col justify-center items-center pb-44 h-full text-color-2">
              <h1 className="text-lg md:text-2xl font-bold">
                Selamat datang di website inventory obat
              </h1>
              <h1 className="text-xl md:text-3xl font-bold">
                PUSKESMAS HOM-HOM WAMENA
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto"></div>
    </div>
  );
};

export default Dashboard;
