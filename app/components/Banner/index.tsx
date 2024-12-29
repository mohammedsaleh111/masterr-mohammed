"use client"
import Image from 'next/image';
import { Fade } from "react-awesome-reveal";
import checkUserData from "../../hooks/checkUserData";
import CustomButton from '../CustomButton';
import { bgBlueColor } from '@/app/constants';


const Banner = () => {

    return (
        <div id="home-section" className={`mx-auto pt-10 sm:pb-12 px-6 bg-[${bgBlueColor}] bg-opacity-25`}>

            <div className='grid grid-cols-1 lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12'>

                <div className='col-span-6 flex flex-col justify-center h-[50vh]'>
                    <Fade direction={'up'} delay={200} cascade damping={1e-1} triggerOnce={true}>
                        <h1 className="text-4xl lg:text-5xl sm:text-4xl font-semibold mb-5 text-lightgrey md:4px lg:text-start text-center">
                            أكاديمية ماستر محمد عطية لتمرينات التنفس تشي قونغ
                        </h1>
                    </Fade>
                    <Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
                        <p className='text-grey text-lg lg:text-lg sm:text-base font-normal mb-10 lg:text-start text-center'>أكثر من ثلاثين عاما من الخبرة في تدريب الكونغ فو والتشي كونغ بشقيه الجسدي والروحاني وما يندرج تحتهما من أقسام وقد تتلمذ علي يد نخبة من أفضل علماء الطب الصيني والفنون القتالية والروحية من اساتذة الصين وقد خرج من بين يديه آلاف الطلاب من ابطال عالم وأعلام يقتدي بها في كافة المجالات</p>
                    </Fade>
                    <Fade direction={'up'} delay={1000} cascade damping={1e-1} triggerOnce={true}>
                        <CustomButton />
                    </Fade>
                </div>

                <div className='col-span-6 flex justify-center items-center mt-10'>
                    <div className='flex p-2 gap-5 items-center bottom-10 left-10 rounded-xl relative'>
                        <Image className=' opacity-40' src={'/images/Logo/icon.png'} alt="pizza-image" width={500} height={500} />
                    </div>
                    <Image className=' rounded-3xl object-cover absolute' src={"/images/Banner/banner-image.png"} alt="Banner" width={250} height={250} />
                </div>
            </div>
        </div>
    )
}

export default Banner;
