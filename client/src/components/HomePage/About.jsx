import React from 'react'
import { FaQuoteLeft } from 'react-icons/fa'
import { BsArrowUpRight } from 'react-icons/bs'


const About = () => {
  return (
    <div className='pt-24'>
        <div className="grid bg-gray-900 text-white p-20 px-10 pt-10  gap-6 text-center md:grid-cols-3 lg:gap-12">
          <div className="mb-12 md:mb-0">
            <h1 className="mb-2.5 mt-10 lg:text-left md:text-left text-center text-white lg:text-5xl md:text-4xl text-4xl font-bold leading-tight">
              About <span className='text-sky-500'>APSA</span>
            </h1>
            <h5 className="text-3xl font-semibold text-center md:text-left mt-10">
              The Logo
            </h5>
            <ul className="text-center md:text-left">
              <h6 className="mb-4 text-sky-400 font-semibold">
                The moto here
              </h6>

              <h6 className="mb-4 font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ducimus consectetur nulla officiis neque minima et ex, architecto debitis suscipit explicabo libero veritatis voluptatibus, at dicta totam magni ipsam animi. Vero reiciendis animi repellendus quibusdam recusandae, minima debitis! Dolore, corrupti.
              </h6>
            </ul>
          </div>
          <div className="mb-12 md:mb-0">
            <div className="mb-12 lg:w-96 md:w-80 w-72 rounded-full overflow-hidden flex items-center justify-center shadow-lg dark:shadow-black/30">
              <img
                src="https://media.istockphoto.com/id/1211161734/vector/conversation-with-medic-about-checkup-results.jpg?s=612x612&w=0&k=20&c=XSVH-r0B1hR8g5hhEShz4VWc1DOiMt_BBmEe9AlS5_Q="
                // src={director}
                className="lg:w-96 md:w-80 w-72 lg:h-96 md:h-80 h-72"
              />
            </div>
          </div>
          <div className="mb-12 md:mb-0">
            <FaQuoteLeft size={38} className="text-sky-400 mb-6" />
            <p className="mb-10 text-lg lg:text-left md:text-left text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quam voluptas earum voluptatem incidunt eveniet rerum? Facilis distinctio porro labore debitis praesentium vel odit ullam numquam, deleniti maxime eum dolor, at magni, ut incidunt adipisci sint omnis corrupti possimus ratione id. Blanditiis repellendus reprehenderit ducimus voluptas. Asperiores, voluptas.
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

export default About