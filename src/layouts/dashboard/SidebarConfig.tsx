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
  payment: getIcon('ic_payment'),
  info: getIcon('')
}

console.log('from sidebarConfig', PATH_DASHBOARD.account.myInfo)

const sidebarConfig = [
  // ----------------------------------------------------------------------
  {
    subheader: 'DASHBOARD',
    items: [
      {
        title: 'My Profile',
        path: PATH_DASHBOARD.account.myProfile,
        icon: ICONS.profile
      },
      { title: 'MyStock', path: PATH_DASHBOARD.account.mystock, icon: ICONS.mystock },
      { title: 'MyInfo', path: PATH_DASHBOARD.account.myInfo, icon: ICONS.ecommerce },
      { title: 'Stock Rewards', path: PATH_DASHBOARD.account.stockrewards, icon: ICONS.ecommerce },
      { title: 'My Orders', path: PATH_DASHBOARD.account.myorders, icon: ICONS.ecommerce },
      {
        title: 'My Payment',
        path: PATH_DASHBOARD.setting.payment,
        icon: ICONS.payment
      },
      {
        title: 'Invite Friends',
        path: PATH_DASHBOARD.account.invitefriends,
        icon: ICONS.payment
      },
      {
        title: 'Logout',
        path: PATH_DASHBOARD.account.logout,
        icon: ICONS.payment
      }
    ]
  }

  // ----------------------------------------------------------------------
  // {
  //   subheader: 'SETTING',
  //   items: [
  //     {
  //       title: 'Profile',
  //       path: PATH_DASHBOARD.setting.myProfile,
  //       icon: ICONS.profile
  //     },
  //     {
  //       title: 'MyStock Choice',
  //       path: PATH_DASHBOARD.setting.mystock,
  //       icon: ICONS.mystock
  //     },
  //     {
  //       title: 'Payment Methods',
  //       path: PATH_DASHBOARD.setting.payment,
  //       icon: ICONS.payment
  //     }
  //   ]
  // }
]

export default sidebarConfig
