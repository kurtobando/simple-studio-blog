import Document, { Html, Head, Main, NextScript } from "next/document"
import { GOOGLE_ANALYTICS } from "../config/constant"

class CustomDocument extends Document {
    // Add Google Analytics in NextJS
    // Reference https://mariestarck.com/add-google-analytics-to-your-next-js-application-in-5-easy-steps/

    render() {
        return (
            <Html>
                <Head>
                    <script async src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS}`} />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', '${GOOGLE_ANALYTICS}', {
                                  page_path: window.location.pathname,
                                });
                              `,
                        }}
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default CustomDocument
