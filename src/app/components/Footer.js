import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer(){
    const social=[
        {
            id : 0,
            name: "Instagram",
            showas: "play.playy" ,
            logo: "/Instagram.png",
            link: "https://www.instagram.com/play.playy/",
            alt: "Instagram Logo",
        },{
            id : 1,
            name: "WhatsApp",
            showas: "+628170817483" ,
            logo: "/whatsapp.png",
            link: "https://wa.me/628170817483",
            alt: "WhatsApp Logo",
        },{
            id : 2,
            name: "LinkedIn",
            showas: "Rafli Malik" ,
            logo: "/linkedin.png",
            link: "https://www.linkedin.com/in/rafli-malik/",
            alt: "LinkedIn Logo",
        },{
            id : 3,
            name: "Discord",
            showas: "play7" ,
            logo: "/discord.png",
            link: "https://discord.com/users/432877551640117249",
            alt: "Discord Logo",
        },{
            id : 4,
            name: "Email",
            showas: "Rafli.Malik@gmail.com" ,
            logo: "/gmail.png",
            link: "mailto:Rafli.Malik@gmail.com",
            alt:" Gmail Logo",
        },
    ]
    const socialList = social.map(target =>
        <div key={target.id} className="">
            <Link className="flex flex-row items-center gap-4" href={target.link} target="_blank" rel="noopener noreferrer">
                <p className=""><small>{target.showas}</small></p>
                <Image
                    className="w-8"
                    src={target.logo}
                    width={50}
                    height={50}
                    alt={target.alt}
                />
            </Link>
        </div>
    )

    return(
        <footer id="endcredit" className="w-auto flex flex-row justify-between items-center py-4 mt-16">
        <div className="profile w-1/2 flex items-center">
            <Image
                className="float-left mr-2"
                src="/Placeholder.png"
                width={50}
                height={50}
                alt="Picture of Rafli Malik"
            />
            <h6 className="">Rafli Malik</h6>
        </div>
        <div className="social w-1/2 flex flex-col items-end gap-4">
            {socialList}
        </div>
    </footer>
    )
}