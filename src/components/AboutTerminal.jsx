import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import { ABOUT_TERMINAL } from '../constants'

const AboutTerminal = () => {
  const { t } = useTranslation('common')

  const renderListItem = (item) => {
    return (
      <>
        <svg
          className="w-6 h-6 mr-1.5 text-green-700/50 dark:text-green-400 flex-shrink-0"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 
              10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd" />
        </svg>
        {t(item)}
      </>
    )
  }

  return (
    <div className='space-y-4'>
      <h3 className='text-2xl font-bold text-violet-700'>{t('aboutTerminalTitle')}</h3>
      <ul className="space-y-1 list-inside">
        {ABOUT_TERMINAL.map(item => (
          <li key={item} className='flex items-start leading-1'>
            {renderListItem(item)}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AboutTerminal