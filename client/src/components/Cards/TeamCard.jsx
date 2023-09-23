import React from 'react'

const TeamCard = ({ member }) => {
    return (
        <div data-aos="zoom-in" className='border text-center w-[15rem] border-gray-800 bg-[#0f0e0e] hover:bg-[#131212] p-5 rounded-3xl  hover:border-gray-700 hover:scale-[101%] border-b-4 border-b-sky-700 hover:border-b-sky-500'>
            <div className='flex items-center justify-center my-3'>
                <div>
                    <img className='rounded-full h-[6.7rem] w-[6.7rem]  border-2 border-[#121212] border-y-sky-500 border-r-sky-500 p-1' src={member.image} alt={member.image} />
                </div>
            </div>

            <div className='text-lg'>
                {member.name}
            </div>
            <div className='text-sky-500 font-medium text-base'>
                {member.role}
            </div>
            <div className='py-3'>
                <a href={`mailto:${member.email}`} >
                    <span className='text-sky-500 px-4 py-1.5 rounded-xl text-sm bg-opacity-60 bg-sky-900'>{member.email}</span>
                </a>
            </div>
        </div>
    )
}

export default TeamCard