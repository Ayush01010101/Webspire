import Mainbg from '../public/assets/mainbg.png'
import Round from '../public/assets/roundorange.png'
import Image from 'next/image'
import Laptop from '../public/assets/laptop-image.png'
import { Montserrat } from 'next/font/google'
const montserrat=Montserrat({
    subsets:['latin'],
    weight:"700"
    
})
const montserratthin=Montserrat({
    subsets:['latin'],
    weight:"400"
    
})
function Main() {
    return (
        <>
           <div className="div flex justify-center items-center w-screen mt-10">
                <div className="whatwedo w-[70vw] bg-white rounded-lg shadow-2xl p-8 transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="w-full md:w-1/3">
                            <img 
                                src={Laptop.src}
                                alt="Laptop"
                                className="w-full h-auto object-contain transform transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                        <div className="w-full md:w-2/3">
                            <div className={`text ${montserrat.className}`}>
                                <h1 className='md:text-4xl tracking-wider text-gray-800 mb-6'>What We Do?</h1>
                            </div>
                            <div className="para md:text-lg text-left tracking-wide">
                                <p className={`text-gray-700 leading-relaxed hover:text-gray-900 transition-colors duration-300 ${montserratthin.className}`}>
                                    At WebSpire, we create websites designed specifically for small businesses to help them thrive in the digital landscape. Our tailored web solutions empower you to reach a wider audience, showcase your products and services, and build meaningful relationships with your customers. A professional website enhances your credibility, making it easier for potential clients to trust your brand. With user-friendly designs, optimized performance, and mobile responsiveness, we ensure that your website not only looks great but also functions seamlessly. By investing in a strong online presence, you can boost visibility, drive more traffic, and ultimately increase sales. Let us partner with you to elevate your business and unlock its full potential online!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="div">
                    
                </div>
           </div>
        </>
    )
}

export default Main