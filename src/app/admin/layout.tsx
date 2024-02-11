/** @format */

import HeaderComp from "@/components/header/HeaderComp";
import Sidebar from "@/components/sidebar/Sidebar";
import React from "react";
import Auth from "./Auth";

type Props = {
  children: React.ReactNode;
};

const layout = (props: Props) => {
  return (
    <div className="min-h-screen bg-white/[0.8] text-gray-800">
      <Auth />
      <div className="sm:flex ml-64 hidden h-12 items-center justify-center shadow-lg">
        <HeaderComp />
      </div>
      <Sidebar />
      <div className="p-4 sm:ml-64">{props.children}</div>
    </div>
  );
};

export default layout;
