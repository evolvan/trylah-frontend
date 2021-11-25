// material
import { styled } from '@mui/material/styles'
import { Box, Card, Link, Container, Typography } from '@mui/material'

// layouts
import AuthLayout from '../../layouts/AuthLayout'

// components
import Page from '../../components/Page'
import { MHidden } from '../../components/@material-extend'
import { RegisterForm } from '../../components/authentication/register'

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex'
  }
}))

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2)
}))

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(12, 0)
}))

// ----------------------------------------------------------------------

export default function Register() {
  return (
    <RootStyle title="TryLah | Sign Up">
      <AuthLayout>&nbsp;</AuthLayout>
      <MHidden width="mdDown">
        <SectionStyle>
          <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
            Get shares as you shop.
          </Typography>
          <img alt="register" src="/static/illustrations/illustration_register.png" />
        </SectionStyle>
      </MHidden>

      <Container>
        <ContentStyle>
          <Box sx={{ mb: 5, display: 'flex', alignItems: 'center' }}>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h4" gutterBottom>
                Create a&nbsp;
                <Typography component="span" variant="logoh3" sx={{ color: 'primary.main' }}>
                  TryLah
                </Typography>
                &nbsp;&nbsp;account
              </Typography>

              <Typography sx={{ color: 'text.secondary' }}>In a few simple steps</Typography>
            </Box>
          </Box>

          <RegisterForm />

          <Typography variant="body2" align="center" sx={{ color: 'text.secondary', mt: 3 }}>
            By registering, I agree to TryLah&nbsp;
            <Link underline="always" color="text.primary" href="#">
              Terms of Service
            </Link>
            &nbsp;and&nbsp;
            <Link underline="always" color="text.primary" href="#">
              Privacy Policy
            </Link>
            .
          </Typography>
        </ContentStyle>
      </Container>
    </RootStyle>
  )
}
