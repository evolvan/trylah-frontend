// material
import { styled } from '@mui/material/styles'
import { Box, Grid, Container, Typography } from '@mui/material'
//
import { MotionInView, varFadeInUp, varFadeInDown } from '../../animate'

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(28, 0),
  backgroundColor: theme.palette.grey[900]
}))

const ContentStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  position: 'relative',
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    height: '100%',
    marginBottom: 0,
    textAlign: 'left',
    display: 'inline-flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start'
  }
}))

// ----------------------------------------------------------------------

export default function LandingDarkMode() {
  return (
    <RootStyle>
      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <Box
          component="img"
          alt="image shape"
          src="/static/home/shape.svg"
          sx={{
            top: 0,
            right: 0,
            bottom: 0,
            my: 'auto',
            position: 'absolute',
            filter: 'grayscale(1) opacity(48%)',
            display: { xs: 'none', md: 'block' }
          }}
        />

        <Grid container spacing={5} direction="row-reverse" justifyContent="space-between">
          <Grid item xs={12} md={4}>
            <ContentStyle>
              <MotionInView variants={varFadeInUp}>
                <Typography
                  component="p"
                  variant="overline"
                  sx={{ mb: 2, color: 'text.disabled', display: 'block' }}
                >
                  Spend and Own
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography variant="h2" sx={{ mb: 3, color: 'common.white' }}>
                  Be An Owner
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography sx={{ color: 'common.white', mb: 5 }}>
                  Own the stocks of the brands you shop with, and be an owner of the brand.
                </Typography>
              </MotionInView>
            </ContentStyle>
          </Grid>

          <Grid item xs={12} md={7} sx={{ position: 'relative' }}>
            <MotionInView threshold={0.5} variants={varFadeInUp}>
              <img alt="light mode" src="/static/home/lightmode.png" />
            </MotionInView>
            <MotionInView
              threshold={0.5}
              variants={varFadeInDown}
              sx={{ top: 0, left: 0, position: 'absolute' }}
            >
              <img alt="dark mode" src="/static/home/darkmode.png" />
            </MotionInView>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  )
}
