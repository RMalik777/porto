import Link from "next/link";
import Image from "next/image";
import { project, skills } from "./skillsdata";

import githubblack from "/public/project/logo/githubmarkblack.png";
import githubwhite from "/public/project/logo/githubmarkwhite.png";
import figmacolor from "/public/project/logo/figmacolor.svg";

function imageLogo(source) {
  if (source === "Github") {
    return githubblack;
  } else if (source === "Figma") {
    return figmacolor;
  }
}

function buttontype(url) {
  if (url === "") {
    return "disabledbtn cursor-default border-slate-400";
  } else {
    return "secondarybtn";
  }
}

function getbuttontype(target) {
  if (target === "") {
    return (
      <button
        className="disabledbtn cursor-default text-gray-300 min-w-fit w-44 rounded-full px-3 py-1 bg-transparent font-semibold transition-all duration-300 ease-out flex flex-row justify-center items-center gap-4"
        type="button">
        Result
      </button>
    );
  } else {
    return (
      <Link href={target} target="_blank" rel="noopener noreferrer">
        <button
          className="secondarybtninvert min-w-fit w-44 rounded-full px-3 py-1 bg-transparent font-semibold transition-all duration-300 ease-out flex flex-row justify-center items-center gap-4"
          type="button">
          Result
        </button>
      </Link>
    );
  }
}

export const skillList = skills.map((target) => (
  <div className="mb-4" key={target.category}>
    <h5 className="font-bold">{target.category}</h5>
    <div className="flex flex-wrap gap-4 justify-start items-start">
      {target.skills.map((skill) => (
        <p
          key={skill.id}
          translate="no"
          className="skillslist px-6 py-1 border-2 border-white text-white font-semibold rounded-full">
          {skill.name}
        </p>
      ))}
    </div>
  </div>
));

export const projectList = project.reverse().map((target) => (
  <div
    key={target.id}
    className={
      "cardnohover flex flex-col sm:flex-row items-start gap-4 px-3 py-1 md:px-6 md:py-4 border-2 border-white border-solid rounded-2xl transition-all duration-300 ease-out"
    }>
    <Image
      src={target.thumbnail}
      alt="Project Thumbnail"
      width={500}
      height={500}
      className="w-28 h-auto mt-2 object-contain object-center inline-block rounded-md"
    />
    <div className="projectinfo inline-block">
      <h5 translate="no" className="font-semibold">
        {target.title}
      </h5>
      <p
        className="text-left"
        dangerouslySetInnerHTML={{ __html: target.desc }}></p>
      <div className="mt-2 lg:mt-4 flex flex-col lg:flex-row gap-2 lg:gap-6">
        {getbuttontype(target.url)}
        <Link href={target.sourceurl} target="_blank" rel="noopener noreferrer">
          <button
            className="min-w-fit w-44 secondarybtn rounded-full px-4 py-1 bg-transparent font-semibold transition-all duration-300 ease-out flex flex-row justify-evenly items-center gap-4"
            type="button">
            <Image
              className="h-6 w-auto inline-block"
              src={imageLogo(target.source)}
              alt="Github Logo"
            />
            Source
          </button>
        </Link>
      </div>
    </div>
  </div>
));
