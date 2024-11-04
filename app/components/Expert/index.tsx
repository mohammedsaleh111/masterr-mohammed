"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import { useAuth } from "../../hooks/useAuth";
import checkReviewData from "../../hooks/checkReviewData";
import { doc, getDocs, addDoc, collection } from "firebase/firestore";
import { db } from "../../../lib/firebase";


// CAROUSEL DATA
interface DataType {
    userUid: string;
    review: string;
    name: string;
    imgSrc: string;
}


export default function MultipleItems() {

    const { user, signInWithGoogle } = useAuth();
    const reviewExists = checkReviewData();
    const [reviewText, setReviewText] = useState(''); // State for input
    const [reviewData, setReviewData] = useState<DataType[]>([]);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const reviewsCollection = collection(db, "reviews");
                const reviewDocs = await getDocs(reviewsCollection);
                const reviews = reviewDocs.docs.map((doc: any) => ({
                    id: doc.id,
                    ...doc.data(),
                })) as DataType[];

                setReviewData(reviews);

                console.log(reviewData.length);


            } catch (error) {
                console.error("Error fetching reviews:", error);
            }
        };

        fetchReviews();
    }, []);


    const handleReviewSubmit = async () => {
        if (!reviewText.trim()) {
            alert("Please enter your review.");
            return;
        }

        if (user) {
            const newReview: DataType = {
                userUid: user.uid,
                review: reviewText,
                name: user.displayName || 'Anonymous', // User's name from Google account
                imgSrc: user.photoURL || '', // User's image from Google account
            };

            try {
                // Add the new review to the "reviews" collection
                await addDoc(collection(db, 'reviews'), newReview);
                alert("Your review has been submitted!");
                setReviewText(''); // Clear the input field after submission
                
            } catch (error) {
                console.error("Error adding review: ", error);
                alert("Failed to submit your review. Please try again.");
            }
        } else {
            alert("You must be signed in to submit a review.");
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
                    {reviewData.map((item) => <div key={item.name} >
                        <Image className=" rounded-full" src={item.imgSrc} width={150} height={150} alt=""></Image>
                        <p className=" text-center text-xl font-bold">
                            {item.name}
                        </p>
                        <p className=" text-center">
                            {item.review}
                        </p>
                    </div>)}
                </div>

                {user ? reviewExists ? <div className="flex justify-center  items-center mt-9">

                </div> : <div className="flex flex-col justify-center  items-center mt-9 gap-5">
                    <input
                        className="border-black border-2 rounded-full py-5 px-6"
                        type="text"
                        placeholder="Write your review..."
                        value={reviewText}
                        onChange={(e) => setReviewText(e.target.value)}
                    />
                    <button
                        onClick={handleReviewSubmit}
                        className=' text-xl w-full md:w-auto font-medium rounded-full text-white py-5 px-6 bg-pink lg:px-14 mr-6'>
                        اكتب رأيك
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
