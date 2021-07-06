interface Props {
    slug: string
}

const queryStreet = (props: Props): string => {
    const { slug } = props

    return `query QueryStreet {
      street(id: "${slug}", idType: SLUG) {
        id
        title
        featuredImage {
          node {
            mediaDetails {
              sizes {
                sourceUrl
                height
                width
              }
            }
          }
        }
      }
    }
    `
}

export default queryStreet
