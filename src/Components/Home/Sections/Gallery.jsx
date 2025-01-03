import React from 'react'

const Gallery = () => {
  return (
    <section className='px-3 md:px-10'>
      <div id="text" className='grid grid-cols-1 md:grid-cols-2'>
        <div>
            <h1 className='text-4xl font-bold'>Browse Our Style Gallery</h1>
        </div>
        <div>
            <p className='text-lg'>Take a look at the range of styles we've crafted at Made Man Barber Shop. Each image showcases our expertise in cuts and beard trims. Click on any style that catches your eye to learn its name and book an appointment</p>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-3 mt-5 md:mt-10'>
            <img src="./Style_gallery-1.webp" alt="" className='w-[90%] mx-auto'/>
            <img src="./Style_gallery-2.webp" alt="" className='w-[90%] mx-auto'/>
      </div>
    </section>
  )
}

export default Gallery;
