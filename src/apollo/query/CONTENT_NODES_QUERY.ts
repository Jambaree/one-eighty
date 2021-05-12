import gql from "graphql-tag"

export const CONTENT_NODES_QUERY = gql`
  query ContentNodesQuery($search: String) {
    contentNodes(
      first: 99
      where: { search: $search, contentTypes: [PAGE, POST] }
    ) {
      nodes {
        ... on Post {
          id
          title
          uri
        }
        ... on Page {
          id
          title
          uri
        }
      }
    }
  }
`
