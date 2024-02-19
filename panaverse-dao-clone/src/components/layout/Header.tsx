"use client"
import Link from "next/link";
import Logo from "/public/panaverse-logo.webp";
import Image from "next/image";
import Wrapper from "@/components/shared/Wrapper";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const Header=()=> {
  useEffect(() =>{
    AOS.init({
      disable: "mobile"
    });
  })
  return (
    <header className="sticky top-0 scroll-smooth backdrop-blur-md z-10 bg-opacity-90 bg-white" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1500" data-aos-easing="ease-in-out" data-aos-once="true">
        <Wrapper>
      <div className="py-3 justify-between flex items-center">
      <div>
        <Link href={"/"}><Image src={Logo} width={130} height={200} alt="logo"/></Link>
      </div>
      <ul className="flex mt-1.5 items-center space-x-6 font-normal text-15 sm:text-18">

            <li className='hover:text-blue-600 duration-2000 text-#00616c'>
              <Link href={"/"}>
                Home
                </Link>
                </li>

                <li className='hover:text-blue-600 items-center duration-2000 relative group cursor-pointer text-#00616c'>
                  <div className="flex items-center">
                    Courses
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="h-7 w-7 text-gray-700 group-hover:text-blue-600 duration-2000 mt-0.5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"></path></g></svg>
                  </div>
                  <div className="absolute right-0 pt-4">
                    <ul className="flex bg-white flex-col rounded-b group-hover:shadow group-hover:py-2 group-hover:border border-transparent duration-500 group-hover:border-slate-200 group-hover:max-h-64 max-h-0 overflow-hidden">

                      <li className="px-3 py-2 whitespace-pre text-base cursor-pointer hover:text-blue-600 duration-2000 text-#00616c">
                      <Link href={"/Courses/Wmd"}>
                      Web 3.0 Metaverse and Developers
                      </Link>
                      </li>

                      <li className="px-3 py-2 whitespace-pre text-base cursor-pointer hover:text-blue-600 duration-2000 text-#00616c">
                      <Link href={"/Courses/AI"}>
                      Artificial Intelligence
                      </Link>
                      </li>

                      <li className="px-3 py-2 whitespace-pre text-base cursor-pointer hover:text-blue-600 duration-2000 text-#00616c">
                      <Link href={"/Courses/Cloud"}>
                      Cloud-Native Computing
                      </Link>
                      </li>

                      <li className="px-3 py-2 whitespace-pre text-base cursor-pointer hover:text-blue-600 duration-2000 text-#00616c">
                      <Link href={"/Courses/Ambient"}>
                      Ambient Computing and IoT
                      </Link>
                      </li>

                      <li className="px-3 py-2 whitespace-pre text-base cursor-pointer hover:text-blue-600 duration-2000 text-#00616c">
                      <Link href={"/Courses/Geonomics"}>
                      Genomics and Bioinformatics
                      </Link>
                      </li>

                      <li className="px-3 py-2 whitespace-pre text-base cursor-pointer hover:text-blue-600 duration-2000 text-#00616c">
                      <Link href={"/Courses/Network"}>
                      Network Programmability and Automation
                      </Link>
                      </li>

                    </ul>
                  </div>
                </li>

        </ul>
    </div>
    </Wrapper>
      </header>
  )
}

export default Header
