/** @format */
import NavbarComp from "@/components/navbar/NavbarComp";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const layout = (props: Props) => {
  return (
    <div className="bg-white min-h-screen w-screen flex flex-col justify-between">
      <div className="md:h-28 h-20">
        <NavbarComp />
      </div>
      <div className="flex flex-col grow h-full w-full pt-5 md:z-10 z-20">
        {props.children}
      </div>
      <footer className="mt-4">ini adalah footer</footer>
    </div>
  );
};

export default layout;
