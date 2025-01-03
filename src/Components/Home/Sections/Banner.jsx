import { Button } from '@nextui-org/react';
import React from 'react'

const Banner = () => {
  return (
    <section className='px-3 md:px-10 py-20 text-center bg-[#F4F2F0]'>
      <h1 className='text-2xl md:text-4xl font-bold '>Ready for a Fresh Look?</h1>
      <p className='text-lg md:w-[60%] mx-auto mt-5'>Don't wait any longer to get the look you've always wanted. Book your appointment now and step into a world of relaxation, satisfaction, and style</p>

      <Button variant='bordered' color='primary' className='border rounded-none mt-10 bg-black hover:bg-primary text-white font-semibold'>Contact Now</Button>
    </section>
  )
}

export default Banner;
