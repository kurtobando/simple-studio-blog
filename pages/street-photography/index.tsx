import { useEffect, useState } from "react"
import Head from "next/head"
import Link from "next/link"
import { GetStaticProps } from "next"
import { motion } from "framer-motion"
import Layout from "../../components/Layout"
import ImageContainer from "../../components/ImageContainer"
import PaginationLink from "../../components/PaginationLink"
import fetchAllStreets from "../../lib/fetchAllStreets"
import Pagination from "../../lib/pagination"
import { SITE_TITLE } from "../../config/constant"
import styles from "./StreetPhotography.module.scss"

const paginate = new Pagination()

export default function StreetPhotography({ data }: { data: any }): JSX.Element {
    const [pageTotal, setPageTotal] = useState<number>(0)
    const [pageCurrent, setPageCurrent] = useState<number>(1)
    const [pageData, setPageData] = useState<any[]>([])

    useEffect(() => {
        paginate.pageData = data
        paginate.pagePer = 9
        paginate.pageCurrent = pageCurrent
        paginate.exec()

        setPageData(paginate.pageData)
        setPageTotal(paginate.pageTotal)
    }, [pageCurrent])

    const onClickPagination = (n: number) => {
        setPageCurrent(n)
    }

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
                        {pageData.map((street) => {
                            const { title, slug, featuredImage } = street.node
                            return (
                                <div key={slug} className={styles.BreakInside}>
                                    <Link href={`/street-photography/${slug}`}>
                                        <a className="block mx-2 my-3">
                                            <ImageContainer mediaObject={featuredImage.node} alt={title} />
                                        </a>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </motion.div>
                <div className="flex flex-row flex-wrap justify-center my-8">
                    <PaginationLink pageTotal={pageTotal} pageCurrent={pageCurrent} onClick={onClickPagination} />
                </div>
            </Layout>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const [data, error] = await fetchAllStreets()

    return {
        props: {
            data,
        },
    }
}
