import {Button} from "@nextui-org/react";
import React from 'react'
import OpeningTimes from "../../Common/OpeningTimes";

const LocationSec = () => {
  return (
    <section className="px-3 md:px-10">
        {/* First div */}
      <div className='grid row md:grid-cols-12 items-center'>
        <div className='w-full md:w-[70%] col-span-9'>
            <h1 className=" text-2xl md:text-4xl font-bold">6 LOCATIONS IN NEW YORK CITY</h1>
            <p className="mt-5 text-lg">Did you know we've got you covered with 6 convenient Made Man Barbershop locations in Manhattan? Our range of services is as wide as your style choices!</p>
        </div>

        <div className="w-full col-span-12 md:col-span-3 mt-5 md:mt-0 flex justify-center">
            <Button color="primary" variant="bordered" className=" px-10  py-5 font-[500] rounded-none hover:bg-primary hover:text-white border transition duration-300">
                Locations & Contact
            </Button>
        </div>
      </div>


      {/* Second div */}

      <div className="flex items-center mt-10 sm:mt-20 w-full">
        <div className="w-[70%] hidden md:block">
            <img src="./map.jpeg" alt="" className=""/>
        </div>

        <div className=" w-full md:w-[30%] mx-auto p-5 bg-[#F4F2F0] ">
            <img src="./Location-1.webp" alt="" />

            <div className="mt-5 md:mt-10 ">
              <h1 className="text-center text-primary text-2xl font-bold border-b border-primary">10 East 23rd Street</h1>
              <p className="text-center my-5">New York, NY 10010</p>

              <OpeningTimes/>
            </div>
        </div>
      </div>
    </section>
  )
}

export default LocationSec;
