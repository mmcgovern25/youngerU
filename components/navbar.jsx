"use client";

import { useState } from "react";
import Image from "next/image";
import youngeru from "../public/youngeru.jpg";
import logo from "@/public/logo.png"
import hamburg from "../public/hamburg.png"
import Link from "next/link";

export default function Navbar({ initialMenuState }) {
    const [isOpen, setIsOpen] = useState(initialMenuState);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="flex justify-between items-start">
            <Image src={youngeru} width={150} height={150} alt="Younger U" className="mr-auto" />

            <nav className="ml-auto">
                <div className="md:hidden pt-4 pr-4" onClick={toggleMenu}>
                    <button className=" focus:outline-none">
                        <Image src={hamburg} alt="Menu" width={30} height={30} />
                    </button>
                </div>

                <ul className={`flex-col pt-8 md:flex-row md:flex space-x-16 justify-end w-full pr-4 md:pr-8 lg:pr-16 ${isOpen ? 'flex' : 'hidden'} md:flex`}>
                    <li>
                        <Link href="/coaching">Coaching</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Image src={logo} alt="logo" width={100} height={100} className="align-middle" />
                    </li>
                    <li>
                        <Link href="/podcast">Podcast</Link>
                    </li>
                    <li>
                        <Link href="/articles">Articles</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export async function getServerSideProps() {
    const initialMenuState = false;

    return {
        props: {
            initialMenuState,
        },
    };
}