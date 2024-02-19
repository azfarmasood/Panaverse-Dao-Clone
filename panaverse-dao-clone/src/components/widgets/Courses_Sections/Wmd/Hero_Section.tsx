"use client"
import Link from "next/link"
import Image from "next/image"
import Lineheight from "@/asserts/images/lines-light.webp"
import Wrapper from "@/components/shared/Wrapper"
import CoreTracks from "@/asserts/images/core-track-tech.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Hero_Section = () => {
  useEffect(() =>{
    AOS.init({
      disable: "mobile"
    });
  })
  return (
    <section className="bg-slate-800 py-10 sm:py-16 relative " data-aos="fade" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">
      <div className="h-full w-full absolute inset-0 whitespace-pre-line">
        <Image src={Lineheight} alt="Image" className="object-cover w-full min-h-300px"/>
      </div>

      <Wrapper>
      <div className="mt-8 flex flex-col sm:flex-row items-center gap-y-10 sm:gap-x-8 xl:gap-x-12 z-10 " >
        <div className="flex-1 max-w-screen-md">
        <h2 className="text-base sm:text-lg text-teal-500 font-bold">Specalize Track</h2>
        <h1 className="mt-2 sm:leading-75 text-3xl sm:text-5xl max-w-2xl text-white font-bold">Web 3.0 (Blockchain) and Metaverse Specialization</h1>
        <p className="text-white max-w-4xl sm:max-w-2xl mt-4 font-bold text-p sm:text-lg">This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.</p>
        <div className="mt-6">
          <Link href={"https://portal.piaic.org/signup"}>
          <button className="rounded-full hover:bg-black duration-2000 sm:mt-2 cursor-pointer z-0 bg-teal-500 sm:px-6 sm:py-13px px-4 py-2.5 text-base sm:text-xl text-white font-bold relative">Enroll Now</button>
          </Link>
        </div>
      </div>
      <div className="flex-1 flex justify-center">
            <Image src={CoreTracks} alt="Image" className="w-full sm:w-3/4"/>
        </div>
        </div>

        </Wrapper>

    </section>
  )
}

export default Hero_Section
