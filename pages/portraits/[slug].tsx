import Head from "next/head"
import { GetStaticProps, GetStaticPaths } from "next"
import { motion } from "framer-motion"
import Layout from "../../components/Layout"
import ImageContainer from "../../components/ImageContainer"
import fetchPortrait from "../../lib/fetchPortrait"
import fetchAllPortraitsSlug from "../../lib/fetchAllPortraitsSlug"
import { SITE_TITLE } from "../../config/constant"

export default function PortraitsSlug({ data }): JSX.Element {
    const { title = null } = data

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

function Portrait({ portrait }): JSX.Element {
    const { id, title, content, inFrame, coverPhotos, galleryPhotos, dateAndLocation } = portrait
    const { name, about } = inFrame
    const { date, location } = dateAndLocation
    const { coverPhotoOne, coverPhotoTwo, coverPhotoThree, coverPhotoFour } = coverPhotos
    const { galleryPhotoOne, galleryPhotoTwo, galleryPhotoThree, galleryPhotoFour } = galleryPhotos

    return (
        <div>
            <div className="flex flex-wrap flex-row mt-4">
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const [data, error] = await fetchPortrait({ slug: params.slug.toString() })

    return {
        props: {
            data,
        },
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const [data, error] = await fetchAllPortraitsSlug()

    return {
        paths: data,
        fallback: false,
    }
}
