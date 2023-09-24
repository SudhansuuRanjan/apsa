import { Link } from 'react-router-dom'
import { FaInstagram } from 'react-icons/fa'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'


const ActivityCard = ({ id, title, tags, desc, img, link, social, date,...rest }) => {
    return (
        <div {...rest} className='relative bg-[linear-gradient(180deg,rgba(35,37,49,.5),rgba(15,15,24,.5));] lg:w-fit md:w-fit w-[100%]  h-[30rem] border border-gray-700 rounded-[3rem] flex items-center lg:p-10 md:p-10 p-6'>
            <h1 className="text-[10rem] z-20 absolute left-[-3rem] top-[-5rem] text-transparent font-bold font-outline-2">
                {id}
            </h1>
            <div className="lg:mr-8 md:mr-8 mr-4 z-30">
                <h1 style={{
                    writingMode: "vertical-rl", textOrientation: "mixed"
                }} className='h-full rotate-180  text-center text-gray-500'>
                    {
                        tags.join(', ')
                    }
                </h1>
            </div>
            <div className="h-fit">
                <div className="flex flex-col items-end">
                    <div className='pt-6 lg:w-[24rem] md:w-[20rem] w-[18rem] flex items-center justify-center overflow-hidden'><img className="rounded-3xl w-full" src={img} width={700} height={350} alt={title} /></div>
                    <h3 className="mt-3 text-3xl font-bold text-right"><span className={" "}>{title}</span></h3>
                    <p className='mb-2 text-sky-500'>{date}</p>
                    <p className="text-slate-400 text-sm lg:w-[24rem] md:w-[24rem] w-auto text-right">
                        {desc}
                    </p>
                </div>


                <div className="flex justify-end py-6 pb-10">
                    <div className="flex gap-3">
                        <Link style={{
                            textDecoration: "none"
                        }} target="_blank" href={social}>
                            <button className="font-medium bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-xl flex items-center justify-center gap-2 transition-all ease-in-out delay-[30ms] hover:text-gray-200">
                                <FaInstagram className='text-rose-500' size={22} />
                                <p>@apsa_aiims</p>
                            </button>
                        </Link>
                        <Link style={{
                            textDecoration: "none"
                        }} target="_blank" href={link}>
                            <button className="font-medium bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-xl flex items-center justify-center gap-2 transition-all ease-in-out delay-[30ms] hover:text-gray-200 ">
                                <p>Details</p>
                                <HiOutlineArrowNarrowRight size={22} />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActivityCard;