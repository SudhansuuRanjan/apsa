import React from 'react'
import Heading1 from '../Headings/Heading1'
import { Link } from 'react-router-dom'

const QuickLinks = () => {

    const links = [
        {
            name: "Student Cell",
            icon: "./images/blockchain.png"
        },
        {
            name: "Academics",
            icon: "./images/electrical.png"
        },
        {
            name: "Publications",
            icon: "./images/web.png"
        },
        {
            name: "Gallery",
            icon: "./images/design.png"
        },
        {
            name: "Blogs",
            icon: "./images/content.png"
        },
        {
            name: "Events",
            icon: "./images/marketing.png"
        },
        {
            name: "Commities",
            icon: "./images/social.png"
        },
        {
            name: "KAIZEN",
            icon: "./images/event.png"
        }
    ]



    return (
        <div className='pt-20'>
            <Heading1 details={" "} text1={"Quick"} text2={"Links"} />
            <div className='flex items-center lg:flex-row md:flex-row flex-col justify-center lg:gap-x-16 md:gap-x-8 w-full mt-10'>
                <div className='flex flex-col items-center justify-center gap-5 mt-5'>
                    {links.slice(0, 4).map((QuickLinks, idx) => <div data-aos="zoom-in" key={idx} className='flex lg:w-96 md:w-80 w-72 items-center bg-[#0a0a0a] border-gray-800 hover:border-gray-700 border p-2.5 rounded-2xl gap-4'>
                        <div className='bg-gray-900 p-1.5 rounded'>
                            <img src={QuickLinks.icon} alt="blockchain" className='h-8 w-8' />
                        </div>
                        <div>
                            <p className='lg:text-xl md:text-xl text-lg text-gray-200 font-semibold pr-10'>{QuickLinks.name}</p>
                        </div>
                    </div>)}
                </div>

                <div className='flex flex-col items-center justify-center gap-5 mt-5'>
                    {links.slice(4, 8).map((QuickLinks, idx) => <div data-aos="zoom-in" key={idx} className='flex lg:w-96 md:w-80 w-72 items-center bg-[#0a0a0a] border-gray-800 hover:border-gray-700 border p-2.5 rounded-2xl gap-4'>
                        <div className='bg-gray-900 p-1.5 rounded'>
                            <img src={QuickLinks.icon} alt="blockchain" className='h-8 w-8' />
                        </div>
                        <div>
                            <p className='lg:text-xl md:text-xl text-lg text-gray-200 font-semibold pr-10'>{QuickLinks.name}</p>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default QuickLinks