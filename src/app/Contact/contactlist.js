import Link from "next/link"
import {contactInfo} from "./contactdata.js"

export const contactList = contactInfo.map(target =>
  <Link key={target.key} href={target.url}>
    <div className={"card flex flex-col sm:flex-row gap-4 px-6 py-4 rounded-2xl transition-all duration-300 ease-out border-2 border-white border-solid"}>
      <div className="projectinfo inline-block">
        <h5 translate="no" className="font-semibold">{target.title}</h5>
        <h6 translate="no" className="text-left">{target.desc} </h6>
      </div>
    </div>
  </Link>
)