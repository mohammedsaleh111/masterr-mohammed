"use client"
import Image from 'next/image';
import { Fade } from "react-awesome-reveal";


interface cardDataType {
    imgSrc: string;
    heading: string;
    subheading: string;
}

const cardData: cardDataType[] = [
    {
        imgSrc: '/images/Features/mind.png',
        heading: " ارتقي بعقلك ",
        subheading: " أطلق العنان لعقلك للوصول الي اعلي درجات التركيز والابداع ",
    },
    {
        imgSrc: '/images/Features/muscle.png',
        heading: "فجر قوتك",
        subheading: " زد من قوتك الجسدية اكثر من الضعف في ثلاثة أشهر فقط ",
    },
    {
        imgSrc: '/images/Features/soul.png',
        heading: " اسمو بروحك ",
        subheading: " اسمو بروحك فوق التعلقات المكبلة لشفافيتك ",
    },
    {
        imgSrc: '/images/Features/sports.png',
        heading: " عزز اداؤك الرياضي ",
        subheading: " صل الي البطولة في مجالك الرياضي وتفوق علي منافسيك ",
    }

]

const Futures = () => {
    return (


        <div>
            <div className='mx-auto max-w-7xl py-40 px-6 text-right' id="about-section">
                <div className='text-center mb-14' >
                    <Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
                        <h3 className='text-pink text-5xl font-normal mb-3 uppercase'>مزايا التدريب</h3>
                    </Fade>
                    <Fade direction={'up'} delay={800} cascade damping={1e-1} triggerOnce={true}>
                        <p className='text-3xl lg:text-5xl font-semibold text-lightgrey'>  ارتقي بحياتك وامكانياتك الي ابعد الحدود وتحول الي نسخة سوبر </p>
                    </Fade>
                </div>


                <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-5 mt-32'>
                    <Fade direction={'up'} delay={1000} cascade damping={1e-1} triggerOnce={true}>
                        {cardData.map((items, i) => (
                            <div className='card-b p-8 relative rounded-3xl border h-80' key={i}>
                                <div className='work-img-bg rounded-full flex justify-center items-center object-cover '>
                                    <Image className=' w-30 h-30 ' src={items.imgSrc} alt={items.imgSrc} width={100} height={100} />
                                </div>
                                <h3 className='text-2xl text-black font-semibold text-center mt-16'>{items.heading}</h3>
                                <p className='text-lg font-normal text-black text-center text-opacity-60 mt-2 line-clamp-2'>{items.subheading}</p>
                                <div className='flex items-center justify-center'>
                                </div>
                            </div>
                        ))}
                    </Fade>
                </div>
            </div>
        </div>

    )
}

export default Futures;
