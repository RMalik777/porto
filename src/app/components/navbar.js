'use client';
import React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Close from "/public/Close.svg"
import Menu from "/public/Menu.svg"

export default function Navbar() {
    const [nav, setNav] = React.useState(false);
    const showNav = () => {
        setNav(!nav);
    }

    return (
        <header className="fixed top-0 right-0 left-0 py-4 px-3 pd:px-6 lg:px-12 xl:px-14 w-full h-auto flex flex-row justify-between">
            <style jsx global>{`
                body {
                    background-color: ${nav ? "var(--overlay)" : "var(--bg)"}
                }`}
            </style>
            <h1 className="navText">Rafli</h1>

            <nav id="navmenu">
                <ul className={"sidebar h-full fixed z-10 top-0 right-0 overflow-x-hidden pt-28 " + (nav ? 'w-1/3' : 'w-0')}>
                    <Image
                        className=" w-auto closebtn p-4 absolute top-0 right-0 px-3 pd:px-6 lg:px-12 xl:px-14"
                        onClick={showNav}
                        src={Close}
                        alt="Close Button"
                        priority
                    />
                    <li>
                        <Link className="navitem p-2 pl-5 sm:p-6 sm:pl-11 inline-block" href="/" onClick={showNav} >Home</Link></li>
                    <li>
                        <Link className="navitem p-2 pl-5 sm:p-6 sm:pl-11 inline-block" href="/src/app/Skills" onClick={showNav}>Skils</Link></li>
                    <li>
                        <Link className="navitem p-2 pl-5 sm:p-6 sm:pl-11 inline-block" href="/src/app/Contact" onClick={showNav}>Contact</Link></li>
                    <li>
                        <Link className="navitem p-2 pl-5 sm:p-6 sm:pl-11 inline-block" href="/src/app/About" onClick={showNav}>About</Link></li>
                </ul>
            </nav>
            <Image
                className="navBtn"
                onClick={showNav}
                src={Menu}
                alt="Menu Button"
            />
        </header>

    );
}