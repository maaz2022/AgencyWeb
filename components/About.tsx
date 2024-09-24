'use client';
import React, { useState } from 'react';

// Define the keys for the sections
type Tab = 'about' | 'mission' | 'vision';

const About = () => {

  const [activeTab, setActiveTab] = useState<Tab>('about');


  const sections: Record<Tab, { title: string; content: string }> = {
    about: {
      title: 'DB, Auth, Stripe, Sanity, and More',
      content: `
            Welcome to OurStartUp, where innovation meets functionality. We are a dynamic team of web development professionals dedicated to creating bespoke digital solutions tailored to your business needs. With expertise in cutting-edge technologies and a passion for elegant design, we bring your ideas to life online.

            Founded with a mission to help businesses thrive in the digital age, we specialize in crafting high-performance websites that are not only visually appealing but also user-friendly and scalable. From startups to established brands, our goal is to build platforms that drive growth and engagement.
      `,
    },
    mission: {
      title: 'Our Mission',
      content: `
        At OurStartup, our mission is to empower businesses by delivering exceptional, tailor-made web solutions that drive growth, innovation, and success. We aim to create websites that are not only visually stunning but also optimized for performance and user experience, ensuring that your online presence helps you reach your full potential.

        We are committed to staying ahead of industry trends, continuously evolving to provide the best tools and technologies for our clients. Our mission is to turn your ideas into impactful digital experiences that connect with your audience and achieve measurable results.
      `,
    },
    vision: {
      title: 'Our Vision',
      content: `
        At OurStartup, our vision is to shape the future of digital experiences by pushing the boundaries of web development. We aspire to become a trusted partner for businesses of all sizes, helping them transform and thrive in an ever-evolving digital world.

        We envision a world where every business, regardless of industry or scale, has access to cutting-edge web solutions that are both powerful and accessible. By blending creativity with technology, we strive to create impactful, user-centric platforms that inspire engagement, drive innovation, and foster sustainable growth.
      `,
    },
  };

  return (
    <>
      <div className="relative flex justify-center mt-60 flex-col items-center">
        <h1 className="font-extrabold text-9xl text-[#340e52] opacity-30 absolute -z-10 bottom-44">
          About
        </h1>
        <h2 className="text-6xl font-bold max-w-2xl text-black text-center relative mb-6">
          Know Details About Our Company
        </h2>
        <p className="max-w-2xl text-center text-black mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.
        </p>
      </div>

      <div className="relative flex justify-center mt-20 flex-col items-center px-8">
        {/* Tabs for selecting sections */}
        <div className="flex space-x-12 text-black mb-8">
          <button
            onClick={() => setActiveTab('about')}
            className={`text-xl ${activeTab === 'about' ? 'font-bold border-b-2 border-[#340e52]' : ''}`}
          >
            About Us
          </button>
          <button
            onClick={() => setActiveTab('mission')}
            className={`text-xl ${activeTab === 'mission' ? 'font-bold border-b-2 border-[#340e52]' : ''}`}
          >
            Our Mission
          </button>
          <button
            onClick={() => setActiveTab('vision')}
            className={`text-xl ${activeTab === 'vision' ? 'font-bold border-b-2 border-[#340e52]' : ''}`}
          >
            Our Vision
          </button>
        </div>

        {/* Section Content */}
        <div className="flex items-center space-x-8 max-w-6xl ">
          <div className="w-1/2">
            <img src="/about1.png" alt="Image" className="w-full h-auto object-cover rounded-lg " />
          </div>
          <div className="w-1/2 text-white bg-[#340e52] p-10 opacity-80 rounded-xl">
            <h2 className="text-4xl font-bold mb-4">{sections[activeTab].title}</h2>
            <p className="text-lg">{sections[activeTab].content}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
