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
      <ul className="hidden sm:flex gap-6">
        {navItems.map(({ label }) => (
          <Link href="/" key={label}>
            <li>{label}</li>
          </Link>
        ))}
      </ul>
      <NavMenu />
    </nav>
  );
};

export default Navbar;