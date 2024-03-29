'use client'
import { addDoc, collection } from 'firebase/firestore';

import React, { useState } from 'react'
import { SocialIcon } from 'react-social-icons'
import { db } from './config/firebase';
import {motion} from "framer-motion";
import Image from 'next/image';

export default function ComingSoon() {
    const [email, setEmail] = useState("");

    const signUp = async () => {
        try {
          // Save user data to Firestore
          const userDocRef = collection(db, "users");
          await addDoc(userDocRef, { email });
    
          // Clear the email input after submission
          setEmail("");
          
          // Display success message or navigate to another page
          alert("Email submitted successfully!");
          console.log("Email submitted successfully!");
        } catch (error) {
            alert("Email not submitted.");  
          console.error("Error signing up:", error.message);
        }
      };
  return (
    <div className='bg-[#F7FFEC] flex items-center justify-center 
    flex-col   '>
     <motion.div
      initial={{
        y:-500,
        opacity:0,
        scale: 0.5
      
      }}
      animate={{
        y:0,
        opacity:1,
        scale: 1
      }}
      transition={{duration: 1.5}}>
      <div className='flex items-center justify-center '>
        <img
        src='/images/jujora.png'
        alt=''
        width={186}
        height={186}
         />
      </div>
      </motion.div>

    <div className='space-y-20 sm:space-y-32'>
      <div>
      <motion.div
      initial={{
        x:500,
        opacity:0,
        scale: 0.5
      
      }}
      animate={{
        x:0,
        opacity:1,
        scale: 1
      }}
      transition={{duration: 1.5}}>
      <div className='relative z-50 mt-14 sm:mt-36'>
      <h1 className='font-extrabold text-4xl text-center text-[#D8993C] sm:text-5xl lg:text-6xl  '>COMING SOON!!!</h1>
      </div>
      </motion.div>
       
      <motion.div
      initial={{
        x:-500,
        opacity:0,
        scale: 0.5
      
      }}
      animate={{
        x:0,
        opacity:1,
        scale: 1
      }}
      transition={{duration: 1.5}}>
      <div className='h-10 p-2 absolute  left-1/2 transform -translate-x-1/2 
      -translate-y-2/4 bg-[#C7E69C]/40 z-10 w-80 sm:w-[450px]'>
  <p className='font-normal text-sm text-[#85C42D] text-center pt-2 sm:text-base lg:text-lg'>We are working hard to launch our site!</p>
   </div>
   </motion.div>

      </div>


      <motion.div
      initial={{
        y:500,
        opacity:0,
        scale: 0.5
      
      }}
      animate={{
        y:0,
        opacity:1,
        scale: 1
      }}
      transition={{duration: 1.5}}
      className='space-y-12 sm:space-y-24'
      >
      <div className=" shadow-md shadow-black py-5">
        <h3 className='capitalize text-center text-lg font-semibold text-[#D8993C] lg:text-xl' >about us</h3>
        <p className='font-normal text-sm text-center   mx-auto w-96 px-4 sm:w-[500px] sm:text-base lg:text-lg lg:w-[650px]  '>At JUJORA, we make easy the process of buying healthy foods by 
        bringing the farm straight to your doorstep. We connect farmers 
        and consumers, making it easy, convenient and stress-free to access
        fresh farm produce. Our goal is to create a world where farm produce 
        comes to you easily, providing an efficient and effective way for 
        individuals to maintain a healthy life.</p>
      </div>

      <div>
        <p className='font-normal text-sm text-center px-8 sm:text-base lg:text-lg'>
        We will be here with our awesome site soon, Subscribe to be notified
        </p>
        <div className='flex space-x-2 mx-4 mt-2 justify-center items-center  '>
            <input  className="w-4/6 h-14 sm:h-16 border px-3  
           border-[#D8993C] rounded-md py-2"
                placeholder=" Your Email Address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
            <button
            className='border-2 bg-[#D8993C] rounded-md w-2/6  h-14 capitalize py-2 hover:bg-amber-700 transition ease-in-out duration-500' 
             onClick={(e) => { e.preventDefault(); signUp(); }}
            >
            <p className='text-center text-base text-[#F2F2F2] font-medium tracking-widest hover:text-gray-400 transition ease-in-out duration-500'>notify me</p>
            </button>
        </div>
      </div>

      <div className='flex justify-center items-center space-x-4 pb-10'>
      
      <SocialIcon bgColor="#000000"   target="_blank" url='"https://www.instagram.com/jujora_ng?utm_source=qr&igsh=MXV3dXByNGhoYmxhYw=="' style={{ height: 30, width: 30, }} />
      <SocialIcon bgColor="#F2F2F2" fgColor='#000000' target="_blank" url='https://x.com/jujora_ng?t=J6Jc2UzqyPMN_ozQ6I5hMA&s=09' style={{ height: 40, width: 40 }} />
      <SocialIcon bgColor="#F2F2F2" fgColor='#000000' target="_blank" url='https://vm.tiktok.com/ZMMUu3NRD/' style={{ height: 40, width: 40 }} />
      </div>
      </motion.div>
    </div>
    </div>
  )
}

