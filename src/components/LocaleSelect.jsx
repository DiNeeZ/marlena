import Select from 'react-select'
import { useRouter } from 'next/router'
import { TbLanguage } from 'react-icons/tb'

const LocaleSelect = ({ ...otherProps }) => {
  const router = useRouter()

  const options = router.locales.map(locale => ({
    value: locale,
    label: locale.toLocaleUpperCase()
  }))
  const defaultValue = options.find(option => option.value === router.locale)

  const handleChange = (locale) => {
    router.push(router.asPath, router.asPath, { locale })
  }

  const colorStyles = {
    valueContainer: base => ({
      ...base,
      padding: 0
    }),
    control: base => ({
      ...base,
      padding: 0,
      fontSize: '0.875rem',
      fontWeight: '700',
      backgroundColor: 'transparent',
      color: 'inherit',
      border: 0,
      boxShadow: 'none',
      cursor: 'pointer',
      caretColor: 'transparent',

      '&:hover': {
        ...base[':hover'],
        color: 'inherit'
      }
    }
    ),
    dropdownIndicator: base => ({
      ...base,
      display: 'none',
    }),
    option: (base, { isFocused }) => ({
      ...base,
      fontSize: '0.875rem',
      fontWeight: '500',
      textAlign: 'center',
      backgroundColor: isFocused ? '#64748b' : 'transparent',
      padding: 4,
      cursor: 'pointer',
      color: isFocused ? '#f8fafc' : '#171717',
      '&:hover': {
        ...base[':hover'],
      }
    }),
    menu: (base) => ({
      ...base,
      width: '3rem'
    }),
    singleValue: base => ({
      ...base,
      color: 'inherit',
    }),
    indicatorSeparator: base => ({
      ...base,
      display: 'none'
    })
  }

  return (
    <div className={`${otherProps.className} flex items-center cursor-pointer text-neutral-600 
    hover:text-violet-700 focus-within:text-violet-700`}>
      <TbLanguage className='w-4 h-4 text-neutral-600 text-inherit' />
      <Select
        options={options}
        styles={colorStyles}
        instanceId="lang-value-select"
        onChange={(value) => handleChange(value.value)}
        defaultValue={defaultValue} />
    </div>
  )
}

export default LocaleSelect