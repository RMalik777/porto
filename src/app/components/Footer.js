import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer(){
    return(
        <footer id="endcredit" className="w-auto flex flex-row justify-between items-center py-4">
        <div className="profile w-1/2">
            <Image
                className="float-left mr-2"
                src="/Placeholder.png"
                width={50}
                height={50}
                alt="Picture of Rafli Malik"
            />
            <h1 className="">Rafli Malik</h1>
        </div>
        <div className="social  w-1/2 flex flex-col items-end gap-4 float-left">
            <div className="instagram">
                <Link className="block" href="https://www.instagram.com/play.playy/" target="_blank" rel="noopener noreferrer">
                    <p>play.playy</p>
                    <Image
                        className=""
                        src="/instagram.png"
                        width={50}
                        height={50}
                        alt="Instagram Logo"
                    />
                </Link>
            </div>
            <div className="whatsapp">
                <Link className="block" href="https://wa.me/628170817483" target="_blank" rel="noopener noreferrer">
                    <p>+628170817483</p>
                    <Image
                        className=""
                        src="/whatsapp.png"
                        width={50}
                        height={50}
                        alt="WhatsApp Logo"
                    />
                </Link>
            </div>
            <div className="linkedin">
                <Link className="block" href="https://www.linkedin.com/in/rafli-malik/" target="_blank" rel="noopener noreferrer">
                    <p>Rafli Malik</p>
                    <Image
                        className=""
                        src="/linkedin.png"
                        width={50}
                        height={50}
                        alt="LinkedIn Logo"
                    />
                </Link>
            </div>
            <div className="discord">
                <Link className="block" href="https://discord.com/users/432877551640117249" target="_blank" rel="noopener noreferrer">
                    <p>play7</p>
                    <Image
                        className=""
                        src="/discord.png"
                        width={50}
                        height={50}
                        alt="Discord Logo"
                    />
                </Link>
            </div>
            <div className="email">
                <Link className="block" href="mailto:Rafli.Malik@gmail.com" target="_blank" rel="noopener noreferrer">
                    <p>Rafli.Malik@gmail.com</p>
                    <Image
                        className=""
                        src="/gmail.png"
                        width={50}
                        height={50}
                        alt="GMail Logo"
                    />
                </Link>
            </div>
        </div>
    </footer>
    )
}