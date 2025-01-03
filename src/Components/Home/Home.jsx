import React from 'react'
import Hero from './Sections/hero'
import Services from './Sections/Services'
import Services2 from './Sections/services2'
import Customers from './Sections/Customers'
import Gallery from './Sections/Gallery'
import LocationSec from './Sections/LocationSec'

const Home = () => {
  return (
    <section className='flex flex-col space-y-[130px]'>
      <Hero/>
      <Services/>
      <Services2/>
      <Customers/>
      <Gallery/>
      <LocationSec/>
    </section>
  )
}

export default Home
