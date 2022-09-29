import { FaShip, FaRecycle, FaWarehouse } from 'react-icons/fa'

const shippingIcon = <FaShip
  className='w-16 h-16 mobile:w-8 mobile:h-8 tablet:w-12 tablet:h-12 laptop:w-16 laptop:h-16
  text-green-700 group-hover:text-slate-50 duration-300 ease-in-out' />
const logisticsIcon = <FaRecycle
  className='w-16 h-16 mobile:w-8 mobile:h-8 tablet:w-12 tablet:h-12 laptop:w-16 laptop:h-16
  text-green-700 group-hover:text-slate-50 duration-300 ease-in-out' />
const storageIcon = <FaWarehouse
  className='w-16 h-16 mobile:w-8 mobile:h-8 tablet:w-12 tablet:h-12 laptop:w-16 laptop:h-16
  text-green-700  group-hover:text-slate-50 duration-300 ease-in-out' />

export const MENU_ITEMS = [
  { text: 'Home' },
  { text: 'About Us' },
  {
    text: 'Services',
    dropdown: [
      { text: 'Port Transshipment' },
      { text: 'Logistics' },
      { text: 'Storage' },
    ]
  },
  { text: 'Gallery' },
  { text: 'Contact Us' }
]

export const SERVICES_ITEMS = [
  {
    id: 'services-1',
    title: 'Port transshipment',
    descr: 'The only dedicated terminal',
    link: 'services/port-transshipment',
    icon: shippingIcon
  },
  {
    id: 'services-2',
    title: 'Logistics',
    descr: 'Rail transport and forwarding',
    link: '/services/logistics/',
    icon: logisticsIcon
  },
  {
    id: 'services-3',
    title: 'Storage',
    descr: 'Total warehouse area',
    link: '/services/storage/',
    icon: storageIcon
  }
]