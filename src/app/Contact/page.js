import Link from "next/link";
import Image from "next/image";

export default function Contact(){
  return(
      <main>
      <div id="intro" className=" h-screen flex flex-col items-center justify-center">
        <h2 className="title text-center">Get In Touch With Me</h2>
        <h4 className="subtitle text-center">&quot;A lot of problems in the world would be solved if we talked to each other instead of about each other.&quot;<br />Nicky Gumbel</h4>
      </div>

      <div id="content" className="h-auto md:h-screen grid md:grid-cols-2 grid-cols-1 md:grid-rows-2 grid-rows-3 justify-center md:justify-evenly items-center py-4 mb-12 md:mb-6 gap-4 md:gap-12">
        <h1 className="contentTitle w-full text-center">how to find</h1>
        <p className="contentText w-full ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolore nobis distinctio fugiat facere dolorum corporis reprehenderit porro corrupti expedita, sint labore quod quaerat perspiciatis ut, aliquam modi velit ipsum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque corporis voluptatem dolore voluptates, tempore quaerat est enim. Pariatur, doloremque. Eum asperiores maxime hic id, facilis placeat nobis eveniet exercitationem dolores!</p>
      </div>
    </main>
  )
}