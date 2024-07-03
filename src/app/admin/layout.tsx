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
    <div className="min-h-screen h-screen flex flex-col bg-white/[0.8] text-gray-800 overflow-hidden">
      <Auth />
      <div className="flex sm:ml-64 py-2 items-center justify-center shadow-md backdrop-blur-sm">
        <HeaderComp />
      </div>
      <div className="sm:w-64 shrink-0 fixed left-0 top-0 bottom-0">
        <Sidebar />
      </div>
      <div className="h-full flex ml-64 pb-16 px-4 mt-4">{props.children}</div>
    </div>
  );
};

export default layout;
