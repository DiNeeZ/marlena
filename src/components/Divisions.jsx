import Image from 'next/image'
import bulkPic from '../assets/bulk.jpg'
import oilPic from '../assets/oil.jpg'
import useTranslation from 'next-translate/useTranslation'

const Divisions = () => {
  const str = 'To carry out transport and forwarding activities in the port, there are two main divisions'
  const { lang, t } = useTranslation('common')

  const renderTitle = (string) => {
    const matches = lang === 'en' ? ['two', 'divisions'] : ['два', 'подразделения']
    const strArr = string.split(' ')
    const firstIdx = strArr.indexOf(matches[0])
    const secondIdx = strArr.indexOf(matches[1])

    return (
      <h2 className='max-w-3xl mx-auto mb-12 uppercase text-center 
      text-sm mobile:text-base tablet:text-xl font-medium text-slate-700'>
        {strArr.slice(0, firstIdx).join(' ') + ' '}
        <span className='text-green-700'>{strArr[firstIdx] + ' '}</span>
        {strArr.slice(firstIdx + 1, secondIdx).join(' ') + ' '}
        <span className='text-green-700'>{strArr[secondIdx]}</span>
      </h2>
    )
  }

  console.log()

  return (
    <section className='relative py-8 tablet:py-16 bg-slate-200/50 shadow-md overflow-hidden'>
      <div className='absolute top-0 right-0 w-[150%] laptop:w-[100%] h-full overflow-hidden'>
        <div className='w-full h-full skew-x-[60deg] bg-violet-300/50 
        translate-x-[350%] mobile:translate-x-[200%] laptop:translate-x-[100%]' />
      </div>
      <div className='absolute top-0 left-0 w-[200%] laptop:w-[100%] h-full overflow-hidden'>
        <div
          className='w-full h-full skew-x-[60deg] bg-violet-300/50
        -translate-x-[280%] mobile:-translate-x-[200%] laptop:-translate-x-[100%]'
        />
      </div>
      <div className="container relative z-10">
        {renderTitle(t('divisionsTitle'))}
        <div className='space-y-12 mb-12'>
          <div className='flex flex-col laptop:flex-row gap-12'>
            <div className='basis-auto flex rounded overflow-hidden shadow shadow-slate-400'>
              <Image src={bulkPic} alt='bulk' />
            </div>
            <div className='grow-1 shrink-0 basis-[60%] space-y-4'>
              <p>{t('divisionsP1')}</p>
              <p>{t('divisionsP2')}</p>
            </div>
          </div>
          <div className='flex flex-col laptop:flex-row-reverse gap-12'>
            <div className='basis-auto flex rounded overflow-hidden shadow shadow-slate-400'>
              <Image src={oilPic} alt='oil' />
            </div>
            <div className='grow-1 shrink-0 basis-[60%] space-y-4'>
              <p>{t('divisionsP3')}</p>
            </div>
          </div>
        </div>
        <ul className='mobile:list-disc  space-y-4'>
          <li className='text-violet-700'>
            <span className='text-neutral-900'>{t('divisionsAdd1')}</span>
          </li>
          <li className='text-violet-700'>
            <span className='text-neutral-900'>{t('divisionsAdd2')}</span>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Divisions