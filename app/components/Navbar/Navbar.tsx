
import { Dialog, Disclosure } from '@headlessui/react';
import Link from 'next/link';
import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Image from 'next/image';
import { useAuth } from "../../hooks/useAuth";

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'المقدمة', href: '#home-section', current: false },
    { name: 'عن التشي كونغ', href: '#chi-section', current: false },
    { name: 'مزايا التدريب', href: '#about-section', current: false },
    { name: 'طريقة التدريب', href: '#cook-section', current: false },
    { name: 'اراء المتدربين', href: '#expert-section', current: false },
    { name: 'معرض الصور', href: '#gallery-section', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {

    const [isOpen, setIsOpen] = React.useState(false);

    const { user, signInWithGoogle } = useAuth();

    return (
        <Disclosure as="nav" className="navbar bg-[green] bg-opacity-10">
            <>
                <div className="p-3 md:p-6 lg:px-8 bg-[green] bg-opacity-15">
                    <div className="relative flex h-12 sm:h-14 lg:h-16 items-center">
                        <div className="flex flex-1 items-center sm:justify-between">

                            {/* LOGO */}

                            <div className="flex sm:hidden flex-shrink-0 items-center border-right">

                                <Image src="/images/Logo/icon.png" alt="logo" width={36} height={36} />
                                <Link href="/" className='text-lg sm:text-2xl lg:text-2xl font-semibold text-black ml-4'>
                                    أكاديمية التشي كونغ
                                </Link>
                            </div>
                            <div className="hidden sm:flex flex-shrink-0 items-center border-right">
                                <Image src="/images/Logo/icon.png" alt="logo" width={56} height={56} />
                                <Link href="/" className='text-lg sm:text-2xl lg:text-2xl font-semibold text-black ml-2'>
                                    أكاديمية التشي كونغ
                                </Link>
                            </div>

                            {/* LINKS */}

                            <div className="hidden lg:flex items-center border-right ">
                                <div className="flex justify-end space-x-4">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current ? ' bg-black' : 'navlinks flex flex-row  hover:opacity-100',
                                                ' px-3 py-4 rounded-md text-md font-normal opacity-50 hover:text-black space-links'
                                            )}
                                            aria-current={item.href ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>

                            </div>

                            <div className='ml-12'>
                                {user ? (
                                    <img
                                        src={user.photoURL || ""}
                                        alt= {user.displayName ??''}
                                        className="rounded-full w-10 h-10"
                                    />
                                ) : (
                                    <a onClick={signInWithGoogle} className="cursor-pointer hover:text-lg">
                                        تسجيل الدخول
                                    </a>
                                )}
                            </div>

                        </div>

                        {/* DRAWER FOR MOBILE VIEW */}

                        {/* DRAWER ICON */}

                        <div className='block lg:hidden'>
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" onClick={() => setIsOpen(true)} />
                        </div>

                        {/* DRAWER LINKS DATA */}

                        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                            <Drawerdata />
                        </Drawer>

                    </div>
                </div>
            </>
        </Disclosure>
    )
}

export default Navbar;
