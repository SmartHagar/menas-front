/** @format */

"use client";

import { Button, Navbar } from "flowbite-react";
import Image from "next/image";
import ListMenu from "./ListMenu";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import BtnDefault from "../button/BtnDefault";
import Mobile from "./Mobile";
import LoadingSpiner from "../loading/LoadingSpiner";

type Props = {};

const NavbarComp: FC<Props> = ({}) => {
  const pathname = usePathname();
  console.log({ pathname });
  const route = useRouter();
  // state
  const [open, setOpen] = useState(false);
  const [scrollY, setScrollY] = useState<number>(0);
  const [loadLogin, setLoadLogin] = useState(false);

  const handleBurger = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Mendapatkan nilai Y dari scroll
      const newScrollY = window.scrollY || window.pageYOffset;

      // Logika atau aksi yang ingin Anda lakukan berdasarkan nilai Y
      console.log("Posisi scroll Y:", newScrollY);
      // Memperbarui nilai scrollY dalam state
      setScrollY(newScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const backgroundClass =
    scrollY >= 50
      ? "bg-primary z-50"
      : pathname === "/"
      ? "z-50"
      : "lg:z-10 z-50";

  const handelClick = () => {
    setLoadLogin(true);
    route.push("/login");
    setTimeout(() => {
      setLoadLogin(false);
    }, 2000);
  };

  return (
    <nav
      className={`fixed w-full top-0 start-0transition-background duration-300 ${backgroundClass}`}
    >
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <div>
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            {/* <Image src="/images/uogp.png" alt="logo" width={50} height={50} /> */}
            <div className="bg-menu-active -ml-12 lg:pl-12 py-2 rounded-r-full">
              <span className="self-center ml-10 lg:mr-10 mr-4 lg:text-xl text-sm font-semibold text-slate-100">
                Puskesmas Hom-Hom Wamena
              </span>
            </div>
          </a>
        </div>

        <div className="md:relative md:pr-12">
          <div
            className={`absolute -top-10 -left-64 -right-12 -z-50 hidden md:block transition-opacity duration-500 ${
              scrollY >= 50 ? "md:opacity-0" : "md:opacity-100"
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#4CB9E7"
                fillOpacity={pathname === "/" ? "0" : "1"}
                d="M0,32L80,53.3C160,75,320,117,480,165.3C640,213,800,267,960,282.7C1120,299,1280,277,1360,266.7L1440,256L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
              ></path>
            </svg>
          </div>
          <div className="flex items-center justify-center gap-x-14 z-50">
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              {loadLogin ? (
                <LoadingSpiner />
              ) : (
                <BtnDefault
                  addClass="bg-secondary text-color-1"
                  onClick={handelClick}
                >
                  Login
                </BtnDefault>
              )}
              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                aria-controls="navbar-sticky"
                aria-expanded="false"
                onClick={handleBurger}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            <div className="items-center justify-between hidden w-full overflow-auto lg:max-w-[80%] md:max-w-[500px] xl:flex md:w-auto md:order-1">
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-2 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                {ListMenu &&
                  ListMenu.map((item, index) => {
                    const isActive = pathname === item.href;
                    return (
                      <li key={index}>
                        <Link
                          href={item.href}
                          className={`${
                            isActive && "bg-menu-active"
                          } block py-1 px-4 text-color-2 rounded-full hover:bg-menu-active transition-colors duration-500`}
                        >
                          <span>{item.name}</span>
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={`xl:hidden z-50`}>
        <Mobile open={open} />
      </div>
    </nav>
  );
};

export default NavbarComp;
