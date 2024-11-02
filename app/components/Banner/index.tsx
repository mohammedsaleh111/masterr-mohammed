"use client"
import Image from 'next/image';
import { Fade } from "react-awesome-reveal";
import Link from 'next/link';
import { useAuth } from "../../hooks/useAuth";
import { useRouter } from 'next/router';
import { db } from "../../../lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";


const Banner = () => {

    const { user, signInWithGoogle } = useAuth();

    const [userExists, setUserExists] = useState(false);

    useEffect(() => {
        const checkUserData = async () => {
            if (user) {
                const userRef = doc(db, "users", user.uid);
                const userDoc = await getDoc(userRef);
                setUserExists(userDoc.exists());
            }
        };

        checkUserData();
    }, [user]);

    return (
        <div id="home-section" className='bg-lightpink'>
            <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">

                <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1'>

                    <div className='col-span-6 flex flex-col justify-center h-[50vh]'>
                        <Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
                            <h1 className="text-4xl lg:text-7xl font-semibold mb-5 text-lightgrey md:4px lg:text-start text-center">
                                ماستر محمد عطية <br /> خبير التشي كونغ
                            </h1>
                        </Fade>
                        <Fade direction={'up'} delay={800} cascade damping={1e-1} triggerOnce={true}>
                            <p className='text-grey lg:text-lg font-normal mb-10 lg:text-start text-center'>أكثر من ثلاثين عاما من الخبرة في تدريب الكونغ فو والتشي كونغ بشقيه الجسدي والروحاني وما يندرج تحتهما من أقسام وقد تتلمذ علي يد نخبة من أفضل علماء الطب الصيني والفنون القتالية والروحية من اساتذة الصين وقد خرج من بين يديه آلاف الطلاب من ابطال عالم وأعلام يقتدي بها في كافة المجالات</p>
                        </Fade>
                        <Fade direction={'up'} delay={1000} cascade damping={1e-1} triggerOnce={true}>
                            <div className='md:flex align-middle justify-center lg:justify-start'>


                                {user ? (
                                    userExists ? (
                                        <button
                                            className="text-xl w-full md:w-auto font-medium rounded-full text-white py-5 px-6 bg-pink lg:px-14 mr-6"
                                            onClick={() => alert("تم إرسال بياناتك بالفعل إلى المدرب!")}
                                        >
                                            تواصل مع الماستر
                                        </button>
                                    ) : (
                                        <Link className="text-xl w-full md:w-auto font-medium rounded-full text-white py-5 px-6 bg-pink lg:px-14 mr-6" href="/registration">
                                                تواصل مع الماستر
                                        </Link>
                                    )
                                ) : (
                                    <button
                                        className="text-xl w-full md:w-auto font-medium rounded-full text-white py-5 px-6 bg-pink lg:px-14 mr-6"
                                        onClick={signInWithGoogle}
                                    >
                                        سجل للتواصل
                                    </button>
                                )}


                            </div>
                        </Fade>
                    </div>

                    <div className='col-span-6 flex justify-center items-center mt-10'>
                        <div className='flex bg-white p-2 gap-5 items-center bottom-10 left-10 rounded-xl relative'>
                            <Image className=' opacity-40' src={'/images/Logo/icon.png'} alt="pizza-image" width={500} height={500} />
                        </div>
                        <Image className=' rounded-3xl object-cover absolute' src={"/images/Banner/banner-image.png"} alt="Banner" width={300} height={300} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;
