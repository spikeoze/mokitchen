import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

function Menu() {
  return (
    <motion.div
      animate={{ y: [-10, 0], opacity:[0, 1] }}
      transition={{
        duration: 0.1,
        ease: "easeInOut",
      }}
      className="absolute top-20 p-2 bg-white dark:bg-gray-800 left-11 w-64 h-auto 
    border border-gray-300 dark:border-black  rounded-lg shadow-xl flex flex-col justify-center items-center"
      id="MENU"
    >
      <NavLink link={""} name="home" color={""} />
      <NavLink link={""} name="Products" color={"text-pink-500"} />
      <NavLink link={""} name="About" color={"text-blue-500"} />
      <NavLink link={""} name="Contacts" color={"text-gray-500"} />
    </motion.div>
  );
}

export const NavLink = ({ link, name, color }) => {
  return (
    <Link href={`/${link}`}>
      <p
        className={`bg-gray-50 dark:bg-gray-700 hover:scale-95 rounded-lg my-1 px-2 py-3 text-left w-full cursor-pointer hover:opacity-50 transition-all capitalize ${color}`}
      >
        {name}
      </p>
    </Link>
  );
};

export default Menu;
