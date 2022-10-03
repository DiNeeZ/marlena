import Image from 'next/image'
import bulkPic from '../assets/bulk.jpg'
import oilPic from '../assets/oil.jpg'

const Divisions = () => {
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
        <h2 className='flex flex-col justify-center items-center mb-12 uppercase text-center 
        text-sm mobile:text-base tablet:text-xl font-medium text-slate-700'>
          <span>To carry out transport and forwarding activities in the port,</span>
          <span>there are <span className='font-medium text-green-700'>two</span> main
            <span className='font-medium text-green-700'> divisions</span></span>
        </h2>
        <div className='space-y-12 mb-12'>
          <div className='flex flex-col laptop:flex-row gap-12'>
            <div className='basis-auto flex rounded overflow-hidden shadow shadow-slate-400'>
              <Image src={bulkPic} alt='bulk' />
            </div>
            <div className='grow-1 shrink-0 basis-[60%] space-y-4'>
              <p>
                Transshipment and storage complex for loading/discharging and processing of
                all types of mineral fertilizers. It is located directly inside of first cargo
                area of Sea Trade port Reni. The terminal is equipped with high-precision automated
                equipment for mixing, packaging and transshipment of granular mineral fertilizers
                manufactured by EMT company (Netherlands) for dry mixing of mineral fertilizers and
                carry out packaging of bulk mineral fertilizers into bags or big-bags.
              </p>
              <p>
                This equipment
                can also process various types of bulk cargoes, including polyethylene, polypropylene,
                caprolactam, etc, provide loading of cargo by covered conveyor lines connecting warehouses
                with the loading equipment at the berth for river and seagoing transport, as well as acceptance
                of bulk cargo from water transport, packaging and subsequent loading into road trucks or
                railway wagons. Production capacity of the complex can reach up to 50000 MT per month.
              </p>
            </div>
          </div>
          <div className='flex flex-col laptop:flex-row-reverse gap-12'>
            <div className='basis-auto flex rounded overflow-hidden shadow shadow-slate-400'>
              <Image src={oilPic} alt='oil'/>
            </div>
            <div className='grow-1 shrink-0 basis-[60%] space-y-4'>
              <p>
                Transshipment and storage complex for loading/discharging and processing of
                all types of mineral fertilizers. It is located directly inside of first cargo
                area of Sea Trade port Reni. The terminal is equipped with high-precision automated
                equipment for mixing, packaging and transshipment of granular mineral fertilizers
                manufactured by EMT company (Netherlands) for dry mixing of mineral fertilizers and
                carry out packaging of bulk mineral fertilizers into bags or big-bags.
              </p>
              <p>
                This equipment
                can also process various types of bulk cargoes, including polyethylene, polypropylene,
                caprolactam, etc, provide loading of cargo by covered conveyor lines connecting warehouses
                with the loading equipment at the berth for river and seagoing transport, as well as acceptance
                of bulk cargo from water transport, packaging and subsequent loading into road trucks or
                railway wagons. Production capacity of the complex can reach up to 50000 MT per month.
              </p>
            </div>
          </div>
        </div>
        <ul className='mobile:list-disc  space-y-4'>
          <li className='text-violet-700'>
            <span className='text-neutral-900'>
              Both terminals can accept sea and river vessels with maximum capacity of about 10000 MT.
              Maximum draft is restricted to depth of Sulina channel – 7.1m. Loading/discharging speed,
              depending on the cargo is 500 to 3000 MT per day.
            </span>
          </li>
          <li className='text-violet-700'>
            <span className='text-neutral-900'>
              It is also worth noticing that along with the port our company has possibility to organize
              transshipment of following cargoes: coal, ore, packaged and general cargoes, ro-ro (rolling)
              cargoes, grain and food cargoes, timber and wood products, metals (ferrous and non-ferrous),
              ferroalloys, ethyl alcohol and wine and other liquid cargoes (fuels, petrochemicals and mineral oils).
            </span>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Divisions