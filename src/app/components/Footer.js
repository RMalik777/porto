"use client";
import Image from "next/image";
import Link from "next/link";

import { useRef } from "react";

// import nextblack from "/public/nextjs-black.svg";
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
    },
    {
      id: 1,
      name: "Instagram",
      showas: "play.playy",
      logo: "/instagram.png",
      link: "https://www.instagram.com/raflimalik__/",
    },
    {
      id: 2,
      name: "LinkedIn",
      showas: "Rafli Malik",
      logo: "/linkedin.png",
      link: "https://www.linkedin.com/in/rafli-malik/",
    },
    {
      id: 3,
      name: "Email",
      showas: "Rafli.Malik@gmail.com",
      logo: "/gmail.png",
      link: "mailto:Rafli.Malik@gmail.com",
    },
  ];
  const socialList = social.map((target) => (
    <div key={target.id} className="">
      <Link
        className="flex flex-row items-center gap-4"
        href={target.link}
        target="_blank"
        rel="noopener noreferrer">
        <p className="font-medium duration-500 ease-out hover:font-semibold">
          <small>{target.showas}</small>
        </p>
        <Image
          className="h-auto w-8 font-medium duration-300 ease-out"
          src={target.logo}
          width={256}
          height={256}
          alt=""
        />
      </Link>
    </div>
  ));

  return (
    <footer id="endcredit" className="h-auto">
      <div className="mt-16 flex w-auto flex-col items-center justify-between py-6 pb-12 md:flex-row">
        <div className="profile flex w-auto items-center self-start">
          <Image
            className="float-left mr-2 h-auto w-24 rounded-full"
            src="/photosquarezoom.jpg"
            width={512}
            height={512}
            alt="Picture of Rafli Malik, the owner of this website"
          />
          <h6 className="font-bold">Rafli Malik</h6>
        </div>
        <div className="social flex w-auto flex-col items-end gap-4 self-end *:duration-200 *:ease-out hover:*:text-accent hover:*:underline">
          {socialList}
        </div>
      </div>
      <div
        ref={nextlogo}
        className="absolute left-0 right-0 flex h-auto w-full flex-row items-center justify-center gap-4 bg-black bg-fixed p-2 px-6 md:px-8 lg:px-12 xl:px-14"
        style={{
          opacity: nextInView ? 1 : 0,
          transition: "all 1s cubic-bezier(0.2, 0, 0, 1) 0.2s",
        }}>
        <h6 className="font-semibold text-white">Made With</h6>
        <Image className="h-5 w-auto" src={nextwhite} alt="NextJS Logo" />
      </div>
    </footer>
  );
}
