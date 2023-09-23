import React from 'react'
import SliderNews from './SliderNews'
import Heading1 from '../Headings/Heading1'

const News = () => {
    return (
        <div className='py-24'>
            <Heading1 details={"Our latest news and events info."} text1={"News and"} text2={"Updates"} />
            <div className="bg-black py-10">
                <div className="flex items-center justify-evenly">
                    <div className="lg:w-[30rem] md:w-[24rem] lg:flex md:flex hidden"><img className="" src="https://cdni.iconscout.com/illustration/premium/thumb/event-management-6544578-5395861.png" alt="not found" /></div>
                    <div className="lg:w-[35rem] md:w-[28rem] w-[95%]"><SliderNews /></div>
                </div>
            </div>

        </div>
    )
}

export default News