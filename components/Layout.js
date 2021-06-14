import Head from "next/head"
import Navigation from "./Navigation"
import Footer from "./Footer"
import { SITE_TITLE, SITE_DESCRIPTION, SITE_URL } from "../config/constant"

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>{SITE_TITLE}</title>

                <meta name="title" content={SITE_TITLE} />
                <meta name="description" content={SITE_DESCRIPTION} />
                <meta name="robots" content="index, follow" />

                {/* Favicons */}
                <link rel="manifest" href="/favicon/site.webmanifest" />
                <link rel="shortcut icon" href="/favicon/favicon.ico" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={SITE_URL} />
                <meta property="og:title" content={SITE_TITLE} />
                <meta property="og:description" content={SITE_DESCRIPTION} />
                <meta property="og:image" content="/studio-cityescape-preview.png" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={SITE_URL} />
                <meta property="twitter:title" content={SITE_TITLE} />
                <meta property="twitter:description" content={SITE_DESCRIPTION} />
                <meta property="twitter:image" content="/studio-cityescape-preview.png" />
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
