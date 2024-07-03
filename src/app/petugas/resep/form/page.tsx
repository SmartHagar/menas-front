/** @format */
"use client";
import React, { useEffect, useState } from "react";
import Form from "./Form";
import { useSearchParams } from "next/navigation";
import useResep from "@/stores/crud/Resep";

const TambahResep = () => {
  // state
  const [dtEdit, setDtEdit] = useState<any>(null);
  // store
  const { setShowResep, dtResep } = useResep();
  const params = useSearchParams();
  const id = params?.get("id") || "";
  const getResep = async (id: number | string) => {
    await setShowResep(id);
  };
  useEffect(() => {
    if (id) {
      getResep(id);
    }
    return () => {};
  }, [id]);

  useEffect(() => {
    if (dtResep && dtResep.id) {
      setDtEdit(dtResep);
    }
    return () => {};
  }, [dtResep]);
  console.log({ dtEdit });

  return <Form dtEdit={dtEdit} />;
};

export default TambahResep;
