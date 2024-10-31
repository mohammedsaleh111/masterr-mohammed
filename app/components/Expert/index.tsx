"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";

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

// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            // centerMode: true,
            slidesToScroll: 1,
            arrows: false,
            autoplay: false,
            speed: 4000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 450,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
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
                        </div> )}
                    </div>

                    <div className="flex justify-center  items-center mt-9">
                    <button className=' text-xl w-full md:w-auto font-medium rounded-full text-white py-5 px-6 bg-pink lg:px-14 mr-6'><Link href=''> اكتب رأيك </Link></button>

                    </div>

                </div>
            </div>

        );
    }
}
