import Link from "next/link";
import Image from "next/image";
import { contactInfo } from "./contactdata.js";

export const metadata = {
  title: "Contact",
  description: "How to contact me"
}

export default function Contact(){
  const contactList = contactInfo.map(target =>
    <Link key={target.key} href={target.url}>
      <div className={"card flex flex-col sm:flex-row gap-4 px-6 py-4 rounded-2xl duration-300 ease-out"}>
        <div className="projectinfo inline-block">
          <h5 className="font-semibold">{target.title}</h5>
          <h6 className="text-left">{target.desc} </h6>
        </div>
      </div>
    </Link>
  )


  return(
      <main>
      <div id="intro" className=" h-screen flex flex-col items-center justify-center">
        <h2 className="title font-bold text-center">Get In Touch With Me</h2>
        <h4 className="subtitle font-normal text-center max-w-prose italic">&quot;A lot of problems in the world would be solved if we talked to each other instead of about each other.&quot;<br /><span className="font-semibold not-italic">- Nicky Gumbel</span></h4>
      </div>

      <div id="content" className="h-auto md:h-screen grid md:grid-cols-2 grid-cols-1 md:grid-rows-2 grid-rows-3 justify-center md:justify-evenly items-center py-4 mb-12 md:mb-6 gap-4 md:gap-12">
        <h1 className="contentTitle font-bold w-full text-center">how to find</h1>
        <p className="contentText font-medium max-w-prose w-full ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolore nobis distinctio fugiat facere dolorum corporis reprehenderit porro corrupti expedita, sint labore quod quaerat perspiciatis ut, aliquam modi velit ipsum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque corporis voluptatem dolore voluptates, tempore quaerat est enim. Pariatur, doloremque. Eum asperiores maxime hic id, facilis placeat nobis eveniet exercitationem dolores!</p>
      </div>

      <div id="projectarea" className={" h-auto mb-32 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12"}>
        <h3 className="header md:col-span-2 self-center py-4 font-bold">Contact Me</h3>
          {contactList}
          
          
      </div>
    </main>
  )
}