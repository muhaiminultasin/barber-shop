import React from 'react'

const OpeningTimes = () => {

    const OpeningsData = [
        {
            day:"Monday",
            time:"8am to 8pm"
        },
        {
            day:"Tuesday",
            time:"8am to 8pm"
        },
        {
            day:"Wesnesday",
            time:"8am to 8pm"
        },
        {
            day:"Thursday",
            time:"8am to 8pm"
        },
        {
            day:"Friday",
            time:"8am to 8pm"
        },
        {
            day:"Saturday",
            time:"8am to 8pm"
        },
        {
            day:"Sunday",
            time:"10am to 7pm"
        },
    ] 

  return (
    <section>
      <h1> <strong>Tel 01794382332</strong></h1>

        <div>
            <ul className='flex flex-col gap-3 mt-5'>
                {OpeningsData.map(({day,time}) => {
                    return <li className='flex justify-between '><strong>{day}</strong> {time}</li>
                })}
            </ul>
        </div>

    </section>
  )
}

export default OpeningTimes;
