import axios from "axios"
import { WP_GRAPHQL_URL } from "../config/constant"
import QueryAllStreets from "../graphql/QueryAllStreets"

export default async function queryAllStreets(): Promise<any[]> {
    try {
        const request = await axios.post(WP_GRAPHQL_URL, { query: QueryAllStreets() })
        const data = request?.data?.data?.streets?.edges

        return [data, null]
    } catch (error) {
        return [null, error]
    }
}
