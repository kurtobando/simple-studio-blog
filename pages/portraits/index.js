import Image from "next/image"
import Link from "next/link"
import Head from "next/head"
import { motion } from "framer-motion"
import Layout from "../../components/Layout"
import queryAllPortraits from "../../lib/queryAllPortraits"
import styles from "./Portraits.module.scss"
import { SITE_TITLE } from "../../config/constant"

export default function Portraits({ data }) {
    return (
        <>
            <Layout>
                <Head>
                    <title>Portraits | {SITE_TITLE}</title>
                </Head>
                <motion.div key="portraits" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <div className="flex flex-row flex-wrap">
                        {data.map((portrait) => {
                            const { node } = portrait
                            const length = portrait.node.featuredImage.node.mediaDetails.sizes.length - 1

                            return (
                                <div key={node.id} className="w-full md:w-1/2 lg:w-1/3">
                                    <Link href={`/portraits/${node.slug}`} passHref>
                                        <a className={styles.PortraitsImageOverlay}>
                                            <Image
                                                src={node.featuredImage.node.mediaDetails.sizes[length].sourceUrl}
                                                width={node.featuredImage.node.mediaDetails.sizes[length].width}
                                                height={node.featuredImage.node.mediaDetails.sizes[length].height}
                                                layout={`responsive`}
                                                alt={node.title}
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
    const [data, error] = await queryAllPortraits()

    return {
        props: {
            data,
        },
    }
}
