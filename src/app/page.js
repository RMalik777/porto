"use client";
import Link from "next/link";
import Image from "next/image";
import { contactList } from "./Contact/contactlist";
import { eduList, expList, cvlist, worklist } from "./About/aboutlist";
import { projectList, skillList } from "./Skills/skillslist";

import { useRef } from "react";
import { RedHatDisp } from "@/app/fonts";

import up from "/public/up.svg";

import {
  motion,
  useScroll,
  useAnimate,
  animate,
  useInView,
} from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();

  const titleTitle = useRef(null);
  const titleInView = useInView(titleTitle, { once: true });

  const [scope, animate] = useAnimate();

  return (
    <main>
      <motion.div
        className="progress-bar fixed left-0 right-0 top-0 z-50 h-1 origin-top-left bg-accent dark:bg-accentDark"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="group fixed bottom-0 right-0 z-10 m-4 rounded-full border-2 border-solid border-white bg-headerbg p-0 text-textinvert shadow-md transition-all duration-200 ease-out hover:bg-white hover:shadow-lg hover:backdrop-blur-sm md:p-1">
        <Link href={"#intro"} className="flex items-center justify-center">
          {/* <span className="text-6xl material-symbols-rounded group-hover:text-[#aa4465] duration-300 ease-out">
            keyboard_double_arrow_up
          </span> */}
          <Image src={up} alt="Up button for back to top" />
        </Link>
      </div>
      <div
        id="intro"
        className="flex h-dvh flex-col items-center justify-center">
        <h1
          ref={scope}
          className={
            RedHatDisp.className +
            " title text-center text-h1 font-extrabold text-text dark:text-textDark"
          }>
          Hello
        </h1>
        <h2
          translate="no"
          className="title text-center text-h2 font-normal text-text dark:text-textDark">
          I&apos;m Rafli Malik
        </h2>
        <Link href="#content">
          <button className="defaultbtn rounded-full border-6 border-accent bg-transparent px-8 py-3 text-p font-semibold text-text transition-all duration-300 ease-out hover:bg-accent hover:text-textinvert hover:shadow-primarybtn hover:shadow-text dark:text-textDark">
            Let&apos;s Get Started
          </button>
        </Link>
      </div>

      <div
        id="content"
        className="mb-12 grid h-auto scroll-mt-16 auto-rows-min grid-cols-1 items-center justify-center gap-4 py-4 md:mb-6 md:grid-cols-2 md:justify-evenly md:gap-12">
        <h1
          ref={titleTitle}
          style={{
            transform: titleInView ? "none" : "translateX(-50px)",
            opacity: titleInView ? 1 : 0,
            transition: "all 0.7s cubic-bezier(0.2, 0, 0, 1) 0.1s",
          }}
          className={
            RedHatDisp.className +
            " w-full text-center text-h1 font-black text-text"
          }>
          what i do
        </h1>
        <p className="contentText w-full max-w-prose font-normal leading-p tracking-p text-text">
          Front-End Development, UI/UX Design and sometimes graphic design. I
          can do little bit photo editing and little more in video editing.
          Maybe not much, but more than enough to cover all my related work. I
          can proudly say I&apos;m capable of speaking fluent English. I&apos;m
          good at teaching and mentoring other people.
          <br />
          If you look below this page, I&apos;ve listed all the previous work I
          did in the past. You can contact me through the link below.
        </p>
        <div className="flex w-full flex-col flex-wrap items-start justify-evenly gap-6 self-start justify-self-center md:col-start-2 md:flex-row md:items-center md:gap-10">
          <Link href="/#contact">
            <button className="defaultbtn rounded-full border-6 border-accent bg-transparent px-8 py-3 text-p font-semibold text-text transition-all duration-300 ease-out hover:bg-accent hover:text-textinvert hover:shadow-primarybtn hover:shadow-text dark:text-textDark">
              Contact Me
            </button>
          </Link>
          <Link href="/#CV">
            <button className="defaultbtn rounded-full border-6 border-accent bg-transparent px-8 py-3 text-p font-semibold text-text transition-all duration-300 ease-out hover:bg-accent hover:text-textinvert hover:shadow-primarybtn hover:shadow-text dark:text-textDark">
              Download CV
            </button>
          </Link>
        </div>
      </div>

      <div
        id="skills"
        className="mb-24 flex h-full scroll-mt-24 flex-col items-start justify-center gap-2 md:mb-32">
        <h2
          className={
            RedHatDisp.className +
            " title text-left text-h2 font-black text-text dark:text-textDark"
          }>
          Skills
        </h2>
        <div>{skillList}</div>
      </div>

      <div className="mb-32 grid h-auto grid-cols-1 gap-6 md:grid-cols-2 md:gap-12">
        <h2
          className={
            RedHatDisp.className +
            " header self-center py-4 text-h2 font-black md:col-span-2"
          }>
          Projects
        </h2>
        {projectList}
      </div>

      <div id="about" className="mb-32 h-auto scroll-mt-24">
        <div className="mb-32">
          <h2
            className={
              RedHatDisp.className + " header self-end py-1 text-h2 font-black"
            }>
            Education
          </h2>
          {eduList}
        </div>
        <div className="mb-32">
          <h2
            className={
              RedHatDisp.className + " header self-end py-1 text-h2 font-black"
            }>
            Work Experience
          </h2>
          {worklist}
        </div>
        <div className="h-auto">
          <h2
            className={
              RedHatDisp.className + " header self-end py-4 text-h2 font-black"
            }>
            Activity
          </h2>
          <div
            id="experience"
            className="grid h-auto grid-cols-1 gap-2 sm:gap-4 md:grid-cols-2 md:gap-6 md:gap-y-12 lg:grid-cols-3">
            {expList}
          </div>
        </div>
      </div>

      <div
        id="contact"
        className="mb-32 grid h-full scroll-mt-24 grid-cols-1 gap-6 md:grid-cols-2 md:gap-12">
        <h2
          className={
            RedHatDisp.className +
            " header self-center py-4 text-h2 font-black md:col-span-2"
          }>
          Contact Me
        </h2>
        {contactList}
      </div>

      <div id="CV" className="mb-32 h-full scroll-mt-24">
        <h2
          className={
            RedHatDisp.className +
            " header self-center py-4 text-h2 font-black md:col-span-2"
          }>
          Curriculum Vitae
        </h2>
        {cvlist}
      </div>
    </main>
  );
}
