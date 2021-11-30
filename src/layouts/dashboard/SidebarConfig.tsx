// routes
import { PATH_DASHBOARD } from '../../routes/paths'
// components
import SvgIconStyle from '../../components/SvgIconStyle'

// ----------------------------------------------------------------------

const getIcon = (name: string) => (
  <SvgIconStyle src={`/static/icons/navbar/${name}.svg`} sx={{ width: '100%', height: '100%' }} />
)

const ICONS = {
  profile: getIcon('ic_user'),
  stocks: getIcon('ic_analytics'),
  ecommerce: getIcon('ic_ecommerce'),
  dashboard: getIcon('ic_dashboard'),
  mystock: getIcon('ic_mystock'),
  payment: getIcon('ic_payment')
}

const sidebarConfig = [
  // ----------------------------------------------------------------------
  {
    subheader: 'ACCOUNT',
    items: [
      { title: 'Dashboard', path: PATH_DASHBOARD.account.overview, icon: ICONS.dashboard },
      { title: 'Stock Rewards', path: PATH_DASHBOARD.account.stock_rewards, icon: ICONS.stocks },
      { title: 'Purchases', path: PATH_DASHBOARD.account.purchases, icon: ICONS.ecommerce }
    ]
  },

  // ----------------------------------------------------------------------
  {
    subheader: 'SETTING',
    items: [
      {
        title: 'Profile',
        path: PATH_DASHBOARD.setting.profile,
        icon: ICONS.profile,
        children: [
          { title: 'Name', path: PATH_DASHBOARD.setting.name },
          { title: 'Password', path: PATH_DASHBOARD.setting.password },
          { title: 'Phone', path: PATH_DASHBOARD.setting.phone }
        ]
      },
      {
        title: 'MyStock Choice',
        path: PATH_DASHBOARD.setting.mystock,
        icon: ICONS.mystock
      },
      {
        title: 'Payment Methods',
        path: PATH_DASHBOARD.setting.payment,
        icon: ICONS.payment
      }
    ]
  }
]

export default sidebarConfig
