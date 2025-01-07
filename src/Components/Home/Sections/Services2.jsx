import React from 'react'
import Service from '../../Common/Service'
import { Button } from '@nextui-org/react'

const Services2 = () => {

  const CutData = [
    {
        title:"Haircu tHaircu Haircut",
        desc:"Our signature service, a tailored haircut that perfectly aligns with your image and style",
        price:"$45"
    },
    {
        title:"Hai rcutHairc utHaircut",
        desc:"Our signature service, a tailored haircut that perfectly aligns with your image and style",
        price:"$45"
    },
    {
        title:"Haircu tHaircut Haircut",
        desc:"Our signature service, a tailored haircut that perfectly aligns with your image and style",
        price:"$45"
    },
    {
        title:"Shav eShaveS haveSh aveSha veShaveShave",
        desc:"Enjoy a smooth, close shave, leaving your skin feeling refreshed and revitalized",
        price:"$40"
    },
    {
        title:"Beard Trim",
        desc:"Maintain a sharp and well-groomed beard with our precision trims",
        price:"$27"
    },
    {
        title:"Haircut and Beard Trim",
        desc:"Expert haircuts and beard trims tailored to your style",
        price:"$70"
    },
]

  return (
    <section className="px-3 md:px-10">
      
      <div className=" flex flex-col-reverse lg:grid  lg:grid-cols-2 gap-10 items-center  py-10">

        <div className="flex flex-col gap-5 ps-5">
          {
            CutData.map( ({title, desc, price},i) => {
                return <Service key={i} title={title} desc={desc} price={price} className={"w-[70%]"}/>
            })
          }
        </div>

        <div className="shadow-xl h-fit">
            <img src="./service-aside-2.webp" alt="" />
        </div>
      </div>

      <div className='lg:text-start text-center'>
      <Button className='border-primary border hover:bg-primary text-primary hover:text-white transition-all duration-300 font-[500] rounded-none ' variant='bordered'>Contact Us</Button>
      </div>
    </section>
  )
}

export default Services2;
