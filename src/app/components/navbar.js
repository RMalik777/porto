"use client";
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
      address: "/#intro",
    },
    {
      id: 1,
      title: "Skills",
      address: "/#skills",
    },
    {
      id: 2,
      title: "About",
      address: "/#about",
    },
    {
      id: 3,
      title: "Contact",
      address: "/#contact",
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
        className="navitem inline-block w-full p-4 pr-6 text-right text-h4 font-medium text-text duration-200 ease-linear hover:text-accent hover:underline max-md:hover:font-black max-md:hover:tracking-wider sm:pl-11 sm:text-left md:block dark:text-textDark dark:hover:text-accentDark"
        href={target.address}
        onClick={showNav}>
        {target.title}
      </Link>
    </li>
  ));
  const catMenuHorizontal = category.map((target) => (
    <li key={target.id} className="hidden w-1/6 list-none text-center md:block">
      <Link
        className="navitem text-h6 font-medium duration-200 ease-linear hover:font-black hover:text-accent hover:underline dark:hover:text-accentDark"
        href={target.address}>
        {target.title}
      </Link>
    </li>
  ));

  return (
    <header
      className={
        "pd:px-6 fixed left-0 right-0 top-0 z-50 h-auto w-full scroll-smooth bg-bg bg-headerbg px-3 py-4 backdrop-blur-md backdrop-saturate-150 duration-300 ease-out lg:px-12 xl:px-14" +
        (scrollY > 200 ? "shadow-sm" : "bg-white/0 shadow-none") +
        RedHatDisp.className
      }>
      <style jsx global>
        {`
          body {
            background-color: ${nav ? "var(--overlay)" : "var(--bg)"};
          }
        `}
      </style>
      <div className="flex w-full flex-row items-center justify-between">
        <h6
          className={
            "navText text-h6 font-bold text-text opacity-0 transition-all duration-300 ease-out"
          }
          style={scrollY > 200 ? { opacity: 1 } : { opacity: 0 }}>
          Rafli
        </h6>

        {catMenuHorizontal}

        <div className="w-auto">
          <Image
            className="navBtn z-50 inline-block cursor-pointer duration-300 ease-out md:hidden"
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
            "sidebar md:pt-22 fixed right-0 top-0 z-10 h-dvh overflow-x-hidden bg-bg pt-28 duration-300 ease-out " +
            (nav ? "w-full shadow-md sm:w-1/3" : "w-0 shadow-none")
          }>
          <Image
            className="closebtn pd:px-6 absolute right-0 top-0 w-auto p-4 px-3 duration-300 ease-out lg:px-12 xl:px-14"
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
