import { Button } from '@nextui-org/react';
import React from 'react'

const AboutSec = () => {

    const AboutData = [
        {
            count:"10+",
            text:"Years of experience"
        }
    ]

  return (
    <section className='flex px-3 md:px-10'>
      {/* First div */}

    <div className='w-[40%]'>
        <h1 className=' text-2xl md:text-4xl font-bold'>We are Made Man Barbershop</h1>
        <Button color="primary" variant='bordered' className='rounded-none border hover:text-white hover:bg-primary mt-10'>About Us</Button>
    </div>

    {/* Second div */}

    <div className='w-[60%]'>
        <p className='text-lg'>In the fast-paced city life, self-care is crucial. At Made Man Barber Shop, we've been providing tailored services and products for over 10 years, to offer you the ultimate relaxation and satisfaction.</p>

        <div className='mt-5'>
            {AboutData.map(({count, text}) => {
                return <div className="card  flex flex-col justify-center gap-5   items-center bg-[#F4F2F0] w-[170px] h-[120px]">
                <h1 className='text-5xl text-center font-semibold'>10+</h1>
                <p className='text-sm '>years of experience</p>
            </div>
            })}
        </div>
    </div>

    </section>
  )
}

export default AboutSec;
