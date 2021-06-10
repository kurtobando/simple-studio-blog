import { AnimatePresence } from "framer-motion"
import "../styles/app.css"

function MyApp({ Component, pageProps }) {
    return (
        <AnimatePresence>
            <Component {...pageProps} />
        </AnimatePresence>
    )
}

export default MyApp
