import React from 'react'
import NavItem from './NavItem'
import NavDropdown from './NavDropdown'

const Nav = ({ items }) => {
  return (
    <div>
      <ul className='flex items-center space-x-4 font-medium uppercase '>
        {
          items.map(item => (
            <NavItem key={`nav-item-${item.text}`} item={item}>
              {item.dropdown && <NavDropdown items={item.dropdown} />}
            </NavItem>
          ))
        }
      </ul>
    </div>
  )
}

export default Nav