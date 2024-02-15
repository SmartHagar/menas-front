/** @format */
"use client";
import React, { FC, useEffect, useState } from "react";
import ListMenu, { pegawaiMenu } from "./ListMenu";
import Link from "next/link";
import { BsXLg } from "react-icons/bs";
import { usePathname, useRouter } from "next/navigation";
import BtnDefault from "../button/BtnDefault";
import useLogout from "@/stores/auth/logout";
import MenuTypes from "@/types/MenuTypes";
import Cookies from "js-cookie";
import Image from "next/image";
import SubMenu from "./SubMenu";

type Props = {
  type?: "admin" | "kapus";
};

const Sidebar: FC<Props> = ({ type = "admin" }) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const route = useRouter();
  const [menus, setMenus] = useState<MenuTypes[]>([]);
  const [openMenus, setOpenMenus] = useState<string[]>([]);
  // store
  const { setLogout } = useLogout();

  // ketika pathname berubah
  useEffect(() => {
    setOpen(false);

    return () => {};
  }, [pathname]);
  // ketika type berubah
  useEffect(() => {
    if (type === "admin") {
      setMenus(ListMenu);
    } else {
      setMenus(pegawaiMenu);
    }
    return () => {};
  }, [type]);
  // ketika tombol burger di klik
  const handleBurger = () => {
    setOpen(!open);
  };

  // submenu
  const findOpenMenus = (menuList: MenuTypes[]) => {
    for (const menu of menuList) {
      // console.log({ slug, menu });
      if (menu?.href === pathname) {
        const second = pathname?.split("/");
        // if second.length > 0 remove index 0
        second.splice(0, 1);
        setOpenMenus(second);
      }
      // console.log({ menu });
      if (menu.subMenus) {
        // console.log({ menu });
        findOpenMenus(menu.subMenus);
      }
    }
  };

  useEffect(() => {
    menus && findOpenMenus(menus);
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menus, pathname]);

  const handleLogout = async () => {
    const res = await setLogout();
    if (res?.status === "success") {
      // delete cookie
      Cookies.remove("token");
      Cookies.remove("role");
      Cookies.remove("pegawai");
      return route.push("/login");
    }
  };

  return (
    <div className="sidebar">
      <div className="absolute top-0">
        <button
          onClick={handleBurger}
          type="button"
          className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>
      </div>

      <aside
        className={`fixed top-0 left-0 z-40 w-64 bg-puskesmas bg-cover bg-center h-screen transition-transform -translate-x-full sm:translate-x-0 ${
          open ? "translate-x-0" : ""
        }`}
        aria-label="Sidebar"
      >
        <div className="sidebar z-50 h-full px-3 pt-4 overflow-y-auto bg-primary/[0.5] text-color-2 flex flex-row-reverse justify-between sm:block">
          <div
            className="text-black cursor-pointer sm:hidden"
            onClick={handleBurger}
          >
            <BsXLg />
          </div>
          <div className="relative h-full sidebar w-full">
            <div className="h-24 sidebar"></div>
            <ul className="space-y-2 font-medium w-full">
              {menus &&
                menus.map((menu, index) => {
                  const isActive = pathname === menu.href;
                  const subMenus = menu?.subMenus;
                  const { name, icon, slug } = menu;
                  return subMenus ? (
                    SubMenu({
                      subMenus,
                      name,
                      icon,
                      slug,
                      index,
                      pathname,
                      openMenus,
                    })
                  ) : (
                    <li key={index}>
                      <Link
                        href={menu.href || "#"}
                        className={`flex w-full items-center p-2 text-color-2 hover:bg-menu-active transition-all duration-500 rounded-lg group ${
                          isActive && "bg-menu-active"
                        }`}
                      >
                        {icon}
                        <span className="ms-3">{name}</span>
                      </Link>
                    </li>
                  );
                })}
            </ul>
            <div className="absolute bottom-4 flex justify-center left-0 right-0">
              <BtnDefault
                addClass="bg-secondary text-color-1"
                onClick={handleLogout}
              >
                Logout
              </BtnDefault>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
