import Link from 'next/link'
import { contactList } from './Contact/contactlist'
import { eduList, expList, cvlist } from './About/aboutlist'
import { projectList, skillList } from './Skills/skillslist'


export default function Home() {
  return (
    <main>
      <div id="intro" className=" h-screen flex flex-col items-center justify-center">
        <h1 className="title font-bold text-center">Hello</h1>
        <h2 className="subtitle font-normal text-center">I&apos;m Rafli Malik</h2>
        <Link href="#content">
          <button className="defaultbtn rounded-full px-8 py-3 bg-transparent font-semibold transition-all duration-300 ease-out ">Let&apos;s Get Started</button>
        </Link>
      </div>

      <div id="content" className="scroll-mt-16 h-auto grid auto-rows-min grid-cols-1 md:grid-cols-2 justify-center md:justify-evenly items-center py-4 mb-12 md:mb-6 gap-4 md:gap-12">
        <h1 className="contentTitle font-bold w-full text-center">what i do</h1>
        <p className="contentText font-medium max-w-prose w-full ">Front-End Development, UI/UX Design and sometimes graphic design. I can do little bit photo editing and little more in video editing. Maybe not much, but more than enough to cover all my related work. I can proudly say I&apos;m capable of speaking fluent English. I&apos;m good at teaching and mentoring other people.<br/>
        If you look below this page, I&apos;ve listed all the previous work I did in the past. You can contact me through the link below.</p>
        <div className="w-full flex flex-col md:flex-row flex-wrap justify-evenly items-start md:items-center gap-6 md:gap-10 md:col-start-2 self-start justify-self-center">
          <Link href="/#contact">
            <button className="defaultbtn rounded-full px-8 py-3 bg-transparent font-semibold transition-all duration-300 ease-out ">Contact Me</button>
          </Link>
          <Link href="/#CV">
            <button className="defaultbtn rounded-full px-8 py-3 bg-transparent font-semibold transition-all duration-300 ease-out ">Download CV</button>
          </Link>
        </div>
      </div>

      <div id="skills" className=" h-full flex flex-col items-start justify-center gap-2 mb-24 md:mb-32 scroll-mt-24">
        <h2 className="title font-bold text-left">Skills</h2>
        {skillList}
      </div>

      <div id="projectarea" className="h-auto mb-32 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
        <h2 className="header md:col-span-2 self-center py-4 font-bold">Projects</h2>
        {projectList}
      </div>

      

      <div id="about" className="h-auto mb-32 scroll-mt-24">
        <div className="mb-32">
          <h2 className="header self-end py-1 font-bold">Education</h2>
          {eduList}
        </div>
        <div>
          <h2 className="header self-end py-4 font-bold">Experience</h2>
          <div id="experience" className="h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 md:gap-6 md:gap-y-12">
            {expList}
          </div>
        </div>
      </div>

      <div id="contact" className="h-full mb-32 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 scroll-mt-24">
        <h2 className="header md:col-span-2 self-center py-4 font-bold">Contact Me</h2>
        {contactList}
      </div>

      <div id="CV" className="h-full mb-32 scroll-mt-24">
        <h2 className="header md:col-span-2 self-center py-4 font-bold">Curriculum Vitae </h2>
        {cvlist}
      </div>
      

    </main>
  )
}
