import ServiceItem from './ServiceItem'
import { SERVICES_ITEMS } from '../constants'
import useTranslation from 'next-translate/useTranslation'

const Services = () => {
  const { t } = useTranslation('common')

  return (
    <section className="py-8 tablet:py-16 shadow-md">
      <div className="container max-w-5xl">
        <div className='uppercase text-center mb-8'>
          <p className='font-medium text-slate-700'>{t('servicesSubtitle')}</p>
          <h2 className='text-violet-700 text-3xl font-semibold tracking-widest'>{t('servicesTitle')}</h2>
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