import styles from "./skillsStyle.module.css"
import Image from "next/image"
import Link from "next/link"
import { project } from "./projectdata"

export default function Skills() {
  const projectList = project.map(target =>
    <div key={target.id} className="projectcard flex gap-4">
      <Image
        src={target.thumbnail}
        alt="Project Thumbnail"
        width={50}
        height={50}
        className="w-auto h-28 inline-block" />
      <div className="projectinfo inline-block">
        <h3 className="">{target.title}</h3>
        <p className="text-left">{target.desc} </p>
        <div className="langicon flex gap-6">
          <Image src={target.img1} alt="" width={0} height={0} className="w-auto h-6" />
          <Image src={target.img2} alt="" width={0} height={0} className="w-auto h-6" />
          <Image src={target.img3} alt="" width={0} height={0} className="w-auto h-6" />
        </div>
      </div>
    </div>
  )

  return (
    <main>
      <div id="intro" className=" h-screen flex flex-col items-center justify-center">
        <h1 className="title text-center">Skills</h1>
        <h2 className="subtitle text-center">UI/UX // Web // Android // IOS <br /> Video Editing // Programming</h2>
        <button className="contactbtn rounded-full px-8 py-3"><a href="#projectarea">See My Work</a></button>
      </div>

      <div id="content" className="h-auto md:h-screen flex flex-col md:flex-row justify-center md:justify-evenly items-center py-4 mb-12 md:mb-6 gap-4 md:gap-12">
        <h1 className="contentTitle w-full md:w-1/2 text-center">what i did</h1>
        <p className="contentText w-full md:w-1/2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolore nobis distinctio fugiat facere dolorum corporis reprehenderit porro corrupti expedita, sint labore quod quaerat perspiciatis ut, aliquam modi velit ipsum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque corporis voluptatem dolore voluptates, tempore quaerat est enim. Pariatur, doloremque. Eum asperiores maxime hic id, facilis placeat nobis eveniet exercitationem dolores!</p>
      </div>

      <div id="projectarea" className={(styles.project) + " h-auto mb-32 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12"}>
        <h2 className="header md:col-span-2 self-center sticky py-4">Projects</h2>
        {projectList}
      </div>


    </main>
  )
}