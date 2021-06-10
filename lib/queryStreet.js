import axios from "axios"
import { WP_GRAPHQL_URL } from "../config/constant"
import QueryStreet from "../graphql/QueryStreet"

const queryStreet = async ({ slug }) => {
    try {
        const request = await axios.post(WP_GRAPHQL_URL, { query: QueryStreet({ slug }) })
        const data = request?.data?.data?.street

        return [data, null]
    } catch (error) {
        return [null, error]
    }
}

export default queryStreet
