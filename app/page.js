'use client'
import Image from "next/image"
import Header from "./Header";
import Service from "./Service";
import Footer from "./Footer";
import Main from "./Main";
import Howitworks from "./Howitworks";
import Whyneed from "./Whyneed";
import Contact from "./Contact";
export default function Home() {
  return (
      <>
        <div className="div w-screen h-screen ">
       
        <Header />
        <Service/>
        <div className="div md:block hidden">

        <Main/>
        </div>
        <Howitworks/>
        <Whyneed/>
        <Contact/>
        <Footer/>
        </div>

      </>
  );
}
