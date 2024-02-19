"use client"
import Wrapper from "@/components/shared/Wrapper"
import Link from "next/link"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const WmdCourseDsicription = () => {
  useEffect(() =>{
    AOS.init({
      disable: "mobile"
    });
  })
  const link = "https://docs.openzeppelin\n.com/contracts/4.x/access-control"
  const link2 = "https://www.coindesk.com\n/tech/2020/11/10/\nmultisignature-wallets-can-keep-your-coins-safer-if-you-use-them-right/"
  return (
    <Wrapper>
    <section className="mt-16">
      <div className="w-full flex flex-col-reverse sm:flex-row gap-10">
        <div className="sm:w-8/12">
            <div id="course-content">
                <div className="max-w-screen-md">
                    <h4 className="text-sm sm:text-lg font-bold text-#00616c" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps</h4>
                    <h2 className="text-3xl sm:text-5xl sm:leading-75 font-bold" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Course Description:</h2>
                    <p className="text-sm sm:text-lg mt-4 font-semibold text-#00616c" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">In this course you will learn how to develop Web 3.0 DApps, create a project, deploy it in production, write smart contracts, unit test them, and create user interfaces for them. We will also learn to develop ERC-20 and NFT tokens, DAOs, Oracles, etc.  Please note that in order to develop Web 3 applications you also need to build on top of Web 2.0 technologies which we have already covered in the previous quarters.</p>
                </div>
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

            <section>
            <div>
            <div className="mt-10" >
            <h2 className="text-black font-bold text-3xl sm:text-5xl" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Course Outline:</h2>
            </div>
            </div>

            <div className="mt-8">
          <h3 className="text-black font-bold text-xl sm:text-2xl" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Blockchain and Metaverse Theory</h3>
          <p className="mt-2 text-sm sm:text-lg font-normal text-blue-600 underline hover:text-purple-600 duration-300" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">
            <Link href={"https://www.amazon.com/Metaverse-How-Will-Revolutionize-Everything/dp/1324092033/ref=tmm_hrd_swatch_0"} target="_blank">
          The Metaverse: And How It Will Revolutionize Everything
            </Link>
            </p>
          <p className="mt-2 text-sm sm:text-lg font-normal text-blue-600 underline hover:text-purple-600 duration-300" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">
            <Link href={"https://www.packtpub.com/product/mastering-blockchain-fourth-edition/9781803241067"} target="_blank">
            Mastering Blockchain - Fourth Edition by Imran Bashir
            </Link>
            </p>
          </div>

          

        <div className="mt-4">
        <h3 className="text-black font-bold text-xl sm:text-2xl" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Smart Contract Development in Solidity</h3>
        <p className="mt-2 text-sm sm:text-lg font-normal text-blue-600 underline hover:text-purple-600 duration-300" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">
            <Link href={"https://www.packtpub.com/product/solidity-programming-essentials-second-edition/9781803231181"} target="_blank">
            Solidity Programming Essentials - Second Edition By Ritesh Modi
            </Link>
            </p>

          <p className="mt-2 text-sm sm:text-lg font-normal text-blue-600 underline hover:text-purple-600 duration-300" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">
            <Link href={"https://github.com/panaverse/defi-dapps-solidity-smart-contracts"} target="_blank">
            Solidity Learning Repo
            </Link>
            </p>
        </div>

        <div className="mt-4" >
        <h3 className="text-black font-bold text-xl sm:text-2xl" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Dapp Development using Ethers.js and Next.js 13</h3>
        <p className="mt-2 text-sm sm:text-lg font-normal text-blue-600 underline hover:text-purple-600 duration-300" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">
            <Link href={"https://github.com/panaverse/dapps-nextjs"} target="_blank">
            Dapp Learning Repo
            </Link>
            </p>
        </div>

        
        <div className="mt-4">
        <h3 className="text-black font-bold text-xl sm:text-2xl" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Tokennomics</h3>
        </div>


        <div className="mt-4" >
        <h3 className="text-black font-bold text-xl sm:text-2xl" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Blockchain Project: Create a Token and Launch ICO/IEO/IDO</h3>
        <p className="mt-2 text-sm text-#00616c font-semibold sm:text-lg" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">As you probably know, the ICO ("Initial Coin Offering") industry has been booming, and it's completely reinventing the way new startups kickstart themselves. In fact, have a look at Wikipedia's list of highest <span className="font-normal underline text-blue-600 hover:text-purple-600 duration-300"><Link target="_blank" href={"https://en.wikipedia.org/wiki/List_of_highest-funded_crowdfunding_projects"}>crowdfunding projects,</Link></span> and you'll notice that blockchain projects absolutely dominate the list.</p>
        <p className="mt-1 text-sm sm:text-lg font-normal underline text-blue-600 hover:text-purple-600 duration-300" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><Link href={"https://phemex.com/blogs/what-is-a-dex-ido"}>Understand the difference between IDO vs. IEO vs. ICO</Link></p>
        <p className="mt-1 text-sm text-#00616c font-semibold sm:text-lg" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Also check these links for latest listings:</p>
        <p className="mt-1 text-sm sm:text-lg font-normal underline text-blue-600 hover:text-purple-600 duration-300" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><Link href={"https://icodrops.com/"}>ICO list at ICO Drops</Link></p>

        <p className="mt-1 text-sm sm:text-lg font-normal underline text-blue-600 hover:text-purple-600 duration-300" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><Link href={"https://topicolist.com/"}>ICO List of Best New Initial Coin Offerings</Link></p>

        <p className="mt-1 text-sm sm:text-lg font-semibold text-#00616c" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Top-Rated Crypto Token Sales: List of New ICOs, STOs, IEOs and IDOsTop-Rated Crypto Token Sales: <Link href={"https://cryptototem.com/ico-list/"}className="text-sm sm:text-lg font-normal underline text-blue-600 hover:text-purple-600 duration-300">List of New ICOs, STOs, IEOs and IDOs</Link></p>

        <p><Link href={"https://www.icolistingonline.com/"} className="text-sm sm:text-lg font-normal underline text-blue-600 hover:text-purple-600 duration-300" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">ICO List Online</Link></p>

        <p data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><Link href={"https://coincodex.com/ieo-list/binance/"} className="text-sm sm:text-lg font-normal underline text-blue-600 hover:text-purple-600 duration-300">Binance IEO List</Link></p>

        <p data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><Link href={"https://www.coinspeaker.com/ieo/platform/binance-launchpad/"} className="text-sm sm:text-lg font-normal underline text-blue-600 hover:text-purple-600 duration-300">Binance Launchpad</Link></p>

        <p data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><Link href={"https://icomarks.com/ieo"} className="text-sm sm:text-lg font-normal underline text-blue-600 hover:text-purple-600 duration-300">IEO List</Link></p>

        <p data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><Link href={"https://polkastarter.com/"} className="text-sm sm:text-lg font-normal underline text-blue-600 hover:text-purple-600 duration-300">Polkastarter</Link></p>

        </div>

        <div className="mt-2">
        <h3 className="text-black font-bold text-lg sm:text-xl" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Project Part 1: How to Launch a IEO on Binance Launchpad</h3>

        <p className="mt-2" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><Link href={"https://appinventiv.com/blog/how-to-launch-an-ieo/"} className="text-sm sm:text-lg font-normal underline text-blue-600 hover:text-purple-600 duration-300">Read How to Launch an IEO</Link></p>

        <p className="mt-1 text-sm sm:text-lg font-semibold text-#00616c" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Your first task of the project is to make a google slides presentation on how to start a IEO on the <Link href={"https://appinventiv.com/blog/how-to-launch-an-ieo/"} className="text-sm sm:text-lg font-normal underline text-blue-600 hover:text-purple-600 duration-300">Binance Launch Pad</Link></p>

        <p className="mt-1 text-sm sm:text-sm font-semibold text-#00616c" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Note: Also document the alternatives to Binance Launchpad.</p>
        </div>


        

        <div className="mt-2" >
        <h3 className="text-black font-bold text-lg sm:text-xl" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Project Part 2: How to Launch a IDO on Polkastarter</h3>
        
        <p className="mt-2 text-sm sm:text-lg font-semibold text-#00616c" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Review the list of top <Link href={"https://cryptorank.io/fundraising-platforms"} className="text-sm sm:text-lg font-normal underline text-blue-600 hover:text-purple-600 duration-300">fundraising platforms</Link></p>

        <p className="mt-2 text-sm sm:text-lg font-semibold text-#00616c" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Your second task of the project is to make a google slides presentation on how to start a IDO on the <Link href={"https://polkastarter.com/"} className="text-sm sm:text-lg font-normal underline text-blue-600 hover:text-purple-600 duration-300">Polkastarter</Link></p>
        </div>

        <div className="mt-2">
        <h3 className="text-black font-bold text-lg sm:text-xl" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Project Part 3: Create a Pako Token</h3>

        <p className="mt-2 text-sm sm:text-lg font-semibold text-#00616c" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">By creating a token and related contracts, you'll also learn how to handle money sent to your contracts, which should come in handy if you want to create some kind of paid decentralized service in the future.</p>

        <p className="mt-4 text-sm sm:text-lg font-semibold text-#00616c" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Therefore, for the sake of this chapter, let's imagine that our Pako DApp uses its own coin - the Pako Token. We will create two contracts - one for the token itself and one for the token crowd sale (the ICO).</p>

        <p className="mt-4 text-sm sm:text-lg font-semibold text-#00616c" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Now Create your own Pako ERC20 Token and deploy it on a testnet. The Token should be to use OpenZeppelin contracts. You will use the Hardhat development environment. Also, write at least twenty automated tests. We will be using Solidity and Typescript for development.</p>

        <div className="mt-2 whitespace-pre-line">
        <h3 className="text-black font-bold text-lg sm:text-xl" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Project Part 4: Develop Crowd Sale Contract</h3>

        <p className="mt-2 text-sm sm:text-lg font-semibold text-#00616c" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">This contract will be responsible for allowing users to exchange ETH for our Pako Token. In order to do that we need to set a price for our token (1 ETH = 100 Pako Token)</p>

        
        <p className="mt-4 text-sm sm:text-lg font-semibold text-#00616c" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Implement a payable buyToken() function.</p>

        <p className="mt-4 text-sm sm:text-lg font-semibold text-#00616c" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Emit a BuyTokens event that will log who's the buyer, the amount of ETH sent and the amount of Token bought</p>

        

        <p className="mt-4 text-sm sm:text-lg font-semibold text-#00616c" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Transfer 75% of the Tokens to the Crowd Sale contract at deployment time. i.e. Right after the contract is deployed, we want the token contract to send 75% of our token supply to it. While 25% remain in our personal "owner" account.</p>

        <p className="mt-4 text-sm sm:text-lg font-semibold text-#00616c" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Transfer the ownership of the Crowd Sale contract (at deploy time) to our frontend address so that we are able to withdraw the ETH..</p>

        <p className="mt-4 text-sm sm:text-lg font-semibold text-#00616c" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">You can use the openzeppelin <Link href={""} className="font-normal underline text-blue-600 hover:text-purple-600 duration-300">crowd sale contracts</Link> however you will have to update the code to the latest solidity version.</p>
        
        <p className="mt-4 text-sm sm:text-lg font-semibold text-#00616c" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Also write extensive tests, for example we will simply send a transaction of 1 ETH from a random account to the contract. After the transaction, we should expect the account to have received Pako, while the contract's balance should have been reduced.</p>

        <p className="mt-4 text-sm sm:text-sm font-semibold text-#00616c" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Note: Before you get started writing the token contract we suggest you review the access control</p>

        <p className="whitespace-pre-line mt-2 text-sm sm:text-sm font-semibold text-#00616c" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><Link href={"https://docs.openzeppelin.com/contracts/4.x/access-control"} className="font-normal underline text-blue-600 hover:text-purple-600 duration-300">{link}</Link></p>

        </div>




        <div className="mt-2">
        <h3 className="text-black font-bold text-lg sm:text-xl" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Project Part 5: Trying it with MetaMask</h3>

        <p className="mt-4 text-base sm:text-lg font-semibold text-#00616c" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">While it's always good to test your code, it's often more satisfying to see the results of your work wrapped in a nice UI. Let's see how we can deploy our contracts and get some Pako tokens into our MetaMask wallet!</p>

        <p className="mt-4 text-base sm:text-lg font-semibold text-#00616c" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">We start by running our deployment scripts for the test network so that the new token contracts are uploaded and deployed.</p>

        <p className="mt-4 text-base sm:text-lg font-semibold text-#00616c" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">When it's done, take note of what addresses the contracts were uploaded to and copy it!</p>

        <p className="mt-4 text-base sm:text-lg font-semibold text-#00616c" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Now head to MetaMask, and send a transaction of 1 ETH to the crowd sale contract address. If your MetaMask wallet doesn't have any ethers, remember that you can use any faucet.</p>

        <p className="mt-4 text-base sm:text-lg font-semibold text-#00616c" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">After the transaction has been confirmed, you might be confused about why you can't see any tokens in your wallet. It turns out that you need to manually add the token address in MetaMask in order to "register" it - after all, there are so many tokens out there, there's no way MetaMask could list them all by default!</p>

        <p className="mt-4 text-base sm:text-lg font-semibold text-#00616c" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">To do this, open the side menu and click on the "Add token" button to get started:</p>

        <p className="mt-4 text-base sm:text-lg font-semibold text-#00616c" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Once you're on the token page, click on "Add custom token" and paste in the token contract's address in the address field.</p>

        <p className="mt-4 text-base sm:text-lg font-semibold text-#00616c" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">After confirming that you want to add the token, you should be able to see your Pako balance right next to your ETH balance in the wallet. How cool!</p>

        </div>

        <div className="mt-4">
        <h3 className="text-black font-bold text-lg sm:text-xl" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Project Part 6: Trying it with Multisignature Wallets</h3>
        <p className="mt-2 text-base sm:text-lg font-semibold text-#00616c" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Read <Link href={"https://www.coindesk.com/tech/2020/11/10/multisignature-wallets-can-keep-your-coins-safer-if-you-use-them-right/"} className="text-base sm:text-lg font-normal underline text-blue-600 hover:text-purple-600 duration-300">{link2}</Link></p>

        <p className="mt-1 text-base sm:text-lg font-semibold text-#00616c" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><Link href={"https://safe.global/"} className="text-base sm:text-lg font-normal underline text-blue-600 hover:text-purple-600 duration-300">Now use Gnosis Safe</Link> with multi-sigs to do what you did in the last part.</p>

        </div>

        

        <div className="mt-2">
        <h3 className="text-black font-bold text-lg sm:text-xl" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Project Part 7: Sending Tokens using Ethers.js</h3>

        <p className="mt-2 text-base sm:text-lg font-semibold text-#00616c" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Write a Typescript program to send Pako Token to some friend's address using Ethers.js.</p>

        <p className="mt-2 text-base sm:text-lg font-semibold text-#00616c" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><Link href={"https://ethereum.org/en/developers/tutorials/send-token-etherjs/"}  className="text-base sm:text-lg font-normal underline text-blue-600 hover:text-purple-600 duration-300">You may follow this tutorial</Link></p>
        </div>

        <div className="mt-2">
        <h3 className="text-black font-bold text-lg sm:text-xl" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Project Part 8 Advance: Create, Deploy, Mint, and Sell an NFT</h3>

        <p className="mt-2 text-base sm:text-lg font-semibold text-#00616c" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true"><Link href={"https://ethereum.org/en/developers/tutorials/how-to-write-and-deploy-an-nft/"}  className="text-base sm:text-lg font-normal underline text-blue-600 hover:text-purple-600 duration-300">Read this NFT tutorial series</Link></p>

        <p className="mt-1 text-base sm:text-lg font-semibold text-#00616c" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Create a NFT contract using the <Link href={"https://ethereum.org/en/developers/tutorials/how-to-write-and-deploy-an-nft/"}  className="text-base sm:text-lg font-normal underline text-blue-600 hover:text-purple-600 duration-300">OpenZepplen ERC721 NFT Standard</Link></p>

        <p className="mt-1 text-base sm:text-lg font-semibold text-#00616c" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">You may use the <Link href={"https://ethereum.org/en/developers/tutorials/how-to-write-and-deploy-an-nft/"}  className="text-base sm:text-lg font-normal underline text-blue-600 hover:text-purple-600 duration-300">Preset ERC721 contract</Link></p>

        <p className="mt-1 text-base sm:text-lg font-semibold text-#00616c" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Deploy your NFT contract on a testnet, mint it, and view it on the MetaMask wallet and list it on <Link href={"https://ethereum.org/en/developers/tutorials/how-to-write-and-deploy-an-nft/"}  className="text-base sm:text-lg font-normal underline text-blue-600 hover:text-purple-600 duration-300"> OpenSea Marketplace</Link> for sale.</p>

        <p className="mt-1 text-base sm:text-lg font-semibold text-#00616c" data-aos="fade-down" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">Implement a <Link href={"https://ethereum.org/en/developers/tutorials/how-to-write-and-deploy-an-nft/"}  className="text-base sm:text-lg font-normal underline text-blue-600 hover:text-purple-600 duration-300"> ERC721 Market</Link></p>

        </div>

        </div>

        

            </section>

        </div>

        <div className="sm:w-4/12" data-aos="fade-left" data-aos-offset="200" data-aos-delay="50" data-aos-duration="2000"  data-aos-easing="ease-in-out" data-aos-once="true">
          <div className="group hover:bg-black duration-2000 scroll-smooth px-6 py-6 rounded-md shadow-lg sticky top-28 border overflow-hidden">
            <div>
                  <h2 className="text-xl font-bold text-black group-hover:text-teal-400 duration-2000">Program Structure</h2>
                  <p className="mt-2 text-sm font-bold text-#00616c group-hover:text-white duration-2000">After finishing the first three quarters, the participants will delve into two specialized quarters specific to their chosen specialization</p>
            </div>

            <div className="mt-4">
               <Link className="cursor-pointer" href={"/Wmd/Quarter1"}>
                <div className="text-15 hover:translate-x-4 p-2 px-4 rounded font-semibold flex space-x-5 hover:bg-teal-600 duration-2000 items-center mt-2">
                  <div className="w-8 h-8 rounded-md rotate-45 bg-gradient-to-tr bg-#00616c flex text-16 items-center my-0.5 justify-center ">
                    <p className="text-white group-hover:text-white duration-2000 text-lg font-bold -rotate-45">Q1</p>
                  </div>
                  <div>
                  <p className="text-#00616c text-xl group-hover:text-white duration-2000">Quarter I</p>
                  </div>
                </div>
               </Link>
            </div>
            <div className="mt-4">
               <Link className="cursor-pointer" href={"/Wmd/Quarter2"}>
                <div className="text-15 hover:translate-x-4 p-2 px-4 rounded font-semibold flex space-x-5 hover:bg-teal-600 duration-2000 items-center mt-2">
                  <div className="w-8 h-8 rounded-md rotate-45 bg-gradient-to-tr bg-#00616c flex text-16 items-center my-0.5 justify-center ">
                    <p className="text-white group-hover:text-white duration-2000 text-lg font-bold -rotate-45">Q2</p>
                  </div>
                  <div>
                  <p className="text-#00616c text-xl group-hover:text-white duration-2000">Quarter II</p>
                  </div>
                </div>
               </Link>
            </div>

                <div className="mt-4">
               <Link className="cursor-pointer" href={"/Wmd/Quarter3"}>
                <div className="text-15 hover:translate-x-4 p-2 px-4 rounded font-semibold flex space-x-5 hover:bg-teal-600 duration-2000 items-center mt-2">
                  <div className="w-8 h-8 rounded-md rotate-45 bg-gradient-to-tr bg-#00616c flex text-16 items-center my-0.5 justify-center ">
                    <p className="text-white group-hover:text-white duration-2000 text-lg font-bold -rotate-45">Q3</p>
                  </div>
                  <div>
                  <p className="text-#00616c text-xl group-hover:text-white duration-2000">Quarter III</p>
                  </div>
                </div>
               </Link>
            </div>

                <div className="mt-4">
               <Link className="cursor-pointer" href={"/Courses/WMD"}>
                <div className="text-15 hover:translate-x-4 p-2 px-4 rounded font-semibold flex space-x-5 hover:bg-teal-600 duration-2000 items-center mt-2">
                  <div className="w-8 h-8 rounded-md rotate-45 bg-gradient-to-tr bg-#00616c flex text-16 items-center my-0.5 justify-center ">
                    <p className="text-white group-hover:text-white duration-2000 text-lg font-bold -rotate-45">Q4</p>
                  </div>
                  <div>
                  <p className="text-#00616c text-xl group-hover:text-white duration-2000">Quarter IV</p>
                  </div>
                </div>
               </Link>
            </div>

            <div className="mt-4">
               <Link className="cursor-pointer" href={"/Wmd/Quarter5"}>
                <div className="text-15 p-2 px-4 rounded font-semibold flex space-x-5 hover:bg-teal-600 duration-2000 hover:translate-x-4 items-center mt-2">
                  <div className="w-8 h-8 rounded-md rotate-45 bg-gradient-to-tr bg-#00616c flex text-16 items-center my-0.5 justify-center ">
                    <p className="text-white group-hover:text-white duration-2000 text-lg font-bold -rotate-45">Q5</p>
                  </div>
                  <div>
                  <p className="text-#00616c text-xl group-hover:text-white duration-2000">Quarter V</p>
                  </div>
                </div>
               </Link>
            </div>


          </div>
        </div>
        
        
      </div>
      

    </section>


      
    </Wrapper>
  )
}

export default WmdCourseDsicription
