import styles from "./skillsStyle.module.css"
import Image from "next/image"
import Link from "next/link"
import { project } from "./projectdata"

export const metadata = {
  title: "Skills",
  description: "See all my recent and past work"
}

export default function Skills() {
  const projectList = project.map(target =>
    <div key={target.id} className={(styles.card) + " flex flex-col sm:flex-row gap-4 px-6 py-4 rounded-2xl duration-300 ease-out"}>
      <Image
        src={target.thumbnail}
        alt="Project Thumbnail"
        width={1000}
        height={1000}
        className="w-28 h-20 mt-2 object-cover inline-block rounded-xl" />
      <div className="projectinfo inline-block">
        <h5 className="font-semibold">{target.title}</h5>
        <p className="text-left">{target.desc} </p>
        <div className="langicon flex gap-6">
          <Image src={target.img1} alt="" width={250} height={250} className="w-auto h-6" />
          <Image src={target.img2} alt="" width={250} height={250} className="w-auto h-6" />
          <Image src={target.img3} alt="" width={250} height={250} className="w-auto h-6" />
        </div>
      </div>
    </div>
  )

  return (
    <main>
      <div id="intro" className=" h-screen flex flex-col items-center justify-center gap">
        <h1 className="title font-bold text-center">Skills</h1>
        <h3 className="subtitle font-normal text-center max-w-prose">UI/UX // Web // Android // IOS <br /> Video Editing // Programming</h3>
        <button className="defaultbtn rounded-full px-8 py-3 bg-transparent font-semibold duration-300 ease-out mt-4 "><a href="#projectarea">See My Work</a></button>
      </div>

      <div id="content" className="h-auto md:h-screen flex flex-col md:flex-row justify-center md:justify-evenly items-center py-4 mb-12 md:mb-6 gap-4 md:gap-12">
        <h1 className="contentTitle font-bold w-full md:w-1/2 text-center">what i did</h1>
        <p className="contentText font-medium max-w-prose w-full md:w-1/2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolore nobis distinctio fugiat facere dolorum corporis reprehenderit porro corrupti expedita, sint labore quod quaerat perspiciatis ut, aliquam modi velit ipsum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque corporis voluptatem dolore voluptates, tempore quaerat est enim. Pariatur, doloremque. Eum asperiores maxime hic id, facilis placeat nobis eveniet exercitationem dolores!</p>
      </div>

      <div id="projectarea" className={" h-auto mb-32 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12"}>
        <h3 className="header md:col-span-2 self-center py-4 font-bold">Projects</h3>
        {projectList}
      </div>


    </main>
  )
}