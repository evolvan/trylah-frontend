import { Outlet } from 'react-router-dom'
// material
import { styled } from '@mui/material/styles'
// components
import Page from '../components/Page'

// ----------------------------------------------------------------------
const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11)
  }
}))

// ----------------------------------------------------------------------

export default function Blog() {
  return (
    <RootStyle title="TryLah | Blogs">
      <Outlet />
    </RootStyle>
  )
}
