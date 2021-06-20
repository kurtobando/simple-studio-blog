import axios from "axios"
import { WP_GRAPHQL_URL } from "../config/constant"
import QueryAllPortraitsSlug from "../graphql/QueryAllPortraitsSlug"

export default async function queryAllPortraitsSlug(): Promise<any[]> {
    try {
        const request = await axios.post(WP_GRAPHQL_URL, { query: QueryAllPortraitsSlug() })
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
