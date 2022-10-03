import useTranslation from 'next-translate/useTranslation'

const Help = () => {
  const {t} = useTranslation('common')
  return (
    <section className='py-6 tablet:py-12 bg-slate-600'>
      <div className="container">
        <p className='uppercase text-slate-50 text-center text-lg mobile:text-xl tablet:text-2xl'>
          {t('help')}
        </p>
      </div>
    </section>
  )
}

export default Help