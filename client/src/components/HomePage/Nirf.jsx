import React from 'react'
import CountUp from 'react-countup';

const Nirf = () => {

  const table = [
    {
      "name": "TLR",
      "score": 244
    },
    {
      "name": "RPC",
      "score": 244
    },
    {
      "name": "GO",
      "score": 244
    },
    {
      "name": "OI",
      "score": 244
    },
    {
      "name": "Perception",
      "score": 244
    }
  ]

  return (
    <div className='py-28'>
      <div data-aos="zoom-in" className='flex items-center justify-center flex-col gap-5'>
        <img src="images/nirf.png" alt="NIRF" className='lg:h-28 md:h-24 h-20' />
        <h1 className='text-3xl font-medium max-w-[18rem] text-center py-5'>
          <span className='text-sky-500 font-bold'>27TH</span> BEST MEDICAL COLLEGE IN INDIA
        </h1>
      </div>
      <div data-aos="fade-up" className='m-auto flex items-center flex-col justify-center pt-16 lg:px-32 md:px-12 px-8'>
        <div className="grid text-gray-300 w-full mb-0 text-center border border-t-gray-500 border-l-gray-500 border-b-0 border-r-0 lg:grid-cols-[minmax(100px,_1fr),minmax(100px,_1fr),minmax(100px,_1fr),minmax(100px,_1fr),minmax(100px,_1fr)] md:lg:grid-cols-[minmax(100px,_1fr),minmax(100px,_1fr),minmax(100px,_1fr),minmax(100px,_1fr),minmax(100px,_1fr)] grid-cols-[minmax(100px,_1fr),minmax(100px,_1fr)]">
          {
            table.map((item, index) => (
              <div key={index} className="py-5 px-4 border border-b-gray-500 border-r-gray-500 border-t-0 border-l-0">
                <div className="text-3xl font-bold"><CountUp end={item.score} enableScrollSpy={true} /></div>
                <div className='text-sky-500'>{item.name}</div>
              </div>
            ))
          }
        </div>

        <button className='bg-sky-600 px-6 py-2 text-white rounded-xl mt-16 hover:bg-black border-sky-600 border hover:text-sky-600'>Click to Know More</button>
      </div>
    </div>
  )
}

export default Nirf