import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    const social = [
        {
            id: 0,
            name: "Instagram",
            showas: "play.playy",
            logo: "/instagram.svg",
            link: "https://www.instagram.com/play.playy/",
            alt: "Instagram Logo",
        }, {
            id: 2,
            name: "LinkedIn",
            showas: "Rafli Malik",
            logo: "/linkedin.png",
            link: "https://www.linkedin.com/in/rafli-malik/",
            alt: "LinkedIn Logo",
        }, {
            id: 4,
            name: "Email",
            showas: "Rafli.Malik@gmail.com",
            logo: "/gmail.png",
            link: "mailto:Rafli.Malik@gmail.com",
            alt: "Gmail Logo",
        },
    ]
    const socialList = social.map(target =>
        <div key={target.id} className="">
            <Link className="flex flex-row items-center gap-4" href={target.link} target="_blank" rel="noopener noreferrer">
                <p className="font-medium duration-300 ease-out hover:underline hover:font-semibold"><small>{target.showas}</small></p>
                <Image
                    className="h-auto w-8 font-medium duration-300 ease-out"
                    src={target.logo}
                    width={512}
                    height={512}
                    alt={target.alt}
                />
            </Link>
        </div>
    )

    return (
        <footer id="endcredit" className="w-auto flex flex-col md:flex-row justify-between items-center py-4 mt-16">
            <div className="profile w-auto flex items-center self-start">
                <Image
                    className="w-24 h-auto float-left mr-2 rounded-full"
                    src="/photosquarezoom.jpg"
                    width={1000}
                    height={1000}
                    alt="Picture of Rafli Malik, the owner of this website"
                />
                <h6 className="font-bold">Rafli Malik</h6>
            </div>
            <div className="social w-auto flex flex-col items-end gap-4 self-end">
                {socialList}
            </div>
        </footer>
    )
}