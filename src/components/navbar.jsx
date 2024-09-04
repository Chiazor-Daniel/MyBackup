import React, { useState } from 'react';

const NavBar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Stocks & Market', path: '/stocks-market' },
    { name: 'Trade & Buy', path: '/trade-buy' },
    { name: 'Services', path: '/services' },
    { name: '+More', path: '/more' }
  ];

  return (
    <div className='absolute w-full h-auto flex justify-around border-b border-gray-700 items-center px-4 py-6 bg-black' style={{zIndex: 9999}}>
        <h1 className='text-white font-bold text-2xl'>Zenith Market</h1>
      <div className='flex space-x-8'>
        {navLinks.map((link, index) => (
          <a
            key={index}
            to={link.path}
            className={`text-lg cursor-pointer text-white ${index === activeIndex ? 'text-[#A068FD]' : ''} hover:text-[#A068FD]`}
            onClick={() => setActiveIndex(index)}
          >
            {link.name}
          </a>
        ))}
      </div>
      
      <div className='flex space-x-4'>
        <button className='text-black px-4 py-2 hover:text-[#A068FD] bg-white border-none rounded-lg'>Get Started</button>
      </div>
    </div>
  );
}

export default NavBar;
