import heroBg from '../assets/hero.jpg'
import useTranslation from 'next-translate/useTranslation'

const Hero = () => {
  const { t } = useTranslation('common')
  return (
    <section className='w-full bg-slate-200/50 bg-center bg-cover shadow-md pb-8 tablet:pb-16'>
      <div style={{ backgroundImage: `url(${heroBg.src})` }}
        className='relative w-full h-[70vh] flex justify-center items-center bg-cover bg-no-repeat bg-center'>
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-700 to-violet-700 opacity-50' />
        <div className='container text-center flex flex-col justify-end'>
          <h1 className='relative text-4xl font-inter text-white mobile:text-5xl tablet:text-6xl font-semibold drop-shadow-lg 
          shadow-black'>
            Marlena Group of Companies LTD
          </h1>
        </div>
      </div>
      <div className='container'>
        <div className='relative p-4 tablet:p-6 laptop:p-12 -mt-28 mb-8 bg-slate-50 rounded-md shadow-lg text-center'>
          <p className='mb-4'>
            {t('heroP1')}
          </p>
          <p>
          {t('heroP2')}
          </p>
        </div>
        <div className='text-center'>
          <h2 className='text-2xl text-violet-700 font-bold mb-4'>{t('heroH3')}?</h2>
          <p>
            {t('heroWhy')}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero