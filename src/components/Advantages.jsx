import { GiGearStickPattern, GiRibbonMedal } from 'react-icons/gi'
import { IoIosPeople } from 'react-icons/io'
import useTranslation from 'next-translate/useTranslation'

const Advantages = () => {
  const { t } = useTranslation('common')
  return (
    <section className='relative py-8 tablet:py-16 shadow-md'>
      <div className='absolute left-0 bottom-0 w-full h-1/2 bg-green-200/50 -z-10' />
      <div className="container">
        <h2 className='mb-8 tablet:mb-16 uppercase text-center text-violet-700 text-3xl 
        font-semibold tracking-widest'>{t('advantageTitle')}</h2>
        <ul className='flex flex-col mobile:flex-row justify-around items-center gap-8'>
          <li className='flex flex-col w-72 items-center gap-4'>
            <div className='bg-white shadow-md shadow-slate-400 p-8 rounded-full'>
              <GiGearStickPattern className='w-16 h-16 text-green-700' />
            </div>
            <span className='text-4xl text-neutral-800 font-bold'>100</span>
            <p className='uppercase font-medium text-center'>{t('advantage1')}</p>
          </li>
          <li className='flex flex-col w-72 items-center gap-4'>
            <div className='bg-white shadow-md shadow-slate-400 p-8 rounded-full'>
              <GiRibbonMedal className='w-16 h-16 text-green-700' />
            </div>
            <span className='text-4xl text-neutral-800 font-bold'>20</span>
            <p className='uppercase font-medium text-center'>{t('advantage2')}</p>
          </li>
          <li className='flex flex-col w-72 items-center gap-4'>
            <div className='bg-white shadow-md shadow-slate-400 p-8 rounded-full'>
              <IoIosPeople className='w-16 h-16 text-green-700' />
            </div>
            <span className='text-4xl text-neutral-800 font-bold'>120</span>
            <p className='uppercase font-medium text-center'>{t('advantage3')}</p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Advantages