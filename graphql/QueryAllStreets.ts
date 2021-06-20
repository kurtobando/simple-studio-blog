const QueryAllStreets = (): string => {
    return `query QueryAllStreets {
      streets (first: 1000) {
        edges {
          node {
            title
            slug
            featuredImage {
              node {
                mediaDetails {
                  sizes {
                    height
                    width
                    sourceUrl
                  }
                }
              }
            }
          }
        }
      }
    }
    `
}

export default QueryAllStreets
