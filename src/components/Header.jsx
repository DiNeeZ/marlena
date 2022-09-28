import Logo from './Logo'
import Nav from './Nav'
import MobileMenu from './MobileMenu'
import ContactInfo from './ContactInfo'
import { MENU_ITEMS } from '../constants'

const Header = () => (
  <header className='fixed w-full bg-slate-50 shadow-lg z-10'>
    <div className='container flex items-center justify-between'>
      <Logo />
      <Nav className='hidden tablet:flex' items={MENU_ITEMS} />
      <ContactInfo className='hidden tablet:flex' />
      <MobileMenu />
    </div>
  </header >
)

export default Header