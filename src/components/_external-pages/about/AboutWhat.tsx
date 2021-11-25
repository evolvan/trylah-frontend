// material
import { alpha, useTheme, styled } from '@mui/material/styles'
import { Box, Grid, Container, Typography } from '@mui/material'

//
import { MHidden } from '../../@material-extend'
import { varFadeInUp, varFadeInRight, MotionInView } from '../../animate'

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  paddingTop: theme.spacing(20),
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left'
  }
}))

// ----------------------------------------------------------------------

export default function AboutWhat() {
  const theme = useTheme()
  const isLight = theme.palette.mode === 'light'
  const shadow = `-40px 40px 80px ${alpha(
    isLight ? theme.palette.grey[500] : theme.palette.common.black,
    0.48
  )}`

  return (
    <RootStyle>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <MHidden width="mdDown">
            <Grid item xs={12} md={6} lg={7} sx={{ pr: { md: 7 } }}>
              <Grid container spacing={3} alignItems="flex-end">
                <Grid item xs={6}>
                  <MotionInView variants={varFadeInUp}>
                    <Box
                      component="img"
                      src="/static/about/what-1.jpg"
                      sx={{
                        borderRadius: 2,
                        boxShadow: shadow
                      }}
                    />
                  </MotionInView>
                </Grid>
                <Grid item xs={6}>
                  <MotionInView variants={varFadeInUp}>
                    <Box component="img" src="/static/about/what-2.jpg" sx={{ borderRadius: 2 }} />
                  </MotionInView>
                </Grid>
              </Grid>
            </Grid>
          </MHidden>

          <Grid item xs={12} md={6} lg={5}>
            <MotionInView variants={varFadeInRight}>
              <Typography variant="h2" sx={{ mb: 3 }}>
                What is TryLah?
              </Typography>
            </MotionInView>

            <MotionInView variants={varFadeInRight}>
              <Typography
                sx={{
                  color: (theme) =>
                    theme.palette.mode === 'light' ? 'text.secondary' : 'common.white'
                }}
              >
                TryLah is an Singapore-based ecommerce platform, first of its kind, which enables
                customer to invest and spend at the same time. TryLah enables merchants to reward
                customers with company stocks as alternative to traditional loyalty programmes.
              </Typography>
            </MotionInView>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  )
}
