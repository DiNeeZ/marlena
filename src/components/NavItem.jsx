import { HiChevronDown } from 'react-icons/hi'
import NavDropdown from './NavDropdown'


const NavItem = ({ item }) => {
  const isRelative = item.dropdown ? 'relative' : ''

  return (
    <li
      tabIndex={0}
      className={`${isRelative} nav-item cursor-pointer hover:text-violet-700 
      focus:text-violet-700 outline-none ease-in-out duration-150`}>
      <div className='text-2xl tablet:text-[11px] laptop:text-sm flex items-center space-x-1 group'>
        <span>{item.text}</span>
        {item.dropdown && <HiChevronDown className='group-hover:rotate-180 ease-in-out duration-300'/>}
      </div>
      {item.dropdown && <NavDropdown items={item.dropdown} />}
    </li>
  )
}

export default NavItem