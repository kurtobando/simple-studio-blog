import axios from "axios"
import { WP_GRAPHQL_URL } from "../config/constant"
import QueryPortrait from "../graphql/QueryPortrait"

interface Props {
    slug: string
}

export default async function queryPortrait(props: Props): Promise<any[]> {
    const { slug } = props

    try {
        const request = await axios.post(WP_GRAPHQL_URL, { query: QueryPortrait({ slug }) })
        const data = request?.data?.data?.portrait

        return [data, null]
    } catch (error) {
        return [null, error]
    }
}
