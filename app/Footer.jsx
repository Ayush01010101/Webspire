import { Montserrat } from "next/font/google"
import Instagram from '../public/assets/instagram.webp'
import Whatsapp from '../public/assets/whatsapp.jpg'
import { redirect } from "next/dist/server/api-utils"

const montserrat=Montserrat({
    subsets:['latin'],
    weight:"700"
    
})
const montserratthin=Montserrat({
    subsets:['latin'],
    weight:"400"
    
})
function Footer(){
    
    const handleWhatsapp = () => {
        window.location.href = "https://wa.me/+917798483419";
    };

    const handleInstagram = () => {
        const message = document.createElement('div');
        message.innerHTML = 'Sorry, we don\'t have Instagram yet.';
        message.style.position = 'fixed';
        message.style.bottom = '10px';
        message.style.left = '10px';
        message.style.backgroundColor = 'white';
        message.style.padding = '10px';
        message.style.borderRadius = '5px';
        message.style.boxShadow = '0 0 10px rgba(0,0,0,0.2)';
        message.style.transition = 'transform 0.5s ease-in-out';
        message.style.transform = 'translateX(-100%)';
        setTimeout(() => {
            message.style.transform = 'translateX(0)';
        }, 0);
        document.body.appendChild(message);
        setTimeout(() => {
            message.style.transform = 'translateX(-100%)';
            setTimeout(() => {
                document.body.removeChild(message);
            }, 500);
        }, 2000);
    };

    return(
        <>
            <div className="footer w-full flex justify-center items-center mt-6 px-4">
                <div className="div flex flex-col justify-center items-center gap-7">
                    <h1 className={`${montserratthin.className} text-2xl md:text-3xl text-center`}>
                        Follow Us
                    </h1>

                    <div className="div">
                        <h1 className={`${montserrat.className} text-3xl md:text-4xl tracking-wider text-center`}>
                           Connect with us on social media
                        </h1>
                    </div>

                    <div className="div text">
                        <p className="w-full md:w-[40vw] md:text-xl text-center tracking-wide px-4">
                        Stay updated with our latest news and promotions.
                        </p>
                    </div>
                    <div className="images mt-10 flex flex-col md:flex-row gap-8 w-[65vw] px-4  md:justify-center md:items-center md:h-[40vh] ">    
                        <div  className="whatsappcard  flex flex-col items-center p-6 rounded-lg shadow-2xl hover:shadow-2xl transition-all duration-300 bg-white transform hover:scale-105 hover:-translate-y-2 hover:rotate-2 w-full md:w-auto" onClick={handleWhatsapp}>
                            <div className="w-24 md:w-32 h-24 md:h-32 relative ">
                                <img src={Whatsapp.src} alt="Whatsapp" className="w-full h-full object-contain transform transition-transform duration-300 hover:scale-110" />
                            </div>
                            <a  target="_blank" rel="noopener noreferrer" className={`${montserratthin.className} mt-4 text-center text-gray-700`}>
                                Whatsapp
                            </a>
                        </div>

                        <div className="instagramcard flex flex-col items-center p-6 rounded-lg shadow-2xl hover:shadow-2xl transition-all duration-300 bg-white transform hover:scale-105 hover:-translate-y-2 hover:rotate-2 w-full md:w-auto" onClick={handleInstagram}>
                            <div className="w-24 md:w-32 h-24 md:h-32 relative">
                                <img src={Instagram.src} alt="Instagram" className="w-full h-full object-contain transform transition-transform duration-300 hover:scale-110" />
                            </div>
                            <p className={`${montserratthin.className} mt-4 text-center text-gray-700`}>
                                Instagram
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Footer