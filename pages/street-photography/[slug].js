import Head from "next/head"
import Image from "next/image"
import { motion } from "framer-motion"
import Layout from "../../components/Layout"
import { SITE_TITLE } from "../../config/constant"
import queryAllStreetsSlug from "../../lib/queryAllStreetsSlug"
import queryStreet from "../../lib/queryStreet"
import styles from "./StreetPhotography.module.scss"

export default function StreetPhotographySlug({ data }) {
    const { id, title, featuredImage } = data
    const length = featuredImage.node?.mediaDetails?.sizes.length - 1

    return (
        <Layout>
            <Head>
                <title>Street Photography | {SITE_TITLE}</title>
            </Head>
            <motion.div
                key={`street-photography-slug${id}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}>
                <div className="container mx-auto my-5">
                    <div className={`${styles.BreakInside}`}>
                        <Image
                            src={featuredImage.node?.mediaDetails?.sizes[length].sourceUrl}
                            height={featuredImage.node?.mediaDetails?.sizes[length].height}
                            width={featuredImage.node?.mediaDetails?.sizes[length].width}
                            layout={`responsive`}
                            alt={title}
                        />
                    </div>
                </div>
            </motion.div>
        </Layout>
    )
}

export async function getStaticProps({ params }) {
    const [data, error] = await queryStreet({ slug: params.slug })

    return {
        props: {
            data,
        },
    }
}

export async function getStaticPaths() {
    const [data, error] = await queryAllStreetsSlug()

    return {
        paths: data,
        fallback: false,
    }
}
