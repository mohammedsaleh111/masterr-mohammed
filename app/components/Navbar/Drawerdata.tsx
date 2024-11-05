import React from "react";
import Link from "next/link";
import CustomButton from "../CustomButton";


interface NavigationItem {
    name: string;
    href: string;
}

const navigation: NavigationItem[] = [
    { name: 'المقدمة', href: '#home-section' },
    { name: 'مزايا التدريب', href: '#about-section' },
    { name: 'طريقة التدريب', href: '#cook-section' },
    { name: 'اراء المتدربين', href: '#expert-section' },
    { name: 'معرض الصور', href: '#gallery-section' },
]


export default function Data () {

    return (
        <div className="rounded-md max-w-sm w-full mx-auto">
            <div className="flex-1 space-y-4 py-1">
                <div>
                    <div className="flex flex-col space-y-1 px-5 pt-2 pb-3">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className='text-black py-2 rounded-md text-base font-medium hover:bg-gray-900'
                            >
                                {item.name}
                            </Link>
                        ))}
                        <br />

                        <CustomButton />

                    </div>
                </div>
            </div>
        </div>
    );
}
