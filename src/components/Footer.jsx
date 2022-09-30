import { FiMail, FiPhone } from 'react-icons/fi'
import { FaFacebookF } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-slate-50'>
      <div className="container py-8">
        <address className='flex flex-wrap items-center justify-between not-italic space-y-4'>
          <div className='flex flex-col space-y-2'>
            <h3 className='uppercase font-medium'>Contact us</h3>
            <div className='flex flex-col mobile:flex-row space-y-4 mobile:space-y-0 mobile:space-x-4'>
              <span>65005, Ukraine, Odessa, <br />
                st. Stepovaya, 18/20</span>
              <div>
                <span className='flex flex-row-reverse mobile:flex-row items-center justify-between gap-4 hover:text-violet-700 
            focus-within:text-violet-700 ease-out duration-150'>
                  <FiMail />
                  <a className='outline-none' href="mailto:marlena@renome-i.net">marlena@renome-i.net</a>
                </span>
                <span className='flex flex-row-reverse mobile:flex-row items-center justify-between gap-4 hover:text-violet-700 
            focus-within:text-violet-700 ease-out duration-150'>
                  <FiPhone />
                  <a className='outline-none' href="tel:+380482345355">+38 (0482) 345 355</a>
                </span>
              </div>
            </div>
          </div>
          <a href='https://www.facebook.com/'
            className='text-2xl p-3 text-neutral-700 hover:text-violet-700 shadow-lg shadow-black/20 
            hover:shadow-black/30 ease-in-out duration-150 rounded-full focus-visible:outline-violet-700'>
            <FaFacebookF />
          </a>
        </address>
      </div>
      <div className=' border-t bg-slate-600'>
        <div className='container text-sm font-light py-2 text-center text-slate-50 '>
          Copyright &copy; Marlena Group of Companies LTD 2020.
        </div>
      </div>
    </footer>
  )
}

export default Footer