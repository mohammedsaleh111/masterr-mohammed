"use client"
import Image from 'next/image';
import { Fade } from "react-awesome-reveal";
import Link from 'next/link';
import CustomButton from '../CustomButton';


const ConnectInfo = () => {


    return (
        <div className='relative bg-pink bg-opacity-20' id="cook-section">
            <div className="mx-auto max-w-7xl lg:pt-10 sm:pb-24 px-6">

                <div className='absolute right-0 bottom-[5%] hidden lg:block'>
                    <Image src={'/images/ConnectInfo/contact.png'} alt="burger-image" width={300} height={622} />
                </div>

                <div className='flex flex-col sm:flex-row lg:flex-row my-16 space-x-5'>

                    <div className='col-span-6 flex justify-start'>
                        <Image className="inner-img rounded-3xl" src="/images/ConnectInfo/master.jpg" alt="nothing" width={400} height={608} />
                    </div>


                    <div className='col-span-6 flex flex-col justify-center'>
                        <Fade direction={'up'} delay={200} cascade damping={1e-1} triggerOnce={false}>
                            <h2 className='text-pink text-4xl font-normal mb-3 uppercase text-center'> نظام التدريب </h2>
                        </Fade>
                        <Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
                            <h3 className="text-3xl lg:text-5xl font-semibold text-black text-start">
                                ابدأ التدريب اون لاين مع ماستر محمد .
                            </h3>
                        </Fade>
                        <Fade direction={'up'} delay={1000} cascade damping={1e-1} triggerOnce={true}>
                            <p className='text-grey md:text-lg font-normal mb-10 text-start mt-1'>
                                سيتواصل معك ماستر محمد مباشرة لارشادك الي نظام التدريب المخخص لك مع شرح دقيق لكل تمرين ودعم مباشر لدراسة النتائج....
                            </p>
                            <CustomButton />

                        </Fade>
                    </div>



                </div>

            </div>
        </div >
    )
}

export default ConnectInfo;
