// material
import { styled } from '@mui/material/styles'

// components
import Page from '../components/Page'
import { fontSize } from '@mui/system'
import MyProfileFormFields from 'components/MyProfileFormFields'
import React from 'react'
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

  const handleSubmitData = (e: any, id: string) => {
    console.log(e.target.value, id)
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
            <span style={{ marginRight: '10px' }}>Dashboard</span>{' '}
            <i
              style={{ fontSize: '5px', marginRight: '10px', opacity: '.6' }}
              className="fas fa-circle"
            ></i>{' '}
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
            placeholder="Carlota Monterio"
            buttonText="Update Name"
            verifiedText=""
            data={formState.name}
            handleSubmitData={handleSubmitData}
            id="name"
            icon=""
            arrowIcon=""
          />
          <MyProfileFormFields
            label="Email Address"
            placeholder="carlotamonte@gmail.com"
            buttonText="Update Email"
            verifiedText="Verified"
            data={formState.email}
            handleSubmitData={handleSubmitData}
            id="email"
            icon=""
            arrowIcon=""
          />
          <MyProfileFormFields
            label="Phone Number"
            placeholder="+65 63297563"
            buttonText="Update Phone Number"
            verifiedText="Verified"
            data={formState.phone}
            handleSubmitData={handleSubmitData}
            id="phone"
            icon=""
            arrowIcon=""
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
          />
        </div>
      </div>
    </RootStyle>
  )
}
