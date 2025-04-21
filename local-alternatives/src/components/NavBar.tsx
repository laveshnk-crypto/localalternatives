'use client';
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function NavBar() {
    const pathname = usePathname();
    const [showSideBar, setShowSideBar] = useState(false);
    
    return (
        <div>
            <nav className="fixed top-0 h-40 left-0 w-full flex items-center gap-10 px-10 pt-15 pb-10 border-b-2 bg-white/95 z-48">
                <button onClick={() => setShowSideBar(true)}>
                    <Image className="transisition-opacity opacity-100 hover:opacity-70 hover:scale-1.5 duration-300" src="/svgs/menuSVG.svg" alt="menu" width={50} height={50}></Image>
                </button>
                {/* <div className="font-baskerville text-2xl max-w-10">Local Alternatives</div> */}
                <Image className = "mr-20" src="/images/ailogo.png" alt="logo" width={200} height={200} />

            </nav>
            {/* Side Bar stuff */}
            <div className={`fixed rounded-br-3xl top-0 left-0 h-full w-40px lg:w- bg-red-300 shadow-lg z-50 transform transition-transform duration-300 ${showSideBar ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="relative flex flex-col lg:ml-5 h-full pt-10 px-4">
                    <div className="flex flex-col items-center w-full -mt-4">
                    <Image className = "hidden lg:block" src="/images/ailogo.png" alt="logo" width={200} height={200} />
                    <hr className="hidden lg:block w-full border-t-2 border-black -mt-6" />
                    </div>

                    <div className="mt-10 flex flex-col gap-4">
                        <div className="flex flex-row  items-center">
                            <Link href="/">
                                <Image src="/svgs/homeSVG.svg" alt="home" width={50} height={50} />
                            </Link>
                            <div className="ml-5 hidden text-black lg:block font-baskerville text-2xl"> Home </div>
                        </div>
                        <div className="flex flex-row items-center">
                            <Link href="/about.tsx">
                                <Image src="/svgs/aboutSVG.svg" alt="about" width={50} height={50} />
                            </Link>
                            <div className="ml-5 hidden text-black lg:block font-baskerville text-2xl"> About </div>
                        </div>
                        <div className="flex flex-row items-center">
                            <Link href="/disclaimers.tsx">
                                <Image src="/svgs/disclaimerSVG.svg" alt="disclaimer" width={50} height={50} />
                            </Link>
                            <div className="ml-5 hidden text-black lg:block font-baskerville text-2xl"> Disclaimers </div>
                        </div>
                        <div className="flex flex-row items-center">
                            <Link href="https://www.linkedin.com/in/lavesh-nama-kamalesh-1b7938193/">
                                <Image src="/svgs/devSVG.svg" alt="contact" width={50} height={50} />
                            </Link>
                            <div className="ml-5 hidden text-black lg:block font-baskerville text-2xl"> Contact me! </div>
                        </div>
                    </div>
                </div>
            </div>


            {showSideBar && (
                <div className="fixed inset-0 bg-black opacity-50 z-49"
                onClick={() => setShowSideBar(false)}></div>
            )}
        </div>
    );
}