import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram } from 'react-icons/fa'
import ClubCard from '../../components/Cards/ClubCard'
import { testimonials, TestimonialCard } from '../Team/Testimonials'

const Committee = () => {
    const clubs = [
        {
            name: "Club 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend aliquet enim sed congue. Morbi quis leo accumsan justo luctus pharetra. Ut volutpat congue risus, vitae elementum dui auctor vel. Morbi neque nibh, rhoncus vitae",
            social: "https://instagram.com/apsa_aiims",
            image: "https://fakeimg.pl/600x400",
            tag: "Cultural"
        },
        {
            name: "Club 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend aliquet enim sed congue. Morbi quis leo accumsan justo luctus pharetra. Ut volutpat congue risus, vitae elementum dui auctor vel. Morbi neque nibh, rhoncus vitae",
            social: "https://instagram.com/apsa_aiims",
            image: "https://fakeimg.pl/600x400",
            tag: "Cultural"
        },
        {
            name: "Club 3",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend aliquet enim sed congue. Morbi quis leo accumsan justo luctus pharetra. Ut volutpat congue risus, vitae elementum dui auctor vel. Morbi neque nibh, rhoncus vitae",
            social: "https://instagram.com/apsa_aiims",
            image: "https://fakeimg.pl/600x400",
            tag: "Cultural"
        }
    ]
    return (
        <div className='pt-16 min-h-screen'>
            <div data-aos="fade-up" className="py-10 pt-20 text-center flex flex-col justify-center items-center gap-5">
                <h1 className="text-6xl font-bold text-sky-500">
                    <span className='text-white'>About</span> Committee brand</h1>
                <p className="max-w-3xl lg:text-lg md:text-lg  px-6">Lorem ipsum dolor sit amet, consectetur lor sit amet, consectetur adipiscing elit. Phasellus eleifend aliquet enim sed congue. Morbi quis leo accumsan justo luctus pharetra. Ut volutpat congue risus, vitae elementum dui auctor vel. Morbi neque nibh, rhoncus vitae </p>
                <Link style={{
                    textDecoration: "none",
                    margin: "auto"
                }} target="_blank" href={"dc"}>
                    <button className="font-medium bg-gray-600 hover:bg-gray-700 text-white px-7 py-2.5 my-4 rounded-xl flex items-center justify-center gap-2 transition-all ease-in-out delay-[30ms] hover:text-gray-200">
                        <FaInstagram className='text-rose-500' size={22} />
                        <p>@apsa_aiims</p>
                    </button>
                </Link>
            </div>

            <div className='flex items-center justify-center'>
                <div data-aos="zoom-in" className='border lg:w-[38rem] md:w-[32rem] w-[95%] text-white border-gray-800 bg-[#0f0e0e] hover:bg-[#131212]  rounded-3xl transition-all delay-[30ms] ease-in-out hover:border-gray-700 hover:scale-[101%] border-b-4 border-b-sky-700 hover:border-b-sky-500 flex justify-evenly lg:gap-16 md:gap-12 gap-8 lg:p-10 md:p-8 p-5 py-10'>
                    <div className='flex flex-col gap-8'>
                        <div>
                            <h3 className='text-xl font-bold text-sky-500'>Secretary 1</h3>
                            <p>Sudhanshu Ranjan</p>
                        </div>

                        <div>
                            <h3 className='text-xl font-bold text-sky-500'>Secretary 2</h3>
                            <p>Deepak Ranjan</p>
                        </div>

                        <div className='flex flex-col'>
                            <h3 className='text-xl font-bold text-sky-500'>Contact us</h3>
                            <a href="tel:+918207372734">+91 8207372734</a>
                            <a href="tel:+918207372734">+91 9247372734</a>
                        </div>
                    </div>
                    <div className='flex flex-col gap-8'>
                        <div>
                            <h3 className='text-xl font-bold text-sky-500'>Club 1 Lead</h3>
                            <p>Sudhanshu Ranjan</p>
                        </div>

                        <div>
                            <h3 className='text-xl font-bold text-sky-500'>Club 2 Lead</h3>
                            <p>Deepak Ranjan</p>
                        </div>

                        <div>
                            <h3 className='text-xl font-bold text-sky-500'>Club 1 Lead</h3>
                            <p>Sudhanshu Ranjan</p>
                        </div>

                        <div>
                            <h3 className='text-xl font-bold text-sky-500'>Club 2 Lead</h3>
                            <p>Deepak Ranjan</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-12 py-32 items-center justify-center w-full'>
                <h1 className="text-4xl font-bold text-sky-500">
                    <span className='text-white'>Featured</span> Clubs</h1>
                <div className='grid  lg:grid-cols-[minmax(100px,_1fr),minmax(100px,_1fr),minmax(100px,_1fr)] md:grid-cols-[minmax(100px,_1fr),minmax(100px,_1fr)] grid-cols-[minmax(100px,_1fr)] gap-6'>
                    {
                        clubs.map((club) => (
                            <ClubCard data-aos="zoom-in" key={club.name} data={club} />
                        ))
                    }
                </div>
            </div>

            <div className="py-16">
                <h2 data-aos="fade-in-up" className="text-3xl text-center font-semibold">Message from governing body</h2>
                <div className='my-16 lg:px-20 md:px-12 px-8 flex items-center justify-center'>
                    <div className='grid text-gray-300 text-center lg:grid-cols-[minmax(100px,_1fr),minmax(100px,_1fr),minmax(100px,_1fr)] md:grid-cols-[minmax(100px,_1fr),minmax(100px,_1fr)] grid-cols-[minmax(100px,_1fr)] gap-10'>
                        {
                            testimonials.map((testimonial, index) => (
                                <TestimonialCard data={testimonial} key={index} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Committee