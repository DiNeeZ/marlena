import ServiceItem from './ServiceItem'
import { SERVICES_ITEMS } from '../constants'

const Services = () => {
  return (
    <setion className="mb-16">
      <div className="container">
        <div className='uppercase text-center mb-12'>
          <p className='font-medium text-slate-700'>What do we offer</p>
          <h2 className='text-violet-700 text-3xl font-semibold tracking-widest'>Our services</h2>
        </div>
        <ul className='flex justify-between flex-wrap mobile:flex-nowrap h-auto 
        space-y-4 mobile:space-x-4 mobile:space-y-0 laptop:space-x-8 desktop:space-x-24'>
          {SERVICES_ITEMS.map(item => <ServiceItem key={item.id} item={item} />)}
        </ul>
      </div>
    </setion>
  )
}

export default Services