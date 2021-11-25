import { Suspense, lazy } from 'react'
import { Navigate, useRoutes, useLocation } from 'react-router-dom'
// layouts
import MainLayout from '../layouts/main'
import DashboardLayout from '../layouts/dashboard'
import LogoOnlyLayout from '../layouts/LogoOnlyLayout'
// guards
import GuestGuard from '../guards/GuestGuard'
// components
import LoadingScreen from '../components/LoadingScreen'
// ----------------------------------------------------------------------

const Loadable = (Component: any) => (props: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation()
  const isDashboard = pathname.includes('/dashboard')

  return (
    <Suspense
      fallback={
        <LoadingScreen
          sx={{
            ...(!isDashboard && {
              top: 0,
              left: 0,
              width: 1,
              zIndex: 9999,
              position: 'fixed'
            })
          }}
        />
      }
    >
      <Component {...props} />
    </Suspense>
  )
}

export default function Router() {
  return useRoutes([
    // Main Routes
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { element: <LandingPage /> },
        { path: 'about-us', element: <About /> },
        { path: 'contact-us', element: <Contact /> },
        {
          path: 'blog',
          element: <Blog />,
          children: [
            { element: <Navigate to="posts" replace /> },
            { path: 'posts', element: <BlogPosts /> },
            { path: 'posts/:blogPostTitle', element: <BlogPostWrapper /> }
          ]
        },
        {
          path: 'faqs',
          element: <Faqs />,
          children: [
            { element: <Navigate to="about-trylah" replace /> },
            { path: ':categoryName', element: <FaqsListWrapper /> }
          ]
        }
      ]
    },
    // Auth Routes
    {
      path: 'auth',
      children: [
        {
          path: 'register',
          element: (
            <GuestGuard>
              <Register />
            </GuestGuard>
          )
        },
        {
          path: 'login',
          element: (
            <GuestGuard>
              <Login />
            </GuestGuard>
          )
        }
      ]
    },

    // Dashboard Routes
    {
      path: 'dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/one" replace /> },
        { path: 'one', element: <PageOne /> },
        { path: 'two', element: <PageTwo /> },
        { path: 'three', element: <PageThree /> },
        {
          path: 'app',
          children: [
            { element: <Navigate to="/dashboard/app/four" replace /> },
            { path: 'four', element: <PageFour /> },
            { path: 'five', element: <PageFive /> },
            { path: 'six', element: <PageSix /> }
          ]
        }
      ]
    },
    // Catch-all Routes
    {
      path: '*',
      element: <LogoOnlyLayout />,
      children: [
        { path: '404', element: <NotFound /> },
        { path: '500', element: <Page500 /> },
        { path: '*', element: <Navigate to="/404" replace /> }
      ]
    }
  ])
}

// IMPORT COMPONENTS

// Authentication
const Login = Loadable(lazy(() => import('../pages/authentication/Login')))
const Register = Loadable(lazy(() => import('../pages/authentication/Register')))
// Dashboard
const PageOne = Loadable(lazy(() => import('../pages/PageOne')))
const PageTwo = Loadable(lazy(() => import('../pages/PageTwo')))
const PageThree = Loadable(lazy(() => import('../pages/PageThree')))
const PageFour = Loadable(lazy(() => import('../pages/PageFour')))
const PageFive = Loadable(lazy(() => import('../pages/PageFive')))
const PageSix = Loadable(lazy(() => import('../pages/PageSix')))

// Main
const LandingPage = Loadable(lazy(() => import('../pages/LandingPage')))
const About = Loadable(lazy(() => import('../pages/About')))
const Contact = Loadable(lazy(() => import('../pages/Contact')))
// FAQ
const Faqs = Loadable(lazy(() => import('../pages/Faqs')))
const FaqsListWrapper = Loadable(
  lazy(() => import('../components/_external-pages/faqs/FaqsListWrapper'))
)
//Blog
const Blog = Loadable(lazy(() => import('../pages/Blog')))
const BlogPosts = Loadable(lazy(() => import('../components/_external-pages/blog/BlogPosts')))
const BlogPostWrapper = Loadable(
  lazy(() => import('../components/_external-pages/blog/BlogPostWrapper'))
)
// Error
const NotFound = Loadable(lazy(() => import('../pages/Page404')))
const Page500 = Loadable(lazy(() => import('../pages/Page500')))
