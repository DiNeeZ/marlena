import { FaShip, FaRecycle, FaWarehouse } from 'react-icons/fa'

const shippingIcon = <FaShip
  className='w-16 h-16 mobile:w-8 mobile:h-8 tablet:w-12 tablet:h-12 laptop:w-16 laptop:h-16
  text-green-700 laptop:group-hover:text-slate-50 duration-300 ease-in-out' />
const logisticsIcon = <FaRecycle
  className='w-16 h-16 mobile:w-8 mobile:h-8 tablet:w-12 tablet:h-12 laptop:w-16 laptop:h-16
  text-green-700 laptop:group-hover:text-slate-50 duration-300 ease-in-out' />
const storageIcon = <FaWarehouse
  className='w-16 h-16 mobile:w-8 mobile:h-8 tablet:w-12 tablet:h-12 laptop:w-16 laptop:h-16
  text-green-700  laptop:group-hover:text-slate-50 duration-300 ease-in-out' />

export const MENU_ITEMS = [
  { key: 'home' },
  { key: 'about' },
  {
    key: 'services',
    dropdown: [
      { key: 'transshipment' },
      { key: 'logistics' },
      { key: 'storage' },
    ]
  },
  { key: 'gallery' },
  { key: 'contacts' }
]

export const SERVICES_ITEMS = [
  {
    id: 'services-1',
    key: 'transshipment',
    descr: 'transshipmentDescr',
    link: 'services/port-transshipment',
    icon: shippingIcon
  },
  {
    id: 'services-2',
    key: 'logistics',
    descr: 'logisticsDescr',
    link: '/services/logistics/',
    icon: logisticsIcon
  },
  {
    id: 'services-3',
    key: 'storage',
    descr: 'storageDescr',
    link: '/services/storage/',
    icon: storageIcon
  }
]

export const ABOUT_TERMINAL = [
  'aboutTerminal1',
  'aboutTerminal2',
  'aboutTerminal3',
  'aboutTerminal4',
  'aboutTerminal5',
  'aboutTerminal6',
  'aboutTerminal7',
  'aboutTerminal8',
  'aboutTerminal9'
]