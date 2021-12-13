// material
import { styled } from '@mui/material/styles'
import { useMutation, useQuery } from '@apollo/client'
import GET_ACTIVE_CUSTOMER from '../Api/Querries/GetActiveCustomer'
import {
  UPDATE_ACTIVECUSTOMER,
  REQUESTCUSTOMER_UPDATEEMAILADDRESS,
  UPDATE_CUSTOMER_PASSWORD
} from '../Api/Mutations/UpdateActiveCustomer'

// components
import Page from '../components/Page'
import MyProfileFormFields from 'components/MyProfileFormFields'
import React, { useState, useEffect } from 'react'
import ex from '../icons/ex.png'
import rightArrow from '../icons/rightArrow.svg'

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(0),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(0)
  }
}))

// ----------------------------------------------------------------------

export default function MyProfile() {
  const [formState, setFormState] = React.useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    myStock: '',
    myInfo: ''
  })

  const firstname = formState.name.split(' ')[0]
  const lastname = formState.name.split(' ')[1]

  console.log('firstname >>>', firstname)
  console.log('lastname >>>', lastname)

  const { data } = useQuery(GET_ACTIVE_CUSTOMER)

  const [updateCustomer, { data: updatedData, loading: updationLoading, error: updationError }] =
    useMutation(UPDATE_ACTIVECUSTOMER)

  console.log('loading >>>', updationLoading)

  const [requestUpdateCustomerEmailAddress] = useMutation(REQUESTCUSTOMER_UPDATEEMAILADDRESS)

  const [updateCustomerPassword] = useMutation(UPDATE_CUSTOMER_PASSWORD)

  const handleSubmitData = (e: any, id: string) => {
    setFormState({ ...formState, [id]: e.target.value })
  }

  const UpdateActiveCustomer = (e: any, id: string) => {
    if (id === 'name') {
      updateCustomer({
        variables: {
          firstName: firstname,
          lastName: lastname,
          phoneNumber: data.activeCustomer.phoneNumber
        }
      })
    }
    if (id === 'phone') {
      updateCustomer({
        variables: {
          firstName: data.activeCustomer.firstName,
          lastName: data.activeCustomer.lastName,
          phoneNumber: formState.phone.toString()
        }
      })
    }
    if (id === 'email') {
      requestUpdateCustomerEmailAddress({
        variables: {
          password: '123456789',
          newEmailAddress: formState.email
        }
      })
    }
    if (id === 'password') {
      updateCustomerPassword({
        variables: {
          currentPassword: '123456789',
          newPassword: formState.password
        }
      })
    }
  }

  return (
    <RootStyle title="TryLah | My Profile">
      <div
        style={{
          padding: '0px 20px',
          display: 'flex',
          flexDirection: 'column',
          width: '100%'
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', paddingBottom: '50px' }}>
          <h1>My Profile</h1>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: '10px' }}>Dashboard</span>
            <i
              style={{ fontSize: '5px', marginRight: '10px', opacity: '.6' }}
              className="fas fa-circle"
            ></i>
            <span>My Profile</span>
          </div>
        </div>
        <div
          style={{
            width: '100%',
            backgroundColor: 'whitesmoke',
            boxShadow: '0px 2px 8px -4px rgba(0,0,0,0.5)',
            borderRadius: '10px'
          }}
        >
          <MyProfileFormFields
            label="Name"
            placeholder={`${data.activeCustomer.firstName} ${data.activeCustomer.lastName}`}
            buttonText={`${updationLoading ? 'Loading..' : 'Update Name'}`}
            verifiedText=""
            data={formState.name}
            handleSubmitData={handleSubmitData}
            id="name"
            icon=""
            arrowIcon=""
            UpdateActiveCustomer={UpdateActiveCustomer}
            type="text"
          />
          <MyProfileFormFields
            label="Email Address"
            placeholder={`${data.activeCustomer.emailAddress}`}
            buttonText="Update Email"
            verifiedText="Verified"
            data={formState.email}
            handleSubmitData={handleSubmitData}
            id="email"
            icon=""
            arrowIcon=""
            UpdateActiveCustomer={UpdateActiveCustomer}
            type="email"
          />
          <MyProfileFormFields
            label="Phone Number"
            placeholder={`${data.activeCustomer.phoneNumber}`}
            buttonText={`${updationLoading ? 'Loading..' : 'Update Phone Number'}`}
            verifiedText="Verified"
            data={formState.phone}
            handleSubmitData={handleSubmitData}
            id="phone"
            icon=""
            arrowIcon=""
            UpdateActiveCustomer={UpdateActiveCustomer}
            type="number"
          />
          <MyProfileFormFields
            label="Password"
            placeholder="**********"
            buttonText="Change Password"
            verifiedText="Set"
            data={formState.password}
            handleSubmitData={handleSubmitData}
            id="password"
            icon=""
            arrowIcon=""
            UpdateActiveCustomer={UpdateActiveCustomer}
            type="password"
          />
          <MyProfileFormFields
            label="MyStock"
            placeholder="Apple"
            buttonText="Change MyStock"
            verifiedText="Chosen"
            data={formState.myStock}
            handleSubmitData={handleSubmitData}
            id="mystock"
            icon=""
            arrowIcon=""
            UpdateActiveCustomer={UpdateActiveCustomer}
            type="text"
          />
          <MyProfileFormFields
            label="My Info"
            placeholder="Verify your details with my info & get your favourite stock as reward"
            buttonText="Verify"
            verifiedText=""
            data={formState.myInfo}
            handleSubmitData={handleSubmitData}
            id="myInfo"
            icon={ex}
            arrowIcon={rightArrow}
            UpdateActiveCustomer={UpdateActiveCustomer}
            type="text"
          />
        </div>
      </div>
    </RootStyle>
  )
}
