import Head from "next/head"
import Link from "next/link"
import { motion } from "framer-motion"
import Layout from "../../components/Layout"
import ImageContainer from "../../components/ImageContainer"
import queryAllStreets from "../../lib/queryAllStreets"
import { SITE_TITLE } from "../../config/constant"
import styles from "./StreetPhotography.module.scss"

export default function StreetPhotography({ data }) {
    return (
        <>
            <Layout>
                <Head>
                    <title>Street Photography | {SITE_TITLE}</title>
                </Head>
                <motion.div
                    key="street-photography"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}>
                    <div className={styles.Masonry}>
                        {data.map((street) => {
                            const { title, slug, featuredImage } = street.node
                            return (
                                <div key={slug} className={styles.BreakInside}>
                                    <Link href={`/street-photography/${slug}`}>
                                        <a className="block">
                                            <ImageContainer mediaObject={featuredImage.node} alt={title} />
                                        </a>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </motion.div>
            </Layout>
        </>
    )
}

export async function getStaticProps() {
    const [data, error] = await queryAllStreets()

    return {
        props: {
            data,
        },
    }
}
