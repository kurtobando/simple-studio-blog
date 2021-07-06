import axios from "axios"
import { WP_GRAPHQL_URL } from "../config/constant"
import queryAllPortraitsSlug from "./queryAllPortraitsSlug"

export default async function fetchAllPortraitsSlug(): Promise<any[]> {
    try {
        const request = await axios.post(WP_GRAPHQL_URL, { query: queryAllPortraitsSlug() })
        const allPortraitsSlugs = request?.data?.data?.portraits?.edges
        const data = allPortraitsSlugs.map((portrait) => {
            return {
                params: {
                    slug: portrait.node.slug.toString(),
                },
            }
        })

        return [data, null]
    } catch (error) {
        return [null, error]
    }
}
