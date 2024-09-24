'use client';
import { ArrowRight, CirclePlay } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <div className="bg-gradient-to-tr from-[#220b34] to-[#340e52] w-full h-[90vh] flex relative">

      <div className="w-1/2 flex flex-col justify-center pl-60 space-y-10">
        <h1 className="text-white text-7xl font-bold">
          Develop Websites <br /> for your {' '}
          <span className="text-[#c11e39c7]">
            <Typewriter
              words={['Business', 'Agency', 'SaaS', 'Startup']}
              loop={Infinity}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>

        <p className="text-white text-lg max-w-xl">
          Handcrafted Next.js starter for your next - Startup, Business, Agency, or SaaS Website. Comes with refreshing design, integrations, and everything you need to kickstart your next web project.
        </p>
        
    
        <div className="flex space-x-4">
            <button className="relative px-10 py-4 overflow-hidden rounded border border-[#c11e39c7] bg-[#c11e39c7] text-white shadow-2xl transition-all before:absolute before:right-0     before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-[#c11e39c7] hover:before:-translate-x-40">
                <span className="relative z-10 flex items-center p">Get Started <ArrowRight/></span>
            </button>
          <button className="px-4 py-2 text-white capitalize text-2xl flex gap-2 items-center"><CirclePlay /> How it works</button>
        </div>
      </div>

    
      <div className="w-1/2 flex justify-center items-center pr-44">
        <Image
          src='/sidepic (2).png'
          alt='image'
          width={500}
          height={300}
        />
      </div>
    </div>
  );
};

export default Hero;
