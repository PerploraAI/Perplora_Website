import React from 'react';

const Logo = () => {
  return (
    <div className='flex items-center'>
      <img className='w-[50px] h-[50px] mr-2' src='/images/logo.png' alt='Logo' />
      <h1 className='text-3xl font-bold transition-colors duration-300 ease-in-out hover:text-white'>
        <span className='text-white transition-colors duration-300 ease-in-out hover:text-black'>PER</span>
        <span className='text-black transition-colors duration-300 ease-in-out hover:text-white'> PLORA AI</span>
      </h1>
    </div>
  );
};

export default Logo;