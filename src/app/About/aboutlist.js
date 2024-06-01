import Image from "next/image";
import Link from "next/link";
import { about, education, CV, work } from "./aboutdata";

export const expList = about.map((target) => (
  <Link key={target.id} href={"/Experience/" + target.htmlid}>
    <div
      id={target.htmlid}
      className={
        "card flex h-full flex-col gap-2 rounded-xl border-2 border-solid border-white p-8 transition-all duration-300 ease-out hover:bg-accent hover:text-textinvert hover:shadow-primarybtn hover:shadow-text sm:p-6 md:p-12"
      }>
      <Image
        src={target.picture.thumbnail.source}
        alt="Project Thumbnail"
        width={720}
        height={540}
        className="h-auto w-auto rounded-lg"
      />
      <div className="expinfo">
        <h5 translate="no" className="font-semibold">
          {target.title}
        </h5>
        <p className="text-left">{target.desc} </p>
      </div>
    </div>
  </Link>
));

export const eduList = education.map((target) => (
  <div key={target.id} className={"mb-6 w-full font-bold"}>
    <h5 translate="no" className="w-full">
      {target.name}
    </h5>
    <p className="w-full font-medium">{target.desc}</p>
    <p className="w-full font-medium">{target.gpa}</p>
  </div>
));

export const worklist = work.map((target) => (
  <div key={target.id} className="mb-4 rounded-2xl py-3">
    <h4 className="font-bold">{target.position}</h4>
    <h5 className="font-bold">
      {target.company} | <span className="font-medium">{target.status}</span>
    </h5>
    <p className="font-medium">
      {target.start} &ndash; <span className="">{target.end}</span>
    </p>
    <p className="font-medium">{target.location}</p>
    <p>{target.desc}</p>
  </div>
));

export const cvlist = CV.map((target) => (
  <div
    key={target.id}
    className="mb-4 rounded-2xl border-2 border-white px-6 py-3">
    <h6 className="mb-2 font-bold">{target.name}</h6>
    <div className="flex flex-col gap-4 sm:flex-row">
      <Link
        href={target.source}
        className="secondarybtninvert w-fit rounded-full border-3 border-accent bg-accent px-4 py-1 text-p font-semibold text-textinvert transition-all duration-300 ease-out hover:border-text hover:bg-bg hover:text-text hover:shadow-secondarybtn">
        <button>
          <p>View</p>
        </button>
      </Link>
      <Link
        href={target.source}
        download
        className="secondarybtn w-fit rounded-full border-3 border-accent px-4 py-1 text-p font-semibold text-text transition-all duration-300 ease-out hover:bg-accent hover:text-textinvert hover:shadow-secondarybtn hover:shadow-text">
        <button>
          <p>Download</p>
        </button>
      </Link>
    </div>
  </div>
));
