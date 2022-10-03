import React from 'react'
import NavItem from './NavItem'

const Nav = ({ items, ...otherProps }) => {
  return (
    <div>
      <ul className={`${otherProps.className} space-x-0 space-y-4 tablet:space-x-4 tablet:space-y-0 laptop:space-y-0 items-center 
       font-medium uppercase`}>
        {
          items.map(item => (
            <NavItem key={`nav-item-${item.key}`} item={item} />
          ))
        }
      </ul>
    </div>
  )
}

export default Nav