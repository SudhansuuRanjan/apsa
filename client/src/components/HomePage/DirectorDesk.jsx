import React from 'react'
import { FaQuoteLeft } from 'react-icons/fa'
import { BsArrowUpRight } from 'react-icons/bs'

const DirectorDesk = () => {
  return (
    <div className='pt-24'>
        <div className="grid bg-gray-950 text-white px-10 p-20  gap-6 text-center md:grid-cols-3 lg:gap-12">
          <div data-aos="zoom-in" className="mb-12 md:mb-0">
            <h1 className="mb-2.5 mt-10 lg:text-left md:text-left text-center text-sky-400 lg:text-5xl md:text-4xl text-4xl font-bold leading-tight">
              From Director's Desk
            </h1>
            <h5 className="text-3xl font-semibold text-center md:text-left mt-10">
              Prof (Dr) Gopal Krushna Pal
            </h5>
            <ul className="text-center md:text-left">
              <h6 className="mb-4 text-sky-400 font-semibold">
                Executive Director
              </h6>

              <h6 className="mb-4 font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo labore vel id. Assumenda, quae corrupti cupiditate temporibus corporis consequatur voluptate perspiciatis animi eligendi! Obcaecati, pariatur adipisci quis nemo fuga quas illum reprehenderit repellat laboriosam vero minus perferendis quod culpa quaerat.
              </h6>
            </ul>
          </div>
          <div data-aos="fade-up" className="mb-12 md:mb-0 flex items-center justify-center">
            <div className="mb-12 lg:w-96 lg:h-96 md:w-80 md:h-80 w-72 h-72 rounded-full overflow-hidden flex items-center justify-center shadow-lg dark:shadow-black/30 aspect-square">
              <img
                src="https://www.kaizenaiimspatna.com/director-gk-pal.jpg"
                // src={director}
                className="lg:w-96 md:w-80 w-72 aspect-square rounded-full shadow-lg dark:shadow-black/30"
              />
            </div>
          </div>
          <div data-aos="zoom-in" className="mb-12 md:mb-0">
            <FaQuoteLeft size={38} className="text-sky-400 mb-6" />
            <p className="mb-10 text-lg lg:text-left md:text-left text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quibusdam, recusandae eos dignissimos consequuntur magnam. Deleniti cupiditate iusto ipsum, officiis eum alias voluptas. Consequatur id nisi ea. Voluptatum quae corrupti adipisci tempora velit neque odit consequatur consectetur fugiat magni, odio vitae, vel saepe incidunt quos dolorem, tenetur fuga.
            </p>

            <button
              type="button"
              className="flex items-center bg-sky-600 hover:bg-sky-700 py-2.5 px-6 rounded-lg text-sm font-medium"
            >
              READ MORE <BsArrowUpRight size={23} className="ml-1" />
            </button>
          </div>
        </div>
    </div>
  )
}

export default DirectorDesk