import Image from "next/image"
import styles from "./ImageContainer.module.scss"

interface Props {
    mediaObject: any
    alt?: string
}

export default function ImageContainer(props: Props): JSX.Element {
    const { mediaObject = null, alt = "" } = props

    if (mediaObject === null) return <></>

    const length: number = mediaObject?.mediaDetails?.sizes.length - 1
    const source: string = mediaObject?.mediaDetails?.sizes[length].sourceUrl
    const width: number = mediaObject?.mediaDetails?.sizes[length]?.width
    const height: number = mediaObject?.mediaDetails?.sizes[length].height

    return (
        <div className={styles.ImageContainer}>
            <Image src={source} width={width} height={height} layout={`responsive`} alt={alt} />
        </div>
    )
}
