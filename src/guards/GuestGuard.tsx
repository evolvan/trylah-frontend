import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
// hooks
import useUser from '../hooks/useUser'
// routes
import { PATH_DASHBOARD } from '../routes/paths'

// ----------------------------------------------------------------------

type GuestGuardProps = {
  children: ReactNode
}

export default function GuestGuard({ children }: GuestGuardProps) {
  const { data } = useUser()

  if (data?.activeCustomer) {
    return <Navigate to={PATH_DASHBOARD.root} />
  }

  return <>{children}</>
}
