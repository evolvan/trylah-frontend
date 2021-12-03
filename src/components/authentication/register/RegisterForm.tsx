import * as Yup from 'yup'
import { useState } from 'react'
import { Icon } from '@iconify/react'
import { useSnackbar } from 'notistack'
import { useFormik, Form, FormikProvider } from 'formik'

import eyeFill from '@iconify/icons-eva/eye-fill'
import closeFill from '@iconify/icons-eva/close-fill'
import eyeOffFill from '@iconify/icons-eva/eye-off-fill'
// material
import { Stack, TextField, IconButton, InputAdornment, Alert } from '@mui/material'
import { LoadingButton } from '@mui/lab'
// hooks
import useSignUp from '../../../hooks/useSignUp'
import useLogin from '../../../hooks/useLogin'
import useIsMountedRef from '../../../hooks/useIsMountedRef'
//
import { MIconButton } from '../../@material-extend'

// ----------------------------------------------------------------------

type InitialValues = {
  email: string
  password: string
  afterSubmit?: string
}

export default function RegisterForm() {
  const [signUp] = useSignUp()
  const [login] = useLogin()
  const isMountedRef = useIsMountedRef()
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()
  const [showPassword, setShowPassword] = useState(false)

  const RegisterSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required')
  })

  const formik = useFormik<InitialValues>({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: RegisterSchema,
    onSubmit: async (values, { setErrors, setSubmitting }) => {
      try {
        const signUpResult = await signUp({
          variables: { input: { emailAddress: values.email, password: values.password } }
        })
        if (signUpResult.data?.registerCustomerAccount.__typename === 'Success') {
          enqueueSnackbar('Yay! Your account is ready!', {
            variant: 'success',
            action: (key) => (
              <MIconButton size="small" onClick={() => closeSnackbar(key)}>
                <Icon icon={closeFill} />
              </MIconButton>
            )
          })
          await login({
            variables: { username: values.email, password: values.password }
          })
        }

        if (isMountedRef.current) {
          setSubmitting(false)
        }
      } catch (error) {
        console.error(error)
        if (isMountedRef.current) {
          setErrors({ afterSubmit: '' })
          setSubmitting(false)
        }
      }
    }
  })

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          {errors.afterSubmit && <Alert severity="error">{errors.afterSubmit}</Alert>}

          <TextField
            fullWidth
            autoComplete="username"
            type="email"
            label="Email address"
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />

          <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            label="Password"
            {...getFieldProps('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" onClick={() => setShowPassword((prev) => !prev)}>
                    <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                  </IconButton>
                </InputAdornment>
              )
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />

          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
          >
            Register
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  )
}
