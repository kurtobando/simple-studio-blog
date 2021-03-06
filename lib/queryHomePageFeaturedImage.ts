const queryHomePageFeaturedImage = (): string => {
    return `query QueryHomePageFeaturedImage {
      pages {
        edges {
          node {
            isFrontPage
            status
            featuredImage {
              node {
                mediaDetails {
                  sizes {
                    width
                    height
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

export default queryHomePageFeaturedImage
