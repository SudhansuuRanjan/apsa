import React from 'react'
import ResourceCard from '../../components/Cards/ResourceCard'

const Academics = () => {
    return (
        <div className='pt-16 min-h-screen'>
            <div data-aos="fade-up" className="py-10 pt-20 text-center flex flex-col justify-center items-center gap-5">
                <h1 className="text-6xl font-bold text-sky-500">Academics</h1>
                <p className="max-w-3xl lg:text-lg md:text-lg  px-6">Lorem ipsum dolor sit amet, consectetur lor sit amet, consectetur adipiscing elit. Phasellus eleifend aliquet enim sed congue. Morbi quis leo accumsan justo luctus pharetra. Ut volutpat congue risus, vitae elementum dui auctor vel. Morbi neque nibh, rhoncus vitae </p>
            </div>

            <ResourceCard className="lg:w-[44rem] md:w-[32rem] w-[95%] m-auto rounded-3xl border bg-gray-950 border-gray-900 mt-24" heading="Question Bank">
                <form className="flex flex-col m-auto gap-5 lg:w-[24rem] md:w-[24rem] w-[90%] items-center justify-center py-4">
                    <div className='w-full'>
                        <label htmlFor="year" className="text-sky-500 font-semibold">Select Year</label>
                        <select type="text" name="year" id="year" className="w-full rounded-lg bg-gray-900 border border-gray-800 px-4 py-2.5 mt-1">
                            <option value="1" className='px-5'>First Year</option>
                            <option value="2">Second Year</option>
                            <option value="3">Third Year</option>
                            <option value="4">Fourth Year</option>
                        </select>
                    </div>

                    <div className='w-full'>
                        <label htmlFor="subject" className="text-sky-500 font-semibold">Select Subject</label>
                        <select type="text" name="subject" id="subject" className="w-full rounded-lg bg-gray-900 border border-gray-800 px-4 py-2.5 mt-1">
                            <option value="1" className='px-5'>Subject 1</option>
                            <option value="2">Subject 2</option>
                            <option value="3">Subject 3</option>
                            <option value="4">Subject 4</option>
                        </select>
                    </div>

                    <div className='w-full'>
                        <label htmlFor="type" className="text-sky-500 font-semibold">Select Type</label>
                        <select type="text" name="type" id="type" className="w-full rounded-lg bg-gray-900 border border-gray-800 px-4 py-2.5 mt-1">
                            <option value="1" className='px-5'>Mid Semester</option>
                            <option value="2">End Semester</option>
                            <option value="3">Assignment</option>
                            <option value="4">Quiz</option>
                        </select>
                    </div>

                    <div className='w-full'>
                        <button className='bg-sky-600 text-white hover:bg-sky-700 w-full py-2.5 rounded-lg my-3'>
                            Download
                        </button>
                    </div>
                </form>
            </ResourceCard>

            <ResourceCard className="lg:w-[44rem] md:w-[32rem] w-[95%] m-auto rounded-3xl border bg-gray-950 border-gray-900 mt-24" heading="Slides">
                <form className="flex flex-col m-auto gap-5 lg:w-[24rem] md:w-[24rem] w-[90%] items-center justify-center py-4">
                    <div className='w-full'>
                        <label htmlFor="year" className="text-sky-500 font-semibold">Select Year</label>
                        <select type="text" name="year" id="year" className="w-full rounded-lg bg-gray-900 border border-gray-800 px-4 py-2.5 mt-1">
                            <option value="1" className='px-5'>First Year</option>
                            <option value="2">Second Year</option>
                            <option value="3">Third Year</option>
                            <option value="4">Fourth Year</option>
                        </select>
                    </div>

                    <div className='w-full'>
                        <label htmlFor="subject" className="text-sky-500 font-semibold">Select Subject</label>
                        <select type="text" name="subject" id="subject" className="w-full rounded-lg bg-gray-900 border border-gray-800 px-4 py-2.5 mt-1">
                            <option value="1" className='px-5'>Subject 1</option>
                            <option value="2">Subject 2</option>
                            <option value="3">Subject 3</option>
                            <option value="4">Subject 4</option>
                        </select>
                    </div>

                    <div className='w-full'>
                        <label htmlFor="type" className="text-sky-500 font-semibold">Select Type</label>
                        <select type="text" name="type" id="type" className="w-full rounded-lg bg-gray-900 border border-gray-800 px-4 py-2.5 mt-1">
                            <option value="1" className='px-5'>Mid Semester</option>
                            <option value="2">End Semester</option>
                            <option value="3">Assignment</option>
                            <option value="4">Quiz</option>
                        </select>
                    </div>

                    <div className='w-full'>
                        <button className='bg-sky-600 text-white hover:bg-sky-700 w-full py-2.5 rounded-lg my-3'>
                            Download
                        </button>
                    </div>
                </form>

                <p className='text-center'>
                    Special thanks to <span className='text-sky-500'>
                        Digvijay Kumar
                    </span>.
                </p>
            </ResourceCard>


            <div className='text-center my-32'>
                <p className='text-xl font-medium pb-4'>AIIMS Patna <span className='text-sky-500'>e-Library</span></p>
                <button className='bg-sky-600 px-12 py-2.5 rounded-2xl'>
                    Visit
                </button>
            </div>
        </div>
    )
}

export default Academics