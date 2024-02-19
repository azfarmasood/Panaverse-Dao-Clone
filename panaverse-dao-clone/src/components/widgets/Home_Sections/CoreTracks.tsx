"use client"
import Wrapper from "@/components/shared/Wrapper"
import Button from "@/components/shared/Button";
import { Boxdata } from "@/components/shared/BoxData";
import QuaterBoxes from "@/components/shared/QuaterBoxes";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const CoreTracks=()=> {
    const Heading = "Core Courses\n(Common in All Specializations)";
    useEffect(() =>{
      AOS.init({
        disable: "mobile",
      });
    })
  return (
    <Wrapper>
    <section className="mt-16 lg:mt-28">
    <div className="max-w-screen-md" data-aos="fade-right" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2500" data-aos-easing="ease-in-out" data-aos-once="true">
        <h4 className="text-sm sm:text-lg text-#00616c font-bold">Program of Studies</h4>
        <h2 className="text-4xl  font-bold leading-10 whitespace-pre-line">{Heading}</h2>
        <p className="font-bold text-#00616c text-sm sm:text-lg mt-4">Every participant of the program will start by completing the following three core courses</p>
        <div className="mt-10">
        <Button text={"Enroll Now"}/>
        </div>
    </div>
    <div className="mt-10 flex flex-col sm:flex-row gap-x-8 gap-y-6" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2500" data-aos-easing="ease-in-out" data-aos-once="true">
      {
        Boxdata.map((Data,i) => 
        (
          <QuaterBoxes key={Data.number} Header={Data.Header} Discription={Data.Discription} number={i+1} haveborder={false}/>
        )
        )
      }
    </div>
    </section>
    </Wrapper>
  )
}

export default CoreTracks
