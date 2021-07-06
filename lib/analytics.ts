import { GOOGLE_ANALYTICS } from "../config/constant"

declare global {
    interface Window {
        gtag: any
    }
}

// log the pageview with their URL
export const pageview = (url) => {
    window.gtag("config", GOOGLE_ANALYTICS, {
        page_path: url,
    })
}

// log specific events happening.
export const event = ({ action, params }) => {
    window.gtag("event", action, params)
}
