import { ApolloClient, InMemoryCache, HttpLink, ApolloLink, concat } from '@apollo/client'
import { onError } from '@apollo/client/link/error'

const cmsLink = new HttpLink({
  uri: 'https://cms.trylah.sg/graphql'
})
const vendureLink = new HttpLink({
  // Production
  //uri: 'https://demo.trylah.sg/shop-api',

  uri: 'http://localhost:3000/shop-api',
  credentials: 'include'
})

const onerror = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) => {
      console.log(`[GraphQl Error]: Message ${message}, Location: ${locations}, Path: ${path} `)
    })
  }
  if (networkError) {
    console.log(networkError)
  }
})

const link = ApolloLink.split(
  (operation) => operation.getContext().clientName === 'cms',
  cmsLink,
  vendureLink
)

export const client = new ApolloClient({
  link: onerror.concat(link),
  cache: new InMemoryCache()
})
