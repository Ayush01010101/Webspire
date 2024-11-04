'use client'
import { headingref } from "./Ref"

function Info(){
    const handleservice=(ref)=>{
     
        ref.current?.scrollIntoView({ behavior: "smooth" });
    }


    return(
      <footer className="bg-gray-50 mt-10 text-gray-800 py-8 px-6  ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 shadow-lg rounded-md p-10">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-2">WebSpire</h2>
          <p className="text-sm">
            We help small businesses establish a strong online presence by
            creating tailored, professional websites that showcase their unique
            identity and services.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a onClick={()=>handleservice(headingref)} className="hover:text-blue-600">
                Services
              </a>
            </li>
            <li>
              <a onClick={()=>handleservice(headingref)} className="hover:text-blue-600">
                About Us
              </a>
            </li>
           
            <li>
              <a href="tel:+918857967630" className="hover:text-blue-600">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="text-sm">
            Email:{" "}
            <a href="mailto:contact@webspire.com" className="hover:text-blue-600">
              contact@webspire.com
            </a>
          </p>
          <p className="text-sm">
            Phone:{" "}
            <a href="tel:+918857967630 " className="hover:text-blue-600">
                +91 88579 67630 
                
                
                
            </a>
            
          </p>
          
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 border-t border-gray-300 pt-4 text-center text-sm">
        <p>&copy; 2024 WebSpire. All rights reserved.</p>
      </div>
    </footer>
    )

}

export default Info