// material
import { styled } from '@mui/material/styles'
// components
import Page from '../components/Page'
import { AboutHero, AboutWhat, AboutVision } from '../components/_external-pages/about'

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11)
  }
}))

// ----------------------------------------------------------------------

export default function About() {
  return (
    <RootStyle title="TryLah | About Us">
      <AboutHero />
      <AboutWhat />
      <AboutVision />
    </RootStyle>
  )
}
