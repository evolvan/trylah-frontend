import { useQuery, gql } from '@apollo/client'

const GET_ACTIVE_CUSTOMER = gql`
  query activeCustomer {
    activeCustomer {
      id
      firstName
      lastName
      emailAddress
      title
      phoneNumber
    }
  }
`
export default GET_ACTIVE_CUSTOMER
