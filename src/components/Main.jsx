import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaPython, FaTwitter } from 'react-icons/fa'
import { SiReact } from 'react-icons/si'
import { TbBrandCSharp, TbBrandGit, TbBrandJavascript, TbBrandTailwind } from 'react-icons/tb'
import { TypeAnimation } from 'react-type-animation'

const Main = () => {
  return (
    <div id='main'>
        <img className='w-full h-screen object-cover' src="https://images.pexels.com/photos/4555671/pexels-photo-4555671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" />
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
            <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center text-center lg:items-start items-center'>
                <h1 className='sm:text-5xl text-4xl font-bold text-gray-900'>I'm Emmanuel Akintade</h1>
                <h2 className='sm:text-3xl text-2xl pt-4 text-gray-900 '>
                    I'm a
                <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'Developer',
                    2000, // wait 1s before replacing "Mice" with "Hamsters"
                    'Designer',
                    2000,
                    'Tech Enthusiast',
                    2000,
                    'Programmer',
                    2000
                ]}
                wrapper="span"
                speed={50}
                cursor={true}
                style={{ fontSize: '1em', display: 'inline-block', paddingLeft:'5px'}}
                repeat={Infinity}
                />
                </h2>
                <div className='flex justify-between pt-6 mb-5 max-w-[200px] w-full'>
                    <FaTwitter size={20} className='cursor-pointer'/>
                    <FaFacebook size={20} className='cursor-pointer'/>
                    <FaLinkedinIn size={20} className='cursor-pointer'/>
                    <FaInstagram size={20} className='cursor-pointer'/>
                </div>
                <div className="flex justify-center gap-2 text-orange-900 text-xl mt-10 md:mt-3 md:gap-6 dark:text-orange-500">
                    <h4 className="text-md">Tech Stack |</h4>
                    <TbBrandJavascript size={30}/>
                    <SiReact size={30}/>
                    <TbBrandTailwind size={30}/>
                    <FaPython size={30}/>
                    <TbBrandCSharp size={30}/>
                    <TbBrandGit size={30}/>
                </div>


            </div>    
        </div>   
    </div>
  )
}

export default Main