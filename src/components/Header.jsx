import { useState, useEffect } from 'react'
import Logo from './Logo'
import Nav from './Nav'
import MobileMenu from './MobileMenu'
import ContactInfo from './ContactInfo'
import { MENU_ITEMS } from '../constants'
import LocaleSelect from './LocaleSelect'

const Header = () => {
  const [visible, setVisible] = useState(true)

  const handleScroll = () => {
    const currentScrollPos = window.scrollY
    const screenHeight = window.innerHeight

    if (currentScrollPos > screenHeight / 2) {
      setVisible(false)
    } else {
      setVisible(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll)
  })

  return (
    <header
      className={`${visible ? 'visible opacity-100 ease-out duration-500' : 'invisible opacity-0 ease-out duration-500'} 
      fixed w-full bg-slate-50 shadow-lg z-10`}>
      <div className='container flex items-center justify-between'>
        <Logo />
        <Nav className='hidden tablet:flex' items={MENU_ITEMS} />
        <div className='flex items-start gap-4'>
          <ContactInfo className='hidden tablet:flex' />
          <LocaleSelect />
        </div>
        <MobileMenu />
      </div>
    </header >
  )
}

export default Header