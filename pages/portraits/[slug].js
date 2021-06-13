import Head from "next/head"
import { motion } from "framer-motion"
import Layout from "../../components/Layout"
import ImageContainer from "../../components/ImageContainer"
import queryPortrait from "../../lib/queryPortrait"
import queryAllPortraitsSlug from "../../lib/queryAllPortraitsSlug"
import { SITE_TITLE } from "../../config/constant"

export default function PortraitsSlug({ data }) {
    const { title } = data

    return (
        <Layout>
            <div>
                <Head>
                    <title>
                        {title} | {SITE_TITLE}
                    </title>
                </Head>
                <motion.div key="portrait" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <Portrait portrait={data} />
                </motion.div>
            </div>
        </Layout>
    )
}

function Portrait({ portrait }) {
    const { id, title, content, inFrame, coverPhotos, galleryPhotos, dateAndLocation } = portrait
    const { name, about } = inFrame
    const { date, location } = dateAndLocation
    const { coverPhotoOne, coverPhotoTwo, coverPhotoThree, coverPhotoFour } = coverPhotos
    const { galleryPhotoOne, galleryPhotoTwo, galleryPhotoThree, galleryPhotoFour } = galleryPhotos

    return (
        <div>
            <div className="flex flex-wrap flex-row ">
                <div className="w-full md:w-1/2">
                    <ImageContainer mediaObject={coverPhotoOne} />
                </div>
                <div className="w-full md:w-1/2">
                    <ImageContainer mediaObject={coverPhotoTwo} />
                </div>
                <div className="w-full md:w-1/2">
                    <ImageContainer mediaObject={coverPhotoThree} />
                </div>
                <div className="w-full md:w-1/2">
                    <ImageContainer mediaObject={coverPhotoFour} />
                </div>
            </div>

            <div className="flex flex-wrap flex-row">
                <div className="w-full md:w-1/2">
                    <ImageContainer mediaObject={galleryPhotoOne} />
                </div>
                <div className="w-full md:w-1/2">
                    <ImageContainer mediaObject={galleryPhotoTwo} />
                </div>
                <div className="w-full md:w-1/2">
                    <ImageContainer mediaObject={galleryPhotoThree} />
                </div>
                <div className="w-full md:w-1/2">
                    <ImageContainer mediaObject={galleryPhotoFour} />
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

export async function getStaticProps({ params }) {
    const [data, error] = await queryPortrait({ slug: params.slug })

    return {
        props: {
            data,
        },
    }
}

export async function getStaticPaths() {
    const [data, error] = await queryAllPortraitsSlug()

    return {
        paths: data,
        fallback: false,
    }
}
