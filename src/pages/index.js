import Hero from '../components/Hero'
import Services from '../components/Services'
import Divisions from '../components/Divisions'


export default function Home() {
  return (
    <div className='flex flex-col justify-between'>
      <Hero />
      <Services />
      <Divisions />
    </div>
  )
}
