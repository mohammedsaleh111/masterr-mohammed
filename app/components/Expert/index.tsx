"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import { useAuth } from "../../hooks/useAuth";
import useCheckReviewData from "../../hooks/checkReviewData";
import useCheckUserData from "../../hooks/checkUserData";
import { getDocs, addDoc, collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../../lib/firebase";

interface DataType {
    userUid: string;
    review: string;
    name: string;
    imgSrc: string;
    agree: boolean;
}

const myData: DataType[] = [
    {
        userUid: '1',
        review: 'التشي كونغ ساعدني في التغلب على القلق والتوتر. أشعر الآن بتوازن داخلي وسلام نفسي جعلني أكثر إيجابية',
        name: 'ريم الجوهري',
        imgSrc: '/images/Expert/1.jpeg',
        agree: true,
    },
    {
        userUid: '2',
        review: 'بعد أشهر من الممارسة، لاحظت تحسنًا في بشرتي ونشاطي العام. أصبحت أشعر وكأنني أصغر سنًا وأكثر حيوية',
        name: 'سارة عبد الحميد',
        imgSrc: '/images/Expert/2.jpeg',
        agree: true,
    },
    {
        userUid: '3',
        review: 'كنت أعاني من التوتر المستمر وصعوبة في النوم. بعد شهرين من ممارسة تمارين التنفس والتشي كونغ، أصبحت أنام بعمق وأشعر براحة نفسية لم أختبرها من قبل',
        name: 'أحمد نبيل',
        imgSrc: '/images/Expert/3.jpeg',
        agree: true,
    },
    {
        userUid: '4',
        review: 'كانت طاقتي منخفضة دائمًا وأشعر بالإرهاق سريعًا. الآن، بفضل التمارين، لدي طاقة مذهلة طوال اليوم وأستمتع بكل لحظة',
        name: 'نور الهاشمي',
        imgSrc: '/images/Expert/4.jpeg',
        agree: true,
    },
    {
        userUid: '5',
        review: 'هذه التمارين غيّرت حياتي تمامًا! شعرت بطاقة كبيرة طوال اليوم، وأصبحت أكثر تركيزًا وإنتاجية في عملي',
        name: 'خالد السعيد',
        imgSrc: '/images/Expert/5.jpeg',
        agree: true,
    },
    {
        userUid: '6',
        review: 'كنت أعاني من آلام مزمنة في الظهر، ولكن بعد المواظبة على التمارين، خفّت الآلام بشكل كبير وأصبحت أتحرك بحرية أكبر',
        name: 'عمر الشناوي',
        imgSrc: '/images/Expert/6.jpeg',
        agree: true,
    }
];

export default function MultipleItems() {
    const { user } = useAuth();
    const reviewExists = useCheckReviewData(); // استدعاء الـ Hook المخصص
    const dataExists = useCheckUserData(); // استدعاء الـ Hook المخصص
    const [reviewText, setReviewText] = useState('');
    const [reviewData, setReviewData] = useState<DataType[]>([]);
    const [canSubmitReview, setCanSubmitReview] = useState(false);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const reviewsCollection = collection(db, "reviews");
                const reviewDocs = await getDocs(reviewsCollection);
                const reviews = reviewDocs.docs
                    .map((doc) => {
                        const data = doc.data();
                        return {
                            id: doc.id,
                            userUid: data.userUid || "",
                            review: data.review || "",
                            name: data.name || "Anonymous",
                            imgSrc: data.imgSrc || "",
                            agree: data.agree !== undefined ? data.agree : false,
                        } as DataType;
                    })
                    .filter((review) => review.agree); // تصفية التعليقات التي تحتوي على agree = true

                setReviewData(reviews);
            } catch (error) {
                console.error("Error fetching reviews:", error);
            }
        };

        const checkRegistrationTime = async () => {
            if (user) {
                const userDocRef = doc(db, "users", user.uid);
                const userDoc = await getDoc(userDocRef);

                if (userDoc.exists()) {
                    const userData = userDoc.data();
                    const registrationTime = new Date(userData.sendDataAt);
                    const currentTime = new Date();
                    const timeDifference = (currentTime.getTime() - registrationTime.getTime()) / 1000;

                    setCanSubmitReview(timeDifference >= 60);
                }
            }
        };

        fetchReviews();
        checkRegistrationTime();
    }, [user]);


    const handleReviewSubmit = async () => {
        if (!reviewText.trim()) {
            alert("من فضلك قم بكتابة تعليقك.");
            return;
        }

        if (!canSubmitReview) {
            alert("You must wait at least 1 minute after registration to submit a review.");
            return;
        }

        if (user) {
            const newReview: DataType = {
                userUid: user.uid,
                review: reviewText,
                name: user.displayName || 'Anonymous',
                imgSrc: user.photoURL || '',
                agree: false,
            };

            try {
                await addDoc(collection(db, 'reviews'), newReview);
                setReviewText('');
                alert("لقد تم تقديم تعليقك للمراجعة.");
                window.location.reload();
            } catch (error) {
                console.error("Error adding review: ", error);
                alert("Failed to submit your review. Please try again.");
            }
        } else {
            alert("يرجى تسجيل الدخول أولا.");
        }
    };

    return (
        <div className="flex py-10 sm:py-10 bg-[skyblue] bg-opacity-25" id="expert-section">
            <div className="mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8">
                <div className="text-center">
                    <Fade direction="up" delay={200} cascade damping={1e-1} triggerOnce={false}>
                        <h2 className="text-pink text-4xl font-normal mb-3 uppercase">
                            اراء المتدربين
                        </h2>
                    </Fade>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3   gap-6 justify-center items-center">
                    {myData.map((item) => (
                        <div key={item.userUid}
                        className="flex flex-col items-center justify-center text-center p-5"
                        >
                            <Image
                                className="rounded-full p-2"
                                src={item.imgSrc}
                                width={200}
                                height={200}
                                alt=""
                            />
                            <p className="text-center text-xl font-bold">{item.name}</p>
                            <p className="text-center">{item.review}</p>
                        </div>
                    ))}
                </div>

                <br />

                {/* {user ? (
                    reviewExists ? null :
                        !dataExists ?
                            <Link
                                className="text-xl w-full md:w-auto font-medium rounded-full text-white py-5 px-6 bg-pink lg:px-14"
                                href={"../registration"}
                            >
                                اشتري الخدمة لتكتب رأيك
                            </Link> :
                            (
                                <div className="flex flex-col justify-center items-center mt-9 gap-5">
                                    <input
                                        className="border-black border-2 rounded-full py-5 px-6"
                                        type="text"
                                        placeholder="Write your review..."
                                        value={reviewText}
                                        onChange={(e) => setReviewText(e.target.value)}
                                    />
                                    <button
                                        onClick={handleReviewSubmit}
                                        className="text-xl w-full md:w-auto font-medium rounded-full text-white py-5 px-6 bg-pink lg:px-14"
                                    >
                                        اكتب رأيك
                                    </button>
                                </div>
                            )
                ) : (
                    <div className="flex justify-center items-center mt-9">
                        <button className="text-xl w-full md:w-auto font-medium rounded-full text-white py-5 px-6 bg-pink lg:px-14">
                            <Link href="">
                                سجل لتكتب رأيك
                            </Link>
                        </button>
                    </div>
                )} */}
            </div>
        </div>
    );
}
