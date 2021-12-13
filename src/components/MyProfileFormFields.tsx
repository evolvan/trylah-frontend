import React, { useState } from 'react'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import '../assets/styles/style.css'
import check from '../icons/check.png'
import { string } from 'yup/lib/locale'

const UpdateButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 12,
  padding: '2px 7px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: 'transparent',
  borderColor: '#4baed7',
  color: '#4baed7',
  display: 'flex',
  alignItems: 'center',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"'
  ].join(','),
  '&:hover': {
    backgroundColor: 'transparent',
    borderColor: '#4baed7',
    boxShadow: 'none'
  }
})

const VerifiedButton = styled(Button)({
  color: 'green',
  borderRadius: '10px',
  backgroundColor: '#c9f7c9',
  display: 'flex',
  alignItems: 'center',
  padding: '2px 5px',
  fontSize: 12,
  boxShadow: 'none',
  // visibility: 'hidden',
  '&:hover': {
    backgroundColor: '#c9f7c9'
  }
})

type fieldProps = {
  label: string
  placeholder: string
  buttonText: string
  verifiedText: string
  data: string
  handleSubmitData: any
  id: string
  icon: any
  arrowIcon: any
  UpdateActiveCustomer: any
  type: string
}

const MyProfileFormFields = ({
  label,
  placeholder,
  buttonText,
  verifiedText,
  data,
  handleSubmitData,
  id,
  icon,
  arrowIcon,
  UpdateActiveCustomer,
  type
}: fieldProps) => {
  console.log(data, handleSubmitData)
  return (
    <div
      style={{
        padding: '20px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
        // backgroundColor: 'purple'
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          marginTop: '10px',
          width: '70%'
        }}
      >
        <h3
          style={{
            color: 'black',
            opacity: '.5',
            width: '140px',
            fontWeight: 'lighter',
            fontSize: '14px'
          }}
        >
          {label}:
        </h3>
        {label === 'My Info' ? (
          <span
            style={{
              fontSize: '13px',
              color: 'red',
              display: 'flex',
              alignItems: 'center',
              marginRight: '5px',
              width: '90%'
            }}
          >
            <img src={icon} alt="" height="20px" />
            {placeholder}
          </span>
        ) : (
          <input
            type={type}
            placeholder={placeholder}
            value={data}
            onChange={(e) => handleSubmitData(e, id)}
            autoComplete={'off'}
            id={id}
            style={{
              border: 'none',
              outline: 'none',
              backgroundColor: 'transparent',
              paddingLeft: '20px',
              color: 'black',
              fontSize: '14px',
              width: '100%'
            }}
          />
        )}
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '40%'
        }}
      >
        {label === 'Name' || label === 'My Info' ? (
          <div style={{ visibility: 'hidden' }}></div>
        ) : (
          <VerifiedButton variant="contained" disableRipple>
            {verifiedText}
            <img src={check} alt="" height="10px" style={{ marginLeft: '6px' }} />
          </VerifiedButton>
        )}
        <UpdateButton
          variant="contained"
          disableRipple
          onClick={(e) => UpdateActiveCustomer(e, id)}
        >
          {buttonText}

          {arrowIcon === '' ? null : (
            <i
              style={{ width: '20px', marginLeft: '6px', fontSize: '22px' }}
              className="fas fa-long-arrow-alt-right"
            ></i>
          )}
        </UpdateButton>
      </div>
    </div>
  )
}

export default MyProfileFormFields
