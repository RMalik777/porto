import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { about, education, CV, work } from "./aboutdata";
import { ImageSkeleton } from "../components/Skeletons";

export const expList = about.map((target) => (
  <Link key={target.id} href={"/Experience/" + target.htmlid}>
    <div
      id={target.htmlid}
      className={
        " card h-full flex flex-col gap-2 p-8 sm:p-6 md:p-12 rounded-xl transition-all duration-300 ease-out border-2 border-white border-solid hover:bg-accent hover:shadow-primarybtn hover:shadow-text hover:text-textinvert"
      }>
      <Image
        src={target.picture.thumbnail.source}
        alt="Project Thumbnail"
        width={720}
        height={540}
        className="w-auto h-auto rounded-lg"
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
  <div key={target.id} className={" w-full mb-6 font-bold"}>
    <h5 translate="no" className="w-full">
      {target.name}
    </h5>
    <p className="w-full font-medium">{target.desc}</p>
    <p className="w-full font-medium">{target.gpa}</p>
  </div>
));

export const worklist = work.map((target) => (
  <div key={target.id} className=" rounded-2xl py-3 mb-4">
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
    className="border-2 border-white rounded-2xl px-6 py-3 mb-4">
    <h6 className="font-bold mb-2">{target.name}</h6>
    <div className="flex flex-col sm:flex-row gap-4">
      <Link
        href={target.source}
        className="w-fit secondarybtninvert text-p font-semibold border-3 border-accent bg-accent text-textinvert px-4 py-1 rounded-full transition-all duration-300 ease-out hover:bg-bg hover:border-text hover:shadow-secondarybtn hover:text-text">
        <button>
          <p>View</p>
        </button>
      </Link>
      <Link
        href={target.source}
        download={true}
        className="w-fit secondarybtn text-p font-semibold border-3 border-accent text-text px-4 py-1 rounded-full transition-all duration-300 ease-out hover:bg-accent hover:shadow-secondarybtn hover:shadow-text hover:text-textinvert">
        <button>
          <p>Download</p>
        </button>
      </Link>
    </div>
  </div>
));
