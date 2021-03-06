const queryAllPortraitsSlug = (): string => {
    return `query QueryAllPortraitsSlug {
      portraits (first: 1000) {
        edges {
          node {
            slug
          }
        }
      }
    }
    `
}

export default queryAllPortraitsSlug
