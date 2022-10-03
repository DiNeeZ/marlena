import { FiMail, FiPhone } from 'react-icons/fi'

const ContactInfo = ({ ...otherProps }) => {

  return (
    <ul className={`${otherProps.className}  laptop:text-base 
      items-end space-y-1 tablet:space-x-2 laptop:space-x-0`}>
      <li className='w-full hover:text-violet-700  ease-in duration-150'>
        <a
          className='flex justify-between leading-3 items-center space-x-4 outline-none
          focus:text-violet-700'
          href='tel:380482345355'>
          <FiPhone />
          <span className='block tablet:hidden laptop:block'>+38 (0482) 345 355</span>
        </a>
      </li>
      <li className='w-full hover:text-violet-700  ease-in duration-150'>
        <a
          className='flex justify-between leading-3 items-center space-x-4 outline-none focus:text-violet-700'
          href='mailto:marlena@renome-i.net'>
          <FiMail />
          <span className='block tablet:hidden laptop:block'>marlena@renome-i.net</span>
        </a>
      </li>
    </ul>
  )
}



export default ContactInfo