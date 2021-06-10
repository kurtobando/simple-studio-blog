import Image from "next/image"
import styles from "./Portrait.module.scss"

export default function Portrait({ portrait }) {
    const { id, title, content, inFrame, coverPhotos, galleryPhotos, dateAndLocation } = portrait
    const { name, about } = inFrame
    const { date, location } = dateAndLocation
    const { coverPhotoOne, coverPhotoTwo, coverPhotoThree, coverPhotoFour } = coverPhotos
    const { galleryPhotoOne, galleryPhotoTwo, galleryPhotoThree, galleryPhotoFour } = galleryPhotos

    return (
        <div>
            <div className="flex flex-wrap flex-row ">
                <div className="w-full md:w-1/2">
                    <PortraitImageContainer mediaObject={coverPhotoOne} />
                </div>
                <div className="w-full md:w-1/2">
                    <PortraitImageContainer mediaObject={coverPhotoTwo} />
                </div>
                <div className="w-full md:w-1/2">
                    <PortraitImageContainer mediaObject={coverPhotoThree} />
                </div>
                <div className="w-full md:w-1/2">
                    <PortraitImageContainer mediaObject={coverPhotoFour} />
                </div>
            </div>

            <div className="flex flex-wrap flex-row">
                <div className="w-full md:w-1/2">
                    <PortraitImageContainer mediaObject={galleryPhotoOne} />
                </div>
                <div className="w-full md:w-1/2">
                    <PortraitImageContainer mediaObject={galleryPhotoTwo} />
                </div>
                <div className="w-full md:w-1/2">
                    <PortraitImageContainer mediaObject={galleryPhotoThree} />
                </div>
                <div className="w-full md:w-1/2">
                    <PortraitImageContainer mediaObject={galleryPhotoFour} />
                </div>
            </div>

            <div className="bg-main shadow-sm m-8 p-4 rounded text-sm text-white text-center">
                <div>
                    <p>In frame, {name}</p>
                    <p>{about}</p>
                </div>
                <div>
                    <p>{location}</p>
                    <p>{date}</p>
                </div>
            </div>
            <div className="m-8 p-4  font-light text-sm">
                <div className="text-center text-sm font-light">
                    Disclaimer: All photographs and content remain the property of Kurt Obando. Images may be
                    downloaded, copied, reproduced, or use anyway with prior written consent.
                </div>
            </div>
        </div>
    )
}

function PortraitImageContainer({ mediaObject = null }) {
    if (mediaObject === null) {
        return false
    }

    const length = mediaObject?.mediaDetails.sizes.length - 1

    return (
        <div className={styles.PortraitImageContainer}>
            <Image
                src={mediaObject?.mediaDetails.sizes[length].sourceUrl}
                width={mediaObject?.mediaDetails.sizes[length]?.width}
                height={mediaObject?.mediaDetails.sizes[length].height}
                layout={`responsive`}
            />
        </div>
    )
}
