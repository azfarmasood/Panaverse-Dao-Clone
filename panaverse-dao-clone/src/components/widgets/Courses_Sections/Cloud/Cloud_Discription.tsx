"use client"
import Wrapper from "@/components/shared/Wrapper"
import Link from "next/link"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Cloud_Discription = () => {
    useEffect(() =>{
        AOS.init({
          disable: "mobile"
        });
      })
  return (
    <Wrapper>
    <section className="mt-24">
      <main className="flex flex-col-reverse sm:flex-row gap-10">

        <div className="flex-1">
          <main className="max-w-screen-lg">
          <h4 className="text-15 sm:text-lg text-#00616c font-bold" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">CN-351: Certified Kubernetes Application Developer (CKAD)</h4>
          <h1 className="font-bold text-4xl sm:text-5xl" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Course Description:</h1>

          <div className="mt-6">
          <p className="text-sm sm:text-lg font-bold text-#00616c" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Cloud-native architecture and technologies are an approach to designing, constructing, and operating workloads that are built in the cloud and take full advantage of the cloud computing model. Cloud-native technologies empower organizations to build and run scalable applications in modern, dynamic environments such as public, private, and hybrid clouds. Containers, service meshes, microservices, immutable infrastructure, and declarative APIs exemplify this approach.</p>

          <p className="mt-6 text-sm sm:text-lg font-bold text-#00616c" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">These techniques enable loosely coupled systems that are resilient, manageable, and observable. Combined with robust automation, they allow engineers to make high-impact changes frequently and predictably with minimal toil.</p>

          <p className="mt-6 text-sm sm:text-lg font-bold text-#00616c" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Kubernetes is an open-source system for automating the deployment, scaling, and management of containerized applications. In this course, you will learn how to develop cloud applications using cloud-native technologies like Containers, Kubernetes, and CDK for Kubernetes.</p>
          </div>

          <div className="mt-10" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">
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

          <div className="mt-10">
          <h2 className="text-black font-bold sm:text-5xl text-4xl" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Course Outline:</h2>
          </div>

          <div className="mt-8">
          <h4 className="text-black font-bold text-lg sm:text-2xl" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Kubernetes: Up and Running: Dive into the Future of Infrastructure 3rd Edition</h4>
          <p className="mt-2 text-sm sm:text-lg text-blue-500 hover:text-purple-500 duration-300 font-normal underline" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><Link target="_blank" href={"https://www.amazon.com/Kubernetes-Running-Dive-Future-Infrastructure/dp/109811020X/ref=sr_1_3"}>https://www.amazon.com/Kubernetes-Running-Dive-Future-Infrastructure/dp/109811020X/ref=sr_1_3</Link></p>
          </div>

          <div className="mt-4">
          <h4 className="text-black font-bold text-lg sm:text-2xl" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Cloud Development Kit for Kubernetes</h4>
          <p className="mt-2 text-sm sm:text-lg text-blue-500 hover:text-purple-500 duration-300 font-normal underline" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><Link target="_blank" href={"https://cdk8s.io/"}>https://cdk8s.io/</Link></p>
          </div>

          </main>
        </div>

                    <section className="sm:w-4/12" data-aos="fade-left" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">
                    <div className="rounded-md group hover:bg-black duration-2000 bg-white inset-0 shadow-lg sticky top-28 border px-6 py-6">
                    <div>
                    <h2 className="text-base sm:text-lg text-black group-hover:text-teal-400 duration-2000 font-bold">Program Structure</h2>
                    <p className="mt-2 text-#00616c group-hover:text-white duration-2000 font-bold text-sm sm:text-base">After completing the first three quarters the participants will select one or more specializations consisting of two courses each.</p>
                    </div>

                    <div className="mt-4">
                        <Link href={"/Cloud/Quarter1"}>
                            <div className="text-16 p-2 px-4 rounded font-semibold flex space-x-5 items-center mt-2  hover:bg-teal-600 duration-2000 hover:translate-x-3">
                                <div className="w-8 h-8 rounded-md rotate-45 bg-gradient-to-tr bg-#00616c text-white flex text-16 items-center my-0.5 justify-center">
                                <p className="text-white text-base font-bold -rotate-45"> Q1</p>
                                </div>
                                <p className="text-xl font-bold group-hover:text-white duration-2000">Quarter I</p>
                            </div>
                        </Link>
                    </div>

                    <div className="mt-4">
                        <Link href={"/Cloud/Quarter2"}>
                            <div className="text-16 p-2 px-4 rounded font-semibold flex space-x-5 items-center mt-2  hover:bg-teal-600 duration-2000 hover:translate-x-3">
                                <div className="w-8 h-8 rounded-md rotate-45 bg-gradient-to-tr bg-#00616c text-white flex text-16 items-center my-0.5 justify-center">
                                <p className="text-white text-base font-bold -rotate-45"> Q2</p>
                                </div>
                                <p className="text-xl font-bold group-hover:text-white duration-2000">Quarter II</p>
                            </div>
                        </Link>
                    </div>

                    <div className="mt-4">
                        <Link href={"/Cloud/Quarter3"}>
                            <div className="text-16 p-2 px-4 rounded font-semibold flex space-x-5 items-center mt-2  hover:bg-teal-600 duration-2000 hover:translate-x-3">
                                <div className="w-8 h-8 rounded-md rotate-45 bg-gradient-to-tr bg-#00616c text-white flex text-16 items-center my-0.5 justify-center">
                                <p className="text-white text-base font-bold -rotate-45"> Q3</p>
                                </div>
                                <p className="text-xl font-bold group-hover:text-white duration-2000">Quarter III</p>
                            </div>
                        </Link>
                    </div>

                    <div className="mt-4">
                        <Link href={"/Courses/Cloud"}>
                            <div className="text-16 p-2 px-4 rounded font-semibold flex space-x-5 items-center mt-2  hover:bg-teal-600 duration-2000 hover:translate-x-3">
                                <div className="w-8 h-8 rounded-md rotate-45 bg-gradient-to-tr bg-#00616c text-white flex text-16 items-center my-0.5 justify-center">
                                <p className="text-white text-base font-bold -rotate-45"> Q4</p>
                                </div>
                                <p className="text-xl font-bold group-hover:text-white duration-2000">Quarter IV</p>
                            </div>
                        </Link>
                    </div>

                    <div className="mt-4">
                        <Link href={"/Cloud/Quarter5"}>
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

      </main>
    </section>
    </Wrapper>
  )
}

export default Cloud_Discription
