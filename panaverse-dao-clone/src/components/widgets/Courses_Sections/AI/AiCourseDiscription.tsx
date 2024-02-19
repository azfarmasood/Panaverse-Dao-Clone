"use client"
import Wrapper from "@/components/shared/Wrapper"
import Link from "next/link"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import React from "react";
const AiDescription = () => {
    useEffect(() =>{
        AOS.init({
          disable: "mobile"
        });
      })
    return(
    <Wrapper>
<section className="mt-24">
    <div className="flex flex-col-reverse sm:flex-row gap-10">
    <div className="flex-1">
    <div className="max-w-screen-lg">
        <h4 className="text-15 sm:text-lg text-#00616c font-bold" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">AI-351: Developing Planet-Scale Intelligent APIs and Python Programming</h4>
        <h1 className="font-bold text-4xl sm:text-5xl" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Course Description:</h1>

        <div className="mt-6">
        <p className="text-sm sm:text-lg font-bold text-#00616c" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems. The AI and Deep Learning Specialization is a foundational program that will aid in your comprehension of deep learning's potential, difficulties, and effects as well as equip you to take part in the creation of cutting-edge AI technology.</p>

        <p className="mt-6 text-sm sm:text-lg font-bold text-#00616c" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">We will start this course by understanding the fundamentals and use cases for AI and move on to building next-gen intelligent apps using OpenAI's powerful models and Next.js 13.</p>

        <p className="mt-6 text-sm sm:text-lg font-bold text-#00616c" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">We'll conclude the course by learning about basic programming concepts using Python, such as lists, dictionaries, classes, functions, and loops, and practice writing clean and readable code with exercises for each topic. We'll also learn how to make your programs interactive and how to test your code safely before adding it to a project. It is a fast-paced, thorough introduction to programming with Python 3.10+ that will have you writing programs, solving problems, and making things that work in no time. In this quarter we will also learn Git, the distributed version control system. We will also review Git-based GitHub services.</p>

        </div>

        <div className="mt-10" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">
        <div className="grid sm:grid-cols-2 grid-cols-1 w-full border-2 relative rounded-lg max-w-screen-md h-full border-#00616c">
            <div className="py-10 col-span-1 px-8 flex justify-center flex-col">
                    <h4 className="Capitalize text-black font-bold text-xl sm:text-3xl">Specialized Track</h4>
            </div>
            <div className="flex flex-col justify-center col-span-1 bg-#00616c h-full bg-gradient-to-tl rounded-b-md sm:rounded-r sm:rounded-b-none py-10 px-8 w-full">
                <h2 className="text-white font-bold text-2xl">Duration</h2>
                <p className="text-white text-xl font-bold mt-1.5">13 Weeks</p>
            </div>
        </div>
        </div>

        <div className="mt-10">
            <h2 className="text-black font-bold sm:text-5xl text-4xl" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Course Outline:</h2>
        </div>

        <div className="mt-8">
        <h4 className="text-black font-bold text-lg sm:text-2xl" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Introduction to Machine Learning, Data Science, and AI</h4>
            <p className="mt-2 text-sm sm:text-lg text-blue-500 hover:text-purple-500 duration-300 font-normal underline" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><Link target="_blank" href={"https://www.coursera.org/learn/ai-for-everyone"}>AI for Everyone</Link></p>
        </div>

        <div className="mt-4">
            <h5 className="text-black font-semibold text-base sm:text-xl" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">AI for Everyone Quiz in Week 3</h5>
            <p className="mt-2 font-bold text-#00616c text-base sm:text-xl" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Total Questions: 60, Total Time: 75 minutes</p>

            <p className="mt-2 font-bold text-#00616c text-base sm:text-xl" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Building Next-Gen Intelligent Apps with OpenAI's Powerful Models</p>

            <p className="mt-2 font-bold text-#00616c text-base sm:text-xl" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1500" data-aos-easing="ease-in-out" data-aos-once="true">We will cover GPT-4, ChatGPT, etc. and Next.js 13</p>

            <p className="mt-2 text-sm sm:text-lg text-blue-500 hover:text-purple-500 duration-300 font-normal underline" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><Link target="_blank" href={"https://openai.com/api/"}>https://openai.com/api/</Link></p>

            <p className="mt-2 text-sm sm:text-lg text-blue-500 hover:text-purple-500 duration-300 font-normal underline" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><Link target="_blank" href={"https://towardsdatascience.com/gpt-4-is-coming-soon-heres-what-we-know-about-it-64db058cfd45"}>https://towardsdatascience.com/gpt-4-is-coming-soon-heres-what-we-know-about-it-64db058cfd45</Link></p>
        </div>

        <div className="mt-2">
        <h4 className="text-black font-bold text-lg sm:text-2xl" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Python Crash Course for TypeScript Developers</h4>
            <p className="mt-2 text-#00616c font-bold sm:text-lg text-sm" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Python Crash Course, 2nd Edition: <Link href={"https://www.amazon.com/Python-Crash-Course-2nd-Edition/dp/1593279280/ref=sr_1_5"} className="text-blue-500 hover:text-purple-500 duration-300 font-normal underline">A Hands-On, Project-Based Introduction to Programming 2nd Edition</Link></p>
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
                        <Link href={"/AI/Quarter1"}>
                            <div className="text-16 p-2 px-4 rounded font-semibold flex space-x-5 items-center mt-2  hover:bg-teal-600 duration-2000 hover:translate-x-3">
                                <div className="w-8 h-8 rounded-md rotate-45 bg-gradient-to-tr bg-#00616c text-white flex text-16 items-center my-0.5 justify-center">
                                <p className="text-white text-base font-bold -rotate-45"> Q1</p>
                                </div>
                                <p className="text-xl font-bold group-hover:text-white duration-2000">Quarter I</p>
                            </div>
                        </Link>
                    </div>

                    <div className="mt-4">
                        <Link href={"/AI/Quarter2"}>
                            <div className="text-16 p-2 px-4 rounded font-semibold flex space-x-5 items-center mt-2  hover:bg-teal-600 duration-2000 hover:translate-x-3">
                                <div className="w-8 h-8 rounded-md rotate-45 bg-gradient-to-tr bg-#00616c text-white flex text-16 items-center my-0.5 justify-center">
                                <p className="text-white text-base font-bold -rotate-45"> Q2</p>
                                </div>
                                <p className="text-xl font-bold group-hover:text-white duration-2000">Quarter II</p>
                            </div>
                        </Link>
                    </div>

                    <div className="mt-4">
                        <Link href={"/AI/Quarter3"}>
                            <div className="text-16 p-2 px-4 rounded font-semibold flex space-x-5 items-center mt-2  hover:bg-teal-600 duration-2000 hover:translate-x-3">
                                <div className="w-8 h-8 rounded-md rotate-45 bg-gradient-to-tr bg-#00616c text-white flex text-16 items-center my-0.5 justify-center">
                                <p className="text-white text-base font-bold -rotate-45"> Q3</p>
                                </div>
                                <p className="text-xl font-bold group-hover:text-white duration-2000">Quarter III</p>
                            </div>
                        </Link>
                    </div>

                    <div className="mt-4">
                        <Link href={"/Courses/AI"}>
                            <div className="text-16 p-2 px-4 rounded font-semibold flex space-x-5 items-center mt-2  hover:bg-teal-600 duration-2000 hover:translate-x-3">
                                <div className="w-8 h-8 rounded-md rotate-45 bg-gradient-to-tr bg-#00616c text-white flex text-16 items-center my-0.5 justify-center">
                                <p className="text-white text-base font-bold -rotate-45"> Q4</p>
                                </div>
                                <p className="text-xl font-bold group-hover:text-white duration-2000">Quarter IV</p>
                            </div>
                        </Link>
                    </div>

                    <div className="mt-4">
                        <Link href={"/AI/Quarter5"}>
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
        </section>
    </Wrapper>
    )
}
export default AiDescription