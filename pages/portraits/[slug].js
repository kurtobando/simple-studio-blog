import Head from "next/head"
import { motion } from "framer-motion"
import Layout from "../../components/Layout"
import Portrait from "../../components/Portrait"
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
