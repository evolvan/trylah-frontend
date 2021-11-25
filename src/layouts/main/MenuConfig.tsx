import { Icon } from '@iconify/react'
import homeFill from '@iconify/icons-eva/home-fill'
import bookOpenFill from '@iconify/icons-eva/book-open-fill'
import shoppingBagFill from '@iconify/icons-eva/shopping-bag-fill'
import personFill from '@iconify/icons-eva/person-fill'
import questionFill from '@iconify/icons-eva/question-mark-circle-fill'
// routes
import { PATH_AUTH, PATH_PAGE } from '../../routes/paths'

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22
}

const menuConfig = [
  {
    title: 'TryLah',
    icon: <Icon icon={homeFill} {...ICON_SIZE} />,
    path: '/'
  },
  {
    title: 'Brands',
    icon: <Icon icon={shoppingBagFill} {...ICON_SIZE} />,
    path: PATH_PAGE.brands
  },
  {
    title: 'Blog',
    path: PATH_PAGE.blog,
    icon: <Icon icon={bookOpenFill} {...ICON_SIZE} />
  },

  {
    title: 'FAQs',
    path: PATH_PAGE.faqs,
    icon: <Icon icon={questionFill} {...ICON_SIZE} />
  },

  {
    title: 'Login',
    path: PATH_AUTH.login,
    icon: <Icon icon={personFill} {...ICON_SIZE} />
  }
]

export default menuConfig
