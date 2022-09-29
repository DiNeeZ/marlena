import heroBg from '../assets/hero.jpg'

const Hero = () => {
  return (
    <section className='w-full bg-center bg-cover mb-16'>

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
            The main activity of the company is carried out on the territory of the Special Economic Zone of the Reni
            Commercial Sea Port, in the Odessa region, Ukraine, where a subsidiary of the private enterprise ReniLes operates,
            which provides freight forwarding services for the transshipment of mineral fertilizers, liquefied gases and liquid
            chemical products in the commercial sea port Reni.
          </p>
          <p>
            The company has a subsidiary company “ReniLis”, which provides freight forwarding services for
            the transshipment of liquefied gases, liquid chemical products and mineral fertilizers. The favorable geographical location
            of the port at the mouth of the Danube River allows acceptance and cargo handling for both river vessels and barges, as well
            as sea vessels.
          </p>
        </div>
        <div className='text-center'>
          <h2 className='text-2xl text-violet-700 font-bold mb-4'>Why choose us?</h2>
          <p>
            In the global mineral fertilizer market, our company went from a trader to an experienced and reliable logistics operator.
          </p>
        </div>
      </div>
      {/* Hero */}
    </section>
  )
}

export default Hero