import { useState, useEffect } from "react"
import './Gallery.scss'
import { MdClose, MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import Heading from "../../components/Headings/Heading"
import { useQuery } from "@tanstack/react-query"
import { getDocuments } from "../../services/document"
import Loader from "../../components/Loader"


const Gallery = () => {
    const [currentImg, setCurrentImg] = useState(0);
    const [modal, setModal] = useState(false);

    const { data, isLoading, isError } = useQuery({
        queryKey: ['gallery'],
        queryFn: () => getDocuments("gallery"),
        onSuccess: (data) => {
            // console.log(data);
        },
        staleTime: Infinity
    })

    useEffect(() => {
        document.title = 'Tesla NIT Patna | Gallery';
        if (modal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [modal]);


    return (
        <div className="gallery_container">
            <Heading heading="PHOTOS" desc="— Our Photo Gallery" />
            <div className="photo-gallery-cont">
                <div className="photo-gallery gap-5">
                    {isLoading ? <div className="flex justify-center items-center h-[10rem] w-full"><Loader /></div> : isError ? <p>Something went wrong.</p> : <div className="grid w-full text-center lg:grid-cols-[minmax(100px,_1fr),minmax(100px,_1fr),minmax(100px,_1fr),minmax(100px,_1fr)] md:grid-cols-[minmax(100px,_1fr),minmax(100px,_1fr),minmax(100px,_1fr)] grid-cols-[minmax(100px,_1fr)] gap-6">
                        {
                            data.map((img, index) => {
                                return (
                                    <div key={index} className="bg-gray-900 bg-opacity-40 rounded-[1rem] cursor-pointer">
                                        <img className="rounded-[1rem]" height={1080} width={1920} loading="lazy" src={img.url} alt="gallery-photo" onClick={() => {
                                            setCurrentImg(index);
                                            setModal(true);
                                        }} />
                                    </div>
                                )
                            })
                        }
                    </div>}
                </div>
            </div>

            {
                modal && <div className="slideshow-container transition">
                    <div className="slide relative">
                        <div className="img-display">
                            <img loading="lazy" src={data[currentImg].url} alt="Slide image" />
                        </div>

                        <div className="controls">
                            <button onClick={() => {
                                if (currentImg === 0) {
                                    setCurrentImg(data.length - 1);
                                } else {
                                    setCurrentImg(currentImg - 1);
                                }
                            }}>
                                <MdKeyboardArrowLeft className="text-white" size={20} />
                            </button>
                            <button onClick={() => setModal(false)}>
                                <MdClose className="text-white" size={20} />
                            </button>
                            <button onClick={() => {
                                if (currentImg === data.length - 1) {
                                    setCurrentImg(0);
                                } else {
                                    setCurrentImg(currentImg + 1);
                                }
                            }}>
                                <MdKeyboardArrowRight className="text-white" size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            }

        </div>
    )
}

export default Gallery