import Image from 'next/image'

export default function Home() {
  return (
    <main style={{ height: "200vh" }}>
      <div id="intro" className=" h-screen flex flex-col items-center justify-center">
        <h1 className="title text-center">Hello</h1>
        <h2 className="subtitle text-center"></h2>
        <button className="contactbtn rounded-full px-8 py-3"><a href="#content">Let&apos;s Get Started</a></button>
      </div>

      <div id="content" className="h-auto md:h-screen grid md:grid-cols-2 grid-cols-1 md:grid-rows-2 grid-rows-3 justify-center md:justify-evenly items-center py-4 mb-12 md:mb-6 gap-4 md:gap-12">
        <h1 className="contentTitle w-full text-center">what i do</h1>
        <p className="contentText w-full ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolore nobis distinctio fugiat facere dolorum corporis reprehenderit porro corrupti expedita, sint labore quod quaerat perspiciatis ut, aliquam modi velit ipsum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque corporis voluptatem dolore voluptates, tempore quaerat est enim. Pariatur, doloremque. Eum asperiores maxime hic id, facilis placeat nobis eveniet exercitationem dolores!</p>
        <button className="contactbtn rounded-full px-8 py-3 md:col-start-2 self-start justify-self-center w-1/2"><a href="/Contact">Contact Me</a></button>
      </div>
    </main>
  )
}
