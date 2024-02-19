"use client"
import Link from "next/link"
import Image from "next/image"
import LineHeight from "@/asserts/images/lines-light.webp"
import Wrapper from "@/components/shared/Wrapper"
import HeroImage from "@/asserts/images/core-track-tech.png"
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
    <section className="relative bg-slate-800 py-10 sm:py-16 sm:mt-4" data-aos="fade" data-aos-offset="200" data-aos-delay="50" data-aos-duration="3000" data-aos-easing="ease-in-out" data-aos-once="true">
        <div className="image absolute inset-0 h-full w-full">
        <Image src={LineHeight} alt="image"/>
        </div>
        <Wrapper>
            <main>
                <div className="flex flex-col sm:flex-row items-center z-10 xl:gap-x-12 sm:mt-4">
                    <div className="Content flex-1 gap-10 max-w-screen-sm">
                        <h4 className="text-base sm:text-lg text-teal-500 font-bold">Specialized Track</h4>
                        <h2 className="text-white font-bold sm:leading-85 sm:text-6xl text-4xl max-w-screen-md">Genomics and Bioinformatics Specialization</h2>
                        <p className="sm:text-lg text-p leading-6 sm:leading-0 text-white font-bold mt-6">Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.</p>
                        <div className="mt-6">
                        <Link href={"https://portal.piaic.org/signup"}>
                        <button className="rounded-full hover:bg-black duration-2000 sm:mt-2 cursor-pointer z-0 bg-teal-500 sm:px-6 sm:py-13px px-4 py-2.5 text-base sm:text-xl text-white font-bold relative">Enroll Now</button>
                        </Link>
                        </div>
                    </div>

                    <div className="flex-1 flex justify-center sm:mt-0 mt-10">
                        <Image src={HeroImage} alt="image" className="w-full sm:w-9/12"/>
                    </div>

                </div>
            </main>
        </Wrapper>
    </section>
  )
}
export default Hero_Section