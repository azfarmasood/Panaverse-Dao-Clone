"use client"
import LineHeight from "@/asserts/images/lines-light.webp"
import Wrapper from "@/components/shared/Wrapper"
import Image from "next/image"
import Link from "next/link"
import HeroImage from "@/asserts/images/core-track-tech.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
function CoreTrack_HeroSection() {
    useEffect(() =>{
        AOS.init({
          disable: "mobile"
        });
      })
  return (
    <section data-aos="fade" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">
        <main className="relative bg-slate-800 py-10 sm:py-16">
            <div className="absolute inset-0 w-full h-full">
                <Image src={LineHeight} alt="image"/>
            </div>
            <Wrapper>
                <div className="flex flex-col items-center sm:flex-row gap-x-10  sm:gap-y-8 xl:gap-x-12">
                    <div className="flex-1">
                        <h6 className="text-emerald-400 font-bold sm:text-lg text-base">Core Track</h6>
                        <h1 className="text-white font-bold sm:text-6xl text-3xl whitespace-pre-line sm:leading-85">{`Comman in All\nSpecializations`}</h1>
                        <p className="text-white font-bold text-sm sm:text-lg mt-6">Every participant of the program will Cover the following three quarters</p>
                        <Link href={"https://portal.piaic.org/signup"}>
                        <button className="mt-10 rounded-full relative hover:bg-black duration-2000 sm:text-xl text-base font-bold text-white bg-teal-500 px-6 py-13px">Enroll Now</button>
                        </Link>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <Image src={HeroImage} alt="image" className="w-full sm:w-9/12"/>
                    </div>
                </div>
            </Wrapper>
        </main>
    </section>
  )
}

export default CoreTrack_HeroSection
