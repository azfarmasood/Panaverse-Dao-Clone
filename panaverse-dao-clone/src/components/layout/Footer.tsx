"use client"
import Link from "next/link"
import Image from "next/image"
import Wrapper from "@/components/shared/Wrapper"
import Logo from "/public/panaverse-logo.webp";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const Footer = () => {
    useEffect(() =>{
        AOS.init({
          disable: "mobile"
        });
      })
  return (
      <footer className="mt-28 border-t z-10 border-slate-200 group hover:bg-black duration-2000" >
        <Wrapper>
                <div className="flex flex-col sm:flex-row gap-y-12 sm:gap-y-0 mx-auto  w-full py-10" data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">
                    {/* Left Content */}
                    <div>
                    <Link href={"/"}><Image src={Logo} alt="logo" className="group-hover:bg-white duration-2000 w-33 sm:w-40"/></Link>
                    <p className="mt-5 max-w-2xl font-bold text-#00616c group-hover:text-white duration-2000 sm:text-lg text-21">Certified Web 3.0 and Metaverse Developer A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet</p>

                    <div className="flex mt-6 gap-x-4">

                    <a className="hover:scale-105 duration-300" target="___blank" href="https://www.facebook.com/groups/panaverse"><div className="p-2 rounded-full bg-gradient-to-t bg-#00616c duration-2000 group-hover:bg-white"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" className="text-white group-hover:text-#00616c duration-2000 h-4 w-4 sm:h-5 sm:w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg></div></a>

                    <a className="hover:scale-105 duration-300 " target="___blank" href="https://www.youtube.com/@panaverse/streams"><div className="p-2 rounded-full bg-gradient-to-t duration-2000 group-hover:bg-white bg-#00616c"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="text-white group-hover:text-#00616c duration-2000 h-4 w-4 sm:h-5 sm:w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg></div></a>

                    <a className="hover:scale-105 duration-300" target="___blank" href=" https://github.com/panaverse"><div className="p-2 rounded-full bg-gradient-to-t group-hover:bg-white duration-2000 bg-#00616c"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" className="text-white h-4 w-4 group-hover:text-#00616c duration-2000 sm:h-5 sm:w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg></div></a>
                    
                    <a className="hover:scale-105 duration-300" target="___blank" href="https://twitter.com/Panaverse_edu"><div className="p-2 rounded-full bg-gradient-to-t duration-2000 group-hover:bg-white bg-#00616c"><svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" className="text-white group-hover:text-#00616c duration-2000 h-4 w-4 sm:h-5 sm:w-5"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg></div></a>

                    </div>
                    </div>
                    {/* Right Content */}
                    <div className="sm:px-16">
                        <h1 className="text-lg sm:text-xl font-bold group-hover:text-teal-600 duration-2000">Programs</h1>
                        <ul className="mt-3 text-sm sm:text-base cursor-pointer text-#00616c font-semibold group-hover:text-white">
                            <li className="mt-2 hover:text-blue-600 duration-2000">Web 3.0 and Metaverse Developer</li>
                            <li className="mt-2 hover:text-blue-600 duration-2000">Artificial Intelligence</li>
                            <li className="mt-2 hover:text-blue-600 duration-2000">Cloud-Native Computing</li>
                            <li className="mt-2 hover:text-blue-600 duration-2000">Ambient Computing and IoT</li>
                            <li className="mt-2 hover:text-blue-600 duration-2000">Genomics and Bioinformatics</li>
                            <li className="mt-2 hover:text-blue-600 duration-2000">Network Programmability and Automation</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="text-lg sm:text-xl font-bold group-hover:text-teal-600 duration-2000">Pages</h1>
                        <ul className="mt-2 font-semibold group-hover:text-white text-sm sm:text-base text-#00616c cursor-pointer">
                            <li className="mt-1 hover:text-blue-600 duration-2000">Home</li>
                            <li className="mt-1 hover:text-blue-600 duration-2000">Quarter 1</li>
                            <li className="mt-1 hover:text-blue-600 duration-2000">Quarter 2</li>
                            <li className="mt-1 hover:text-blue-600 duration-2000">Quarter 3</li>
                        </ul>
                    </div>
                </div>
        </Wrapper>
    </footer>
  )
}

export default Footer
