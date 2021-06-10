import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import Layout from "../../components/Layout"
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
                            const length = featuredImage.node.mediaDetails.sizes.length - 1
                            return (
                                <div key={slug} className={styles.BreakInside}>
                                    <Link href={`/street-photography/${slug}`}>
                                        <a className="block">
                                            <Image
                                                src={featuredImage.node.mediaDetails.sizes[length].sourceUrl}
                                                width={featuredImage.node.mediaDetails.sizes[length].width}
                                                height={featuredImage.node.mediaDetails.sizes[length].height}
                                                alt={street.node.title}
                                                priority={true}
                                            />
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
