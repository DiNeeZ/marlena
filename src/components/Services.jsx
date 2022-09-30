import ServiceItem from './ServiceItem'
import { SERVICES_ITEMS } from '../constants'

const Services = () => {
  return (
    <section className="py-8 tablet:py-16 shadow-md">
      <div className="container max-w-4xl">
        <div className='uppercase text-center mb-8'>
          <p className='font-medium text-slate-700'>What do we offer</p>
          <h2 className='text-violet-700 text-3xl font-semibold tracking-widest'>Our services</h2>
        </div>
        <ul className='flex justify-between flex-col mobile:flex-row h-auto 
        space-y-4 mobile:space-x-4 mobile:space-y-0 laptop:space-x-8'>
          {SERVICES_ITEMS.map(item => <ServiceItem key={item.id} item={item} />)}
        </ul>
      </div>
    </section>
  )
}

export default Services