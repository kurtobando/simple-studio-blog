const QueryAllStreetsSlug = () => {
    return `query QueryAllStreetsSlug {
      streets (first: 1000) {
        edges {
          node {
            title
            slug
          }
        }
      }
    }
    `
}

export default QueryAllStreetsSlug
