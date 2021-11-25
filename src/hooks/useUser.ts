import { useActiveCustomerQuery } from '../graphql/vendure/@generated-codes-vendure'

export default function useUser() {
  return useActiveCustomerQuery()
}
