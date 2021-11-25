import {
  useLogoutMutation,
  ActiveCustomerDocument
} from '../graphql/vendure/@generated-codes-vendure'

export default function useLogout() {
  return useLogoutMutation({
    refetchQueries: [{ query: ActiveCustomerDocument }],
    awaitRefetchQueries: true
  })
}
