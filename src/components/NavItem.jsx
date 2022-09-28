import { useState } from 'react'
import { HiChevronDown } from 'react-icons/hi'
import NavDropdown from './NavDropdown'


const NavItem = ({ item }) => {
  const [ showDropdown, setShowDropdown ] = useState(false)
  const isRelative = item.dropdown ? 'relative' : ''
  const handleFocus = () => setShowDropdown(true)
  const handleBlur = () => setShowDropdown(false)

  return (
    <li
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleFocus}
      onMouseLeave={handleBlur}
      tabIndex={0}
      className={`${isRelative} nav-item cursor-pointer hover:text-violet-700 
      focus:text-violet-700 outline-none ease-in-out duration-150`}>
      <div className='tablet:text-sm flex text-2xl items-center space-x-1 group'>
        <span>{item.text}</span>
        {item.dropdown && <HiChevronDown className='group-hover:rotate-180 ease-in-out duration-300'/>}
      </div>
      {(item.dropdown && showDropdown) && <NavDropdown items={item.dropdown} />}
    </li>
  )
}

export default NavItem