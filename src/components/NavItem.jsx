import { useState } from 'react'
import { HiChevronDown } from 'react-icons/hi'

const NavItem = ({ item, children }) => {
  const [ isFocused, setIsFocused ] = useState(false)
  const handleFocuse = () => setIsFocused(true)
  const handleBlure = () => setIsFocused(false)
  const isRelative = item.dropdown ? 'relative' : ''



  return (
    <li
      onFocus={handleFocuse}
      onBlur={handleBlure}
      tabIndex={0}
      className={`${isRelative} nav-item cursor-pointer hover:text-violet-700 
      focus:text-violet-700 outline-none ease-in-out duration-150`}>
      <div className='flex text-sm items-center space-x-1 group'>
        <span>{item.text}</span>
        {children && <HiChevronDown className='group-hover:rotate-180 ease-in-out duration-300' />}
      </div>
      {isFocused && children}
    </li>
  )
}

export default NavItem