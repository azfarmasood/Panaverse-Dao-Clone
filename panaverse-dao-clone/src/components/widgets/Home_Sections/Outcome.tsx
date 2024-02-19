"use client"
import Wrapper from "@/components/shared/Wrapper"
import Image from "next/image"
import outcome from "@/asserts/images/outcomeposter.webp"
import { Headingdata } from "@/components/shared/BoxData"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Outcome = () => {
    useEffect(() =>{
        AOS.init({
          disable: "mobile"
        });
      })
  return (
    <Wrapper>
    <section className="mt-16 sm:mt-28">
      <div className="flex gap-x-8 items-center flex-col-reverse sm:flex-row">
        <div className="flex-1 mt-10 sm:mt-auto" data-aos="fade-left" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2500" data-aos-easing="ease-in-out" data-aos-once="true">
            <Image src={outcome} alt="poster" width={570}/>
        </div>

            <div className="flex-1" data-aos="fade-right" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2500" data-aos-easing="ease-in-out" data-aos-once="true">
                <h2 className="text-4xl sm:text-5xl  font-bold">The Outcome for Participants of the Program</h2>
                <p className="mt-6 text-21 sm:text-19 leading-7 text-#00616c font-medium">As a graduate of this program, you will own valuable products such as Full-Stack App Templates, AR and VR Experiences, and APIs that are marketed globally by the Panaverse DAO. You will also have the opportunity to offer your services at a rate of $50 per hour, providing a path to financial stability while contributing to the growth of Pakistan's software exports.</p>
                <div className="mt-6 grid grid-cols-2 gap-x-2 gap-y-1 sm:gap-y-4 sm:whitespace-pre-line">
                    {
                        Headingdata.map((Data) => (
                            <div key={Data} className="flex items-center gap-x-4">
                                <svg className="flex-none h-8 w-8 sm:h-10 sm:w-10" width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.3431 5.65686C23.4673 2.53266 28.5327 2.53266 31.6569 5.65685L46.3431 20.3431C49.4673 23.4673 49.4673 28.5327 46.3431 31.6569L31.6569 46.3431C28.5327 49.4673 23.4673 49.4673 20.3431 46.3431L5.65686 31.6569C2.53266 28.5327 2.53266 23.4673 5.65685 20.3431L20.3431 5.65686Z" fill="url(#paint0_radial_35_416)"></path><path fillRule="evenodd" clipRule="evenodd" d="M17 24.9206C19.0707 25.3461 21.734 26.1698 23.75 27.465C26.1178 24.3345 30.371 21.406 35 19C30.6042 23.2739 26.9668 28.1236 24.5 33C22.5118 30.2129 20.3398 27.6189 17 24.9206Z" fill="white"></path><defs><radialGradient id="paint0_radial_35_416" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(16.5455 -6.96429) rotate(59.1918) scale(77.3011 169.686)"><stop offset="0.125" stopColor="#00E1F0"></stop><stop offset="1" stopColor="#00616C"></stop></radialGradient></defs></svg>

                                <h3 className="font-medium text-20p sm:text-xl">{Data}</h3>
                            </div>
                        ))
                    }
                </div>
            </div> 
        </div>
    </section>
    </Wrapper>
  )
}

export default Outcome
