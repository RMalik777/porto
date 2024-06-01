import Link from "next/link";
import { contactInfo } from "./contactdata.js";

export const contactList = contactInfo.map((target) => (
  <Link key={target.id} href={target.url}>
    <div
      className={
        "card flex flex-col gap-4 rounded-2xl border-2 border-solid border-white px-6 py-4 transition-all duration-300 ease-out hover:bg-accent hover:text-textinvert hover:shadow-primarybtn hover:shadow-text sm:flex-row"
      }>
      <div className="projectinfo inline-block">
        <h5 translate="no" className="font-semibold">
          {target.title}
        </h5>
        <h6 translate="no" className="text-left">
          {target.desc}{" "}
        </h6>
      </div>
    </div>
  </Link>
));
