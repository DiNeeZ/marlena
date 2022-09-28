import React from 'react'
import NavItem from './NavItem'

const Nav = ({ items, ...otherProps }) => {

  return (
    <div>
      <ul className={`${otherProps.className} tablet:space-x-4 tablet:space-y-0 items-center 
      space-x-0 space-y-4 font-medium uppercase`}>
        {
          items.map(item => (
            <NavItem key={`nav-item-${item.text}`} item={item} />
          ))
        }
      </ul>
    </div>
  )
}

export default Nav