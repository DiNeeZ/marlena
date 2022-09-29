import { HiMail } from 'react-icons/hi'
import { BsFillTelephoneFill } from 'react-icons/bs'

const ContactInfo = ({ ...otherProps }) => {

  return (
    <ul className={`${otherProps.className} space-y-4 tablet:text-[12px] laptop:text-base flex-col 
      items-end tablet:space-y-1 laptop:space-y-2`}>
      <li className='w-full hover:text-violet-700  ease-in duration-150'>
        <a
          className='flex justify-between leading-3 items-center space-x-4 outline-none
          focus:text-violet-700'
          href='tel:380482345355'>
          <BsFillTelephoneFill />
          <span>+38 (0482) 345 355</span>
        </a>
      </li>
      <li className='w-full hover:text-violet-700  ease-in duration-150'>
        <a
          className='flex justify-between leading-3 items-center space-x-4 outline-none focus:text-violet-700'
          href='mailto:marlena@renome-i.net'>
          <HiMail className='w-4 h-4' />
          <span>marlena@renome-i.net</span>
        </a>
      </li>
    </ul>
  )
}



export default ContactInfo