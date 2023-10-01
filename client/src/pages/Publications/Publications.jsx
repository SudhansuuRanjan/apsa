import React from 'react'
import ResourceCard from '../../components/Cards/ResourceCard'

const Publications = () => {
    return (
        <div className='pt-16 min-h-screen'>
            <div data-aos="fade-up" className="py-10 pt-20 text-center flex flex-col justify-center items-center gap-5">
                <h1 className="text-6xl font-bold text-sky-500">Publications</h1>
                <p className="max-w-3xl lg:text-lg md:text-lg  px-6">Lorem ipsum dolor sit amet, consectetur lor sit amet, consectetur adipiscing elit. Phasellus eleifend aliquet enim sed congue. Morbi quis leo accumsan justo luctus pharetra. Ut volutpat congue risus, vitae elementum dui auctor vel. Morbi neque nibh, rhoncus vitae </p>
            </div>

            <ResourceCard className="lg:w-[44rem] md:w-[32rem] w-[95%] m-auto rounded-3xl border bg-gray-950 border-gray-900 mt-24" headingStyle="text-2xl text-center" heading="Spandan">
                <form className="flex flex-col m-auto gap-5 lg:w-[24rem] md:w-[24rem] w-[90%] items-center justify-center py-4">
                    <div className='w-full'>
                        <label htmlFor="year" className="text-sky-500 font-semibold">Select Year</label>
                        <select type="text" name="year" id="year" className="w-full rounded-lg bg-gray-900 border border-gray-800 px-4 py-2.5 mt-1">
                            <option value="1" className='px-5'>2023</option>
                            <option value="2">2022</option>
                            <option value="3">2021</option>
                            <option value="4">2020</option>
                        </select>
                    </div>

                    <div className='w-full'>
                        <button className='bg-sky-600 text-white hover:bg-sky-700 w-full py-2.5 rounded-lg my-3'>
                            Download
                        </button>
                    </div>
                </form>
            </ResourceCard>

        </div>
    )
}

export default Publications