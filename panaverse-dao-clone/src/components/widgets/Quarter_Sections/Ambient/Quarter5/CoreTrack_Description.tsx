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
      const link = `https://docs.google.com/presentation/d/14OcW4\nHfS2i1Db1uKOU6SrckFEFjhSLMgfnHYB3XlEZo/edi\nt?usp=sharing`
  return (
    <Wrapper>
        <section className="mt-24">
            <main>
                <div className="flex flex-col-reverse sm:flex-row gap-10">
                    <div className="flex-1">
                        <div className="max-w-screen-lg">
                        <h4 className="text-#00616c font-bold sm:text-lg text-base" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">AC-361: Embedded Programming using C and Rust</h4>

                        <h1 className="text-black font-bold sm:text-5xl text-3xl" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Course Description:</h1>

                        <p className="text-#00616c sm:text-lg text-sm font-bold py-8 w-95" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">This is an introductory course about using the C and Rust Programming Languages on "Bare Metal" embedded systems, such as Microcontrollers. We will start by introducing embedded systems and move on to learn the C++ and Rust programming languages. We'll learn about basic programming concepts using C and Rust, then we will explore key concepts in electronics, microcontrollers, and embedded programming. It is a fast-paced, thorough introduction to programming with C and Rust that will have you writing programs, solving problems, burning your code on microcontrollers, playing with GPIOs, and making things that work in no time.</p>
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

                        <h4 className="text-black font-semibold sm:text-3xl text-xl mt-6" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Introduction to the Internet of Things and Embedded Systems (Week 1 and 2)</h4>

                        <p className="text-blue-500 hover:text-purple-500 font-normal underline duration-300 sm:text-lg text-sm sm:whitespace-normal mt-3" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><Link href={"https://docs.google.com/presentation/d/14OcW4HfS2i1Db1uKOU6SrckFEFjhSLMgfnHYB3XlEZo/edit?usp=sharing"}>{link}</Link></p>

                        <ol className="mt-2">
                            <li className="list-disc mx-10 mt-2" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><p className="font-bold sm:text-lg text-sm text-#00616c">What is the Fourth Industrial Revolution?</p></li>

                            <li className="list-disc mx-10 mt-2" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><p className="font-bold sm:text-lg text-sm text-#00616c">What is IoT?</p></li>

                            <li className="list-disc mx-10 mt-2" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><p className="font-bold sm:text-lg text-sm text-#00616c">Embedded Systems</p></li>

                            <li className="list-disc mx-10 mt-2" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><p className="font-bold sm:text-lg text-sm text-#00616c">Hardware and Software for IoT</p></li>

                            <li className="list-disc mx-10 mt-2" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><p className="font-bold sm:text-lg text-sm text-#00616c">Edge and Cloud Computing</p></li>

                            <li className="list-disc mx-10 mt-2" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><p className="font-bold sm:text-lg text-sm text-#00616c">The future of IoT is AI</p></li>

                            <li className="list-disc mx-10 mt-2" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><p className="font-bold sm:text-lg text-sm text-#00616c">Blockchain in the Internet of Things?</p></li>

                            <li className="list-disc mx-10 mt-2" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><p className="font-bold sm:text-lg text-sm text-#00616c">IoT + AI + Blockchain: The Fourth Industrial Revolution has begun</p></li>

                            <li className="list-disc mx-10 mt-2" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><p className="font-bold sm:text-lg text-sm text-#00616c">How will Matter change the IoT Infrastructure and address issues</p></li>

                            <li className="list-disc mx-10 mt-2" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><p className="font-bold sm:text-lg text-sm text-#00616c">Metaverse and IoT</p></li>
                        </ol>

                        <h4 className="sm:text-xl text-base text-black font-semibold mt-2" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Mid-Term I: Introduction to the Internet of Things (IoT) Quiz in Week 3</h4>

                        <p className="text-#00616c font-bold sm:text-lg text-sm mt-2" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Total Questions: 46, Total Time: 60 minutes</p>

                        <h1 className="text-black font-semibold mt-3 sm:text-3xl text-xl" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">The C Reference Book: The C programming language</h1>

                        <p className="text-#00616c font-bold sm:text-lg text-sm mt-3" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Embedded Programming book: Internet of things with ESP8266</p>

                        <p className="text-blue-500 hover:text-purple-500 font-normal underline duration-300 sm:text-lg text-sm sm:whitespace-normal mt-1" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><Link href={"https://drive.google.com/drive/folders/1CZFxLSFoo9rl3le7KRuhUwLEV6h4xLXN"}>Download Link:</Link></p>

                        <h1 className="text-black font-semibold mt-3 sm:text-3xl text-xl" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Introduction to C Part 1 (Weeks 3B, 4, and 5)</h1>

                        <p className="text-#00616c font-bold sm:text-lg text-sm mt-3" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">C environment Setup for (Windows, Linux, and Mac OS systems)</p>

                        <p className="text-#00616c font-bold sm:text-lg text-sm" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Chapters 1-2 of <span className="text-black font-medium">“The C programming language”</span></p>

                        <ol className="mt-2">
                            <li className="list-disc mx-10 mt-2" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><p className="font-bold sm:text-lg text-sm text-#00616c">Variable names types</p></li>

                            <li className="list-disc mx-10 mt-2" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><p className="font-bold sm:text-lg text-sm text-#00616c">Data types and sizes</p></li>

                            <li className="list-disc mx-10 mt-2" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><p className="font-bold sm:text-lg text-sm text-#00616c">Constants</p></li>

                            <li className="list-disc mx-10 mt-2" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><p className="font-bold sm:text-lg text-sm text-#00616c">Arithmetic operations</p></li>

                            <li className="list-disc mx-10 mt-2" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><p className="font-bold sm:text-lg text-sm text-#00616c">Logical and relational operators</p></li>

                            <li className="list-disc mx-10 mt-2" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><p className="font-bold sm:text-lg text-sm text-#00616c">Type conversions.</p></li>

                            <li className="list-disc mx-10 mt-2" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><p className="font-bold sm:text-lg text-sm text-#00616c">Bitwise operators</p></li>

                            <li className="list-disc mx-10 mt-2" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><p className="font-bold sm:text-lg text-sm text-#00616c">Conditional expressions</p></li>
                        </ol>

                        <h4 className="text-black font-semibold sm:text-xl text-lg mt-2" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Programming Assignments will also be given.</h4>

                        <h1 className="text-black font-semibold mt-3 sm:text-3xl text-xl" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">C Programming Part 2 (Weeks 6 and 7)</h1>

                        <p className="text-#00616c font-bold sm:text-lg text-sm mt-2" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Topics 3 and 4 of <span className="text-black font-medium">“The C programming language”</span></p>

                        <ol className="mt-2">
                            <li className="list-disc mx-10 mt-2" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><p className="font-bold sm:text-lg text-sm text-#00616c">Control flow statements (else if, loops, switch, break continue)</p></li>

                            <li className="list-disc mx-10 mt-2" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><p className="font-bold sm:text-lg text-sm text-#00616c">Function and Program structure(Returning and non-returning, scope rules, Recursion)</p></li>
                        </ol>

                        <h4 className="text-black font-semibold sm:text-xl text-lg mt-2" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Programming Assignments will also be given.</h4>

                        <h1 className="text-black font-semibold mt-3 sm:text-3xl text-xl" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Introduction to Embedded systems Part 1 (Weeks 8)</h1>

                        <p className="text-#00616c font-bold sm:text-lg text-sm mt-3" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Basic Electronics and Introduction to microcontrollers</p>

                        <p className="text-#00616c font-bold sm:text-lg text-sm" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Chapter 1 of <span className="text-black font-semibold">“Internet of things with ESP8266”</span></p>

                        <ol className="mt-2">
                            <li className="list-disc mx-10 mt-2" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><p className="font-bold sm:text-lg text-sm text-#00616c">Arduino IDE installation and env setup for ESP8266</p></li>

                            <li className="list-disc mx-10 mt-2" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><p className="font-bold sm:text-lg text-sm text-#00616c">Burning your first code on ESP8266</p></li>
                        </ol>

                        <h4 className="text-black font-semibold sm:text-xl text-lg mt-2" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Project-based Assignments will also be given.</h4>

                        <h4 className="text-black font-semibold sm:text-xl text-lg mt-2" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Mid-Term II: C Programming Quiz 1 in Week 9</h4>

                        <p className="text-#00616c font-bold sm:text-lg text-sm mt-2" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Total Questions: 62, Total Time: 75 minutes</p>

                        <h1 className="text-black font-semibold mt-3 sm:text-3xl text-xl" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Introduction to Embedded systems Part 2 (Weeks 9-12)</h1>

                        <p className="text-#00616c font-bold sm:text-lg text-sm" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Chapters 2-5 of <span className="text-black font-semibold">“Internet of things with ESP8266”</span></p>

                        <ol className="mt-2">
                            <li className="list-disc mx-10 mt-2" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><p className="font-normal sm:text-lg text-sm text-blue-500 hover:text-purple-500 duration-300 underline"><Link href={"https://randomnerdtutorials.com/wifimanager-with-esp8266-autoconnect-custom-parameter-and-manage-your-ssid-and-password/"}>Connecting your hardware to wifi.</Link></p></li>

                            <li className="list-disc mx-10 mt-2" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><p><Link href={"https://randomnerdtutorials.com/esp8266-nodemcu-digital-inputs-outputs-arduino/#:~:text=ESP8266%20NodeMCU%20Read%20Digital%20Inputs,number"} className="font-normal sm:text-lg text-sm text-blue-500 hover:text-purple-500 duration-300 underline">Reading data from GPIOs.</Link> <span className="text-#00616c font-semibold sm:text-lg text-sm">%20you%20are%20referring%20to.</span></p></li>

                            <li className="mx-10 mt-2 list-disc font-bold sm:text-lg text-sm" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><span className="text-#00616c">Controlling LEDs.</span></li>

                            <li className="list-disc mx-10 mt-2" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><p><Link href={"https://randomnerdtutorials.com/esp32-dht11-dht22-temperature-humidity-sensor-arduino-ide/"} className="font-normal sm:text-lg text-sm text-blue-500 hover:text-purple-500 duration-300 underline">Reading data from digital sensors.</Link></p></li>

                            <li className="mx-10 mt-2 list-disc font-bold sm:text-lg text-sm" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><span className="text-#00616c">Cloud data logging.</span></li>

                            <li className="list-disc mx-16 mt-2" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><p><Link href={"https://tttapa.github.io/ESP8266/Chap16%20-%20Data%20Logging.html"} className="font-normal sm:text-lg text-sm text-blue-500 hover:text-purple-500 duration-300 underline">https://tttapa.github.io/ESP8266/Chap16%20-%20Data%20Logging.html</Link></p></li>

                            <li className="list-disc mx-16 mt-2" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><p><Link href={"https://circuitdigest.com/microcontroller-projects/nodemcu-datalogger-to-save-temperature-and-pressure-data-on-thinger-io-cloud-platform"} className="font-normal sm:text-lg text-sm text-blue-500 hover:text-purple-500 duration-300 underline">https://circuitdigest.com/microcontroller-projects/nodemcu-datalogger-to-save-temperature-and-pressure-data-on-thinger-io-cloud-platform</Link></p></li>

                            <li className="list-disc mx-16 mt-2" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><p><Link href={"https://iotdesignpro.com/projects/nodemcu-data-logger-to-upload-data-on-webserver"} className="font-normal sm:text-lg text-sm text-blue-500 hover:text-purple-500 duration-300 underline">https://iotdesignpro.com/projects/nodemcu-data-logger-to-upload-data-on-webserver</Link></p></li>

                            <li className="list-disc mx-10 mt-2" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><p><Link href={"https://github.com/adesolasamuel/NodeMCU-DHT-Data-to-Arduino-IoT-Cloud"} className="font-normal sm:text-lg text-sm text-blue-500 hover:text-purple-500 duration-300 underline">Displaying data on the cloud.</Link></p></li>

                            <li className="list-disc mx-10 mt-2" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><p><Link href={"https://www.instructables.com/Control-ESP8266-Over-the-Internet-from-Anywhere/"} className="font-normal sm:text-lg text-sm text-blue-500 hover:text-purple-500 duration-300 underline">Controlling controller remotely.</Link></p></li>

                            <li className="mx-10 mt-2 list-disc font-bold sm:text-lg text-sm" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><span className="text-#00616c">Controlling a lamp anywhere in the world.</span></li>

                            <li className="mx-10 mt-2 list-disc font-bold sm:text-lg text-sm" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><span className="text-#00616c">Interacting with different web services.</span></li>
                        </ol>

                        <h1 className="text-black font-semibold mt-3 sm:text-3xl text-xl" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Embedded Programming using Rust (Extra Weeks in the Course)</h1>

                        <ol className="mt-2">
                        <li className="list-disc mx-10 mt-2" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><p><Link href={"https://www.rust-lang.org/what/embedded"} className="font-normal sm:text-lg text-sm text-blue-500 hover:text-purple-500 duration-300 underline">https://www.rust-lang.org/what/embedded</Link></p></li>

                        <li className="list-disc mx-10 mt-2" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><p><Link href={"https://crates.io/crates/esp8266"} className="font-normal sm:text-lg text-sm text-blue-500 hover:text-purple-500 duration-300 underline">https://crates.io/crates/esp8266</Link></p></li>
                        </ol>

                        <h1 className="text-black font-semibold mt-3 sm:text-3xl text-xl" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="3000" data-aos-easing="ease-in-out" data-aos-once="true">Hardware Requirements:</h1>

                        <ol className="mt-2">
                            <li className="mx-10 list-decimal sm:text-lg text-sm font-bold" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="3000" data-aos-easing="ease-in-out" data-aos-once="true"> <span className="text-#00616c">Esp8266 (Node MCU)</span></li>

                            <li className="mx-10 list-decimal sm:text-lg text-sm font-bold" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="3000" data-aos-easing="ease-in-out" data-aos-once="true"> <span className="text-#00616c">Jumper Wires</span></li>

                            <li className="mx-10 list-decimal sm:text-lg text-sm font-bold" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="3000" data-aos-easing="ease-in-out" data-aos-once="true"> <span className="text-#00616c">Bread Board</span></li>

                            <li className="mx-10 list-decimal sm:text-lg text-sm font-bold" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="3000" data-aos-easing="ease-in-out" data-aos-once="true"> <span className="text-#00616c">LEDs</span></li>

                            <li className="mx-10 list-decimal sm:text-lg text-sm font-bold" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="3000" data-aos-easing="ease-in-out" data-aos-once="true"> <span className="text-#00616c">Sensors: (Dht11, ultrasonic sensor, IR sensor)</span></li>
                        </ol>
                        </div>
                        </div>
                    </div>

                    <section className="sm:w-4/12" data-aos="fade-left" data-aos-offset="200" data-aos-delay="50" data-aos-duration="3000" data-aos-easing="ease-in-out" data-aos-once="true">
                    <div className="rounded-md group hover:bg-black duration-2000 bg-white inset-0 shadow-lg sticky top-28 border px-6 py-6">
                    <div>
                    <h2 className="text-base sm:text-lg text-black group-hover:text-teal-400 duration-2000 font-bold">Program Structure</h2>
                    <p className="mt-2 text-#00616c group-hover:text-white duration-2000 font-bold text-sm sm:text-base">After completing the first three quarters the participants will select one or more specializations consisting of two courses each.</p>
                    </div>

                    <div className="mt-4">
                        <Link href={"/Ambient/Quarter1"}>
                            <div className="text-16 p-2 px-4 rounded font-semibold flex space-x-5 items-center mt-2  hover:bg-teal-600 duration-2000 hover:translate-x-3">
                                <div className="w-8 h-8 rounded-md rotate-45 bg-gradient-to-tr bg-#00616c text-white flex text-16 items-center my-0.5 justify-center">
                                <p className="text-white text-base font-bold -rotate-45"> Q1</p>
                                </div>
                                <p className="text-xl font-bold group-hover:text-white duration-2000">Quarter I</p>
                            </div>
                        </Link>
                    </div>

                    <div className="mt-4">
                        <Link href={"/Ambient/Quarter2"}>
                            <div className="text-16 p-2 px-4 rounded font-semibold flex space-x-5 items-center mt-2  hover:bg-teal-600 duration-2000 hover:translate-x-3">
                                <div className="w-8 h-8 rounded-md rotate-45 bg-gradient-to-tr bg-#00616c text-white flex text-16 items-center my-0.5 justify-center">
                                <p className="text-white text-base font-bold -rotate-45"> Q2</p>
                                </div>
                                <p className="text-xl font-bold group-hover:text-white duration-2000">Quarter II</p>
                            </div>
                        </Link>
                    </div>

                    <div className="mt-4">
                        <Link href={"/Ambient/Quarter3"}>
                            <div className="text-16 p-2 px-4 rounded font-semibold flex space-x-5 items-center mt-2  hover:bg-teal-600 duration-2000 hover:translate-x-3">
                                <div className="w-8 h-8 rounded-md rotate-45 bg-gradient-to-tr bg-#00616c text-white flex text-16 items-center my-0.5 justify-center">
                                <p className="text-white text-base font-bold -rotate-45"> Q3</p>
                                </div>
                                <p className="text-xl font-bold group-hover:text-white duration-2000">Quarter III</p>
                            </div>
                        </Link>
                    </div>

                    <div className="mt-4">
                        <Link href={"/Courses/Ambient"}>
                            <div className="text-16 p-2 px-4 rounded font-semibold flex space-x-5 items-center mt-2  hover:bg-teal-600 duration-2000 hover:translate-x-3">
                                <div className="w-8 h-8 rounded-md rotate-45 bg-gradient-to-tr bg-#00616c text-white flex text-16 items-center my-0.5 justify-center">
                                <p className="text-white text-base font-bold -rotate-45"> Q4</p>
                                </div>
                                <p className="text-xl font-bold group-hover:text-white duration-2000">Quarter IV</p>
                            </div>
                        </Link>
                    </div>

                    <div className="mt-4">
                        <Link href={"/Ambient/Quarter5"}>
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
