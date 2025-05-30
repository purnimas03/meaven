'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-[#ffedd6]   py-[10px]   max-2xl:py-0 sticky top-0 z-[999]">
            <div className="relative">
                <div className="container max-2xl:!pr-0">
                    <div className="flex gap-x-40  max-3xl:gap-x-28 max-2xl:justify-between max-mmd:gap-x-4 max-xxl:gap-20 items-center">

                        <div>
                            <Link className='inline-block' href="/">
                                <Image
                                    src="/download.png"
                                    alt="headerlogo"
                                    width={307} // Adjust width accordingly
                                    height={76} // Adjust height accordingly
                                    className="max-2xl:max-w-56 max-1sxl:max-w-36 max-ssm:max-w-32 max-sxs:max-w-28 max-ssm:object-contain"
                                />
                            </Link>
                        </div>
                        <div
                            className={`max-mmd:fixed heads-wrap max-mmd:bg-[#ffedd6] z-[999] max-mmd:w-full max-mmd:h-full max-mmd:top-0 max-mmd:right-0 max-mmd:left-0 max-mmd:bottom-0 max-mmd:transition-transform max-mmd:duration-500 max-mmd:ease-in-out ${
                                menuOpen ? 'max-mmd:translate-x-0 max-mmd:opacity-100' : 'max-mmd:translate-x-full max-mmd:opacity-0'
                            }`}
                        >
                            <div className="menu-header-menu-container">
                                <ul className="menu md:flex items-center justify-center max-mmd:justify-start max-mmd:items-start max-mmd:flex max-mmd:flex-col">
                                    <li><Link href="/Weeklymealprep">Weekly Meal Prep</Link></li>
                                    <li><Link href="/dinner-parties">Dinner Parties</Link></li>
                                    <li><Link href="/maeven-athletics">Maeven Athletics</Link></li>
                                    <li><Link href="/Careers">Careers</Link></li>
                                </ul>
                            </div>
                            <FaTimes className="text-black text-xl closepopup hidden absolute right-3 top-4 max-mmd:block cursor-pointer"  onClick={() => setMenuOpen(false)} />
                            <div className="hidden max-mmd:block">
                                <Link href="https://maevenchef.kinex12.com">
                                    <Image
                                        src="https://maevenchef.kinex12.com/wp-content/uploads/2024/12/maevenlogo-svg.svg"
                                        alt="headerlogo"
                                        width={224} // Adjust width accordingly
                                        height={60} // Adjust height accordingly
                                        className="max-2xl:max-w-56 max-ssm:max-w-48 absolute top-5 left-5"
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className="absolute  max-2xl:static  right-0 -top-[10px] flex items-center gap-x-12 max-sxl:gap-x-6 max-ssm:gap-x-4">
                            <Link href="/maevenlogin" className="text-xl max-ssm:text-sm max-sxl:text-base text-black relative before:transnitone-anim_border before:-bottom-1 before:block before:h-[3px] before:w-0 before:bg-[#178b77] before:opacity-0 before:absolute hover:before:w-full hover:before:opacity-100 max-xxl:text-lg font-human-sansregular inline-block">Login</Link>
                            <Link href="/book-a-chef" className="bg-[#fedb00] px-3 max-ssm:text-sm max-sxl:text-base max-sxl:min-w-32 max-xxl:text-lg max-2xl:h-[77px] max-sxl:h-[60px] h-24 flex min-w-52 justify-center items-center text-xl text-black uppercase font-human-sansregular max-ssm:!min-auto transnitone-anim hover:bg-[#178b77] hover:text-white">Book a Chef</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#178c78] openmenu py-1 hidden max-mmd:block">
                <div className="container text-right">
                    <FaBars 
                        className="text-[#ffedd6] ml-auto cursor-pointer text-lg"
                        onClick={() => setMenuOpen(true)}
                    />
                </div>
            </div>
        </header>
    );
}
