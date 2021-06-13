import Link from "next/link"
import Head from "next/head"
import { motion } from "framer-motion"
import Layout from "../../components/Layout"
import ImageContainer from "../../components/ImageContainer"
import queryAllPortraits from "../../lib/queryAllPortraits"
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
                            return (
                                <div key={portrait?.node?.id} className="w-full md:w-1/2 lg:w-1/3">
                                    <Link href={`/portraits/${portrait?.node?.slug}`}>
                                        <a>
                                            <ImageContainer
                                                mediaObject={portrait?.node?.featuredImage?.node}
                                                alt={portrait.node.title}
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
