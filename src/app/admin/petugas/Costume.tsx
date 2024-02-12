/** @format */

import ModalDefault from "@/components/modal/ModalDefault";
import React, { useState } from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";

type Props = {};

const Costume = (props: Props) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [dtPetugas, setDataPetugas] = useState<any>([]);
  const handelInfo = (data: any) => {
    setShowModal(true);
    setDataPetugas(data);
  };
  return (
    <>
      <ModalDefault
        title={`Akun ${dtPetugas?.nm_petugas}`}
        showModal={showModal}
        setShowModal={setShowModal}
      >
        <div>Email: {dtPetugas?.user?.email}</div>
        <div>Password: {dtPetugas?.user?.show_password}</div>
      </ModalDefault>
      <div onClick={() => handelInfo(props)} className="cursor-pointer">
        <BsFillInfoCircleFill />
      </div>
    </>
  );
};

export default Costume;
