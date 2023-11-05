import React from 'react'
import { Link } from 'react-router-dom'
import { FaPoll, FaTshirt } from 'react-icons/fa'
import { MdProductionQuantityLimits, MdFeedback, MdLeaderboard } from 'react-icons/md'
import { BsPatchQuestionFill } from 'react-icons/bs'
import { PiStudentBold } from 'react-icons/pi'

const StudentCell = () => {

  const items = [
    {
      name: "Polls",
      icon: <FaPoll className='text-sky-500' size={32} />,
      link: "/polls"
    },
    {
      name: "Leaderboard",
      icon: <MdLeaderboard className='text-sky-500' size={32} />,
      link: "/leaderboard"
    },
    {
      name: "Suggestions/Feeback",
      icon: <MdFeedback className='text-sky-500' size={32} />,
      link: "/suggestions"
    },
    {
      name: "Student well-being cell",
      icon: <PiStudentBold className='text-sky-500' size={32} />,
      link: "/student-well-being-cell"
    },
    {
      name: "Complaints & Grievances",
      icon: <BsPatchQuestionFill className='text-sky-500' size={32} />,
      link: "/complaints-and-grievances"
    },
    {
      name: "Lost & Found",
      icon: <MdProductionQuantityLimits className='text-sky-500' size={32} />,
      link: "/lost-and-found"
    },
    {
      name: "Merchandise",
      icon: <FaTshirt className='text-sky-500' size={32} />,
      link: "/merchandise"
    }
  ]

  return (
    <div className='pt-16 min-h-screen'>
      <h1 className="py-10 text-center text-5xl font-bold text-sky-500">
        <span className='text-white'>Student</span> Cell</h1>

      <div className=' m-auto my-10 max-w-2xl flex items-center justify-center'>
        <div className='grid gap-8 place-items-center text-gray-300 w-full mb-0 lg:grid-cols-[minmax(100px,_1fr),minmax(100px,_1fr)] md:grid-cols-[minmax(100px,_1fr),minmax(100px,_1fr)] grid-cols-[minmax(100px,_1fr)]'>
          {
            items.map((item, index) => (
              <Link key={index} to={item.link}>
                <button className="font-medium bg-slate-900 w-80 border border-gray-700 hover:bg-slate-800 text-white px-7 py-6 rounded-2xl flex flex-col justify-center gap-2 transition-all ease-in-out delay-[30ms] hover:text-gray-200">
                  {item.icon}
                  <p className=''>{item.name}</p>
                </button>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default StudentCell;