import { Button } from '@nextui-org/react';
import React from 'react'

const AboutSec = () => {

    const AboutData = [
        {
            count:"10+",
            text:"Years of experience"
        },
        {
            count:"10+",
            text:"Years of experience"
        },
        {
            count:"10+",
            text:"Years of experience"
        },
        {
            count:"10+",
            text:"Years of experience"
        },
    ]

  return (
    <section className='px-3 md:px-10'>
      {/* First div */}

    <div className='flex flex-col md:flex-row'>
        <h1 className=' text-2xl md:text-4xl font-bold'>We are Made Man Barbershop</h1>
        <p className='text-lg md:w-[70%] mt-5 md:mt-0'>In the fast-paced city life, self-care is crucial. At Made Man Barber Shop, we've been providing tailored services and products for over 10 years, to offer you the ultimate relaxation and satisfaction.</p>
    </div>

    {/* Second div */}

    <div className='flex flex-col md:flex-row justify-between'>
        <Button color="primary" variant='bordered' className='rounded-none border hover:text-white hover:bg-primary mt-10 w-fit mx-auto md:mx-0'>About Us</Button>

        <div className='md:w-[60%] mt-5 grid grid-cols-2 md:grid-cols-4 gap-5 '>
            {AboutData.map(({count, text},i) => {
                return <div key={i} className="card  flex flex-col justify-center gap-5 mx-auto   items-center bg-[#F4F2F0] w-[150px] h-[120px]">
                <h1 className='text-4xl text-center font-semibold'>{count}</h1>
                <p className='text-sm '>{text}</p>
            </div>
            })}
        </div>
    </div>

    <div className='flex flex-wrap md:flex-nowrap gap-10 mt-10 md:mt-20'>
        <img src="/AboutSec-1.webp" alt="" className='min-w-[300px] object-contain mx-auto'/>
        <img src="/AboutSec-2.webp" alt="" className='min-w-[300px] object-contain mx-auto'/>
    </div>

    </section>
  )
}

export default AboutSec;
