import React from 'react'
import { cn } from '../../lib/utiliy/cn';

const Service = ({title, desc, price,className}) => {
  return (
    <>
      <h1 className="text-xl font-bold">{title}</h1>
          <div className="flex justify-between pe-5">
            <p className={cn("w-[70%] text-lg ",className)}>{desc}</p>

            <h1 className="text-2xl font-bold text-[#BB925F]">{price}</h1>
          </div>
    </>
  )
}

export default Service;
