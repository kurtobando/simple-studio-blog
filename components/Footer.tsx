import Link from "next/link"
import Facebook from "./svg/Facebook"
import Instagram from "./svg/Instagram"
import Logo from "./Logo"
import { SITE_DESCRIPTION } from "../config/constant"

export default function Footer(): JSX.Element {
    return (
        <div className="mb-6 text-center text-sm p-4 ">
            <div className="container mx-auto">
                <div>
                    <Link href="/">
                        <a>
                            <Logo />
                        </a>
                    </Link>
                </div>
                <div className="uppercase">
                    <p>{SITE_DESCRIPTION}</p>
                </div>
                <div className="md:flex md:flex-row md:flex-wrap md:justify-center md:w-2/3 lg:w-1/2 md:mx-auto ">
                    <ul className="flex flex-row flex-wrap w-2/3 md:w-1/2 justify-around items-center uppercase text-sm mt-6 mx-auto md:mx-0">
                        <li>
                            <Link href={`/portraits`}>
                                <a className="hover:text-highlight">Portraits</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={`/street-photography`}>
                                <a className="hover:text-highlight">Street</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={`/about`}>
                                <a className="hover:text-highlight">About</a>
                            </Link>
                        </li>
                    </ul>
                    <ul className="flex flex-row flex-wrap w-2/5 md:w-1/3 justify-around mt-6 mx-auto md:mx-0">
                        <li>
                            <Link href="/facebook">
                                <a className="hover:text-highlight">
                                    <Facebook />
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/instagram">
                                <a className="hover:text-highlight">
                                    <Instagram />
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
