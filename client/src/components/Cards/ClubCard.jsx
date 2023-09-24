import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const ClubCard = ({ data }) => {
    return (
        <div data-aos="zoom-in" className='w-[20rem] p-4 border-2 hover:border-gray-800 hover:scale-[102%] transition-all delay-75 ease-in border-gray-900 rounded-2xl mt-5'>
            <div className='flex relative items-center h-44 overflow-hidden w-full rounded-lg border border-gray-900'>
                <img className='w-full z-0' src={data.image} alt={data.name} />
                <p className='py-1 absolute bottom-2 right-1 z-[5] px-3 rounded-full mt-2 text-sky-500 text-xs  bg-gray-900 w-fit bg-opacity-90'>{data.tag}</p>
            </div>
            <h3 className='text-2xl text-sky-500 font-semibold pl-2 mt-2'>{data.name}</h3>
            <p className='text-gray-500 text-sm pt-1 pl-2'>{data.description.length > 200 ? data.description.substring(0, 199) + "..." : data.description}</p>
            {/* <div className='bg-gray-800 rounded-lg p-2 flex justify-between mt-2 flex-col'>
                <div className='flex justify-between text-xs'>
                    <div>
                        <p className='text-gray-400'>Date</p>
                        <p className='text-sm'>{data.date}</p>
                    </div>

                    <div className='text-right'>
                        <p className='text-gray-400'>Venue</p>
                        <p className='text-sm'>{data.venue}</p>
                    </div>
                </div>

                <div className='flex justify-between'>
                    <div>
                        <p className='text-gray-400 text-xs'>Time</p>
                        <p className='text-sm'>{data.time}</p>
                    </div>

                    <div className='text-right'>
                        <p className='text-gray-400 text-xs'>Reg. Link</p>
                        <a style={{ textDecoration: "none" }} target='_blank' href={data.link} className='text-sm visited:text-sky-500 text-blue-500'>Click</a>
                    </div>
                </div>
            </div> */}
            <div className="flex gap-3 mt-4 pl-2">
                <button className="font-medium bg-sky-600 hover:bg-sky-700 text-white px-8 py-1.5 rounded-xl flex items-center justify-center gap-2 transition-all ease-in-out delay-[30ms] hover:text-gray-200 ">
                    <p>Join</p>
                </button>
                <Link style={{
                    textDecoration: "none"
                }} target="_blank" href={data.social}>
                    <button className="font-medium bg-gray-600 hover:bg-gray-700 text-white px-3 py-1.5 rounded-xl flex items-center justify-center gap-2 transition-all ease-in-out delay-[30ms] hover:text-gray-200">
                        <FaInstagram className='text-rose-500' size={22} />
                        <p>@apsa_aiims</p>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default ClubCard;