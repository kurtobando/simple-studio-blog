import axios from "axios"
import { WP_GRAPHQL_URL } from "../config/constant"
import QueryHomePageFeaturedImage from "../graphql/QueryHomePageFeaturedImage"

export default async function queryHomePageFeaturedImage(): Promise<any[]> {
    try {
        const request = await axios.post(WP_GRAPHQL_URL, { query: QueryHomePageFeaturedImage() })
        const pages = request?.data?.data?.pages?.edges
        const data = pages.filter((page) => {
            if (page.node?.isFrontPage === true) {
                return page
            }
        })

        return [data, null]
    } catch (error) {
        return [null, error]
    }
}
