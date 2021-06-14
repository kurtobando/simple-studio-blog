import { useEffect } from "react"
import { useRouter } from "next/router"
import { AnimatePresence } from "framer-motion"
import * as googleAnalytics from "../lib/googleAnalytics"
import "../styles/app.css"

function MyApp({ Component, pageProps }) {
    // Add Google Analytics in NextJS
    // Reference https://mariestarck.com/add-google-analytics-to-your-next-js-application-in-5-easy-steps/
    const router = useRouter()

    useEffect(() => {
        const handleRouteChange = (url) => {
            googleAnalytics.pageview(url)
        }

        //When the component is mounted, subscribe to router changes
        //and log those page views
        router.events.on("routeChangeComplete", handleRouteChange)

        // If the component is unmounted, unsubscribe
        // from the event with the `off` method
        return () => {
            router.events.off("routeChangeComplete", handleRouteChange)
        }
    }, [router.events])

    return (
        <AnimatePresence>
            <Component {...pageProps} />
        </AnimatePresence>
    )
}

export default MyApp
