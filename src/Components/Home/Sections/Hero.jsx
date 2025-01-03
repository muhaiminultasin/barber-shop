import { Button } from '@nextui-org/react'
import React from 'react'

const Hero = () => {
  return (
    <section className='text-white text-center bg-[url("./barber-hero.jpg")] w-full h-[50vh] md:h-[90vh] bg-cover bg-no-repeat bg-center'>
        <h1 className=' text-2xl md:text-3xl lg:text-5xl lg:w-[60%] mx-auto pt-[100px] lg:pt-[200px] font-bold lg:leading-[65px]'>Multiple Manhattan Locations. One Perfect Cut</h1>

        <p className=' mt-5 text-[20px] font-[500]'>Experience affordable and unmatched craftsmanship at Manhattan's finest barbershop</p>
        
        <Button className='w-fit mx-auto mt-10 rounded-none bg-white hover:bg-[#262626] font-[500] text-black hover:text-white transition-all duration-300'>Contact Now</Button>
    </section>
  )
}

export default Hero
