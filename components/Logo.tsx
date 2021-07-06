import Image from "next/image"
import { SITE_TITLE } from "../config/constant"

export default function Logo(): JSX.Element {
    return (
        <>
            <Image src={`/logo.png`} width={70} height={70} alt={SITE_TITLE} priority={true} />
        </>
    )
}
