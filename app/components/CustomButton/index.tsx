import React from 'react'
import { useAuth } from "../../hooks/useAuth";
import checkUserData from "../../hooks/checkUserData";
import Link from 'next/link';

export default function CustomButton() {

    const { user, signInWithGoogle } = useAuth();

    const userExists = checkUserData();

    return (
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
    )
}
