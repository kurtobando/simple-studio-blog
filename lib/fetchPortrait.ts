import axios from "axios"
import { WP_GRAPHQL_URL } from "../config/constant"
import queryPortrait from "./queryPortrait"

interface Props {
    slug: string
}

export default async function fetchPortrait(props: Props): Promise<any[]> {
    const { slug } = props

    try {
        const request = await axios.post(WP_GRAPHQL_URL, { query: queryPortrait({ slug }) })
        const data = request?.data?.data?.portrait

        return [data, null]
    } catch (error) {
        return [null, error]
    }
}
