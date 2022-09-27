import Image from 'next/image'
import Link from 'next/link'
import logoPic from '../assets/logo.svg'

const Header = () => {
  return (
    <header className='fixed w-full bg-catskill shadow-lg z-10'>
      <div className='container mx-auto'>
        <Link href={'/'}>
          <a>
            <div className='flex items-center gap-4 font-lateef py-4 text-astral'>
              <Image src={logoPic} height={60} width={60} alt='logo' />
              <div className='flex flex-col gap-2'>
                <p className='uppercase text-5xl font-bold leading-6 drop-shadow-xl'>Marlena</p>
                <p className='uppercase leading-4 drop-shadow-sm'>Group of Companies</p>
              </div>
            </div>
          </a>
        </Link>
      </div>
    </header >
  )
}

export default Header