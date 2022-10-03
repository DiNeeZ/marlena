import React from 'react'
import useTranslation from 'next-translate/useTranslation'

const AboutTerminal = () => {
  const { t } = useTranslation('common')

  return (
    <div>
      <h3>{t('aboutTerminalTitle')}</h3>
    </div>
  )
}

export default AboutTerminal