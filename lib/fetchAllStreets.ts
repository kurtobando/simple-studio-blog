import axios from "axios"
import { WP_GRAPHQL_URL } from "../config/constant"
import queryAllStreets from "./queryAllStreets"

export default async function fetchAllStreets(): Promise<any[]> {
    try {
        const request = await axios.post(WP_GRAPHQL_URL, { query: queryAllStreets() })
        const data = request?.data?.data?.streets?.edges

        return [data, null]
    } catch (error) {
        return [null, error]
    }
}
