'use client'
import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import { SocialIcon } from 'react-social-icons';
import { db } from './config/firebase';
import { motion } from 'framer-motion';

export default function ComingSoon() {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.com$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    setIsValidEmail(validateEmail(inputEmail));
  };

  const signUp = async () => {
    try {
      const userDocRef = collection(db, 'users');
      await addDoc(userDocRef, { email });
      setEmail('');
      alert('Email submitted successfully!');
      console.log('Email submitted successfully!');
    } catch (error) {
      alert('Email not submitted.');
      console.error('Error signing up:', error.message);
    }
  };

  return (
    <div className='bg-[#F7FFEC] flex items-center justify-center flex-col'>
      <motion.div
        initial={{ y: -500, opacity: 0, scale: 0.5 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className='flex items-center justify-center'>
          <img src='/images/jujora.png' alt='' width={186} height={186} />
        </div>
        <div className='text-lg font-bold w-screen text-center'>
          You can place your orders through
          <a className='text-blue-600 underline' target='_blank' href='https://wa.me/message/5MKJMKEREXD7P1'> WhatsApp </a>
          or any of our social media platforms.
        </div>
      </motion.div>

      <div className='space-y-20 sm:space-y-32'>
        <div>
          <motion.div
            initial={{ x: 500, opacity: 0, scale: 0.5 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            <div className='relative z-50 mt-14 sm:mt-36'>
              <h1 className='font-extrabold text-4xl text-center text-[#D8993C] sm:text-5xl lg:text-6xl'>COMING SOON!!!</h1>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: -500, opacity: 0, scale: 0.5 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            <div className='h-10 p-2 absolute left-1/2 transform -translate-x-1/2 -translate-y-2/4 bg-[#C7E69C]/40 z-10 w-80 sm:w-[450px]'>
              <p className='font-normal text-sm text-[#85C42D] text-center pt-2 sm:text-base lg:text-lg'>We are working hard to launch our site!</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 500, opacity: 0, scale: 0.5 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className='space-y-12 sm:space-y-24'
        >
          <div className='py-5'>
            <h3 className='capitalize text-center text-lg font-semibold text-[#D8993C] lg:text-xl'>about us</h3>
            <p className='font-normal text-sm text-center mx-auto w-96 px-4 sm:w-[520px] sm:text-base lg:text-lg lg:w-[680px]'>
              At JUJORA, we make the process of buying healthy foods easy by bringing
              the farm straight to your doorstep. We connect farmers and consumers
              allowing for convenient and stress-free access to fresh farm produce.
              Our goal is to create a world where farm produce comes to you without
              any effort, providing an efficient and effective way for individuals to
              maintain a healthy lifestyle.
            </p>
          </div>

          <div>
            <p className='font-normal text-sm text-center px-8 sm:text-base lg:text-lg'>
              We will be here with our awesome site soon, Subscribe to be notified
            </p>
            <div className='flex space-x-2 mx-4 mt-2 justify-center items-center'>
              <input
                className='w-4/6 h-14 sm:h-16 border px-3 border-[#D8993C] rounded-md py-2'
                placeholder='Your Email Address'
                type='email'
                value={email}
                onChange={handleEmailChange}
              />
              <button
                className={`border-2 rounded-md w-2/6 h-14 capitalize py-2 transition ease-in-out duration-500 
                  ${isValidEmail ? 'bg-[#D8993C] hover:bg-amber-700' : 'bg-gray-400 cursor-not-allowed'}`}
                onClick={(e) => { e.preventDefault(); isValidEmail && signUp(); }}
                disabled={!isValidEmail}
              >
                <p className={`text-center text-base font-medium tracking-widest transition ease-in-out duration-500
                  ${isValidEmail ? 'text-[#F2F2F2] hover:text-gray-400' : 'text-gray-600'}`}
                >
                  notify me
                </p>
              </button>
            </div>
          </div>

          <div className='flex justify-center items-center space-x-4 pb-10'>
            <SocialIcon bgColor='#000000' target='_blank' url='https://www.instagram.com/jujora_ng?utm_source=qr&igsh=MXV3dXByNGhoYmxhYw==' style={{ height: 42, width: 42 }} />
            <SocialIcon bgColor='#000000' target='_blank' url='https://x.com/jujora_ng?t=J6Jc2UzqyPMN_ozQ6I5hMA&s=09' style={{ height: 42, width: 42 }} />
            <SocialIcon bgColor='#000000' target='_blank' url='https://vm.tiktok.com/ZMMUu3NRD/' style={{ height: 42, width: 42 }} />
            <SocialIcon network='whatsapp' bgColor='#000000' target='_blank' url='https://wa.me/message/5MKJMKEREXD7P1' style={{ height: 42, width: 42 }} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
