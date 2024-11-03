'use client'

import Men from '../public/assets/men.png'
import Woman from '../public/assets/woman.png'
import Girl from '../public/assets/girl.png'
import { howitworksref } from './Ref'
function Howitworks(){

    return(
        <>
           <div className="div" ref={howitworksref}>

          
            <div className="howitworks w-full flex justify-center items-center mt-8 sm:mt-12 md:mt-16 px-2 sm:px-4" >
                <div className="container flex flex-col items-center gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center tracking-wide px-2">
                        How It Works ?
                    </h1>
                    
                    <div className="steps flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-12 mt-4 sm:mt-6 md:mt-8 w-full px-4 sm:px-6">
                        {/* Step 1 */}
                        <div className="step-card flex flex-col items-center p-4 sm:p-6 md:p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50 transform hover:scale-105 hover:-translate-y-2 border border-gray-100 w-full md:w-1/3">
                            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 relative mb-4 sm:mb-5 md:mb-6">
                                <img 
                                    src={Men.src} 
                                    alt="Order Process" 
                                    className="w-full h-full object-contain transform transition-transform duration-300 hover:rotate-6 filter drop-shadow-lg"
                                />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-gray-800 text-center">1. Place Your Order</h3>
                            <p className="text-center text-sm sm:text-base text-gray-600 leading-relaxed">
                                Share your business needs and requirements with us to get started
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="step-card flex flex-col items-center p-4 sm:p-6 md:p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50 transform hover:scale-105 hover:-translate-y-2 border border-gray-100 w-full md:w-1/3">
                            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 relative mb-4 sm:mb-5 md:mb-6">
                                <img 
                                    src={Woman.src} 
                                    alt="Template Selection" 
                                    className="w-full h-full object-contain transform transition-transform duration-300 hover:rotate-6 filter drop-shadow-lg"
                                />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-gray-800 text-center">2. Choose Template</h3>
                            <p className="text-center text-sm sm:text-base text-gray-600 leading-relaxed">
                                Select from our curated collection of professional templates
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="step-card flex flex-col items-center p-4 sm:p-6 md:p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50 transform hover:scale-105 hover:-translate-y-2 border border-gray-100 w-full md:w-1/3">
                            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 relative mb-4 sm:mb-5 md:mb-6">
                                <img 
                                    src={Girl.src} 
                                    alt="Final Delivery" 
                                    className="w-full h-full object-contain transform transition-transform duration-300 hover:rotate-6 filter drop-shadow-lg"
                                />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-gray-800 text-center">3. Get Your Website</h3>
                            <p className="text-center text-sm sm:text-base text-gray-600 leading-relaxed">
                                Receive your fully optimized and responsive website
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )

}

export default Howitworks