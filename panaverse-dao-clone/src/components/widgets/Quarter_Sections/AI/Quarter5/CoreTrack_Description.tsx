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
                        <h4 className="text-#00616c font-bold sm:text-lg text-base" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">AI-361: Deep Learning and MLOps</h4>

                        <h1 className="text-black font-bold sm:text-5xl text-3xl" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Course Description:</h1>

                        <p className="text-#00616c sm:text-lg text-sm font-bold py-8" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">This course will help you understand the capabilities, challenges, and consequences of deep learning and prepare you to participate in the development of leading-edge AI technology. We will finish the program by learning how to envision, create, and maintain integrated systems that run constantly in production. Production systems must manage constantly changing data, in stark contrast to typical machine learning modeling. The production system must also operate continuously at the lowest possible cost while delivering the highest possible performance.</p>
                        <div id="Table-Block" className="py-2" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">
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
                        <h1 className="text-black font-bold sm:text-5xl text-3xl" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Course Outline:</h1>
                        <h4 className="text-black font-semibold sm:text-3xl text-xl mt-6" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Deep Learning with Tensorflow</h4>

                        <div className="mt-3">
                          <p className="text-blue-500 underline font-normal hover:text-purple-500 duration-300 sm:text-lg text-sm" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><Link href={"https://www.amazon.com/Learning-Python-Second-Fran%C3%A7ois-Chollet/dp/1617296864/ref=sr_1_2"}>Deep Learning with Python, Second Edition 2nd Edition</Link></p>

                          <h4 className="text-black font-semibold sm:text-3xl text-xl mt-4" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Machine Learning Engineering for Production (MLOps) using Terraform for CDK</h4>

                          <p className="text-blue-500 underline font-normal hover:text-purple-500 duration-300 sm:text-lg text-sm mt-3" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><Link href={"https://towardsdatascience.com/mlops-leveraging-aws-sagemaker-terraform-and-gitlab-e7d97eaa6dce"}>A Comprehensive Guide to MLOps Terraform: Infrastructure As Code(IaC)</Link></p>

                          <p className="text-blue-500 underline font-normal hover:text-purple-500 duration-300 sm:text-lg text-sm mt-1" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><Link href={"https://betterprogramming.pub/a-comprehensive-guide-to-mlops-infrastructure-as-code-iac-ef4c97742351"}>MLOps leveraging AWS SageMaker and Terraform</Link></p>
                        </div>
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
            </main>
        </section>
    </Wrapper>
  )
}

export default CoreTrack_Description
