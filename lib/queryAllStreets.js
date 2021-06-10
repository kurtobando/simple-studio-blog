import axios from "axios"
import { WP_GRAPHQL_URL } from "../config/constant"
import QueryAllStreets from "../graphql/QueryAllStreets"

const queryAllStreets = async () => {
    try {
        const request = await axios.post(WP_GRAPHQL_URL, { query: QueryAllStreets() })
        const data = request?.data?.data?.streets?.edges

        return [data, null]
    } catch (error) {
        return [null, error]
    }
}

export default queryAllStreets
