const NavDropdown = ({ items }) => {
  return (
    <ul className='absolute bg-slate-100 shadow-md top-5 p-2 rounded-md'>
      {
        items.map(item => {
          return (
            <li key={`dropdown-item-${item.text}`} tabIndex={0} className='text-[0.8rem] text-neutral-900 
            whitespace-nowrap outline-none focus:text-violet-700 hover:text-violet-700 ease-in duration-150'>
              {item.text}
            </li>
          )
        })
      }
    </ul>
  )
}

export default NavDropdown