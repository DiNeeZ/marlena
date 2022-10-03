import Button from './Button'
import useTranslation from 'next-translate/useTranslation'


const ServiceItem = ({ item }) => {
  const { t } = useTranslation('common')

  return (
    <li
      className='service group shadow-xl tablet:shadow-none flex flex-col justify-between mobile:w-full h-auto
      items-center px-4 py-6 laptop:px-8  space-y-16 rounded-xl laptop:hover:bg-violet-700/70 
      laptop:hover:text-slate-50 laptop:hover:-translate-y-1 transition-all ease-in-out duration-300'>
      {item.icon}
      <div className='text-center flex-grow-1 h-auto'>
        <h3 className='uppercase text-xl font-medium mb-4'>{t(item.key)}</h3>
        <p>{t(item.descr)} ...</p>
      </div>
      <Button to={item.link}>{t('more')}</Button>
    </li>
  )
}

export default ServiceItem