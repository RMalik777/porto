"use client";
import Link from "next/link";
import { contactList } from "./Contact/contactlist";
import { eduList, expList, cvlist } from "./About/aboutlist";
import { projectList, skillList } from "./Skills/skillslist";

import { useRef } from "react";
import { RedHatDisp } from "@/app/fonts";

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
        className="progress-bar fixed z-50"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="group upbtn fixed bottom-0 right-0 z-10 p-0 md:p-1 m-4 rounded-full border-solid border-2 border-white hover:backdrop-blur-sm transition-all duration-200 ease-out shadow-md hover:shadow-lg">
        <Link href={"#intro"} className="flex items-center justify-center">
          <span className="text-6xl material-symbols-rounded group-hover:text-[#aa4465] duration-300 ease-out">
            keyboard_double_arrow_up
          </span>
        </Link>
      </div>
      <div
        id="intro"
        className="h-screen flex flex-col items-center justify-center">
        <h1
          ref={scope}
          className={
            RedHatDisp.className + " title font-extrabold text-center"
          }>
          Hello
        </h1>
        <h2 translate="no" className="subtitle font-normal text-center ">
          I&apos;m Rafli Malik
        </h2>
        <Link href="#content">
          <button className="defaultbtn rounded-full px-8 py-3 bg-transparent font-semibold transition-all duration-300 ease-out ">
            Let&apos;s Get Started
          </button>
        </Link>
      </div>

      <div
        id="content"
        className="scroll-mt-16 h-auto grid auto-rows-min grid-cols-1 md:grid-cols-2 justify-center md:justify-evenly items-center py-4 mb-12 md:mb-6 gap-4 md:gap-12">
        <h1
          ref={titleTitle}
          style={{
            transform: titleInView ? "none" : "translateX(-50px)",
            opacity: titleInView ? 1 : 0,
            transition: "all 0.7s cubic-bezier(0.2, 0, 0, 1) 0.1s",
          }}
          className={
            RedHatDisp.className + " contentTitle font-black w-full text-center"
          }>
          what i do
        </h1>
        <p className="contentText font-normal max-w-prose w-full ">
          Front-End Development, UI/UX Design and sometimes graphic design. I
          can do little bit photo editing and little more in video editing.
          Maybe not much, but more than enough to cover all my related work. I
          can proudly say I&apos;m capable of speaking fluent English. I&apos;m
          good at teaching and mentoring other people.
          <br />
          If you look below this page, I&apos;ve listed all the previous work I
          did in the past. You can contact me through the link below.
        </p>
        <div className="w-full flex flex-col md:flex-row flex-wrap justify-evenly items-start md:items-center gap-6 md:gap-10 md:col-start-2 self-start justify-self-center">
          <Link href="/#contact">
            <button className="defaultbtn rounded-full px-8 py-3 bg-transparent font-semibold transition-all duration-300 ease-out ">
              Contact Me
            </button>
          </Link>
          <Link href="/#CV">
            <button className="defaultbtn rounded-full px-8 py-3 bg-transparent font-semibold transition-all duration-300 ease-out ">
              Download CV
            </button>
          </Link>
        </div>
      </div>

      <div
        id="skills"
        className=" h-full flex flex-col items-start justify-center gap-2 mb-24 md:mb-32 scroll-mt-24">
        <h2 className={RedHatDisp.className + " title font-black text-left"}>
          Skills
        </h2>
        <div>{skillList}</div>
      </div>

      <div className="h-auto mb-32 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
        <h2 className="header md:col-span-2 self-center py-4 font-black">
          Projects
        </h2>
        {projectList}
      </div>

      <div id="about" className="h-auto mb-32 scroll-mt-24">
        <div className="mb-32">
          <h2
            className={
              RedHatDisp.className + " header self-end py-1 font-black"
            }>
            Education
          </h2>
          {eduList}
        </div>
        <div className="h-auto">
          <h2
            className={
              RedHatDisp.className + " header self-end py-4 font-black"
            }>
            Experience
          </h2>
          <div
            id="experience"
            className="h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 md:gap-6 md:gap-y-12">
            {expList}
          </div>
        </div>
      </div>

      <div
        id="contact"
        className="h-full mb-32 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 scroll-mt-24">
        <h2
          className={
            RedHatDisp.className +
            " header md:col-span-2 self-center py-4 font-black"
          }>
          Contact Me
        </h2>
        {contactList}
      </div>

      <div id="CV" className="h-full mb-32 scroll-mt-24">
        <h2
          className={
            RedHatDisp.className +
            " header md:col-span-2 self-center py-4 font-black"
          }>
          Curriculum Vitae
        </h2>
        {cvlist}
      </div>
    </main>
  );
}
