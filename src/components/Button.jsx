import Link from 'next/link'
import { FaShip, FaRecycle, FaWarehouse } from 'react-icons/fa'

const Button = ({ children, to }) => {
  return (
    <Link href={to} >
      <div className='text-sm tablet:text-base text-slate-50 text-center px-4 py-2 mobile:px-2 tablet:px-8 bg-violet-700/75 rounded 
      cursor-pointer laptop:group-hover:bg-violet-700 group-hover:shadow-lg 
      hover:translate-y-1 duration-150 ease-in-out'>
        {children}
      </div>
    </Link>
  )
}

export default Button