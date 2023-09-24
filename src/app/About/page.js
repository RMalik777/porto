import Link from "next/link";
import Image from "next/image";
import styles from "./aboutStyle.module.css"
import { about } from "./aboutdata"

const education = [
  {
    id: 1,
    name: "BINUS University",
    desc: "Computer Science",
    gpa: "3.46",
  },
  {
    id: 2,
    name: "SMAN 3 Tangerang",
    desc: "Science Major",
    gpa: "",
  },
]

export default function About() {
  const eduList = education.map(target =>
    <div key={target.id} className={(styles.school) + " w-full mb-6"}>
        <h3 className="w-full">{target.name}</h3>
        <h5 className="w-full">{target.desc}</h5>
        <h5>{target.gpa}</h5>
      </div>
  ) 


  const expList = about.map(target =>
    <div key={target.id} className="expcard flex flex-col gap-4">
      <Image
        src={target.thumbnail}
        alt="Project Thumbnail"
        width={1000}
        height={1000}
        className="w-auto h-auto" />
      <div className="expinfo">
        <h5 className="">{target.title}</h5>
        <p className="text-left">{target.desc} </p>
      </div>
    </div>
  )

  return (
    <main>
      <div id="intro" className=" h-screen flex flex-col items-center justify-center">
        <h1 className="title text-center">Rafli Malik</h1>
        <h2 className="subtitle text-center">Front-End Developer</h2>
        <button className="defaultbtn rounded-full px-8 py-3"><a href="#projectarea">Get to Know Me</a></button>
      </div>

      <div id="content" className="h-auto md:h-screen flex flex-col md:flex-row justify-center md:justify-evenly items-center py-4 mb-12 md:mb-6 gap-4 md:gap-12">
        <h1 className="contentTitle w-full md:w-1/2 text-center">who am i</h1>
        <p className="contentText w-full md:w-1/2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolore nobis distinctio fugiat facere dolorum corporis reprehenderit porro corrupti expedita, sint labore quod quaerat perspiciatis ut, aliquam modi velit ipsum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque corporis voluptatem dolore voluptates, tempore quaerat est enim. Pariatur, doloremque. Eum asperiores maxime hic id, facilis placeat nobis eveniet exercitationem dolores!</p>
      </div>

      
        <div id="education" className="h-auto md:h-screen w-auto= flex flex-col md:flex-row justify-evenly items-center py-4 mb-12 md:mb-6 gap-4 md:gap-12">
          <h1 className="contentTitle w-full md:w-1/2 text-center">Education</h1>
          <div className="w-full md:w-1/2">
            {eduList}
          </div>
        </div>

      <div className={(styles.experience)+ " h-auto mb-32"}>
        <h3 className="header md:col-span-3 self-end sticky py-4">Experience</h3>
        <div id="experience" className={(styles.experience) + " h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 md:gap-y-32"}>
            {expList}
        </div>
      </div>

    </main>
  )

}