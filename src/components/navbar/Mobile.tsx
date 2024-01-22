/** @format */

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FC, useState } from "react";
import ListMenu from "./ListMenu";
import { usePathname } from "next/navigation";
type Props = {
  open: boolean;
};

const Mobile: FC<Props> = ({ open }) => {
  const pathname = usePathname();
  // state
  const [isOpen, setIsOpen] = useState(false);
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
        >
          <div className="h-full px-3 py-4 overflow-y-auto bg-menu-active">
            <ul className="space-y-2 font-medium">
              {ListMenu &&
                ListMenu.map((item, index) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className={`${
                          isActive && "bg-primary"
                        } block py-1 px-4 text-color-2 rounded-full hover:bg-primary transition-colors duration-500`}
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Mobile;
