"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import { useState, useRef, useEffect } from "react";

import nextblack from "/public/nextjs-black.svg";
import nextwhite from "/public/nextjs-white.svg";

import { useInView } from "framer-motion";

export default function Footer() {
  const nextlogo = useRef(null);
  const nextInView = useInView(nextlogo, { once: true });
  const social = [
    {
      id: 0,
      name: "Github",
      showas: "RMalik777",
      logo: "/project/logo/githubmarkblack.png",
      link: "https://github.com/RMalik777",
      alt: "GitHub Logo",
    },
    {
      id: 1,
      name: "Instagram",
      showas: "play.playy",
      logo: "/instagram.svg",
      link: "https://www.instagram.com/play.playy/",
      alt: "Instagram Logo",
    },
    {
      id: 2,
      name: "LinkedIn",
      showas: "Rafli Malik",
      logo: "/linkedin.png",
      link: "https://www.linkedin.com/in/rafli-malik/",
      alt: "LinkedIn Logo",
    },
    {
      id: 3,
      name: "Email",
      showas: "Rafli.Malik@gmail.com",
      logo: "/gmail.png",
      link: "mailto:Rafli.Malik@gmail.com",
      alt: "Gmail Logo",
    },
  ];
  const socialList = social.map((target) => (
    <div key={target.id} className="">
      <Link
        className="flex flex-row items-center gap-4"
        href={target.link}
        target="_blank"
        rel="noopener noreferrer">
        <p className="font-medium duration-500 ease-out hover:underline hover:font-semibold">
          <small>{target.showas}</small>
        </p>
        <Image
          className="h-auto w-8 font-medium duration-300 ease-out"
          src={target.logo}
          width={256}
          height={256}
          alt={target.alt}
        />
      </Link>
    </div>
  ));

  return (
    <footer id="endcredit" className="h-auto">
      <div className="w-auto flex flex-col md:flex-row justify-between items-center py-6 pb-12 mt-16">
        <div className="profile w-auto flex items-center self-start">
          <Image
            className="w-24 h-auto float-left mr-2 rounded-full"
            src="/photosquarezoom.jpg"
            width={512}
            height={512}
            alt="Picture of Rafli Malik, the owner of this website"
          />
          <h6 className="font-bold">Rafli Malik</h6>
        </div>
        <div className="social w-auto flex flex-col items-end gap-4 self-end">
          {socialList}
        </div>
      </div>
      <div
        ref={nextlogo}
        className="h-auto w-full absolute left-0 right-0 p-2 px-6 md:px-8 lg:px-12 xl:px-14 bg-black bg-fixed flex flex-row gap-4 items-center justify-center"
        style={{
          opacity: nextInView ? 1 : 0,
          transition: "all 1s cubic-bezier(0.2, 0, 0, 1) 0.2s",
        }}>
        <h6 className="text-white font-semibold">Made With</h6>
        <Image className="w-auto h-5" src={nextwhite} alt="NextJS Logo" />
      </div>
    </footer>
  );
}
