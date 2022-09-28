import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logoPic from '../assets/logo.svg'

const Logo = () => {
  return (
    <Link href={'/'}>
      <a className=' outline-none text-green-700 focus:text-violet-700'>
        <div className='flex items-end space-x-2 font-lateef py-4'>
          <Image src={logoPic} height={50} width={50} alt='logo' />
          <div className='flex flex-col space-y-1'>
            <p className='uppercase text-5xl font-medium leading-6 drop-shadow-xl'>Marlena</p>
            <p className='uppercase text-xl text-violet-700 leading-4 drop-shadow-sm tracking-wide'>Group of Companies</p>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default Logo