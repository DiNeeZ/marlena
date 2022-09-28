
const NavDropdown = ({ items }) => {
  return (
    <ul className='nav-dropdown tablet:absolute tablet:bg-slate-100/95 tablet:shadow-xl tablet:top-5 
    tablet:mt-0 tablet:space-y-0 bg-transparent mt-4 p-2 rounded-md space-y-4'>
      {
        items.map(item => {
          return (
            <li
              tabIndex={0}
              key={`dropdown-item-${item.text}`}
              className='tablet:text-[0.8rem] tablet:px-2 tablet:py-2 text-xl text-neutral-900 
              whitespace-nowrap p-0 rounded outline-none hover:text-white hover:bg-slate-500 
              focus:text-white focus:bg-slate-500 ease-in duration-150'>
              {item.text}
            </li>
          )
        })
      }
    </ul>
  )
}

export default NavDropdown