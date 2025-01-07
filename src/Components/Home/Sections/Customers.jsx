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
    <section className='w-full bg-[#F4F2F0] py-10 md:py-15 lg:py-20 px-[20px]'>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5  gap-5'>
            {
                Logos.map(({img},i)=> {
                    
                       return <img key={i} src={img} alt="" className=''/>
                    
                })
            }
        </div>
    </section>
  )
}

export default Customers;
