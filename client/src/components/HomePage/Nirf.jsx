import React from 'react'

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
        <img src="images/nirf.png" alt="NIRF" className='h-28' />
        <h1 className='text-3xl font-medium max-w-[18rem] text-center py-5'>
          <span className='text-sky-500 font-bold'>27TH</span> BEST MEDICAL COLLEGE IN INDIA
        </h1>
      </div>
      <div data-aos="fade-up" className='m-auto flex items-center flex-col justify-center pt-16'>
        <div className='flex'>
          {
            table.map((item, index) => (
              <div  key={index} className={`flex flex-col items-center justify-between py-2.5  w-36 text-center ${table.length - 1 > index && "border-r-2"}`}>
                <p className='text-2xl font-bold text-sky-500 pb-4'>{item.name}</p>
                <p className='text-2xl font-medium border-t-2  w-full pt-4'>{item.score}</p>
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