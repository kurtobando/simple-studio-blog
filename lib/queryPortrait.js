import axios from "axios"
import { WP_GRAPHQL_URL } from "../config/constant"
import QueryPortrait from "../graphql/QueryPortrait"

const queryPortrait = async ({ slug }) => {
    try {
        const request = await axios.post(WP_GRAPHQL_URL, { query: QueryPortrait(slug) })
        const data = request?.data?.data?.portrait

        return [data, null]
    } catch (error) {
        return [null, error]
    }
}

export default queryPortrait
