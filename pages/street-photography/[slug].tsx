import Head from "next/head"
import { GetStaticProps, GetStaticPaths } from "next"
import { motion } from "framer-motion"
import Layout from "../../components/Layout"
import ImageContainer from "../../components/ImageContainer"
import fetchAllStreetsSlug from "../../lib/fetchAllStreetsSlug"
import fetchStreet from "../../lib/fetchStreet"
import { SITE_TITLE } from "../../config/constant"
import styles from "./StreetPhotography.module.scss"

interface Props {
    data: any
}
export default function StreetPhotographySlug({ data }: Props): JSX.Element {
    const { id = null, title = null, featuredImage = null } = data

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

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const [data, error] = await fetchStreet({ slug: params.slug.toString() })

    return {
        props: {
            data,
        },
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const [data, error] = await fetchAllStreetsSlug()

    console.log('street-photography data: ', data)
    console.log('street-photography error: ', error)
    return {
        paths: data,
        fallback: false,
    }
}
