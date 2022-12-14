import useTranslation from 'next-translate/useTranslation'

const NavDropdown = ({ items }) => {
  const { t } = useTranslation('common')
  
  return (
    <ul className='nav-dropdown tablet:absolute tablet:bg-slate-100/95 tablet:shadow-2xl tablet:top-5 
    tablet:mt-0 tablet:space-y-0 tablet:border mt-4 p-2 rounded-md space-y-4'>
      {
        items.map(item => {
          return (
            <li
              tabIndex={0}
              key={`dropdown-item-${item.key}`}
              className='tablet:text-[0.8rem] tablet:px-4 tablet:py-2 text-xl text-neutral-900 
              whitespace-nowrap p-0 rounded outline-none hover:text-white hover:bg-slate-500 
              focus:text-white focus:bg-slate-500 ease-in duration-150'>
              {t(item.key)}
            </li>
          )
        })
      }
    </ul>
  )
}

export default NavDropdown