import TeamCard from "../../components/Cards/TeamCard";
import { testimonials, TestimonialCard } from "./Testimonials";
import End from "../../utils/End";


const Team = () => {
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
        <div className='pt-16 min-h-screen'>
            <div data-aos="fade-up" className="py-10 pt-20 text-center flex flex-col justify-center items-center gap-5">
                <h1 className="text-6xl font-bold text-sky-500">A.P.S.A.</h1>
                <p className="max-w-3xl lg:text-lg md:text-lg  px-6">Lorem ipsum dolor sit amet, consectetur lor sit amet, consectetur adipiscing elit. Phasellus eleifend aliquet enim sed congue. Morbi quis leo accumsan justo luctus pharetra. Ut volutpat congue risus, vitae elementum dui auctor vel. Morbi neque nibh, rhoncus vitae </p>
            </div>

            <div className="py-6">
                <h2 data-aos="fade-up" className="text-3xl text-center font-semibold">GOVERNING BODY</h2>
                <div className='my-16 px-6 flex items-center justify-center'>
                    <div className='grid text-gray-300 text-center lg:grid-cols-[minmax(100px,_1fr),minmax(100px,_1fr),minmax(100px,_1fr),minmax(100px,_1fr)] md:grid-cols-[minmax(100px,_1fr),minmax(100px,_1fr),minmax(100px,_1fr)] grid-cols-[minmax(100px,_1fr)] gap-10'>
                        {
                            members.map((member, index) => (
                                <TeamCard member={member} key={index} />
                            ))
                        }
                    </div>
                </div>
            </div>

            <div data-aos="fade-in-up" className="py-10 text-center flex flex-col justify-center items-center gap-5">
                <h2 className="text-3xl text-center font-semibold">EXECUTIVE BODY</h2>
                <p className="max-w-3xl lg:text-lg md:text-lg  px-6">Lorem ipsum dolor sit amet, consectetur lor sit amet, consectetur adipiscing elit. Phasellus eleifend aliquet enim sed congue. Morbi quis leo accumsan justo luctus pharetra. Ut volutpat congue risus, vitae elementum dui auctor vel. Morbi neque nibh, rhoncus vitae </p>
            </div>

            <div>
                <div className='my-16 px-6 flex items-center justify-center'>
                    <div className='grid text-gray-300 text-center lg:grid-cols-[minmax(100px,_1fr),minmax(100px,_1fr),minmax(100px,_1fr),minmax(100px,_1fr)] md:grid-cols-[minmax(100px,_1fr),minmax(100px,_1fr),minmax(100px,_1fr)] grid-cols-[minmax(100px,_1fr)] lg:gap-10 md:gap-10 gap-6'>
                        {
                            members.map((member, index) => (
                                <TeamCard member={member} key={index} />
                            ))
                        }
                    </div>
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

            <End />

        </div>
    )
}

export default Team;