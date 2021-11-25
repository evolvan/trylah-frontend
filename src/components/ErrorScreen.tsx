// material
import { Box, Typography, Container } from '@mui/material'
// components
import { SeverErrorIllustration } from '../assets'

// ----------------------------------------------------------------------

export default function ErrorScreen({ message }: { message: string }) {
  return (
    <Container>
      <Box sx={{ maxWidth: 480, margin: 'auto', textAlign: 'center' }}>
        <Typography variant="h3" paragraph>
          500 Internal Server Error
        </Typography>
        <Typography sx={{ color: 'text.secondary' }}>{message}</Typography>
        <SeverErrorIllustration sx={{ height: 260, my: { xs: 5, sm: 10 } }} />
      </Box>
    </Container>
  )
}
