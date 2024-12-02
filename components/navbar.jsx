import Link from "next/link";
import React from "react";
import { navItems } from "@/utils/NavData";
import NavMenu from "./NavMenu"
import Image from "next/image";
import logo from "@/public/logo.png"
import "../app/globals.css";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-8">
      {/* Logo */}
      <Link href="/">
        <Image src={logo} alt="logo" width={70} height={70} />
      </Link>
      {/* Navigation items */}
      <ul className="hidden md:flex md:space-x-16 gap-6 md:pr-8 lg:pr-16 text-[#0077BC] font-bold lg:text-xl">
        {navItems.map(({ label, path }) => (
          <li className="hover:text-[#65B5AC] hover:scale-105 transition-transform duration-200" key={label}>
            <Link href={path} alt={label}>{label}</Link>
          </li>
        ))}
      </ul>
      <NavMenu />
    </nav>
  );
};

export default Navbar;