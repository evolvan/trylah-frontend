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
    stock_rewards: path(ROOTS_DASHBOARD, '/stock-rewards'),
    purchases: path(ROOTS_DASHBOARD, '/purchases')
  },
  setting: {
    profile: path(ROOTS_DASHBOARD, '/profile'),
    name: path(ROOTS_DASHBOARD, '/profile/name'),
    password: path(ROOTS_DASHBOARD, '/profile/password'),
    phone: path(ROOTS_DASHBOARD, '/profile/phone'),
    mystock: path(ROOTS_DASHBOARD, '/mystock'),
    payment: path(ROOTS_DASHBOARD, '/payment')
  }
}
