import React from 'react'
import Hero from './Sections/Hero'
import Services from './Sections/Services'
import Services2 from './Sections/Services2'
import Customers from './Sections/Customers'
import Gallery from './Sections/Gallery'
import LocationSec from './Sections/LocationSec'
import AboutSec from './Sections/AboutSec'
import Banner from './Sections/Banner'

const Home = () => {
  return (
    <section className='flex flex-col space-y-[130px]'>
      <Hero/>
      <Services/>
      <Services2/>
      <Customers/>
      <Gallery/>
      <LocationSec/>
      <AboutSec/>
      <Banner/>
    </section>
  )
}

export default Home
