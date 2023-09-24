import React from 'react'
import ActivityCard from '../../components/Cards/ActivityCard'

const Activities = () => {
    const activities = [
        {
            id: '01',
            title: 'Tesla NITP',
            tags: ['Web', 'App', 'Design'],
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend aliquet enim sed congue. Morbi quis leo accumsan justo luctus pharetra. Ut volutpat congue risus, rhoncus vitae',
            img: 'https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png',
            link: 'https://teslanitp.in',
            social: 'https://instagram.com/teslanitp',
            date: '12/12/2021',
        },
        {
            id: '02',
            title: 'Tesla NITP',
            tags: ['Web', 'App', 'Design'],
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend aliquet enim sed congue. Morbi quis leo accumsan justo luctus pharetra. Ut volutpat congue risus, rhoncus vitae',
            img: 'https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png',
            link: 'https://teslanitp.in',
            social: 'https://instagram.com/teslanitp',
            date: '12/12/2021',
        },
        {
            id: '03',
            title: 'Tesla NITP',
            tags: ['Web', 'App', 'Design'],
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend aliquet enim sed congue. Morbi quis leo accumsan justo luctus pharetra. Ut volutpat congue risus, rhoncus vitae',
            img: 'https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png',
            link: 'https://teslanitp.in',
            social: 'https://instagram.com/teslanitp',
            date: '12/12/2021',
        },
        {
            id: '04',
            title: 'Tesla NITP',
            tags: ['Web', 'App', 'Design'],
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend aliquet enim sed congue. Morbi quis leo accumsan justo luctus pharetra. Ut volutpat congue risus, rhoncus vitae',
            img: 'https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png',
            link: 'https://teslanitp.in',
            social: 'https://instagram.com/teslanitp',
            date: '12/12/2021',
        },
        {
            id: '05',
            title: 'Tesla NITP',
            tags: ['Web', 'App', 'Design'],
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend aliquet enim sed congue. Morbi quis leo accumsan justo luctus pharetra. Ut volutpat congue risus, rhoncus vitae',
            img: 'https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png',
            link: 'https://teslanitp.in',
            social: 'https://instagram.com/teslanitp',
            date: '12/12/2021',
        },
        {
            id: '06',
            title: 'Tesla NITP',
            tags: ['Web', 'App', 'Design'],
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend aliquet enim sed congue. Morbi quis leo accumsan justo luctus pharetra. Ut volutpat congue risus, rhoncus vitae',
            img: 'https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png',
            link: 'https://teslanitp.in',
            social: 'https://instagram.com/teslanitp',
            date: '12/12/2021',
        },
    ]
    return (
        <div className='pt-16 min-h-screen'>
            <div data-aos="fade-up" className="py-10 pt-20 text-center flex flex-col justify-center items-center gap-5">
                <h1 className="text-6xl font-bold text-sky-500">
                    <span className='text-white'>Committees &</span> Activities</h1>
                <p className="max-w-3xl lg:text-lg md:text-lg  px-6">Lorem ipsum dolor sit amet, consectetur lor sit amet, consectetur adipiscing elit. Phasellus eleifend aliquet enim sed congue. Morbi quis leo accumsan justo luctus pharetra. Ut volutpat congue risus, vitae elementum dui auctor vel. Morbi neque nibh, rhoncus vitae </p>
            </div>

            <div className='flex flex-col justify-center items-center gap-16 py-20'>
                {
                    activities.map((activity) => (
                        <ActivityCard key={activity.id} {...activity} />
                    ))
                }
            </div>
        </div>
    )
}

export default Activities