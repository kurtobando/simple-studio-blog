import Image from "next/image"
import styles from "./ImageContainer.module.scss"

export default function ImageContainer({ mediaObject = null, alt = "" }) {
    if (mediaObject === null) {
        return false
    }

    const length = mediaObject?.mediaDetails.sizes.length - 1

    return (
        <div className={styles.ImageContainer}>
            <Image
                src={mediaObject?.mediaDetails.sizes[length].sourceUrl}
                width={mediaObject?.mediaDetails.sizes[length]?.width}
                height={mediaObject?.mediaDetails.sizes[length].height}
                layout={`responsive`}
                alt={alt}
            />
        </div>
    )
}
