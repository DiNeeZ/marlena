import Link from 'next/link'

const Button = ({ children, to }) => {

  return (
    <Link href={to} >
      <div tabIndex={0} className='text-lg mobile:text-sm tablet:text-base text-slate-50 text-center px-8 py-2 mobile:px-2 tablet:px-8 
      bg-violet-700/75 rounded cursor-pointer  group-hover:shadow-lg outline-none hover:bg-violet-700 focus:bg-violet-700 
      active:translate-y-1 duration-150 ease-in-out capitalize'>
        {children}
      </div>
    </Link>
  )
}

export default Button