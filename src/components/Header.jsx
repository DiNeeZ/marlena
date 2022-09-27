import Image from 'next/image'
import React from 'react'
import logoPic from '../assets/logo.svg'

const Header = () => {
  return (
    <div>
      <div className='container mx-auto'>
        <div>
          <Image src={logoPic} alt='logo' />
        </div>
      </div>
    </div>
  )
}

export default Header