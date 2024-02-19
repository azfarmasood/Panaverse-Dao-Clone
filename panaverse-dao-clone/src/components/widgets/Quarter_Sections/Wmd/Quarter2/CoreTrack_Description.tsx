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
                        <h4 className="text-#00616c font-bold sm:text-lg text-base" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform</h4>
                        <h1 className="text-black font-bold sm:text-5xl text-3xl" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Course Description:</h1>
                        <p className="text-#00616c sm:text-lg text-sm font-bold py-8" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">The objective of this course is to teach participants to develop customer-facing planet-scale Websites, Full-Stack Apps and templates, Dashboards, and Muti-Cloud Serverless APIs. By the end of the quarter, the participants will be able to develop and deploy web platforms like Facebook, Shopify, etc. The technologies covered in this course will include Next.js 13, Figma, Tailwind CSS, Chakra UI, tRPC, QraphQL, Prisma, Cockroachdb Serverless (PostgreSQL Compatible), AWS Serverless Technologies, and Cloud Development Kit for Terraform (CDKTF).</p>
                        <div id="Table-Block" className="py-10" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">
                            <div className="grid sm:grid-cols-2 grid-cols-1 border-2 rounded-lg relative max-w-screen-md rounded-b-md sm:rounded-r sm:rounded-b-none w-full h-full border-#00616c">
                            <div className="col-span-1 flex-col justify-center px-8 py-12">
                            <h4 className="Capitalize text-black font-bold text-2xl sm:text-3xl">Core Track</h4>
                            <p className="Capitalize text-#00616c font-bold text-base sm:text-lg mt-1.5">(Common in All Specializations)</p>
                                </div>
                                <div className="flex flex-col justify-center col-span-1 bg-#00616c h-full bg-gradient-to-tl py-10 px-8">
                                <h2 className="text-white font-bold text-2xl">Duration</h2>
                                <p className="text-white text-xl font-bold mt-1.5">13 Weeks</p>
                                </div>
                            </div>
                        </div>
                        <div id="Content">
                        <h1 className="text-black font-bold sm:text-5xl text-3xl" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Course Outline:</h1>
                        <h4 className="text-black font-bold text-lg sm:text-2xl mt-6" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Next.js 13 Web Development</h4>
                        <p className="font-normal sm:text-lg text-sm text-blue-500 mt-4 hover:text-purple-500 duration-300 underline" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><Link href={"https://nextjs.org/docs"}>Next 13 Official Documentation</Link></p>

                        <p className="font-normal sm:text-lg text-sm text-blue-500 mt-1 hover:text-purple-500 duration-300 underline" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><Link href={"https://react.dev/learn"}>Latest Learn React Official Website</Link></p>

                        <p className="font-normal sm:text-lg text-sm text-blue-500 mt-1 hover:text-purple-500 duration-300 underline" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><Link href={"https://github.com/panaverse/learn-nextjs"}>Learn Next.js 13 Learning Repo</Link></p>

                        <h4 className="text-black font-bold text-lg sm:text-2xl mt-4" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Next.js 13 using Chakra UI (Remote Zoom Class)</h4>

                        <p className="font-normal sm:text-lg text-sm text-blue-500 mt-3 hover:text-purple-500 duration-300 underline" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><Link href={"https://www.freecodecamp.org/news/css-flexbox-complete-guide/"}>CSS Flexbox Explained - Complete Guide to Flexible Containers and Flex Items</Link></p>

                        <p className="font-normal sm:text-lg text-sm text-blue-500 mt-1 hover:text-purple-500 duration-300 underline" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><Link href={"https://chakra-ui.com/getting-started"}>Chakra UI Docs</Link></p>

                        <h4 className="text-black font-bold text-lg sm:text-2xl mt-4" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">UI/UX Design with Figma, TailwindCSS, and Chakra UI (Remote Zoom Class)</h4>
                        <p className="text-#00616c font-bold sm:text-lg text-sm mt-2" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Designing and Prototyping Interfaces with Figma: Learn essential UX/UI design principles by creating interactive prototypes for mobile, tablet, and desktop by Fabio Staiano</p>
                        
                        <p className="font-normal sm:text-lg text-sm text-blue-500 mt-1 hover:text-purple-500 duration-300 underline" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><Link href={"https://www.amazon.com/Designing-Prototyping-Interfaces-Figma-interactive/dp/180056418X/ref=sr_1_1_sspa"}>https://www.amazon.com/Designing-Prototyping-Interfaces-Figma-interactive/dp/180056418X/ref=sr_1_1_sspa</Link></p>

                        <p className="font-normal sm:text-lg text-sm text-blue-500 mt-1 hover:text-purple-500 duration-300 underline" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><Link href={"https://www.figma.com/community/file/768809027799962739/tailwind-css-ui"}>Figma Design Kit for TailwindCSS</Link></p>

                        <p className="font-normal sm:text-lg text-sm text-blue-500 mt-1 hover:text-purple-500 duration-300 underline" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><Link href={"https://www.figma.com/community/file/971408767069651759/chakra-ui-figma-kit"}>Chakra UI Figma Kit</Link></p>

                        <h4 className="text-black font-bold text-lg sm:text-2xl mt-4" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">API Routes with Next.js (Remote Zoom Class)</h4>

                        <p className="font-normal sm:text-lg text-sm text-blue-500 mt-3 hover:text-purple-500 duration-300 underline" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><Link href={"https://nextjs.org/docs/pages/building-your-application/routing/api-routes"}>API Routes</Link></p>

                        <h4 className="text-black font-bold text-lg sm:text-2xl mt-4" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">APIs with Next.js and tRPC (Remote Zoom Class)</h4>

                        <p className="font-normal sm:text-lg text-sm text-blue-500 mt-3 hover:text-purple-500 duration-300 underline" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><Link href={"https://codevoweb.com/build-a-trpc-crud-api-example-with-next-js/"}>Build a tRPC CRUD API Example with Next.js</Link></p>

                        <p className="font-normal sm:text-lg text-sm text-blue-500 mt-1 hover:text-purple-500 duration-300 underline" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><Link href={"https://brockherion.dev/blog/posts/stop-building-rest-apis-for-your-next-apps/"}>Stop building REST APIs for your Next.js apps, use tRPC instead</Link></p>

                        <h4 className="text-black font-bold text-lg sm:text-2xl mt-4" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">SQL and Prisma</h4>

                        <p className="font-normal sm:text-lg text-sm text-blue-500 mt-3 hover:text-purple-500 duration-300 underline" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><Link href={"https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgresql"}>Start from scratch with relational databases</Link></p>

                        <p className="font-normal sm:text-lg text-sm text-blue-500 mt-1 hover:text-purple-500 duration-300 underline" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><Link href={"https://www.youtube.com/watch?v=5hzZtqCNQKk&ab_channel=Amigoscode"}>SQL For Beginners Video Tutorial</Link></p>

                        <p className="font-normal sm:text-lg text-sm text-blue-500 mt-1 hover:text-purple-500 duration-300 underline" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><Link href={"https://www.freecodecamp.org/news/dbms-and-sql-basics/"}>Database Management Systems and SQL - Tutorial for Beginners</Link></p>

                        <h4 className="text-black font-bold text-lg sm:text-2xl mt-4" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Next.js 13 using TailwindCSS (Remote Zoom Class)</h4>

                        <p className="font-normal sm:text-lg text-sm text-blue-500 mt-3 hover:text-purple-500 duration-300 underline" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><Link href={"https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgresql"}>Modern CSS with Tailwind, Second Edition by Noel Rappin</Link></p>

                        <h4 className="text-black font-bold text-lg sm:text-2xl mt-4" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">AWS Application Composer (Remote Zoom Class)</h4>

                        <p className="font-normal sm:text-lg text-sm text-blue-500 mt-3 hover:text-purple-500 duration-300 underline" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><Link href={"https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgresql"}>What is AWS Application Composer?</Link></p>

                        <p className="font-normal sm:text-lg text-sm text-blue-500 mt-1 hover:text-purple-500 duration-300 underline" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><Link href={"https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgresql"}>Event-driven apps with AWS Application Composer</Link></p>

                        <p className="font-normal sm:text-lg text-sm text-blue-500 mt-1 hover:text-purple-500 duration-300 underline" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><Link href={"https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgresql"}>Visually design and build serverless applications quickly</Link></p>

                        <h6 className="text-black font-semibold sm:text-xl text-base underline mt-2" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Must Have: Create Free AWS Account</h6>

                        <p className="text-blue-500 hover:text-purple-500 mt-2 fonr-normal sm:text-lg text-sm duration-300 underline" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><Link href={"https://aws.amazon.com/free/?all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all"}>AWS Free Tier</Link></p>

                        <p className="text-#00616c font-bold sm:text-base text-sm mt-2" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><span className="text-black">Note:</span> For AWS Free Tier you will need a credit or debit card. The easiest way for Pakistani students is to open a bank account with Meezan Bank. Open a Meezan Aasan Account if you have no earning proof. Meezan Bank will charge Rs. 1100 for ATM Debit Card and there is a requirement of Rs. 100 minimum deposit. The card will be delivered in a few weeks. Our students have reported that this Debit card works with AWS.</p>

                        <p className="text-#00616c font-bold sm:text-lg text-sm mt-1" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Now you can create a virtual VISA Debit card through the <Link href={"https://www.nayapay.com/"} className="text-blue-500 hover:text-purple-500 duration-300 font-normal underline">NayaPay</Link> app which can be used to create AWS/GCP/Azure accounts. This is good news for those students who find it difficult to create physical debit and credit cards from banks.</p>

                        <h6 className="text-black font-semibold sm:text-xl text-base mt-2" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">You can also get a $300 credit</h6>

                        <p className="text-blue-500 hover:text-purple-500 mt-2 fonr-normal sm:text-lg text-sm duration-300 underline" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><Link href={"https://pages.awscloud.com/adoptf90d_GLOBAL_POC-credits.html"}>https://pages.awscloud.com/adoptf90d_GLOBAL_POC-credits.html</Link></p>

                        <h4 className="text-black font-bold text-lg sm:text-2xl mt-4" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Multi-Cloud GraphQL Serverless API Development with Cloud Development Kit for Terraform (CDKTF) (Remote Zoom Class)</h4>

                        <p className="text-blue-500 hover:text-purple-500 mt-2 font-normal sm:text-lg text-sm duration-300 underline" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><Link href={"https://github.com/panaverse/learn-multicloud-api-development"}>Learn Multicloud Serverless API Development using CDK Terraform in Baby Steps</Link></p>

                        <h4 className="text-black font-bold text-lg sm:text-2xl mt-4" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Web 2.0 Projects</h4>

                        <ol className="list-disc mx-11">
                        <li className="font-bold sm:text-lg text-sm mt-2" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><p className="text-blue-500 hover:text-purple-500 mt-2 font-normal sm:text-lg text-sm duration-300 underline"><Link href={"https://github.com/panaverse/nextjs-projects"}>Next.js Projects</Link></p></li>

                        <li className="font-bold sm:text-lg text-sm mt-2" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">                        <p className="text-blue-500 hover:text-purple-500 mt-2 font-normal sm:text-lg text-sm duration-300 underline"><Link href={"https://github.com/panaverse/styling-nextjs-projects"}>Styling Next.js Projects using TailwindCSS and Chakra UI</Link></p></li>

                        <li className="font-bold sm:text-lg text-sm mt-2" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">                        <p className="text-blue-500 hover:text-purple-500 mt-2 font-normal sm:text-lg text-sm duration-300 underline"><Link href={"https://github.com/ogzhanolguncu/min-todo"}>Todo Full-Stack App</Link></p></li>

                        <li className="font-bold sm:text-lg text-sm mt-2" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">                        <p className="text-blue-500 hover:text-purple-500 mt-2 font-normal sm:text-lg text-sm duration-300 underline"><Link href={"https://www.youtube.com/watch?v=nzJsYJPCc80&ab_channel=TomDoesTech"}>Build a Twitter Clone</Link></p></li>
                        </ol>
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

                 </div>
            </main>
        </section>
    </Wrapper>
  )
}

export default CoreTrack_Description
