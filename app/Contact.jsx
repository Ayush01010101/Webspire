"use client";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Contactus from "../public/assets/contactus.png";
import { useForm, ValidationError } from "@formspree/react";
import { contactref } from "./Ref";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "700",
});

const montserratthin = Montserrat({
  subsets: ["latin"],
  weight: "400",
});

function Contact() {
  const [state, handleSubmit] = useForm("myzyenay");

  if (state.succeeded) {
    return (
      <div className="min-h-screen w-full flex justify-center items-center p-4 sm:p-6 md:p-8">
        <div className="content flex justify-center items-center w-screen h-screen overflow-hidden rounded-2xl bg-[#cc6e49]">
          <p
            className={`text-white text-xl ${montserrat.className} text-center text-4xl p-8`}
          >
            Thanks for your submission!
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="div" ref={contactref}>
        <div className="min-h-screen w-full flex justify-center items-center p-4 sm:p-6 md:p-8">
          <div className="content relative w-full max-w-[90vw] md:w-[80vw] min-h-[80vh] md:h-[70vh] overflow-hidden rounded-2xl bg-[#cc6e49]">
            <div className="w-full p-4 sm:p-6 md:p-8 text-center">
              <h1
                className={`text-white text-2xl sm:text-3xl md:text-4xl ${montserrat.className}`}
              >
                Contact Us
              </h1>
            </div>

            <div className="flex flex-col md:flex-row w-full h-full p-4 sm:p-6 md:p-8 gap-8">
              {/* Left side - Image */}
              <div className="w-full md:w-1/2 relative flex justify-center">
                <div className="relative w-full h-[300px] sm:h-[400px]">
                  <style jsx>{`
                    @keyframes float {
                      0% {
                        transform: translateY(0px);
                      }
                      50% {
                        transform: translateY(-20px);
                      }
                      100% {
                        transform: translateY(0px);
                      }
                    }
                  `}</style>
                  <Image
                    src={Contactus.src}
                    alt="contact illustration"
                    layout="fill"
                    objectFit="contain"
                    className="transform hover:scale-105 transition-transform duration-300"
                    style={{ animation: "float 6s ease-in-out infinite" }}
                  />
                </div>
              </div>

              {/* Right side - Contact Form */}
              <div className="w-full md:w-1/2">
                <form
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className={`block text-white mb-2 ${montserratthin.className}`}
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                      placeholder="Enter your full name"
                    />
                    <ValidationError
                      prefix="Name"
                      field="name"
                      errors={state.errors}
                      className="text-white"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className={`block text-white mb-2 ${montserratthin.className}`}
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      pattern="[0-9]{10}"
                      inputMode="numeric"
                      maxLength={10}
                      required
                      className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                      placeholder="Enter your phone number (10 digits)"
                      onKeyPress={(e) => {
                        if (!/[0-9]/.test(e.key)) {
                          e.preventDefault();
                        }
                      }}
                    />
                    <ValidationError
                      prefix="Phone"
                      field="phone"
                      errors={state.errors}
                      className="text-white"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className={`block text-white mb-2 ${montserratthin.className}`}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white h-32"
                      placeholder="Enter your message"
                    ></textarea>
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                      className="text-white"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full bg-white text-[#cc6e49] py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50 active:sparkle-animation transform hover:-translate-y-1 hover:shadow-lg hover:scale-[1.02]"
                  >
                    Send Message
                  </button>
                  <ValidationError
                    errors={state.errors}
                    className="text-white"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
