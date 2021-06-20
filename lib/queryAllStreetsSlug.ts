import axios from "axios"
import { WP_GRAPHQL_URL } from "../config/constant"
import QueryAllStreetsSlug from "../graphql/QueryAllStreetsSlug"

export default async function queryAllStreetsSlug(): Promise<any[]> {
    try {
        const request = await axios.post(WP_GRAPHQL_URL, { query: QueryAllStreetsSlug() })
        const streetsSlug = request?.data?.data?.streets?.edges
        const data = streetsSlug.map((street) => {
            return {
                params: {
                    slug: street.node.slug.toString(),
                },
            }
        })

        return [data, null]
    } catch (error) {
        return [null, error]
    }
}
