import React, { useState } from 'react'
import {AiOutlineHome, AiOutlineMail, AiOutlineMenu, AiOutlineProject} from 'react-icons/ai'
import {FaUserAstronaut} from 'react-icons/fa'
import {BsPerson} from 'react-icons/bs'

const SideNav = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div>
        
        <span className='absolute bg-white'><AiOutlineMenu onClick={handleNav} className='fixed top-2 right-4 z-[99] backdrop-blur-md shadow-md bg-white/80 md:hidden'/></span>
        {/* className='bg-white/80 pt-2 fixed backdrop-blur-md shadow-md z-10 md:hidden' */}
        {
            nav ? (
                <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
                    <a onClick={handleNav} href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg
                     bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineHome size={20}/>
                        <span className='pl-4'>Home</span>
                    </a>
                    <a onClick={handleNav} href="#about" className='w-[75%] flex justify-center items-center rounded-full shadow-lg
                     bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaUserAstronaut size={20}/>
                        <span className='pl-4'>About</span>
                    </a>
                    <a onClick={handleNav} href="#project" className='w-[75%] flex justify-center items-center rounded-full shadow-lg
                     bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineProject size={20}/>
                        <span className='pl-4'>Projects</span>
                    </a>
                    <a onClick={handleNav} href="#experience" className='w-[75%] flex justify-center items-center rounded-full shadow-lg
                     bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <BsPerson size={20}/>
                        <span className='pl-4'>Experience</span>
                    </a>
                    <a onClick={handleNav} href="#contact" className='w-[75%] flex justify-center items-center rounded-full shadow-lg
                     bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineMail size={20}/>
                        <span className='pl-4'>Contact</span>
                    </a>
                </div>
            )
            : (
                <div>
                    
                </div>
            )
        }

        <div className='md:block hidden fixed top-[25%] z-10'>
            <div className='flex flex-col'>
                <a href="#main" 
                className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 
                cursor-pointer hover:scale-110 ease-in duration-200'>
                    <AiOutlineHome size={20}/>

                </a>
                <a href="#about" 
                className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 
                cursor-pointer hover:scale-110 ease-in duration-200'>
                    <FaUserAstronaut size={20}/>

                </a>
                <a href="#project" 
                className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 
                cursor-pointer hover:scale-110 ease-in duration-200'>
                    <AiOutlineProject size={20}/>

                </a>
                <a href="#experience" 
                className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 
                cursor-pointer hover:scale-110 ease-in duration-200'>
                    <BsPerson size={20}/>

                </a>
                <a href="#contact" 
                className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 
                cursor-pointer hover:scale-110 ease-in duration-200'>
                    <AiOutlineMail size={20}/>

                </a>
                
            </div>
        </div>
    </div>
  );
};

export default SideNav
