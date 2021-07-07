import { useEffect, useState } from "react"
import Link from "next/link"
import Head from "next/head"
import { GetStaticProps } from "next"
import { motion } from "framer-motion"
import Layout from "../../components/Layout"
import ImageContainer from "../../components/ImageContainer"
import PaginationLink from "../../components/PaginationLink"
import Pagination from "../../lib/pagination"
import fetchAllPortraits from "../../lib/fetchAllPortraits"
import { SITE_TITLE } from "../../config/constant"

const paginate = new Pagination()

export default function Portraits({ data }: { data: any }): JSX.Element {
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
                    <title>Portraits | {SITE_TITLE}</title>
                </Head>
                <motion.div key="portraits" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <div className="flex flex-row flex-wrap mt-2">
                        {pageData.map((portrait) => {
                            return (
                                <div key={portrait?.node?.id} className="w-full md:w-1/2 lg:w-1/3 p-1">
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
                <div className="flex flex-row flex-wrap justify-center my-8">
                    <PaginationLink pageTotal={pageTotal} pageCurrent={pageCurrent} onClick={onClickPagination} />
                </div>
            </Layout>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const [data, error] = await fetchAllPortraits()

    return {
        props: {
            data,
        },
    }
}
