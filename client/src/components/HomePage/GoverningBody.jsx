import React from 'react'
import Heading1 from '../Headings/Heading1'
import TeamCard from '../Cards/TeamCard'
import { Link } from 'react-router-dom'

const GoverningBody = () => {

    const members = [
        {
            name: "Dr. Umesh Bhadani",
            role: "President",
            about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quibusdam.",
            email: "abc@gmail.com",
            image: "https://www.phf.org.uk/wp-content/uploads/2017/11/headshot-placeholder-1.png"
        },
        {
            name: "Dr. Umesh Bhadani",
            role: "President",
            about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quibusdam.",
            email: "123@gmail.com",
            image: "https://clearmark.io/wp-content/uploads/2018/02/Headshot-Placeholder-Square.png"
        },
        {
            name: "Dr. Umesh Bhadani",
            role: "President",
            about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quibusdam.",
            email: "abc@gmail.com",
            image: "https://www.phf.org.uk/wp-content/uploads/2017/11/headshot-placeholder-1.png"
        },
        {
            name: "Dr. Umesh Bhadani",
            role: "President",
            about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quibusdam.",
            email: "123@gmail.com",
            image: "https://clearmark.io/wp-content/uploads/2018/02/Headshot-Placeholder-Square.png"
        }
    ]


    return (
        <div className='py-24'>
            <Heading1 details={"Meet our hardworking team leaders and members."} text1={"Governing"} text2={"Body"} />
            <div className='my-16'>
                <div className='flex flex-wrap justify-evenly gap-y-10'>
                    {
                        members.map((member, index) => (
                            <TeamCard member={member} key={index} />
                        ))
                    }
                </div>
            </div>

            <div data-aos="fade-up" className="flex items-center justify-center">
                <Link to="/team" className='m-auto'>
                    <button className='bg-sky-600 px-6 py-2 text-white rounded-xl  hover:bg-black border-sky-600 border hover:text-sky-600'>Meet the team</button>
                </Link>
            </div>
        </div>
    )
}

export default GoverningBody