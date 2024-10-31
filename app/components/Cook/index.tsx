"use client"
import Image from 'next/image';
import { Fade } from "react-awesome-reveal";
import { useAuth } from "../../hooks/useAuth";
import Link from 'next/link';


const Cook = () => {

    const {user, signInWithGoogle} = useAuth();

    return (
        <div className='relative' id="cook-section">
            <div className="mx-auto max-w-7xl lg:pt-20 sm:pb-24 px-6">

                <div className='absolute right-0 bottom-[5%] hidden lg:block'>
                    <Image src={'/images/Cook/contact.png'} alt="burger-image" width={300} height={622} />
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-12 my-16 space-x-5'>

                    <div className='col-span-6 flex justify-start'>
                        <Image className="inner-img rounded-3xl" src="/images/Cook/master.jpg" alt="nothing" width={400} height={608} />
                    </div>


                    <div className='col-span-6 flex flex-col justify-center'>
                        <Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
                            <h2 className='text-pink text-2xl font-normal mb-3 uppercase text-start'> نظام التدريب </h2>
                        </Fade>
                        <Fade direction={'up'} delay={800} cascade damping={1e-1} triggerOnce={true}>
                            <h3 className="text-3xl lg:text-5xl font-semibold text-black text-start">
                                ابدأ التدريب اون لاين مع ماستر محمد .
                            </h3>
                        </Fade>
                        <Fade direction={'up'} delay={1000} cascade damping={1e-1} triggerOnce={true}>
                            <p className='text-grey md:text-lg font-normal mb-10 text-start mt-1'>
                                سيتواصل معك ماستر محمد مباشرة لارشادك الي نظام التدريب المخخص لك مع شرح دقيق لكل تمرين ودعم مباشر لدراسة النتائج....
                            </p>
                            <div className='flex align-middle justify-center md:justify-start'>
                            {  user ? <Link className='text-xl w-full md:w-auto font-medium rounded-full text-white py-5 px-6 bg-pink lg:px-14 mr-6' href='../registration'> تواصل مع الماستر </Link> : (<button className='text-xl w-full md:w-auto font-medium rounded-full text-white py-5 px-6 bg-pink lg:px-14 mr-6' onClick={signInWithGoogle}> سجل للتواصل </button>) }
                            </div>
                        </Fade>
                    </div>



                </div>

            </div>
        </div >
    )
}

export default Cook;
