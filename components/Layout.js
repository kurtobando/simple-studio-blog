import Head from "next/head"
import Navigation from "./Navigation"
import Footer from "./Footer"
import { SITE_TITLE, SITE_DESCRIPTION } from "../config/constant"

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>{SITE_TITLE}</title>
                <meta name="description" content={SITE_DESCRIPTION} />
                <meta name="robots" content="index, follow" />
                <link rel="manifest" href="/favicon/site.webmanifest" />
                <link rel="shortcut icon" href="/favicon/favicon.ico" />
            </Head>
            <div className="flex flex-col ">
                <div className="w-full shadow-sm">
                    <div className="container mx-auto">
                        <Navigation />
                    </div>
                </div>
                <div className="w-full ">
                    <div className="container mx-auto ">
                        <div className="p-4 md:p-0">{children}</div>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}
