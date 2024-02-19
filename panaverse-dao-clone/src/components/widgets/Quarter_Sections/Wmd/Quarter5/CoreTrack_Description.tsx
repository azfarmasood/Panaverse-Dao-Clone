"use client"
import Wrapper from "@/components/shared/Wrapper"
import Link from "next/link"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
function CoreTrack_Description() {
    useEffect(() =>{
        AOS.init({
          disable: "mobile"
        });
      })
  return (
    <Wrapper>
        <section className="mt-24">
            <main>
                <div className="flex flex-col-reverse sm:flex-row gap-10">
                    <div className="flex-1">
                        <div className="max-w-screen-md">
                        <h4 className="text-#00616c font-bold sm:text-lg text-base" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="3000" data-aos-easing="ease-in-out" data-aos-once="true">MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences</h4>

                        <h1 className="text-black font-bold sm:text-5xl text-3xl" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="3000" data-aos-easing="ease-in-out" data-aos-once="true">Course Description:</h1>
                        <p className="text-#00616c sm:text-lg text-sm font-bold py-8" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="3000" data-aos-easing="ease-in-out" data-aos-once="true">The Web is the Metaverse. The metaverse requires an infrastructure that connects all of the metaverses so that we can travel between them. This is only achievable with open web-based metaverses. The internet and its browsers are magical. Federated but linked experiences connect pages, people, technology, businesses, standards, and nations. It's unlike anything else. The metaverse should replicate the best qualities of the web - it should just be the web. We just have to extend online responsive design from mobile to desktop to 3D, Augmented Reality, and Virtual Reality. This course will teach you how to build the Open Social Spatial Web with WebXR and WebGPU technologies.</p>
                        <div id="Table-Block" className="py-2" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="3000" data-aos-easing="ease-in-out" data-aos-once="true">
                        <div className="grid sm:grid-cols-2 grid-cols-1 border-2 relative rounded-lg max-w-screen-md rounded-b-md sm:rounded-r sm:rounded-b-none h-full w-full  border-#00616c">
                        <div className="col-span-1 px-8 py-10 flex justify-center flex-col">
                        <h4 className="Capitalize text-black font-bold text-2xl sm:text-3xl">Specialized Track</h4>
                        </div>

                        <div className="flex flex-col justify-center col-span-1 bg-#00616c h-full bg-gradient-to-tl py-10 px-8">
                        <h2 className="text-white font-bold text-2xl">Duration</h2>
                        <p className="text-white text-xl font-bold mt-1.5">13 Weeks</p>
                        </div>

                        </div>
                        </div>
                        <div id="Content" className="mt-10">
                            <h1 className="text-black font-bold sm:text-5xl text-3xl" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="3000" data-aos-easing="ease-in-out" data-aos-once="true">Course Outline:</h1>

                            <h4 className="text-black font-semibold sm:text-2xl text-xl mt-6" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="3000" data-aos-easing="ease-in-out" data-aos-once="true">Open Metaverse Web Development</h4>

                            <div className="mt-3">
                            <Link href={"https://github.com/panaverse/metaverse-web"} className="text-blue-500 hover:text-purple-500 duration-300 underline font-normal sm:text-lg text-sm" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="3000" data-aos-easing="ease-in-out" data-aos-once="true">Open Metaverse Learning Repo</Link>
                            </div>

                            <h4 className="text-black font-semibold sm:text-2xl text-xl mt-6" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="3000" data-aos-easing="ease-in-out" data-aos-once="true">Blender 3D asset Creation for the Metaverse (Remote Zoom Class)</h4>
                            
                            <p className="text-#00616c font-bold sm:text-lg text-sm mt-2" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="3000" data-aos-easing="ease-in-out" data-aos-once="true">Blender development is being funded by heavyweights in the real-time 3D (RT3D) space such as Apple, Unity, AMD, Intel, Meta, NVIDIA, AWS, Epic Games, Adobe, Microsoft, and Decentraland. It is expected to become the standard asset creation tool for metaverse.</p>

                            <p className="text-#00616c font-bold sm:text-lg text-sm mt-1" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="3000" data-aos-easing="ease-in-out" data-aos-once="true">Blender 3.3+ <Link href={"https://www.blender.org/download/"}  className="text-blue-500 hover:text-purple-500 font-normal duration-300 underline">Download</Link></p>

                            <p className="mt-1" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="3000" data-aos-easing="ease-in-out" data-aos-once="true"><Link href={"https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD"}  className="text-blue-500 hover:text-purple-500 font-normal duration-300 underline sm:text-lg text-sm">Blender 3.0 Beginner Tutorial</Link></p>

                            <p className="mt-1" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="3000" data-aos-easing="ease-in-out" data-aos-once="true"><Link href={"https://docs.google.com/document/d/1zPBgZAdftWa6WVa7UIFUqW_7EcqOYE0X743RqFuJL3o/edit#heading=h.ftqi9ub1gec3"}  className="text-blue-500 hover:text-purple-500 font-normal duration-300 underline sm:text-lg text-sm">Blender 3.0 Hotkey</Link></p>

                            <p className="text-#00616c font-bold sm:text-lg text-sm mt-1" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="3000" data-aos-easing="ease-in-out" data-aos-once="true">Blender Projects Textbook: <Link href={"https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561"}  className="text-blue-500 hover:text-purple-500 font-normal duration-300 underline">Blender by Example 2nd Edition</Link></p>

                            <p className="text-#00616c font-bold sm:text-lg text-sm mt-1" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="3000" data-aos-easing="ease-in-out" data-aos-once="true">Blender Textbook: The Complete Guide to Blender Graphics: <Link href={"https://www.amazon.com/Complete-Guide-Blender-Graphics-Animation/dp/103212167X/ref=sr_1_5"}  className="text-blue-500 hover:text-purple-500 font-normal duration-300 underline">Computer Modeling & Animation 7th Edition by John M. Blain</Link></p>

                            <p className="mt-1 text-sm sm:text-lg" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="3000" data-aos-easing="ease-in-out" data-aos-once="true"><Link href={"https://www.youtube.com/watch?v=H7T0SzdFHwg&ab_channel=MaxTech"}  className="text-blue-500 hover:text-purple-500 font-normal duration-300 underline">Best Hardware Performance for Blender Rendering</Link></p>

                            <h4 className="text-black font-semibold sm:text-lg text-base mt-2" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="3000" data-aos-easing="ease-in-out" data-aos-once="true">Assignment 1:</h4>

                            <p className="text-#00616c font-bold sm:text-lg text-sm mt-2" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="3000" data-aos-easing="ease-in-out" data-aos-once="true">Build a 3D Donut using Blender 3 as shown in these <Link href={"https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD"}  className="text-blue-500 hover:text-purple-500 font-normal duration-300 underline"> video tutorials</Link></p>

                            <h4 className="text-black font-semibold sm:text-lg text-base mt-2" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="3000" data-aos-easing="ease-in-out" data-aos-once="true">Assignment 2:</h4>

                            <p className="text-#00616c font-bold sm:text-lg text-sm mt-2" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="3000" data-aos-easing="ease-in-out" data-aos-once="true">Build a Viking Scene using Blender 3 as shown in chapter 2 of the Book  <Link href={"https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561"}  className="text-blue-500 hover:text-purple-500 font-normal duration-300 underline"> Blender by Example 2nd Edition</Link></p>

                            <h4 className="text-black font-semibold sm:text-lg text-base mt-2" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="3000" data-aos-easing="ease-in-out" data-aos-once="true">Assignment 3:</h4>

                            <p className="text-#00616c font-bold sm:text-lg text-sm mt-2" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="3000" data-aos-easing="ease-in-out" data-aos-once="true">Modeling a Time Machine using Blender 3 as shown in chapters 3 and 4 of the Book  <Link href={"https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561"}  className="text-blue-500 hover:text-purple-500 font-normal duration-300 underline"> Blender by Example 2nd Edition</Link></p>

                            <h4 className="text-black font-semibold sm:text-lg text-base mt-2" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="3000" data-aos-easing="ease-in-out" data-aos-once="true">Assignment 4:</h4>

                            <p className="text-#00616c font-bold sm:text-lg text-sm mt-2" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="3000" data-aos-easing="ease-in-out" data-aos-once="true">Build a Modern Kitchen using Blender 3 as shown in chapters 5, 6, and 7 of the Book <Link href={"https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561"}  className="text-blue-500 hover:text-purple-500 font-normal duration-300 underline"> Blender by Example 2nd Edition</Link></p>

                            <h4 className="text-black font-semibold sm:text-lg text-base mt-2" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="3000" data-aos-easing="ease-in-out" data-aos-once="true">Assignment 5:</h4>

                            <p className="text-#00616c font-bold sm:text-lg text-sm mt-2" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="3000" data-aos-easing="ease-in-out" data-aos-once="true">Illustrating an Alien Hero with Grease Pencil as shown in chapter 8 of the Book <Link href={"https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561"}  className="text-blue-500 hover:text-purple-500 font-normal duration-300 underline"> Blender by Example 2nd Edition</Link></p>
                            <h4 className="text-black font-semibold sm:text-lg text-base mt-2" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="3000" data-aos-easing="ease-in-out" data-aos-once="true">Assignment 6:</h4>

                            <p className="text-#00616c font-bold sm:text-lg text-sm mt-2" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="3000" data-aos-easing="ease-in-out" data-aos-once="true">Build a 3D Sword in the Stone using Blender 3 as shown in these <Link href={"https://www.youtube.com/watch?v=bpvh-9H8S1g&ab_channel=CGFastTrack"}  className="text-blue-500 hover:text-purple-500 font-normal duration-300 underline"> video tutorials</Link></p>
                        </div>
                        </div>
                    </div>

                    <section className="sm:w-4/12" data-aos="fade-left" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">
                    <div className="rounded-md group hover:bg-black duration-2000 bg-white inset-0 shadow-lg sticky top-28 border px-6 py-6">
                    <div>
                    <h2 className="text-base sm:text-lg text-black group-hover:text-teal-400 duration-2000 font-bold">Program Structure</h2>
                    <p className="mt-2 text-#00616c group-hover:text-white duration-2000 font-bold text-sm sm:text-base">After completing the first three quarters the participants will select one or more specializations consisting of two courses each.</p>
                    </div>

                    <div className="mt-4">
                        <Link href={"/Wmd/Quarter1"}>
                            <div className="text-16 p-2 px-4 rounded font-semibold flex space-x-5 items-center mt-2  hover:bg-teal-600 duration-2000 hover:translate-x-3">
                                <div className="w-8 h-8 rounded-md rotate-45 bg-gradient-to-tr bg-#00616c text-white flex text-16 items-center my-0.5 justify-center">
                                <p className="text-white text-base font-bold -rotate-45"> Q1</p>
                                </div>
                                <p className="text-xl font-bold group-hover:text-white duration-2000">Quarter I</p>
                            </div>
                        </Link>
                    </div>

                    <div className="mt-4">
                        <Link href={"/Wmd/Quarter2"}>
                            <div className="text-16 p-2 px-4 rounded font-semibold flex space-x-5 items-center mt-2  hover:bg-teal-600 duration-2000 hover:translate-x-3">
                                <div className="w-8 h-8 rounded-md rotate-45 bg-gradient-to-tr bg-#00616c text-white flex text-16 items-center my-0.5 justify-center">
                                <p className="text-white text-base font-bold -rotate-45"> Q2</p>
                                </div>
                                <p className="text-xl font-bold group-hover:text-white duration-2000">Quarter II</p>
                            </div>
                        </Link>
                    </div>

                    <div className="mt-4">
                        <Link href={"/Wmd/Quarter3"}>
                            <div className="text-16 p-2 px-4 rounded font-semibold flex space-x-5 items-center mt-2  hover:bg-teal-600 duration-2000 hover:translate-x-3">
                                <div className="w-8 h-8 rounded-md rotate-45 bg-gradient-to-tr bg-#00616c text-white flex text-16 items-center my-0.5 justify-center">
                                <p className="text-white text-base font-bold -rotate-45"> Q3</p>
                                </div>
                                <p className="text-xl font-bold group-hover:text-white duration-2000">Quarter III</p>
                            </div>
                        </Link>
                    </div>

                    <div className="mt-4">
                        <Link href={"/Courses/WMD"}>
                            <div className="text-16 p-2 px-4 rounded font-semibold flex space-x-5 items-center mt-2  hover:bg-teal-600 duration-2000 hover:translate-x-3">
                                <div className="w-8 h-8 rounded-md rotate-45 bg-gradient-to-tr bg-#00616c text-white flex text-16 items-center my-0.5 justify-center">
                                <p className="text-white text-base font-bold -rotate-45"> Q4</p>
                                </div>
                                <p className="text-xl font-bold group-hover:text-white duration-2000">Quarter IV</p>
                            </div>
                        </Link>
                    </div>

                    <div className="mt-4">
                        <Link href={"/Wmd/Quarter5"}>
                            <div className="text-16 p-2 px-4 rounded font-semibold flex space-x-5 items-center mt-2  hover:bg-teal-600 duration-2000 hover:translate-x-3">
                                <div className="w-8 h-8 rounded-md rotate-45 bg-gradient-to-tr bg-#00616c text-white flex text-16 items-center my-0.5 justify-center">
                                <p className="text-white text-base font-bold -rotate-45"> Q5</p>
                                </div>
                                <p className="text-xl font-bold group-hover:text-white duration-2000">Quarter V</p>
                            </div>
                        </Link>
                    </div>
                    </div>
                 </section>

                 </div>
            </main>
        </section>
    </Wrapper>
  )
}

export default CoreTrack_Description
