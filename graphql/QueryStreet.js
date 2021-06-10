const QueryStreet = ({ slug }) => {
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

export default QueryStreet
