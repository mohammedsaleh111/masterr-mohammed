"use client"
import Image from 'next/image';
import { Fade } from "react-awesome-reveal";


const Gallery = () => {
    return (
            <div id='gallery-section' className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 mt-20 md:pt-24 bg-[skyblue] bg-opacity-10'>
                <div className="text-center">
                    <Fade direction={'up'} delay={200} cascade damping={1e-1} triggerOnce={false}>
                        <h2 className='text-pink text-4xl font-normal mb-3 uppercase'> معرض الصور </h2>
                    </Fade>
                    <Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
                        <h3 className="text-3xl lg:text-5xl font-semibold text-black">
                          صور من تدريب القوة.
                        </h3>
                    </Fade>

                </div>

                <div className='grid grid-cols-1 md:grid-cols-12 my-16 sm:space-x-6 space-y-6 md:space-y-0 px-6'>

                    <div className='col-span-6 flex justify-center overflow-hidden rounded-3xl'>
                        <Image src="/images/Gallery/gallery1.jpg" alt="pizza-one" width={1000} height={805} className="inner-img"/>
                    </div>

                    <div className='col-span-6 flex justify-center'>
                        <div className="grid grid-rows-1 grid-flow-row gap-4">
                            <div className="row-span-1 overflow-hidden rounded-3xl">
                                <Image src="/images/Gallery/gallery2.jpg" alt="pizza-two" width={700} height={405} className="inner-img"/>
                            </div>
                            <div className='grid grid-cols-2 gap-2'>
                                <div className='overflow-hidden rounded-3xl'>
                                    <Image src="/images/Gallery/gallery3.jpg" alt="pizza-three" width={500} height={405} className="inner-img"/>
                                </div>
                                <div className='overflow-hidden rounded-3xl'>
                                    <Image src="/images/Gallery/gallery4.jpg" alt="pizza-four" width={500} height={405} className="inner-img"/>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
    )
}

export default Gallery;
