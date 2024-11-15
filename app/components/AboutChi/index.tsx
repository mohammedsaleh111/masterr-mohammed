'use client'
import { bgPinkColor } from '@/app/constants'
import React from 'react'
import { Fade } from 'react-awesome-reveal'
import CustomButton from '../CustomButton';

export default function AboutChi() {

    interface cardData {
        title: string;
        discrebtion: string;
        image: string;
    }

    const data = [
        {
            title: 'اولا : تقليل التوتر والقلق والضغط النفسي الناتج عن المعاملات اليومية',
            discrebtion: 'عندما نأخذ نفسًا عميقًا وبطيئًا، يرسل هذا إشارة إلى الدماغ بأن كل شيء على ما يرام، مما يساعد على تهدئة الجهاز العصبي وتقليل إفراز هرمونات التوتر. سواء كنت تواجه يومًا مليئًا بالضغوط في العمل أو تحتاج لبعض الراحة قبل النوم، يمكن للتنفس العميق أن يحدث فرقًا ملحوظًا.',
            image: '/images/AboutChi/relax.jpeg'
        },
        {
            title: 'ثانيا : تحسين التركيز والإنتاجية',
            discrebtion: 'التنفس العميق يزيد من تدفق الأكسجين إلى الدماغ، مما يعزز التركيز والوضوح الذهني. مع بضع دقائق فقط من تمرينات التنفس، يمكنك أن تشعر بطاقة جديدة تساعدك على التعامل مع التحديات بشكل أكثر فاعلية',
            image: '/images/AboutChi/focus.jpeg'
        },
        {
            title: 'ثالثا : تقوية الجهاز المناعي',
            discrebtion: 'قد تدهشك معرفة أن تمرينات التنفس لا تساعد فقط في الاسترخاء، بل إنها أيضًا تقوي الجهاز المناعي. التنفس بعمق يساعد في زيادة تدفق الدم وتفعيل الجهاز اللمفاوي، مما يساعد الجسم على محاربة العدوى والأمراض',
            image: '/images/AboutChi/health.jpeg'
        },
        {
            title: 'رابعا : زيادة القوة العضلية والصحة العامة والسرعة الحركية',
            discrebtion: 'اذا كنت شخصا عاديا اوبطلا  رياضيا فانك سوف تفاجأ بزيادة غير عاديه وتضاعف فى القوة  فى غضون ثلاثة أشهر من ممارسة تمرينات تشى قونغ',
            image: '/images/AboutChi/strength.jpeg'
        },
        {
            title: 'خامسا : تحسين النوم',
            discrebtion: 'إذا كنت تواجه صعوبة في النوم أو تستيقظ ليلاً، جرب تمارين التنفس العميق فانه يهدئ العقل والجسم، مما يساعدك على الدخول في نوم أعمق وأكثر هدوءًا',
            image: '/images/AboutChi/sleep.jpeg'
        },
        {
            title: 'سادسا : مساعدة في إدارة الألم',
            discrebtion: 'تمارين التنفس يمكن أن تكون فعالة في تقليل الشعور بالألم عن طريق تقليل التوتر ورفع مستوى الاسترخاء. جربها عندما تشعر بألم عضلي أو توتر في الجسم، وستلاحظ الفرق',
            image: '/images/AboutChi/pain.jpeg'
        },
    ];

    return (
        <div id='chi-section' className={` py-10 px-6 text-center bg-${bgPinkColor} bg-opacity-20`} >
            <Fade direction={'up'} delay={200} cascade damping={1e-1} triggerOnce={false}>
                <div className='text-pink text-4xl font-normal mb-3 uppercase ' >
                    عن التشي كونغ
                </div>
            </Fade>
            <Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
                <div className='text-right text-2xl font-semibold' >
                    : تمارين التنفس
                </div>
            </Fade>
            <br />
            <Fade direction={'up'} delay={600} cascade damping={1e-1} triggerOnce={true}>
                <div className=' text-right text-md lg:text-xl font-normal text-lightgrey'>
                    السر الخفي لحياة أكثر صحة وقوة وانجازات فى كل المجالات الحياتية

                    هل سبق وشعرت بالتوتر أو القلق؟ أو ربما كنت تبحث عن طريقة لتحسين تركيزك وصفاء ذهنك؟ الحل قد يكون أبسط مما تتخيل – إنه في طريقة تنفسك!

                    تعتبر تمارين التنفس واحدة من أسهل وأقوى الأدوات التي يمكن أن تساعدنا في تحسين صحتنا العقلية والجسدية. ومع ذلك، الاغلبية العظمى  منا يجهل فوائدها الهائلة. وفيما يلى الاسباب التى يجب أن تجعل تمرينات التنفس جزءًا ضروريا من حياتك اليومية
                </div>
            </Fade>

            <Fade direction={'up'} delay={600} cascade damping={1e-1} triggerOnce={true}>
                <div> - - - - - - - - - - </div>
                <br />
            </Fade>

            <Fade direction={'up'} delay={600} cascade damping={1e-1} triggerOnce={true}>
                {
                    data.map((item) => (
                        <div key={item.title}>
                            <div className=' text-right'>
                                <div className='text-md font-semibold pb-5 text-right' > {item.title} </div>

                                <div className='flex flex-col lg:flex-row sm:flex-row justify-between items-center gap-3'>
                                    <img src={item.image} alt="" className='flex justify-center rounded-3xl w-[95vw] md:w-[40vw] sm:w[35vw] lg:w-[25vw]' />
                                    <div className=' w-[90vw] sm:w-[75vw] md:w[75vw] text-right' > {item.discrebtion} </div>

                                </div>

                            </div>
                            <hr className=' m-5' />

                        </div>
                    ))
                }
                <div className=' text-xl font-semibold mb-7'>
                    ابدأ اليوم ولا تتردد اجعل تمرينات التنفس عادة يومية لمدة ١٥ دقيقة كل يوم  وسترى بنفسك كيف يمكن أن تؤثر على حياتك بشكل إيجابي. تذكر، السعادة والصحة تبدأ من أول نفس تأخذه بوعي وهدوء
                </div>
                <CustomButton/>
            </Fade>
        </div>
    )
}
