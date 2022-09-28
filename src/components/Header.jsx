import Logo from './Logo'
import Nav from './Nav'
import { MENU_ITEMS } from '../constants'

const Header = () => (
  <header className='fixed w-full bg-slate-50 shadow-lg z-10'>
    <div className='container flex items-center justify-between'>
      <Logo />
      <Nav items={MENU_ITEMS} />
    </div>
  </header >
)

export default Header