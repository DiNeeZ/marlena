import Image from 'next/image'
import heroBg from '../assets/hero.jpg'

const Hero = () => {
  return (
    <section className='w-full  bg-center bg-cover'>
      
      <div className='relative w-full h-[50vh] bg-gradient-to-r from-dark to-san-mario flex justify-center items-center'>
        <img src={heroBg.src} alt='bg' className='absolute w-full h-full object-cover object-center mix-blend-overlay opacity-50' />
        <div className='container text-center flex flex-col justify-end'>
          <h1 className='relative font-inter text-white text-6xl font-semibold pt-24 '>Marlena Group of Companies LTD</h1>
        </div>
      </div>

      <div className='container'>
        <div className='relative p-12 -mt-8 mb-8 bg-catskill rounded-md shadow-lg text-center'>
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
        <div>
          <h2 className='text-2xl text-astral font-bold mb-4'>Why choose us?</h2>
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