import React, { useState, useEffect } from 'react';
import NavBar from './components/navbar';
import CanvasAnimation from './components/stars';
import CryptoFeatures from './components/featurecards';

function App() {


  return (
    <>
    <div className='bg-black h-screen overflow-auto'>
      <NavBar />
      <div className='h-[800px] w-full flex flex-col items-center justify-center'>
        <div className='relative mt-10'>
          <img src='banner.png' className='' />
          <img src='coin1.png' className='absolute top-0 right-0' />
          <img src='coin2.png' className='absolute bottom-10 right-[200px]' />
          <img src='coin3.png' className='absolute top-6 left-[220px]' />
          <img src='coin4.png' className='absolute top-[100px] right-[220px]' />
          <img src='coin5.png' className='absolute bottom-[100px]' />
          <img src='coin6.png' className='absolute bottom-6 left-[250px]' />
        </div>
        <div className='w-full flex  items-center flex-col gap-2'>
          <h1 className='text-white font-bold text-5xl'>Seamless Cryptocurrency Trading</h1>
          <p className='text-gray-200 font-normal text-lg p-2'>
          The World’s Premier Sophisticated Trading Platform
          </p>
          <button className='text-white m-auto px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 border-none rounded-lg'>Start Trading Now</button>
        </div>
      </div>
      <CryptoFeatures />
    </div>
    </>
  );
}

export default App;