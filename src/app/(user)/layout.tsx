/** @format */
import FooterComp from "@/components/footer/FooterComp";
import NavbarComp from "@/components/navbar/NavbarComp";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const layout = (props: Props) => {
  return (
    <div className="bg-white/[0.8] min-h-screen w-screen flex flex-col justify-between">
      <div className="md:h-28 h-20">
        <NavbarComp />
      </div>
      <div className="flex flex-col grow h-full w-full pt-5 lg:z-10 z-20">
        {props.children}
      </div>
      <FooterComp />
    </div>
  );
};

export default layout;
