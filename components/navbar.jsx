import Link from "next/link";
import React from "react";
import { navItems } from "@/utils/NavData";
import NavMenu from "./NavMenu"
import Image from "next/image";
import logo from "@/public/logo.png"

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-8">
      {/* Logo */}
      <Image src={logo} alt="logo" width={70} height={70} />
      {/* Navigation items */}
      <ul className="hidden md:flex md:space-x-16 gap-6 md:pr-8 lg:pr-16 text-[#0077BC] font-bold lg:text-xl ">
        {navItems.map(({ label }) => (
          <Link href="/" key={label}>
            <li className="transition-transform duration-200 ease-in-out transform hover:scale-105 hover:text-[#65B5AC]">{label}</li>
          </Link>
        ))}
      </ul>
      <NavMenu />
    </nav>
  );
};

export default Navbar;