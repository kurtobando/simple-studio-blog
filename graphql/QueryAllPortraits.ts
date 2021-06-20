const QueryAllPortraits = (): string => {
    return `query QueryAllPortraits {
      portraits (first: 1000) {
        edges {
          node {
            id
            slug
            title
            featuredImage {
              node {
                mediaItemUrl
                mediaDetails {
                  height
                  width
                  sizes {
                    sourceUrl
                    width
                    height
                    fileSize
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

export default QueryAllPortraits
