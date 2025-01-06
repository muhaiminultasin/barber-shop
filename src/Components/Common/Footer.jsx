import React from 'react'
import { FaFacebook, FaInstagram, FaWhatsapp, FaYelp } from "react-icons/fa";


const Footer = () => {

    const bottomLinks = [
        {
            name:"Terms and Conditions",
            navigate:"",
        },
        {
            name:"Privacy Policy",
            navigate:"",
        },
        {
            name:"Refund Policy",
            navigate:"",
        },
        
    ]
    
  return (
    <section className='bg-[#262626] text-white text-center pt-10'>
      <div className="top w-fit mx-auto">
        <p>Do not sell or share my personal information</p>

        <ul className='flex justify-center gap-5 py-5'>
            <li><a href="" className='text-[30px]'><FaFacebook /></a></li>
            <li><a href="" className='text-[30px]'><FaInstagram/></a></li>
            <li><a href="" className='text-[30px]'><FaYelp/></a></li>
            <li><a href="" className='text-[30px]'><FaWhatsapp/></a></li>
        </ul>
      </div>

      <div className="bottom bg-[#151515] py-5">
        <ul className='flex justify-center gap-3 md:gap-5'>
            {
                bottomLinks.map(({name, navigate}) => {
                    return <li><a href={navigate} target="_blank" rel="noopener noreferrer">{name}</a></li>
                })
            }
        </ul>
      </div>
    </section>
  )
}

export default Footer;
