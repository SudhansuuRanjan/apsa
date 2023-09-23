import React from 'react'
import Heading1 from '../Headings/Heading1'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useQuery } from "@tanstack/react-query"
import { getDocuments } from '../../services/document';
import Loader from '../Loader';
import { Link } from 'react-router-dom';


const Gallery = () => {

    const { data, isLoading, isError } = useQuery({
        queryKey: ['gallery'],
        queryFn: () => getDocuments("gallery"),
        onSuccess: (data) => {
            // console.log(data);
        },
        staleTime: Infinity
    })

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 564 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 564, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    const deviceType = "desktop";

    return (
        <div className='py-24'>
            <Heading1 details={"Glimpses of our events and activities."} text1={"Our"} text2={"Gallery"} />
            <div data-aos="fade-up" className='mt-16'>
                {isLoading ? <div className="flex justify-center items-center h-[10rem] w-full"><Loader /></div> : isError ? <p>Something went wrong.</p> : <Carousel
                    swipeable={true}
                    draggable={false}
                    showDots={true}
                    responsive={responsive}
                    ssr={false} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={deviceType !== "mobile" ? true : false}
                    autoPlaySpeed={2000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    deviceType={deviceType}
                    dotListClass="mt-10 pt-6"
                    itemClass="pb-8"
                >

                    {
                        data.slice(0, 16).map((img, index) => {
                            return (
                                <div key={index} className="bg-gray-900 bg-opacity-40 rounded-[1rem]  m-5">
                                    <img className='rounded-2xl' height={1080} width={1920} loading="lazy" src={img.url} alt="gallery-photo" />
                                </div>
                            )
                        })
                    }
                </Carousel>}
            </div>

            <div data-aos="fade-up" className="flex items-center justify-center">
                <Link to="/gallery" className='m-auto'>
                    <button className='bg-sky-600 px-8 py-2.5 text-white rounded-3xl mt-16 hover:bg-black border-sky-600 border hover:text-sky-600'>Explore Gallery</button>
                </Link>
            </div>
        </div>
    )
}

export default Gallery;
