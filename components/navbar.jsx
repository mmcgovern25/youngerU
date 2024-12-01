import Link from "next/link";
import React from "react";
import { navItems } from "@/utils/NavData";
import NavMenu from "./NavMenu"

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-8">
      {/* Logo */}
      <h1 className="font-bold text-2xl">Logo</h1>
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