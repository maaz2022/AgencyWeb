import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'; // Icons for social links

const Team = () => {
  const teamMember = [
    {
      image: '/man1.jpg', // Ensure correct image path
      name: 'Andrium Max',
      role: 'Project Manager',
    },
    {
      image: '/man2 (2).jpg', // Ensure correct image path
      name: 'Jemse Kemorun',
      role: 'Frontend Developer',
    },
    {
      image: '/man2.jpg', // Ensure correct image path
      name: 'Peter Parkour',
      role: 'Product Designer',
    },
  ];

  return (
    <>
      <div className="relative flex justify-center mt-60 flex-col items-center">
        <h1 className="font-extrabold text-9xl text-[#340e52] opacity-30 absolute -z-10 bottom-44">
          Our Team
        </h1>
        <h2 className="text-6xl font-bold max-w-2xl text-black text-center relative mb-6">
          Meet With Our Creative Dedicated Team
        </h2>
        <p className="max-w-2xl text-center text-black mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.
        </p>
      </div>

      {/* Team Member Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 justify-items-center items-center mx-[300px] gap-10">
        {teamMember.map((team, index) => (
          <div
            key={index}
            className="relative group flex flex-col items-center justify-center h-auto text-center p-6 border rounded-lg shadow-lg bg-white w-[300px] lg:w-[350px]"
          >
            {/* Team Member Image */}
            <div className="relative w-full h-[350px] overflow-hidden rounded-md">
              <img
                src={team.image}
                alt={team.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Social Media Links Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#340e52] to-transparent opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-all duration-500 flex justify-center space-x-4 py-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-lg hover:text-blue-500"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-lg hover:text-blue-400"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-lg hover:text-blue-700"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>

            {/* Team Member Details */}
            <h3 className="font-bold text-xl text-black mt-4">{team.name}</h3>
            <p className="text-gray-600">{team.role}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Team;
