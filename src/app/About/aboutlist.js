import Image from "next/image";
import Link from "next/link";
import { about } from "./aboutdata";
import { education } from "./aboutdata";
import { CV } from "./aboutdata";

export const expList = about.map((target) => (
  <div
    key={target.id}
    className={
      " card flex flex-col gap-2 p-8 sm:p-6 md:p-12 rounded-xl transition-all duration-300 ease-out border-2 border-white border-solid"
    }
  >
    <Image
      src={target.thumbnail}
      alt="Project Thumbnail"
      width={1000}
      height={1000}
      className="w-auto h-auto rounded-lg"
    />
    <div className="expinfo">
      <h5 className="font-semibold">{target.title}</h5>
      <p className="text-left">{target.desc} </p>
    </div>
  </div>
));

export const eduList = education.map((target) => (
  <div key={target.id} className={" w-full mb-6 font-bold"}>
    <h5 className="w-full">{target.name}</h5>
    <p className="w-full font-medium">{target.desc}</p>
    <p className="w-full font-medium">{target.gpa}</p>
  </div>
));

export const cvlist = CV.map((target) => (
  <div key={target.id} className="border-2 border-white rounded-2xl px-6 py-3 mb-4">
    <h6 className="font-bold mb-2">{target.name}</h6>
    <div className="flex flex-col sm:flex-row gap-4">
      <Link href={target.source} className="w-fit secondarybtn px-4 py-1 rounded-full transition-all duration-300 ease-out">
        <button><p>View</p></button>
      </Link>
      <Link href={target.source} download={true} className="w-fit secondarybtn px-4 py-1 rounded-full transition-all duration-300 ease-out">
        <button><p>Download</p></button>
      </Link>
    </div>
  </div>
));
