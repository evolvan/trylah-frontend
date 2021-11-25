// material
import { alpha, useTheme, styled } from '@mui/material/styles'
import { Box, Grid, Stack, Container, Typography } from '@mui/material'
import { motion } from 'framer-motion'
//
import { varFadeInUp, MotionInView, varFadeInRight } from '../../animate'

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(24, 0),
  backgroundImage:
    theme.palette.mode === 'light'
      ? `linear-gradient(180deg, ${alpha(theme.palette.grey[300], 0)} 0%, ${
          theme.palette.grey[300]
        } 100%)`
      : 'none'
}))

const ContentStyle = styled('div')(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    marginBottom: 0
  }
}))

const ScreenStyle = styled(MotionInView)(({ theme }) => ({
  paddingRight: 2,
  paddingBottom: 1,
  maxWidth: 160,
  borderRadius: 8,
  backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 300 : 800],
  [theme.breakpoints.up('sm')]: {
    maxWidth: 320,
    paddingRight: 4,
    borderRadius: 12
  },
  '& img': {
    borderRadius: 8,
    [theme.breakpoints.up('sm')]: {
      borderRadius: 12
    }
  }
}))

const COMMON = {
  scaleX: 0.86,
  skewY: 8,
  skewX: 0,
  scaleY: 1,
  translateX: 0,
  translateY: 0,
  opacity: 0
}

const variantScreenLeft = {
  initial: COMMON,
  animate: { ...COMMON, translateX: '-50%', translateY: 40, opacity: 1 }
}
const variantScreenCenter = {
  initial: COMMON,
  animate: { ...COMMON, opacity: 1 }
}
const variantScreenRight = {
  initial: COMMON,
  animate: { ...COMMON, translateX: '50%', translateY: -40, opacity: 1 }
}

// ----------------------------------------------------------------------

export default function LandingHugePackElements() {
  const theme = useTheme()
  const isLight = theme.palette.mode === 'light'
  const isRTL = theme.direction === 'rtl'

  const screenLeftAnimate = variantScreenLeft
  const screenCenterAnimate = variantScreenCenter
  const screenRightAnimate = variantScreenRight

  return (
    <RootStyle>
      <Container maxWidth="lg">
        <Grid container spacing={5} justifyContent="center">
          <Grid item xs={12} md={4} sx={{ display: 'flex', alignItems: 'center' }}>
            <ContentStyle>
              <MotionInView variants={varFadeInUp}>
                <Typography
                  component="p"
                  variant="overline"
                  sx={{ mb: 2, color: 'text.secondary' }}
                >
                  You Get To Decide
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography variant="h2" sx={{ mb: 3 }}>
                  MyStock Rewards
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Stack
                  direction="row"
                  spacing={1}
                  justifyContent={{ xs: 'center', md: 'flex-start' }}
                >
                  <Typography
                    sx={{
                      mb: 0,
                      color: isLight ? 'text.secondary' : 'common.white'
                    }}
                  >
                    First, choose a stock as MyStock
                  </Typography>
                  <img
                    alt="sketch icon"
                    src="/static/home/ic_mystock_symbol.svg"
                    width={22}
                    height={22}
                  />
                </Stack>
                <Typography
                  sx={{
                    mb: 5,
                    color: isLight ? 'text.secondary' : 'common.white'
                  }}
                >
                  Then, receive stock rewards in MyStock.
                </Typography>
              </MotionInView>

              <Stack
                direction="row"
                spacing={1.5}
                justifyContent={{ xs: 'center', md: 'flex-start' }}
                sx={{ mb: 2 }}
              >
                <motion.img
                  variants={varFadeInRight}
                  src="/static/home/logo_apple.svg"
                  width={40}
                  height={40}
                />
                <motion.img
                  variants={varFadeInRight}
                  src="/static/home/logo_microsoft.svg"
                  width={40}
                  height={40}
                />
                <motion.img
                  variants={varFadeInRight}
                  src="/static/home/logo_google.svg"
                  width={40}
                  height={40}
                />
                <motion.img
                  variants={varFadeInRight}
                  src="/static/home/logo_amazon.svg"
                  width={40}
                  height={40}
                />
                <motion.img
                  variants={varFadeInRight}
                  src="/static/home/logo_facebook.svg"
                  width={40}
                  height={40}
                />
                <motion.img
                  variants={varFadeInRight}
                  src="/static/home/logo_tencent.svg"
                  width={40}
                  height={40}
                />
              </Stack>
              <Stack
                direction="row"
                spacing={1.5}
                justifyContent={{ xs: 'center', md: 'flex-start' }}
              >
                <motion.img
                  variants={varFadeInRight}
                  src="/static/home/logo_alibaba.svg"
                  width={40}
                  height={40}
                />
                <motion.img
                  variants={varFadeInRight}
                  src="/static/home/logo_netflix.svg"
                  width={40}
                  height={40}
                />
                <motion.img
                  variants={varFadeInRight}
                  src="/static/home/logo_sea.svg"
                  width={40}
                  height={40}
                />
                <motion.img
                  variants={varFadeInRight}
                  src="/static/home/logo_dbs.svg"
                  width={40}
                  height={40}
                />
                <motion.img
                  variants={varFadeInRight}
                  src="/static/home/logo_sq.svg"
                  width={40}
                  height={40}
                />
                <motion.img
                  variants={varFadeInRight}
                  src="/static/home/logo_singtel.svg"
                  width={40}
                  height={40}
                />
              </Stack>
            </ContentStyle>
          </Grid>

          <Grid item xs={12} md={8} dir="ltr">
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                justifyContent: 'center'
              }}
            >
              {[...Array(3)].map((_, index) => (
                <ScreenStyle
                  key={index}
                  threshold={0.72}
                  variants={{
                    ...(index === 0 && screenLeftAnimate),
                    ...(index === 1 && screenCenterAnimate),
                    ...(index === 2 && screenRightAnimate)
                  }}
                  transition={{ duration: 0.72, ease: 'easeOut' }}
                  sx={{
                    boxShadow: `${isRTL ? -80 : 80}px -40px 80px ${alpha(
                      isLight ? theme.palette.grey[600] : theme.palette.common.black,
                      0.48
                    )}`,
                    ...(index === 0 && {
                      zIndex: 3,
                      position: 'absolute'
                    }),
                    ...(index === 1 && { zIndex: 2 }),
                    ...(index === 2 && {
                      zIndex: 1,
                      position: 'absolute',
                      boxShadow: 'none'
                    })
                  }}
                >
                  <img
                    alt={`screen ${index + 1}`}
                    src={`/static/home/screen_${isLight ? 'light' : 'dark'}_${index + 1}_stock.png`}
                  />
                </ScreenStyle>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  )
}
