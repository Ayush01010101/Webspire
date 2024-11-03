'use client'

import { CiMenuBurger } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import {Montserrat} from 'next/font/google'
import { contactref, howitworksref } from "./Ref";
import { serviceref } from "./Ref";
const montserrat=Montserrat({
    subsets:['latin'],
    weight:"700"
})

function Navbar(){
    const handleservice=(ref)=>{
        setisOpen(false)
        ref.current?.scrollIntoView({ behavior: "smooth" });
    }
    
    const handlehow=(ref)=>{
        setisOpen(false)
        ref.current?.scrollIntoView({ behavior: "smooth" });
        
    }
    const handlecontact=(ref)=>{
        setisOpen(false)
        ref.current?.scrollIntoView({ behavior: "smooth" });

    }

    const [isOpen,setisOpen]=useState(false)
    
    return(
        <>
        <nav className="w-full ">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16 ">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <span className={`font-bold text-3xl font-geist-sans text-[#FFFEFE]  ${montserrat.className}`}>Webspire</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#" className={`text-[#FFFEFE] hover:text-gray-900 transition-colors duration-200 ${montserrat.className}`}>
                            Home
                        </a>
                        <a onClick={()=>handleservice(serviceref)} className={`cursor-pointer text-[#FFFEFE] hover:text-gray-900 transition-colors duration-200 ${montserrat.className}`}>
                            Service
                        </a>
                        <a onClick={()=>handlehow(howitworksref)} className={`cursor-pointer text-[#FFFEFE] hover:text-gray-900 transition-colors duration-200  ${montserrat.className}`}>
                          How It Works ?
                        </a>
                        <a onClick={()=>handlecontact(contactref)} className={`cursor-pointer text-[#FFFEFE] hover:text-gray-900 transition-colors duration-200  ${montserrat.className}`}>
                           Contact Us
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button className={`p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none ${isOpen? 'hidden' :'block'}` }onClick={()=>setisOpen(!isOpen)}>
                            <CiMenuBurger className="h-6 w-6"  />
                        </button>
                        <button className={`p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none ${isOpen? 'block' :'hidden'}` }onClick={()=>setisOpen(!isOpen)}>
                            <RxCross2 className="h-6 w-6"  />
                        </button>
                        
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden absolute">
                    <div className={` w-screen  transform  transition-all duration-300 ease-in-out bg-white ${isOpen ? 'bg-white opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none hidden'}`}>
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200">
                                Home
                            </a>
                            <a onClick={()=>handleservice(serviceref)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
                                Service
                            </a>
                            <a onClick={()=>handlehow(howitworksref)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
                                How It Works?
                            </a>
                            <a onClick={()=>handlecontact(contactref)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
                                Contact
                            </a>
                        </div>
                    </div>
                </div>
                </div>
            
        </nav>

        </>
    )

}
export default Navbar