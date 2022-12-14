import { useState } from 'react'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { CgClose } from 'react-icons/cg'
import ContactInfo from './ContactInfo'
import LocaleSelect from './LocaleSelect'
import Nav from './Nav'
import { MENU_ITEMS } from '../constants'

const MobileMenu = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className='tablet:hidden'>
      <button
        onClick={() => setShowMenu(true)}
        className='hover:text-violet-700 ease-in duration-150'>
        <HiOutlineMenuAlt3 className='h-8 w-8' />
      </button>
      <div
        className={showMenu ?
          'fixed top-0 left-0 w-full h-screen bg-slate-800/75 ease-in duration-150' : ''}>
        <div className={showMenu ?
          'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-150' :
          'fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-150'
        }>
          <div className='absolute top-2 right-2'>
            <button onClick={() => setShowMenu(false)}>
              <CgClose className='w-12 h-12 p-3' />
            </button>
          </div>
          <div>
            <div className='py-8 max-w-[50%]'>
              <div className='absolute top-10 left-8 flex flex-col items-end space-y-2'>
                <LocaleSelect className='mb-2' />
                <ContactInfo />
              </div>
            </div>
            <Nav className='pt-24' items={MENU_ITEMS} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu