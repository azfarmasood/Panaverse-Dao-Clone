"use client"
import Wrapper from "@/components/shared/Wrapper";
import Hero_Poster from "@/asserts/images/hero-poster.webp";
import Image from "next/image";
import Button from "@/components/shared/Button";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Hero=()=> {
    const Paragraph1 = `A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet.`
    const paragraph2 = `Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies.`;
    useEffect(() =>{
      AOS.init({
        disable: "mobile"
      });
    })

  return (
      <Wrapper>
      <section data-aos="fade" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">
          <div className="flex items-center flex-col md:flex-row">
  
          <div className="flex-1 mb-5">
          <h4 className="text-#00616c  text-sm sm:text-lg font-bold lg:mt-8">Presidential Initiative for Artificial Intelligence and Computing (PIAIC)</h4>
            <h1 className=" text-4xl sm:text-20 sm:leading-75 font-bold">Certified Web 3.0 and <span> Metaverse Developer</span></h1>
            <p className="mt-8  text-sm sm:text-lg text-#00616c font-bold">
              { Paragraph1 }
            </p>
            <p className="mt-8  text-p sm:text-lg text-#00616c font-bold">{paragraph2}</p>
            <div className="mt-10">
            <Button text={"Learn More"}/>
            </div>
          </div>
  
            <div className="flex-1">
            <Image src={Hero_Poster} alt="Hero-Poster" width={768}/>
          </div>
  
          </div>
        </section>
        </Wrapper>
  )
}
export default Hero