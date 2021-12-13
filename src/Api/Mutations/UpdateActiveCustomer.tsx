import { gql } from '@apollo/client'

export const UPDATE_ACTIVECUSTOMER = gql`
  mutation updateCustomer($firstName: String!, $lastName: String!, $phoneNumber: String!) {
    updateCustomer(
      input: { firstName: $firstName, lastName: $lastName, phoneNumber: $phoneNumber }
    ) {
      firstName
      lastName
      phoneNumber
    }
  }
`

export const REQUESTCUSTOMER_UPDATEEMAILADDRESS = gql`
  mutation requestUpdateCustomerEmailAddress($password: String!, $newEmailAddress: String!) {
    requestUpdateCustomerEmailAddress(password: $password, newEmailAddress: $newEmailAddress) {
      password
      newEmailAddress
    }
  }
`

export const UPDATE_CUSTOMER_PASSWORD = gql`
  mutation updateCustomerPassword($currentPassword: String!, $newPassword: String!) {
    updateCustomerPassword(currentPassword: $currentPassword, newPassword: $newPassword) {
      currentPassword
      newPassword
    }
  }
`

export const REFRESH_CUSTOMER_VERIFICATION = gql`
  mutation refreshCustomerVerification($emailAddress: String!) {
    refreshCustomerVerification(emailAddress: $emailAddress) {
      emailAddress
    }
  }
`
