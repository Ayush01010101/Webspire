import { Montserrat } from "next/font/google"
import Seo from '../public/assets/seo.png'
import Security from '../public/assets/security.jpg'
import Web from '../public/assets/web.png'
import { serviceref } from "./Ref"
const montserrat=Montserrat({
    subsets:['latin'],
    weight:"700"
    
})
const montserratthin=Montserrat({
    subsets:['latin'],
    weight:"400"
    
})

function Service(){
    return(
        <>
            <div className="service w-full flex justify-center items-center mt-6 px-4" ref={serviceref}>
                <div className="div flex flex-col justify-center items-center gap-7">
                    <h1 className={`${montserratthin.className} text-2xl md:text-3xl text-center`}>
                        Services
                    </h1>

                    <div className="div">
                        <h1 className={`${montserrat.className} text-3xl md:text-4xl tracking-wider text-center`}>
                           What We Offer
                        </h1>
                    </div>

                    <div className="div text">
                        <p className="w-full md:w-[40vw] md:text-xl text-center tracking-wide px-4">
                        We engage in integrated digital marketing strategies to ensure 
                        you've got all your bases covered.
                        </p>
                    </div>
                    <div className="images mt-10 flex flex-col md:flex-row gap-8 w-[65vw] px-4  md:justify-center md:items-center md:h-[40vh] ">    
                        <div className="card flex flex-col items-center p-6 rounded-lg shadow-2xl hover:shadow-2xl transition-all duration-300 bg-white transform hover:scale-105 hover:-translate-y-2 hover:rotate-2 w-full md:w-auto">
                            <div className="w-24 md:w-32 h-24 md:h-32 relative ">
                                <img src={Web.src} alt="Web Development" className="w-full h-full object-contain transform transition-transform duration-300 hover:scale-110" />
                            </div>
                            <p className={`${montserratthin.className} mt-4 text-center text-gray-700`}>
                                Free Domain
                            </p>
                        </div>

                        <div className="card flex flex-col items-center p-6 rounded-lg shadow-2xl hover:shadow-2xl transition-all duration-300 bg-white transform hover:scale-105 hover:-translate-y-2 hover:rotate-2 w-full md:w-auto">
                            <div className="w-24 md:w-32 h-24 md:h-32 relative">
                                <img src={Seo.src} alt="SEO Services" className="w-full h-full object-contain transform transition-transform duration-300 hover:scale-110" />
                            </div>
                            <p className={`${montserratthin.className} mt-4 text-center text-gray-700`}>
                                SEO Optimization
                            </p>
                        </div>

                        <div className="card flex flex-col items-center p-6 rounded-lg shadow-2xl hover:shadow-2xl transition-all duration-300 bg-white transform hover:scale-105 hover:-translate-y-2 hover:rotate-2 w-full md:w-auto">
                            <div className="w-24 md:w-32 h-24 md:h-32 relative">
                                <img src={Security.src} alt="Security Services" className="w-full h-full object-contain transform transition-transform duration-300 hover:scale-110" />
                            </div>
                            <p className={`${montserratthin.className} mt-4 text-center text-gray-700`}>
                                Fully Secured Website
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Service