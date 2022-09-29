import Button from './Button'

const ServiceItem = ({ item }) => {
  return (
    <li
      className='service group shadow-xl tablet:shadow-none flex flex-col justify-between w-full h-auto
      items-center px-4 py-6 laptop:px-8 laptop:py-12 space-y-16 rounded-xl laptop:hover:bg-violet-700/70 
      laptop:hover:text-slate-50 laptop:hover:-translate-y-1 transition-all ease-in-out duration-300'>
      {item.icon}
      <div className='text-center flex-grow-1 h-auto'>
        <h3 className='uppercase text-xl font-medium mb-4'>{item.title}</h3>
        <p>{item.descr} ...</p>
      </div>
      <Button to={item.link}>Read More</Button>
    </li>
  )
}

export default ServiceItem