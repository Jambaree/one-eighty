import { ApolloClient } from "apollo-client"
import { InMemoryCache } from "apollo-cache-inmemory"
import { createHttpLink } from "apollo-link-http"
import { withClientState } from "apollo-link-state"
import { ApolloLink } from "apollo-link"
import fetch from "unfetch"
import moment from "moment"

// import app components
import { getAuth } from "../auth"

const cache = new InMemoryCache()

const authLink = new ApolloLink((operation, forward) => {
  const { authToken, authExpiration } = getAuth()

  const isExpired = moment().isBefore(moment(authExpiration, "x"))

  operation.setContext(({ headers = {} }) => {
    // If token exists, add to headers
    if (authToken && !isExpired) {
      headers = {
        ...headers,
        authorization: authToken ? `Bearer ${authToken}` : "",
      }
    }

    return { headers }
  })

  // move forward with operation
  return forward(operation)
})

const httpLink = createHttpLink({
  uri: `${process.env.GATSBY_WP}/graphql`,
  fetch,
})

const client = new ApolloClient({
  link: ApolloLink.from([
    withClientState({
      defaults: {
        isConnected: true,
      },
      resolvers: {
        Mutation: {
          updateNetworkStatus: (_, { isConnected }, { cache }) => {
            cache.writeData({ data: { isConnected } })
            return null
          },
        },
      },
      cache,
    }),
    authLink.concat(httpLink),
  ]),
  cache,
})

export default client
