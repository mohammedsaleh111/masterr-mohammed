"use client"
import React, { Component } from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import { useAuth } from "../../hooks/useAuth";
import checkReviewData from "../../hooks/checkReviewData";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../../../lib/firebase";

// CAROUSEL DATA
interface DataType {
    profession: string;
    name: string;
    imgSrc: string;
}

const postData: DataType[] = [
    {
        profession: ' رأي الشخص ',
        name: ' اسم الشخص ',
        imgSrc: '/images/Expert/person.jpeg',
    },
    {
        profession: ' رأي الشخص ',
        name: ' اسم الشخص ',
        imgSrc: '/images/Expert/person.jpeg',
    },
    {
        profession: ' رأي الشخص ',
        name: ' اسم الشخص ',
        imgSrc: '/images/Expert/person.jpeg',
    },
    {
        profession: ' رأي الشخص ',
        name: ' اسم الشخص ',
        imgSrc: '/images/Expert/person.jpeg',
    },
    {
        profession: ' رأي الشخص ',
        name: ' اسم الشخص ',
        imgSrc: '/images/Expert/person.jpeg',
    },
    {
        profession: ' رأي الشخص ',
        name: ' اسم الشخص ',
        imgSrc: '/images/Expert/person.jpeg',
    },
]


export default function MultipleItems() {

    const { user, signInWithGoogle } = useAuth();
    const reviewExists = checkReviewData();

    const submitForm = async () => {
        try {
          if (!user) {
            alert("يرجى تسجيل الدخول أولاً.");
            return;
          }
    
          const userRef = doc(db, "reviews", user.uid);
          const userDoc = await getDoc(userRef);
    
          if (!userDoc.exists()) {
            await setDoc(userRef, {
              userId: user?.uid,
              name: user.displayName,
              email: user.email,

            });
          }
          alert("تم التواصل بنجاح! سيتم التواصل معك في خلال 48 ساعة من قبل إدارة الموقع علي رقم الواتساب لبدء التدريب.");
          window.location.href = "/";
        } catch (error) {
          console.error("خطأ أثناء حفظ بيانات التمرين:", error);
          alert("حدث خطأ. حاول مرة أخرى.");
        }
      };


    return (
        <div className="flex py-10 sm:py-20 bg-darkpink" id="expert-section">

            <div className='  mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8'>
                <div className="text-center">
                    <Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
                        <h2 className='text-pink text-4xl font-bold mb-3 tracking-widest uppercase'>
                            اراء المتدربين
                        </h2>
                    </Fade>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-center items-center" >
                    {postData.map((item) => <div key={item.name} >
                        <Image className=" rounded-full" src={item.imgSrc} width={300} height={300} alt=""></Image>
                        <p className=" text-center text-xl font-bold">
                            {item.name}
                        </p>
                        <p className=" text-center">
                            {item.profession}
                        </p>
                    </div>)}
                </div>

                {user? reviewExists? <div className="flex justify-center  items-center mt-9">
                     
                </div> : <div className="flex flex-col justify-center  items-center mt-9 gap-5">
                    <input className="border-black border-2 rounded-full py-5 px-6" type="text" />
                     <button className=' text-xl w-full md:w-auto font-medium rounded-full text-white py-5 px-6 bg-pink lg:px-14 mr-6'>
                        <Link href=''>
                            اكتب رأيك
                        </Link>
                    </button>
                </div> : <div className="flex justify-center  items-center mt-9">
                     <button className=' text-xl w-full md:w-auto font-medium rounded-full text-white py-5 px-6 bg-pink lg:px-14 mr-6'>
                        <Link href=''>
                            سجل لتكتب رأيك
                        </Link>
                    </button>
                </div>}
            </div>
        </div>

    );
}
