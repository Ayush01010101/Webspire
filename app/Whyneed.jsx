'use client'
import Frontrect from '../public/assets/frontrect.png'
import Backrect from '../public/assets/backrect.png'
import Image from 'next/image';
import Laptops from '../public/assets/laptops.png'
import { Montserrat } from 'next/font/google';
const montserrat=Montserrat({
    subsets:['latin'],
    weight:"700"
    
})
const montserratthin=Montserrat({
    subsets:['latin'],
    weight:"400"
    
})

function Whyneed(){

    return (
        <>
            <div className="min-h-screen w-full flex justify-center items-center p-4 sm:p-6 md:p-8">
                <div className="content relative w-full max-w-[90vw] md:w-[80vw] min-h-[80vh] md:h-[70vh] overflow-hidden rounded-2xl  bg-[#cc6e49] ">
                    
                    {/* Title */}
                    <div className="w-full p-4 sm:p-6 md:p-8 text-center">
                        <h1 className={`text-white text-2xl sm:text-3xl md:text-4xl ${montserrat.className}`}>
                            Why You Need Website 
                        </h1>
                    </div>

                    {/* Main content container */}
                    <div className="flex flex-col md:flex-row h-full w-full p-4 sm:p-6 md:p-8 gap-8  border-red-600 overflow-hidden ">
                        {/* Left side content */}
                        <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6 ">
                            <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold">
                                Boost Your Online Presence
                            </h2>
                            <ul className={` ${montserratthin.className} text-white space-y-4 list-disc pl-5`}>
                                <li className="text-base sm:text-lg">24/7 Visibility to potential customers</li>
                                <li className="text-base sm:text-lg">Build credibility and trust</li>
                                <li className="text-base sm:text-lg">Showcase your products and services</li>
                                <li className="text-base sm:text-lg">Reach wider audience globally</li>
                                <li className="text-base sm:text-lg">Generate leads and increase sales</li>
                            </ul>
                            
                        </div>

                        {/* Right side image */}
                        <div className="w-full md:w-1/2 relative flex items-center justify-center ">
                            <div className="relative w-full h-[300px] sm:h-[400px]">
                                <Image
                                    src={Frontrect.src}
                                    alt="background rectangle"
                                    layout="fill"
                                    objectFit="contain"
                                    className="absolute z-0"
                                />
                                <Image
                                    src={Laptops.src}
                                    alt="laptops"
                                    layout="fill"
                                    objectFit="contain"
                                    className="transform hover:scale-105 transition-transform duration-300 z-10 relative"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Whyneed