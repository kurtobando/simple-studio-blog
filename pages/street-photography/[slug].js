import Head from "next/head"
import { motion } from "framer-motion"
import Layout from "../../components/Layout"
import ImageContainer from "../../components/ImageContainer"
import queryAllStreetsSlug from "../../lib/queryAllStreetsSlug"
import queryStreet from "../../lib/queryStreet"
import { SITE_TITLE } from "../../config/constant"
import styles from "./StreetPhotography.module.scss"

export default function StreetPhotographySlug({ data }) {
    const { id, title, featuredImage } = data

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
                        <ImageContainer mediaObject={featuredImage.node} alt={title} />
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
