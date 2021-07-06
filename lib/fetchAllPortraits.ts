import axios from "axios"
import { WP_GRAPHQL_URL } from "../config/constant"
import queryAllPortraits from "./queryAllPortraits"

export default async function fetchAllPortraits(): Promise<any[]> {
    try {
        const request = await axios.post(WP_GRAPHQL_URL, { query: queryAllPortraits() })
        const data = request?.data?.data?.portraits?.edges

        return [data, null]
    } catch (error) {
        return [null, error]
    }
}
