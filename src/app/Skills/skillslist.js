import Link from "next/link";
import Image from "next/image";
import { project, skills } from "./skillsdata";
import DOMPurify from "dompurify";

import githubblack from "/public/project/logo/githubmarkblack.png";
// import githubwhite from "/public/project/logo/githubmarkwhite.png";
import figmacolor from "/public/project/logo/figmacolor.svg";

function imageLogo(source) {
  if (source === "Github") {
    return githubblack;
  } else if (source === "Figma") {
    return figmacolor;
  }
}

export const skillList = skills.map((target) => (
  <div className="mb-5" key={target.id}>
    <h5 className="font-semibold">{target.category}</h5>
    <div className="flex flex-wrap items-start justify-start gap-5">
      {target.skills.map((skill) => (
        <p
          id="skillitem"
          key={skill.id}
          translate="no"
          className="skillslist rounded-full border-2 border-white bg-accent px-6 py-1 font-semibold text-white">
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
      "flex flex-col items-start gap-4 rounded-2xl border-2 border-solid border-white px-3 py-1 transition-all duration-300 ease-out sm:flex-row md:px-6 md:py-4"
    }>
    <Image
      src={target.thumbnail}
      alt="Project Thumbnail"
      width={500}
      height={500}
      className="mt-2 inline-block h-auto w-28 rounded-md object-contain object-center"
    />
    <div className="projectinfo inline-block">
      <h5 translate="no" className="font-semibold">
        {target.title}
      </h5>
      <p
        className="text-left"
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(target.desc),
        }}></p>
      <div className="mt-2 flex flex-col gap-2 lg:mt-4 lg:flex-row lg:gap-6">
        {target.url === "" ?
          <button
            className="disabledbtn flex w-44 min-w-fit cursor-default flex-row items-center justify-center gap-4 rounded-full border-3 border-gray-300 bg-transparent px-3 py-1 text-p font-semibold text-gray-300 transition-all duration-300 ease-out"
            type="button"
            disabled>
            Result
          </button>
        : <Link
            href={target.url}
            target="_blank"
            rel="noopener noreferrer"
            className="secondarybtninvert flex w-44 min-w-fit flex-row items-center justify-center gap-4 rounded-full border-3 border-accent bg-accent px-3 py-1 text-p font-semibold text-textinvert transition-all duration-300 ease-out hover:border-text hover:bg-bg hover:text-text hover:shadow-secondarybtn">
            Result
          </Link>
        }
        <Link
          href={target.sourceurl}
          target="_blank"
          rel="noopener noreferrer"
          className="secondarybtn flex w-44 min-w-fit flex-row items-center justify-evenly rounded-full border-3 border-accent bg-transparent px-4 py-1 text-p font-semibold text-text transition-all duration-300 ease-out hover:bg-accent hover:text-textinvert hover:shadow-secondarybtn hover:shadow-text">
          <Image
            className="inline-block h-6 w-auto"
            src={imageLogo(target.source)}
            alt="Github Logo"
          />
          Source
        </Link>
      </div>
    </div>
  </div>
));
