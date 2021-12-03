// ----------------------------------------------------------------------

function path(root: string, sublink: string) {
  return `${root}${sublink}`
}

const ROOTS_AUTH = '/auth'
const ROOTS_DASHBOARD = '/dashboard'

// ----------------------------------------------------------------------
export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, '/login'),
  register: path(ROOTS_AUTH, '/register'),
  resetPassword: path(ROOTS_AUTH, '/reset-password'),
  verify: path(ROOTS_AUTH, '/verify')
}

export const PATH_PAGE = {
  about: '/about-us',
  contact: '/contact-us',
  faqs: '/faqs',
  page404: '/404',
  page500: '/500',
  brands: '/brands',
  blog: '/blog'
}

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  account: {
    overview: path(ROOTS_DASHBOARD, '/overview'),
    mystock: path(ROOTS_DASHBOARD, '/mystock'),
    myProfile: path(ROOTS_DASHBOARD, '/my-profile'),
    myInfo: path(ROOTS_DASHBOARD, '/myinfo'),
    myorders: path(ROOTS_DASHBOARD, '/myorders'),
    stockrewards: path(ROOTS_DASHBOARD, '/stockrewards'),
    invitefriends: path(ROOTS_DASHBOARD, '/invitefriends'),
    logout: path(ROOTS_DASHBOARD, '/logout')
  },
  setting: {
    name: path(ROOTS_DASHBOARD, '/profile/name'),
    password: path(ROOTS_DASHBOARD, '/profile/password'),
    phone: path(ROOTS_DASHBOARD, '/profile/phone'),
    payment: path(ROOTS_DASHBOARD, '/payment')
  }
}
