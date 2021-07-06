import Head from "next/head"
import { motion } from "framer-motion"
import Layout from "../../components/Layout"
import { SITE_TITLE, SITE_DESCRIPTION } from "../../config/constant"

export default function About(): JSX.Element {
    return (
        <Layout>
            <Head>
                <title>About | {SITE_TITLE}</title>
            </Head>
            <motion.div
                className="text-center"
                key="about"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}>
                <div className="flex flex-col justify-center" style={{ minHeight: "90vh" }}>
                    <div className="">
                        <h1 className="font-bold text-xl">What is Cityescape Studio?</h1>
                        <p className="font-light">{SITE_DESCRIPTION}</p>
                    </div>
                    <div className="pt-8">
                        <h1 className="font-bold text-xl">
                            What is{" "}
                            <a className="underline " href="https://cityescape.ph" target="_blank" rel="noreferrer">
                                Cityescape.ph?
                            </a>
                        </h1>
                        <p className="font-light">
                            A travel review site, which have contributors who have the same interest as yours. You'll
                            love them!
                        </p>
                    </div>
                    <div className="pt-8">
                        <h1 className="font-bold text-xl">Wish to collaborate?</h1>
                        <p className="font-light">
                            Absolutely Yes! You may contact us via our social media accounts, or send a personal email
                            to{" "}
                            <a className="underline" href="mailto:help@cityescape.ph">
                                help@cityescape.ph
                            </a>{" "}
                            for inquries.
                        </p>
                    </div>
                </div>
            </motion.div>
        </Layout>
    )
}
