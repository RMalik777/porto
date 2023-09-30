'use client';
import React from "react";
import { useState, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";

import Close from "/public/Close.svg"
import Menu from "/public/Menu.svg"
import dark from "/public/darkMode.svg"
import light from "/public/lightMode.svg"

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
            <Link className="navitem w-full text-right sm:text-left p-4 pr-6 sm:pl-11 font-normal inline-block duration-200 ease-linear hover:tracking-wider hover:font-black" href={target.address} onClick={showNav}>
                {target.title}
            </Link>
        </li>
        )

    return (
        <header className={"fixed top-0 right-0 left-0 py-4 px-3 pd:px-6 lg:px-12 xl:px-14 w-full h-auto flex flex-row justify-between duration-300 ease-out backdrop-blur-md " + (scrollY>200? " shadow-sm ": " bg-white/0 shadow-none ")}>
            <style jsx global>{`
                body {
                    background-color: ${nav ? "var(--overlay)" : "var(--bg)"}
                }`}
            </style>
            <h6 className="navText duration-300 ease-out opacity-0 font-bold" style={{opacity: scrollY>200 ? 1 : 0}}>Rafli</h6>

            <nav id="navmenu">
                <ul className={"sidebar h-screen fixed z-10 top-0 right-0 overflow-x-hidden pt-28 md:pt-22 duration-300 ease-out " + (nav ? "w-full sm:w-1/3 shadow-md" : "w-0 shadow-none")} >
                    <Image
                        className=" cursor-pointer closebtn w-auto p-4 absolute top-0 right-0 px-3 pd:px-6 lg:px-12 xl:px-14 duration-300 ease-out"
                        onClick={showNav}
                        src={Close}
                        alt="Close Button"
                        priority
                    />
                    {catMenu}
                </ul>
            </nav>
            <div className="space-x-8">

                <Image
                    className="dark:invert navBtn cursor-pointer inline-block duration-300 ease-out z-50"
                    onClick={showNav}
                    src={Menu}
                    alt="Menu Button"
                    priority={true}
                />
            </div>
        </header>

    );
}