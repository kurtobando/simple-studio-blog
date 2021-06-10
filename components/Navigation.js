import Link from "next/link"
import Image from "next/image"
import Facebook from "./svg/Facebook"
import Instagram from "./svg/Instagram"
import { SITE_TITLE } from "../config/constant"

export default function Navigation() {
    return (
        <>
            <nav className="block ml-6 mr-6 ">
                <div className="flex flex-row justify-between items-center">
                    <Link href={`/`}>
                        <a>
                            <Image
                                src={`/cityescape-studio-logo.png`}
                                width={70}
                                height={70}
                                alt={SITE_TITLE}
                                priority={true}
                            />
                        </a>
                    </Link>
                    <ul className="flex flex-row flex-wrap w-4/6 md:w-2/3 lg:w-2/5 justify-around items-center uppercase text-sm font-medium">
                        <li>
                            <Link href={`/portraits`}>
                                <a className="hover:text-highlight">Portraits</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={`/street-photography`}>
                                <a className="hover:text-highlight">Streets</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={`/about`}>
                                <a className="hover:text-highlight">About</a>
                            </Link>
                        </li>
                        <li className="hidden md:block">
                            <Link href={`/facebook`}>
                                <a className="hover:text-highlight">
                                    <Facebook />
                                </a>
                            </Link>
                        </li>
                        <li className="hidden md:block">
                            <Link href={`/instagram`}>
                                <a className="hover:text-highlight">
                                    <Instagram />
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
