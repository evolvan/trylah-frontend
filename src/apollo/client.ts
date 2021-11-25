import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from '@apollo/client'

const cmsLink = new HttpLink({
  uri: 'https://cms.trylah.sg/graphql'
})
const vendureLink = new HttpLink({
  // Production
  //uri: 'https://demo.trylah.sg/shop-api',

  uri: 'http://localhost:3000/shop-api',
  credentials: 'include'
})

const link = ApolloLink.split(
  (operation) => operation.getContext().clientName === 'cms',
  cmsLink,
  vendureLink
)

export const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache()
})
