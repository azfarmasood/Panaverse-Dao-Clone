"use client"
import LineHeight from "@/asserts/images/lines-light.webp"
import Wrapper from "@/components/shared/Wrapper"
import Image from "next/image"
import Link from "next/link"
import HeroImage from "@/asserts/images/core-track-tech.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const Ai_Hero_Sections = () => {
  useEffect(() =>{
    AOS.init({
      disable: "mobile"
    });
  })
  return (
    <section className="bg-slate-800 py-10 sm:py-16 relative" data-aos="fade" data-aos-offset="200" data-aos-delay="50" data-aos-duration="3000" data-aos-easing="ease-in-out" data-aos-once="true">
        <div className="absolute inset-0 h-full w-full">
            <Image src={LineHeight} alt="Image"/>
        </div>
        <Wrapper>
          <div className="flex flex-col items-center sm:flex-row xl:gap-x-12 z-10">

            <div className="flex-1 gap-10 max-w-screen-md">
            <h4 className="text-base sm:text-xl text-teal-500 font-bold">Specalize Track</h4>
              <h1 className="text-3xl sm:text-text-space font-bold sm:leading-75 text-white">Artificial Intelligence (AI) and Deep Learning Specialization</h1>
              <p className="sm:text-lg text-p leading-6 sm:leading-0 text-white font-bold mt-6">The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.</p>

              <div className="mt-6">
              <Link href={"https://portal.piaic.org/signup"}>
              <button className="rounded-full hover:bg-black duration-2000 sm:mt-2 cursor-pointer z-0 bg-teal-500 sm:px-6 sm:py-13px px-4 py-2.5 text-base sm:text-xl text-white font-bold relative">Enroll Now</button>
              </Link>
              </div>

            </div>

            <div className="flex-1 flex justify-center">
              <Image src={HeroImage} alt="Image" className="w-full sm:w-9/12"/>
            </div>

          </div>
        </Wrapper>
    </section>
  )
}

export default Ai_Hero_Sections