"use client";
import Orange from "../public/assets/Orange.png";
import Image from "next/image";
import Navbar from "./Navbar";
import Earth from "../public/assets/earth.png";
import { Typewriter } from "react-simple-typewriter";
import {Montserrat} from 'next/font/google'
import Laptop from '../public/assets/laptop.png'
import { redirect } from "next/dist/server/api-utils";
const montserrat=Montserrat({
    subsets:['latin'],
    weight:"700"
    
})
const montserratthin=Montserrat({
    subsets:['latin'],
    weight:"400"
    
})


function Header() {
  const handleChat = () => {
    window.location.href = "https://wa.me/917798483419";
  };

  return (
    <>
      <div className="div h-screen w-screen ">
        <div className="relative w-full h-full">
          <Image src={Orange} alt="Orange background" fill priority />
          <div className="absolute w-full">
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 md:mt-20   mt-10">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="w-full md:w-1/2 text-white mb-8 md:mb-0 space-y-5 md:space-y-7">
                  <h1
                    className={`${montserrat.className} md:text-6xl text-6xl`}
                  >
                     Empower  Businesses to{" "}
                    <span  className={`text-green-700    block`}>
                      {/* Style will be inherited from the parent element */}
                      <Typewriter
                        words={["Grow", "Succeed", "Shine", "Stand Out", "Connect"]}
                        loop={5}
                        cursor
                        cursorStyle="|"
                        typeSpeed={120}
                        deleteSpeed={150}
                        delaySpeed={2000}
                        cursorColor="white"
                       
                      />
                    </span>
                  </h1>

                <div className="lower space-y-3 md:space-y-4">
                  <h1 className={`md:text-3xl text-3xl ${montserratthin.className}`}>
                    Book a free trial now
                  </h1>
                  <button  className=" font-bold bg-white text-gray-700 px-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-500 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105" onClick={handleChat}>
                    Chat With Us
                  </button>

                </div>
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                  <div className="relative w-64 h-64 md:w-96 md:h-96 ">
                    <Image
                      src={Earth}
                      alt="Earth illustration"
                      fill
                      className="object-contain"
                    />
                      <Image
                        src={Laptop}
                        alt="Earth illustration"
                        width={200}
                        height={100}                        
                        className="object-contain absolute bottom-28 right-8 md:top-0 md:right-24"
                      />
                  </div>
                </div>
              </div>
            </div>
            <div className="trusted flex w-full justify-center items-center md:items-end  h-32 ">
              <h1 className={`text-white ${montserratthin.className} tracking-wider mb-14 md:mb-0 `}>
              Trusted and valued by 1000+ customers 
              </h1>
            </div>
          
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
