'use client';

import { useState, useEffect } from 'react';
import { Award, Search } from 'lucide-react';
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100); // Adjust this value based on when you want the background to change
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex justify-between items-center p-10 fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gradient-to-tr from-[#220b34] to-[#220b34]' 
          : 'bg-transparent' 
      }`}
    >
      <div className="flex items-center space-x-8 ">
        <Link href='/'>
            <h1 className="font-semibold flex text-5xl text-white mr-10">
                <Award className="mr-2" size={50} color='#c11e39c7' /> OurStartup
            </h1>
        </Link>
        <Link href='/' className='text-white text-[20px] mt-2 hover:text-[#c11e39c7]'>Features</Link>
        <Link href='/' className='text-white text-[20px] mt-2 hover:text-[#c11e39c7]'>About</Link>
        <Link href='/' className='text-white text-[20px] mt-2 hover:text-[#c11e39c7]'>Portfolio</Link>
        <Link href='/' className='text-white text-[20px] mt-2 hover:text-[#c11e39c7]'>Pricing</Link>
        <Link href='/' className='text-white text-[20px] mt-2 hover:text-[#c11e39c7]'>Pages</Link>
      </div>
      <div className="flex space-x-4">
            <button className="relative px-10 py-4 overflow-hidden rounded border border-[#c11e39c7] bg-[#c11e39c7] text-white shadow-2xl transition-all before:absolute before:right-0     before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-[#c11e39c7] hover:before:-translate-x-40">
                <span className="relative z-10 flex items-center p">Sign In</span>
            </button>
            <button className="relative px-10 py-4 overflow-hidden rounded border border-white bg-white text-black shadow-2xl transition-all before:absolute before:right-0     before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-[#c11e39c7] before:opacity-10 before:duration-700 hover:shadow-white hover:before:-translate-x-40">
                <span className="relative z-10 flex items-center p">Sign Up</span>
            </button>
        <button className="px-4 py-2  hover:text-[#c11e39c7] text-white">
          <Search size={40}/>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
