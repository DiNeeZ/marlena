import Hero from '../components/Hero'
import Services from '../components/Services'
import Divisions from '../components/Divisions'
import Advantages from '../components/Advantages'
import Benefits from '../components/Benefits'
import Help from '../components/Help'


export default function Home() {
  return (
    <div className='flex flex-col justify-between'>
      <Hero />
      <Services />
      <Divisions />
      <Advantages />
      <Benefits />
      <Help />
    </div>
  )
}
