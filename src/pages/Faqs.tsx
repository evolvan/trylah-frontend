// material
import { styled } from '@mui/material/styles'
// components
import Page from '../components/Page'
import { FaqsCategory } from '../components/_external-pages/faqs'

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11)
  }
}))

// ----------------------------------------------------------------------

export default function Faqs() {
  return (
    <RootStyle title="TryLah | FAQs">
      <FaqsCategory />
    </RootStyle>
  )
}
