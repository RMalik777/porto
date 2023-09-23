import Link from "next/link";
import Image from "next/image";
import styles from "./aboutStyle.module.css"
import { about } from "./aboutdata"

export default function About() {
  const expList = about.map(target =>
    <div key={target.id} className="expcard flex flex-col gap-4">
      <Image
        src={target.thumbnail}
        alt="Project Thumbnail"
        width={50}
        height={50}
        className="w-auto h-auto" />
      <div className="expinfo">
        <h3 className="">{target.title}</h3>
        <p className="text-left">{target.desc} </p>
      </div>
    </div>
  )

  return (
    <main>
      <div id="intro" className=" h-screen flex flex-col items-center justify-center">
        <h1 className="title text-center">Rafli Malik</h1>
        <h2 className="subtitle text-center">Front-End Developer</h2>
        <button className="contactbtn rounded-full px-8 py-3"><a href="#projectarea">Get to Know Me</a></button>
      </div>

      <div id="content" className="h-auto md:h-screen flex flex-col md:flex-row justify-center md:justify-evenly items-center py-4 mb-12 md:mb-6 gap-4 md:gap-12">
        <h1 className="contentTitle w-full md:w-1/2 text-center">who am i</h1>
        <p className="contentText w-full md:w-1/2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolore nobis distinctio fugiat facere dolorum corporis reprehenderit porro corrupti expedita, sint labore quod quaerat perspiciatis ut, aliquam modi velit ipsum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque corporis voluptatem dolore voluptates, tempore quaerat est enim. Pariatur, doloremque. Eum asperiores maxime hic id, facilis placeat nobis eveniet exercitationem dolores!</p>
      </div>

      <div className="flex md:h-screen justify-center items-center">
        <div id="education" className="h-auto w-full grid md:grid-rows-2 items-center justify-items-center py-4 mb-12 md:mb-6 gap-2 md:gap-4">
          <h1 className="contentTitle w-full md:w-1/2 text-center col-span-2 row-span-2">Education</h1>
          <Image
            className="col-span-2 md:col-span-1 md:row-span-2 md:col-start-3 hidden md:block"
            src="/Circle.svg"
            width={125}
            height={125}
            alt="Decoration"
          />
          <div className={(styles.school) + " w-full md:col-start-4 md:self-start"}>
            <h2 className="w-full">BINUS University</h2>
            <h3 className="w-full">Computer Science</h3>
            <h3>GPA 3.46</h3>
          </div>
          <div className={(styles.school) + " w-full md:col-start-4 md:row-start-2 md:self-end"}>
            <h2>SMAN 3 Tangerang</h2>
            <h3>Science Major</h3>
          </div>
        </div>
      </div>

      <div className={(styles.experience)+ " h-auto mb-32"}>
        <h2 className="header md:col-span-3 self-end sticky py-4">Experience</h2>
        <div id="experience" className={(styles.experience) + " h-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 md:gap-y-32"}>
            {expList}
        </div>
      </div>

    </main>
  )

}