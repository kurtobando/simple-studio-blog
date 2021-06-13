import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import Navigation from "../components/Navigation"
import queryHomePageFeaturedImage from "../lib/queryHomePageFeaturedImage"
import { SITE_DESCRIPTION, SITE_TITLE } from "../config/constant"
import styles from "./Index.module.scss"

export default function Home({ data }) {
    const { featuredImage } = data[0].node
    const length = featuredImage?.node?.mediaDetails?.sizes.length - 1

    return (
        <>
            <Head>
                <title>{SITE_TITLE}</title>
                <meta name="description" content={SITE_DESCRIPTION} />
                <meta name="robots" content="index, follow" />
            </Head>
            <div className="flex flex-col ">
                <div className="w-full shadow-sm bg-white">
                    <div className="container mx-auto">
                        <Navigation />
                    </div>
                </div>
                <div>
                    <motion.div key="portraits" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <div className={styles.HomePageBackgroundImageContainer}>
                            <div className={styles.HomePageBackgroundImage}>
                                <Image
                                    src={featuredImage?.node?.mediaDetails?.sizes[length].sourceUrl}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <div className={styles.HomePageBackgroundImageText}>
                                <div className="text-white uppercase">
                                    <p className="pb-3 px-4 text-2xl font-bold w-full md:w-1/2 mx-auto ">
                                        {SITE_DESCRIPTION}
                                    </p>
                                    <div className="flex flex-row justify-center pb-8 ">
                                        <Link href={`/portraits`}>
                                            <a className="px-2 hover:text-highlight underline">Portraits</a>
                                        </Link>
                                        <Link href={`/street-photography`}>
                                            <a className="px-2 hover:text-highlight underline">Streets</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export async function getStaticProps() {
    const [data, error] = await queryHomePageFeaturedImage()

    return {
        props: {
            data,
        },
    }
}
