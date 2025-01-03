import { div } from 'framer-motion/client'
import React from 'react'

const Customers = () => {

    const Logos = [
        {
            img:"./logo_Bazaar.webp"
        },
        {
            img:"./logo_Bazaar.webp"
        },
        {
            img:"./logo_Bazaar.webp"
        },
        {
            img:"./logo_Bazaar.webp"
        },
        {
            img:"./logo_Bazaar.webp"
        },
    ]


  return (
    <section className='w-full bg-[#F4F2F0] py-20 px-[20px]'>
        <div className='flex justify-between flex-wrap gap-5'>
            {
                Logos.map(({img},i)=> {
                    return <div key={i} className='w-fit'>
                        <img src={img} alt="" className='w-[200px]'/>
                    </div>
                })
            }
        </div>
    </section>
  )
}

export default Customers;
