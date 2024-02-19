"use client"
import Wrapper from "@/components/shared/Wrapper";
import  QuaterBoxes  from "@/components/shared/QuaterBoxes";
import Image from "next/image";
import { Boxdata1 } from "@/components/shared/BoxData";
import {useState} from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const SpecializeTracks=()=> {
  useEffect(() =>{
    AOS.init({
      disable: "mobile"
    });
  })
    const [selectedData, DataSelected] = useState("Metaverse");
    const selecteddata = Boxdata1.find((data) => data.slug === selectedData)
  return (
    <Wrapper>
    <section className="mt-10">
      {/* -------------- */}
      {/* Heading Start: */}
      {/* -------------- */}
          <div className="max-w-screen-md" data-aos="fade-left" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2500" data-aos-easing="ease-in-out" data-aos-once="true">
        <h2 className="text-3xl md:text-5xl  font-bold leading-10 whitespace-pre-line">Specialized Tracks:</h2>
        <p className="mt-8  text-p sm:text-16 text-#00616c font-bold">After completing the first three quarters the participants will select one or more specializations consisting of two courses each.</p>
          </div>
      {/* ------------ */}
      {/* Heading End: */}
      {/* ------------ */}



      <div className="flex flex-col-reverse sm:flex-row gap-x-4 gap-y-8 mt-10" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2500" data-aos-easing="ease-in-out" data-aos-once="true">

            <div className="border sticky top-28 shadow-xl self-start  rounded-xl border-slate-200 py-8 px-4  basis-target">
              <h4 className="font-semibold text-sm  sm:text-xl text-#00616c">Specialized Track</h4>
              <h2 className="mt-3 font-bold text-xl sm:text-3xl max-w-xlg">{selecteddata?.Header}</h2>
              <p className="mt-6 text-sm sm:text-lg w-full sm:max-w-custome text-#00616c font-bold">{selecteddata?.Discription}</p>
              <button className="mt-5 group border border-#00616c rounded-lg text-sm sm:text-lg text-#00616c px-5 font-bold hover:bg-slate-200 duration-1000 py-2 flex items-center gap-x-1.5">Learn More <svg viewBox="0 0 24 24" focusable="false" className="chakra-icon group-hover:translate-x-0.5 mt-1 duration-300 css-onkibi w-5 h-5" aria-hidden="true"><path fill="currentColor" d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></svg></button>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                {
                  selecteddata?.QuaterBoxes.map((QuarterData) =>(
                    <QuaterBoxes
                    key={QuarterData.number}
                    Header={QuarterData.Quarter}
                    Discription={QuarterData.Description}
                    number={QuarterData.number}
                    haveborder={false}
                    />
                  ))
                }
              </div>
            </div>

      <div className="space-y-8 sm:px-2 py-2 basis-target2">

      {
        Boxdata1.map((Data)=>
        (
      <div onClick={() => DataSelected(Data.slug)} className=" flex gap-x-4 group items-center cursor-pointer" key={Data.slug}>
      <div className="flex-shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1  duration-300 h-3/4 w-33 sm:w-47">
            <Image src={Data.images} alt={Data.Header} className={"sm:h-28 h-21 object-cover rounded-md"}/>
      </div>
        <div>
            <div>
              <h4 className="text-#00616c font-semibold text-sm sm:text-lg">Specialized Track</h4>
              <h2 className="text-base sm:text-xl  font-bold">{Data.Header}</h2>
            </div>
          </div>
        </div>
        )
        )
      }
      </div>
      </div>
    </section>
    </Wrapper>
  )
}
export default SpecializeTracks