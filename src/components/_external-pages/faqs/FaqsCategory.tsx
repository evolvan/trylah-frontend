import { useState } from 'react'
import { Link as RouterLink, Outlet } from 'react-router-dom'
// material
import { Box, Grid, Paper, Link, Typography, Container } from '@mui/material'
//
import { varFadeIn, MotionInView } from '../../animate'

// ----------------------------------------------------------------------

const DEFAULT_CATEGORY = 'About TryLah'

const CATEGORIES = [
  {
    label: 'About TryLah',
    icon: '/static/faqs/ic_assurances.svg',
    href: 'about-trylah'
  },
  {
    label: 'Stock Rewards',
    icon: '/static/faqs/ic_refund.svg',
    href: 'stock-rewards'
  },
  {
    label: 'My Account',
    icon: '/static/faqs/ic_account.svg',
    href: 'my-account'
  },
  {
    label: 'Payments',
    icon: '/static/faqs/ic_payment.svg',
    href: 'payments'
  },
  {
    label: 'Purchases',
    icon: '/static/faqs/ic_delivery.svg',
    href: 'purchases'
  },
  {
    label: 'Security Concerns',
    icon: '/static/faqs/ic_package.svg',
    href: 'security-concerns'
  }
]

// ----------------------------------------------------------------------

interface CategoryCardProps {
  category: {
    label: string
    icon: string
    href: string
  }
  setCategoryName: (name: string) => void
  isSelected: boolean
}

const SX_COMMON = {
  px: 2,
  height: 260,
  display: 'flex',
  textAlign: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center'
} as const

function CategoryCard({ category, setCategoryName, isSelected }: CategoryCardProps) {
  const { label, icon, href } = category

  return (
    <Paper
      sx={
        isSelected
          ? {
              ...SX_COMMON,
              boxShadow: (theme) => theme.customShadows.primary
            }
          : {
              ...SX_COMMON,
              boxShadow: (theme) => theme.customShadows.z8
            }
      }
    >
      <Box component="img" src={icon} sx={{ mb: 2, width: 80, height: 80 }} />
      <Link
        color="primary"
        variant="subtitle1"
        to={href}
        key={label}
        component={RouterLink}
        onClick={(e) => {
          setCategoryName(label)
        }}
      >
        {label}
      </Link>
    </Paper>
  )
}

export default function FaqsCategory() {
  const [categoryName, setCategoryName] = useState(DEFAULT_CATEGORY)

  return (
    <Container sx={{ mt: 15, mb: 10 }}>
      <Typography variant="h4" sx={{ mb: 5, color: 'text.primary' }}>
        Frequently Asked Questions
      </Typography>

      <Grid container spacing={3} sx={{ mb: 10 }}>
        {CATEGORIES.map((category) => (
          <Grid item xs={12} sm={4} md={2} key={category.label}>
            <MotionInView variants={varFadeIn}>
              <CategoryCard
                category={category}
                setCategoryName={setCategoryName}
                isSelected={category.label === categoryName}
              />
            </MotionInView>
          </Grid>
        ))}
      </Grid>

      <Container maxWidth="md">
        <Outlet />
      </Container>
    </Container>
  )
}
