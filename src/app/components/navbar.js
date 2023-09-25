'use client';
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import Close from "/public/Close.svg"
import Menu from "/public/Menu.svg"

export async function getServerSideProps() {
    console.log("rendering now");
    return { props: {} };
}

export default function Navbar() {

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    const [nav, setNav] = React.useState(false);
    const showNav = () => {
        setNav(!nav);
    }
    const category = [
        {
            id: 0,
            title: "Home",
            address: "/",
        },
        {
            id: 1,
            title: "Skills",
            address: "/Skills",
        },
        {
            id: 2,
            title: "Contact",
            address: "/Contact",
        },
        {
            id: 3,
            title: "About",
            address: "/About",
        }
    ];
    const catMenu = category.map(target =>
        <li key={target.id}>
            <Link className="navitem w-full text-right sm:text-left p-4 pr-6 sm:pl-11 inline-block " href={target.address} onClick={showNav}>
                {target.title}
            </Link>
        </li>);

    return (
        <header className="fixed top-0 right-0 left-0 py-4 px-3 pd:px-6 lg:px-12 xl:px-14 w-full h-auto flex flex-row justify-between">
            <style jsx global>{`
                body {
                    background-color: ${nav ? "var(--overlay)" : "var(--bg)"}
                }`}
            </style>
            <h6 className="navText" style={{opacity: scrollY>200 ? 1 : 0}}>Rafli</h6>

            <nav id="navmenu">
                <ul className={"sidebar h-full fixed z-10 top-0 right-0 overflow-x-hidden pt-28 md:pt-22 " + (nav ? "w-full sm:w-1/3" : "w-0")} >
                    <Image
                        className="cursor-pointer closebtn w-auto p-4 absolute top-0 right-0 px-3 pd:px-6 lg:px-12 xl:px-14"
                        onClick={showNav}
                        src={Close}
                        alt="Close Button"
                        priority
                    />
                    {catMenu}
                </ul>
            </nav>
            <Image
                className="navBtn cursor-pointer"
                onClick={showNav}
                src={Menu}
                alt="Menu Button"
                priority
            />
        </header>

    );
}