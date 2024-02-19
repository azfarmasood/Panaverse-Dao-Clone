"use client"
import Link from "next/link";
import Wrapper from "@/components/shared/Wrapper";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const CoreTrack_Discription = () => {
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
              <h4 className="text-15 sm:text-lg text-#00616c font-bold" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">CS-101: Object-Oriented Programming using TypeScript</h4>
              <h1 className="font-bold text-3xl sm:text-5xl" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Course Description:</h1>

              <div className="mt-4">
              <h4 className="text-black font-bold text-lg sm:text-2xl" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">HTML and CSS (Homework)</h4>
              </div>
    
              <div className="mt-10" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">
                <div className="grid sm:grid-cols-2 grid-cols-1 border-2 relative rounded-lg max-w-screen-md rounded-b-md sm:rounded-r sm:rounded-b-none h-full w-full  border-#00616c">
                  <div className="col-span-1 px-8 py-12 justify-center flex-col">
                  <h4 className="Capitalize text-black font-bold text-2xl sm:text-3xl">Core Track</h4>
                  <p className="Capitalize text-#00616c font-bold text-base sm:text-lg mt-1.5">(Common in All Specializations)</p>
                  </div>
    
                  <div className="flex flex-col justify-center col-span-1 bg-#00616c h-full bg-gradient-to-tl py-10 px-8">
                  <h2 className="text-white font-bold text-2xl">Duration</h2>
                  <p className="text-white text-xl font-bold mt-1.5">13 Weeks</p>
                  </div>
    
                </div>
    
              </div>
    
              <div className="mt-10">
              <h2 className="text-black font-bold sm:text-5xl text-3xl" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Course Outline:</h2>
              </div>
    

    
            <div className="mt-4">
            <div className="mt-8">
              <h4 className="text-black font-bold text-lg sm:text-2xl" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">HTML and CSS (Homework)</h4>
              <p className="mt-2 text-sm sm:text-lg text-blue-500 hover:text-purple-500 duration-300 font-normal underline" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><Link target="_blank" href={"https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6"}>Learn HTML by Hira Khan (Watch Recorded Videos)</Link></p>
              <p className="mt-2 text-sm sm:text-lg text-blue-500 hover:text-purple-500 duration-300 font-normal underline" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><Link target="_blank" href={"https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob"}>Learn CSS Intro by Hira Khan (Watch Recorded Videos)</Link></p>
              </div>              
            <div className="mt-4 max-w-screen-lg">
            <h4 className="text-black font-bold text-lg sm:text-2xl" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Web 3.0 and Metaverse Theory</h4>
              <p className="mt-2 text-sm sm:text-lg text-blue-500 hover:text-purple-500 duration-300 font-normal underline" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><Link target="_blank" href={"https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit"}>Introduction to Panaverse DAO</Link></p>

              <p className="mt-1 text-sm sm:text-lg text-blue-500 hover:text-purple-500 duration-300 font-normal underline" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><Link target="_blank" href={"https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit#slide=id.p"}>Web 3.0 User Guide</Link></p>

              <p className="mt-2 text-base sm:text-lg font-semibold text-#00616c" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Complete Web 3 Assignments included in the Web 3 User Guide</p>

              <p className="mt-1 text-sm sm:text-lg text-blue-500 hover:text-purple-500 duration-300 font-normal underline" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><Link target="_blank" href={"https://docs.google.com/presentation/d/1ADk87hQ0Etr2PfmN9XH7TQ0CHl6XSP_7JWNUbzPdDNc/edit#slide=id.p"}>Virtual and Augmented Metaverse User Guide</Link></p>

              <h4 className="text-black font-bold text-lg sm:text-2xl mt-4" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Fundamentals of JavaScript (ECMAScript 2022 Language Specification)</h4>

              <p className="mt-2 text-sm sm:text-lg text-blue-500 hover:text-purple-500 duration-300 font-normal underline" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><Link target="_blank" href={"https://www.youtube.com/playlist?list=PLKvqnz8z1zWQdc0NSLknxmxBch5gLOqyo"}>Learn JavaScript by Zeeshan Hanif (Watch Recorded Videos)</Link></p>

              <p className="mt-1 text-sm sm:text-lg text-blue-500 hover:text-purple-500 duration-300 font-normal underline" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><Link target="_blank" href={"https://www.amazon.com/JavaScript-Beginner-Professional-building-interactive/dp/1800562527/ref=sr_1_4"}>Chapters 2-6, 13 of JavaScript from Beginner to Professional: Learn JavaScript quickly by building fun,</Link></p>

              <p className="mt-1 text-sm sm:text-lg text-blue-500 hover:text-purple-500 duration-300 font-normal underline" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><Link target="_blank" href={"https://www.amazon.com/JavaScript-Beginner-Professional-building-interactive/dp/1800562527/ref=sr_1_4"}>interactive, and dynamic web apps, games, and pages</Link></p>

              <p className="mt-1 text-sm sm:text-lg text-blue-500 hover:text-purple-500 duration-300 font-normal underline" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><Link target="_blank" href={"https://github.com/PacktPublishing/JavaScript-from-Beginner-to-Professional"}>JavaScript Book Code</Link></p>

              <p className="mt-1 text-sm sm:text-lg text-blue-500 hover:text-purple-500 duration-300 font-normal underline" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><Link target="_blank" href={"https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md"}>Getting Started Exercises with JavaScript and Node.js</Link></p>

              <h4 className="text-black font-bold text-lg sm:text-2xl mt-4" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Fundamentals of JavaScript and Node.js Quiz</h4>

              <h6 className="text-sm sm:text-lg font-bold mt-2" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Topics Covered in the Quiz:</h6>

              <div className="mt-2">
                  <ul>
                    <ol className="list-decimal max-w-screen-lg px-4 gap-y-1 ">
                      <li className="mx-6 text-sm sm:text-lg font-semibold" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><span className="text-#00616c">Background of JavaScript and How to use JavaScript in Browser.</span></li>

                      <li className="mx-6 text-sm sm:text-lg font-semibold" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><span className="text-#00616c">Variables, Primitive data types Analyzing and modifying data types, and Operators (Chapter 2 of JavaScript from Beginner to Professional)</span></li>
                      
                      <li className="mx-6 text-sm sm:text-lg font-semibold" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><span className="text-#00616c"><Link href={"https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit#slide=id.p"} className=" text-blue-500 hover:text-purple-500 duration-300 font-normal underline">Intro to Node.js, .mjs files, Modules, NPM, import, export, and using external modules with npm.</Link> How to accept user input in your Node.js JavaScript programs, this will allow us to create interactive Node.js console programs using prompt-sync library. <Link href={"https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit#slide=id.p"} className=" text-blue-500 hover:text-purple-500 duration-300 font-normal underline"> The last example in this presentation shows you how to use prompt-sync library in your Node.js programs.</Link> Note: After this point, we will do all our class work and exercises using Node.js in .mjs files. We will also be able to develop interactive Node.js console programs which will greatly help the students to learn.</span></li>

                      <li className="mx-6 text-sm sm:text-lg font-semibold" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><span className="text-#00616c">Using Arrays and Objects in Node.js Programs (chapter 3 of JavaScript from Beginner to Professional)</span></li>

                      <li className="mx-6 text-sm sm:text-lg font-semibold" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><span className="text-#00616c">Using if and if else statements, else if statements, Conditional ternary operators, and switch statements in Node.js programs (chapter 4 of JavaScript from Beginner to Professional)</span></li>

                      <li className="mx-6 text-sm sm:text-lg font-semibold" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><span className="text-#00616c">Using while loop, do while loop, for loop, for in, and for of loop in Node.js (chapter 5 of JavaScript from Beginner to Professional)</span></li>

                      <li className="mx-6 text-sm sm:text-lg font-semibold" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><span className="text-#00616c">Using Basic functions, Function arguments, Return, Variable scope in functions, Recursive functions, Nested functions, Anonymous functions, and Function callbacks in Node.js (chapter 6 of JavaScript from Beginner to Professional)</span></li>

                      <li className="mx-6 text-sm sm:text-lg font-semibold" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><span className="text-#00616c">Using Concurrency, Callbacks, Promises, async / await, and Event loop (chapter 13 of JavaScript from Beginner to Professional)</span></li>

                      <li className="mx-6 text-sm sm:text-lg font-semibold" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><span className="text-#00616c">JavaScript promises, mastering the asynchronous</span></li>
                    </ol>
                  </ul>
              </div>

              <p className="mt-1 text-sm sm:text-lg text-blue-500 hover:text-purple-500 duration-300 font-normal underline" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><Link target="_blank" href={"https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-asynchronous-in-javascript"}>Javascript Promises by Codingame.</Link></p>

              <p className="mt-1 text-sm sm:text-lg text-blue-500 hover:text-purple-500 duration-300 font-normal underline" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><Link target="_blank" href={"https://dev.to/brayanarrieta/new-javascript-features-ecmascript-2022-with-examples-4nhg"}>New JavaScript Features in ECMAScript 2022 and 2021.</Link></p>

              <h4 className="text-black font-bold text-lg sm:text-2xl mt-4" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Object-Oriented Programming with TypeScript</h4>

              <p className="mt-2 text-sm sm:text-lg text-blue-500 hover:text-purple-500 duration-300 font-normal underline" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><Link target="_blank" href={"https://www.amazon.com/Learning-TypeScript-Development-Type-Safe-JavaScript/dp/1098110331/ref=sr_1_1"}>Chapters 1-11 of Learning TypeScript: Enhance Your Web Development Skills Using Type-Safe JavaScript Learning Repository</Link></p>

              <p className="mt-2 text-sm sm:text-lg text-blue-500 hover:text-purple-500 duration-300 font-normal underline" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><Link target="_blank" href={"https://www.learningtypescript.com/"}>In Class Companion projects and articles for Learning TypeScript</Link></p>

              <h6 className="text-sm sm:text-lg font-bold mt-2" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Homework Project</h6>

              <p className="text-sm sm:text-lg text-blue-500 hover:text-purple-500 duration-300 font-normal underline" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><Link target="_blank" href={"https://www.learningtypescript.com/"}>typescript-node-projects.</Link></p>

              <h4 className="text-black font-bold text-lg sm:text-2xl mt-4" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">TypeScript Quizzes</h4>

              <p className="mt-3 text-base sm:text-lg font-semibold text-#00616c" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Fundamentals of TypeScript Quiz</p>

              <p className="mt-1 text-base sm:text-lg font-semibold text-#00616c" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">TypeScript Professional Proficiency Quiz</p>

              <h4 className="text-black font-bold text-lg sm:text-2xl mt-4" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">TypeScript for React</h4>

              <p className="mt-3 text-sm sm:text-lg text-blue-500 hover:text-purple-500 duration-300 font-normal underline" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><Link target="_blank" href={"https://www.learningtypescript.com/"}>Minimal TypeScript Crash Course For React.</Link></p>

              <p className="text-sm sm:text-lg text-blue-500 hover:text-purple-500 duration-300 font-normal underline" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><Link target="_blank" href={"https://www.learningtypescript.com/"}>With Interactive Code Exercises</Link></p>

              <h6 className="text-sm sm:text-lg font-bold mt-2" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Quarter Break Assignments and Quizzes</h6>

              <p className="mt-1 text-base sm:text-lg font-semibold text-#00616c" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">During the Quarter Break, we do the following Assignments:</p>

              <ol className="mt-1">
                  <li className="list-decimal mt-1 mx-8 font-semibold sm:text-lg text-sm" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><span className="text-#00616c sm:text-lg text-sm font-semibold">https://github.com/panaverse/learn-nextjs/tree/main/assignment00_cloud_to_edge</span></li>

                  <li className="list-decimal mt-1 mx-8 font-semibold sm:text-lg text-sm" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><span className="text-#00616c sm:text-lg text-sm font-semibold">https://github.com/panaverse/learn-nextjs/tree/main/assignment01_todo_app</span></li>

                  <li className="list-decimal mt-1 mx-8 font-semibold sm:text-lg text-sm" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><span className="text-#00616c sm:text-lg text-sm font-semibold">https://github.com/panaverse/styling-nextjs-projects/tree/main/project00_pricing_ui</span></li>

                  <li className="list-decimal mt-1 mx-8 font-semibold sm:text-lg text-sm" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><span className="text-#00616c font-semibold whitespace-pre-line">{`Build a new PIAIC Website using Next.js 13 given the content from the current PIAIC Website and from the following document:\n`}</span><Link href={"https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit"} className="sm:whitespace-normal whitespace-pre-line font-normal text-blue-500 hover:text-purple-500 duration-300 underline">{`https://docs.google.com/document/d/1\n3Z4tMKQmZpMEsOc1Y_qAXbOstRolGIF\nupHxQFgAFl98/edit?usp=sharing`}</Link></li>

                  <p className=" mt-1 text-sm sm:text-lg font-semibold text-#00616c" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">The best-developed Website will be hosted on <Link href={"www.piaic.org"} className="text-sm sm:text-lg text-blue-500 hover:text-purple-500 duration-300 font-normal underline">www.piaic.org</Link> domain.</p>

                  <li className="list-decimal mt-1 mx-8 font-semibold sm:text-lg text-sm" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><span className="text-#00616c font-semibold whitespace-pre-line">{`Build a new PIAIC Website using Next.js 13 given the content from the current PIAIC Website and from the following document:\n`}</span><Link href={"https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit"} className="sm:whitespace-normal whitespace-pre-line font-normal text-blue-500 hover:text-purple-500 duration-300 underline">{`https://docs.google.com/document/d/1\n3Z4tMKQmZpMEsOc1Y_qAXbOstRolGIF\nupHxQFgAFl98/edit?usp=sharing`}</Link></li>
              </ol>
              


              <p className="mt-1 text-base sm:text-lg font-semibold text-#00616c" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">After completing the above Five Assignments everyone will appear in the following two Quizzes covering Github and TypeScript:</p>




              <h4 className="text-black font-bold text-lg sm:text-2xl mt-4" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Fundamentals of Version Control with Git (Recorded Videos)</h4>

              <p className="mt-3 text-base sm:text-lg font-semibold text-#00616c" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><Link href={"https://www.youtube.com/playlist?list=PLKueo-cldy_HjRnPUL4G3pWHS7FREAizF"} className="text-sm sm:text-lg text-blue-500 hover:text-purple-500 duration-300 font-normal underline">Version Control using Git and GitHub By Sir Zeeshan Hanif (Watch Recorded Videos)</Link></p>

              <p className="mt-1 text-base sm:text-lg font-semibold text-#00616c" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Chapters 1, 2, 3, and 4 Learn Version Control with Git: A step-by-step course for the complete beginner by Tobias Günther</p>

              <h6 className="text-sm sm:text-lg font-bold mt-2" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">We will also cover these readings:</h6>

              <p className="mt-3 text-base sm:text-lg font-semibold text-#00616c" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><Link href={"https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github"} className="text-sm sm:text-lg text-blue-500 hover:text-purple-500 duration-300 font-normal underline">Markdown Basics</Link></p>

              <p className="mt-1 text-base sm:text-lg font-semibold text-#00616c" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><Link href={"https://stackoverflow.com/questions/3329943/what-are-the-differences-between-git-branch-fork-fetch-merge-rebase-and-clon"} className="text-sm sm:text-lg text-blue-500 hover:text-purple-500 duration-300 font-normal underline">Difference between fork and branch on github</Link></p>

              <p className="mt-1 text-base sm:text-lg font-semibold text-#00616c" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><Link href={"https://stackoverflow.com/questions/5009600/difference-between-fork-and-branch-on-github"} className="text-sm sm:text-lg text-blue-500 hover:text-purple-500 duration-300 font-normal underline" >Git branch, fork, fetch, merge, rebase and clone what are the differences</Link></p>

              <p className="mt-1 text-base sm:text-lg font-semibold text-#00616c" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><Link href={"https://stackoverflow.com/questions/5009600/difference-between-fork-and-branch-on-github"} className="text-sm sm:text-lg text-blue-500 hover:text-purple-500 duration-300 font-normal underline">Git Branching Rebasing</Link></p>

              <p className="mt-1 text-base sm:text-lg font-semibold text-#00616c" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><Link href={"https://stackoverflow.com/questions/5009600/difference-between-fork-and-branch-on-github"} className="text-sm sm:text-lg text-blue-500 hover:text-purple-500 duration-300 font-normal underline">Git Branching Remote Branches</Link></p>

              <p className="mt-1  text-base sm:text-lg font-semibold text-#00616c" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><Link href={"https://docs.github.com/en/get-started/quickstart/set-up-git"} className="text-sm sm:text-lg text-blue-500 hover:text-purple-500 duration-300 font-normal underline">For practice.</Link></p>

              <h6 className="text-sm sm:text-lg font-bold mt-2" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Homework:</h6>

              <p className="mt-2  text-base sm:text-lg font-semibold text-#00616c" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><Link href={"https://www.datacamp.com/courses/introduction-to-version-control-with-git"} className="text-sm sm:text-lg text-blue-500 hover:text-purple-500 duration-300 font-normal underline">introduction to git for data science</Link></p>

              <h6 className="text-sm sm:text-lg font-bold mt-2" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Git Cheatsheet</h6>

              <p className="mt-2  text-base sm:text-lg font-semibold text-#00616c" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><Link href={"https://www.kdnuggets.com/2022/11/git-data-science-cheatsheet.html"} className="text-sm sm:text-lg text-blue-500 hover:text-purple-500 duration-300 font-normal underline">Git data science cheatsheet.html</Link></p>

              <h6 className="text-sm sm:text-lg font-bold mt-2" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">TypeScript Proficiency Quiz</h6>

              <p className="mt-2 text-base sm:text-lg font-semibold text-#00616c" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Total Questions: 63</p>

              <p className="mt-1 text-base sm:text-lg font-semibold text-#00616c" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Duration: 120 minutes</p>

              <h6 className="text-sm sm:text-lg font-bold mt-2" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Study Material:</h6>

              <p className="mt-2  text-base sm:text-lg font-semibold text-#00616c" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><Link href={"https://github.com/panaverse/learn-typescript"} className="text-sm sm:text-lg text-blue-500 hover:text-purple-500 duration-300 font-normal underline">learn-typescript</Link></p>





              </div>

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
                        <Link href={"/Courses/Wmd"}>
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

      </main>
    </section>
    </Wrapper>
    
)
}

export default CoreTrack_Discription
