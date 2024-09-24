import { Blocks, Building2, ChartColumnDecreasing, CodeXml, Compass, Repeat2 } from 'lucide-react';
import React from 'react';

const Features = () => {
    const features = [
        {
            icon: <ChartColumnDecreasing  size={50}/>,
            title: 'Crafted for SaaS Business',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.'
        },
        {
            icon: <Blocks size={50}/>,
            title: 'High-quality Design',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.'
        },
        {
            icon: <Building2 size={50}/>,
            title: 'UI Components and Pages',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.'
        },
        {
            icon: <Compass size={50} />,
            title: 'All Essential Integrations',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.'
        },
        {
            icon: <CodeXml size={50}/>,
            title: 'Fully Customizable',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.'
        },
        {
            icon: <Repeat2 size={50}/>,
            title: 'Regular Updates',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.'
        }
    ];

    return (
        <>
            <div className="relative flex justify-center mt-32 flex-col items-center">
                {/* Large heading with absolute positioning */}
                <h1 className="font-extrabold text-9xl text-[#340e52] opacity-30 absolute -z-10 bottom-44">
                    Features
                </h1>

                {/* The second heading */}
                <h2 className="text-6xl font-bold max-w-2xl text-white text-center relative mb-6">
                    Essential Integrations with Modern Design
                </h2>

                {/* Description paragraph */}
                <p className="max-w-2xl text-center text-white mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.
                </p>
            </div>

            {/* Grid Section for Features */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-52'>
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className='w-[450px] flex flex-col items-center shadow-lg   rounded-lg p-6 bg-[#270C3D] transition-transform transform hover:scale-105 duration-300 hover:bg-purple-950'
                    >
                        <div className=' text-[#c11e39c7] mb-4  bg-'>
                            {feature.icon}
                        </div>
                        <h3 className='font-bold text-xl text-white mb-2'>
                            {feature.title}
                        </h3>
                        <p className='text-white text-center max-w-80'>
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Features;
