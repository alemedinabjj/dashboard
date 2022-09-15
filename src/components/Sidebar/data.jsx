import { BaseIcon } from '../BaseIcon'

export const dataButtons = [
  {
    id: 1,
    icon: <BaseIcon name="FaHome" size="1.5rem" />,
    label: 'Home',
    path: '/'
  },
  {
    id: 2,
    icon: <BaseIcon name="FaHashtag" size="1.5rem" />,
    label: 'Explore',
    path: '/explore'
  },
  {
    id: 3,
    icon: <BaseIcon name="FaEnvelope" size="1.5rem" />,
    label: 'Notifications',
    path: '/notifications',
    haveNotification: true
  },
  {
    id: 4,
    icon: <BaseIcon name="FaRegBookmark" size="1.5rem" />,
    label: 'Messages',
    path: '/messages'
  },
  {
    id: 5,
    icon: <BaseIcon name="FaRegBookmark" size="1.5rem" />,
    label: 'Bookmarks',
    path: '/bookmarks'
  },
  {
    id: 6,
    icon: <BaseIcon name="FaRegBookmark" size="1.5rem" />,
    label: 'Lists',
    path: '/lists'
  }
]
