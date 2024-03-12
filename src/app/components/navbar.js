"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import Close from "/public/Close.svg";
import Menu from "/public/Menu.svg";
// import dark from "/public/darkMode.svg";
// import light from "/public/lightMode.svg";
// import { waitUntilSymbol } from "next/dist/server/web/spec-extension/fetch-event";

import { RedHatDisp } from "../fonts";

export default function Navbar() {
  const category = [
    {
      id: 0,
      title: "Home",
      address: "#intro",
    },
    {
      id: 1,
      title: "Skills",
      address: "#skills",
    },
    {
      id: 2,
      title: "About",
      address: "#about",
    },
    {
      id: 3,
      title: "Contact",
      address: "#contact",
    },
  ];
  const [scrollY, setScrollY] = useState(0);
  const [nav, setNav] = useState(false);
  const showNav = () => {
    setNav(!nav);
    setTimeout(() => {
      if (nav == false) {
        setNav(false);
      }
    }, 30000);
    clearTimeout();
  };
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const catMenuVertical = category.map((target) => (
    <li key={target.id} className="list-none text-center">
      <Link
        className="navitem w-full text-right sm:text-left p-4 pr-6 sm:pl-11 font-medium inline-block md:block duration-200 ease-linear max-md:hover:tracking-wider hover:underline max-md:hover:font-black"
        href={target.address}
        onClick={showNav}>
        {target.title}
      </Link>
    </li>
  ));
  const catMenuHorizontal = category.map((target) => (
    <li key={target.id} className="list-none text-center w-1/6 hidden md:block">
      <Link
        className="navitem font-medium duration-200 ease-linear hover:underline hover:font-black"
        href={target.address}>
        {target.title}
      </Link>
    </li>
  ));

  return (
    <header
      className={
        "scroll-smooth fixed h-auto z-50 w-full top-0 right-0 left-0 py-4 px-3 pd:px-6 lg:px-12 xl:px-14 duration-300 ease-out backdrop-blur-md " +
        (scrollY > 200 ? " shadow-sm " : " bg-white/0 shadow-none ") +
        RedHatDisp.className
      }>
      <style jsx global>
        {`
          body {
            background-color: ${nav ? "var(--overlay)" : "var(--bg)"};
          }
        `}
      </style>
      <div className="w-full flex flex-row justify-between items-center">
        <h6
          className={
            "navText opacity-0 font-bold transition-all duration-300 ease-out"
          }
          style={scrollY > 200 ? { opacity: 1 } : { opacity: 0 }}>
          Rafli
        </h6>

        {catMenuHorizontal}

        <div className="w-auto">
          <Image
            className="navBtn cursor-pointer inline-block md:hidden duration-300 ease-out z-50"
            onClick={showNav}
            src={Menu}
            alt="Menu Button"
            priority={true}
          />
        </div>
      </div>

      <nav id="navmenu" className="block md:hidden">
        <ul
          className={
            "sidebar h-screen fixed z-10 top-0 right-0 overflow-x-hidden pt-28 md:pt-22 duration-300 ease-out " +
            (nav ? "w-full sm:w-1/3 shadow-md" : "w-0 shadow-none")
          }>
          <Image
            className="closebtn w-auto p-4 absolute top-0 right-0 px-3 pd:px-6 lg:px-12 xl:px-14 duration-300 ease-out"
            onClick={showNav}
            src={Close}
            alt="Close Button"
            priority
          />
          {catMenuVertical}
        </ul>
      </nav>
    </header>
  );
}
