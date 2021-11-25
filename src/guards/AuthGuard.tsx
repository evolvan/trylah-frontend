import { useState, ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
// hooks
import useUser from '../hooks/useUser'
// pages
import Login from '../pages/authentication/Login'

// ----------------------------------------------------------------------

type AuthGuardProps = {
  children: ReactNode
}

export default function AuthGuard({ children }: AuthGuardProps) {
  const { data } = useUser()
  const { pathname } = useLocation()
  const [requestedLocation, setRequestedLocation] = useState<string | null>(null)

  if (!data?.activeCustomer) {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname)
    }
    return <Login />
  }

  if (requestedLocation && pathname !== requestedLocation) {
    setRequestedLocation(null)
    return <Navigate to={requestedLocation} />
  }

  return <>{children}</>
}
