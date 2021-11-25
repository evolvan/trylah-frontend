import {
  useLoginMutation,
  ActiveCustomerDocument
} from '../graphql/vendure/@generated-codes-vendure'

export default function useLogin() {
  return useLoginMutation({
    refetchQueries: [{ query: ActiveCustomerDocument }],
    awaitRefetchQueries: true
  })
}
