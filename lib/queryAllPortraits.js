import axios from "axios"
import { WP_GRAPHQL_URL } from "../config/constant"
import QueryAllPortraits from "../graphql/QueryAllPortraits"

const queryAllPortraits = async () => {
    try {
        const request = await axios.post(WP_GRAPHQL_URL, { query: QueryAllPortraits() })
        const data = request?.data?.data?.portraits?.edges

        return [data, null]
    } catch (error) {
        return [null, error]
    }
}

export default queryAllPortraits
