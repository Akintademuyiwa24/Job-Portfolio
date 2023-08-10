import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaPython, FaTwitter } from 'react-icons/fa'
import { SiReact } from 'react-icons/si'
import { TbBrandCSharp, TbBrandGit, TbBrandJavascript, TbBrandTailwind } from 'react-icons/tb'
import { TypeAnimation } from 'react-type-animation'
import Face from '../assets/imggg.jpg'
import Headroom from 'react-headroom'
import logo from '../assets/react.svg'

const Main = () => {
  return (
    <div id='main'>
        <img className='w-full h-screen object-cover' src="https://images.pexels.com/photos/96858/pexels-photo-96858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" />
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
            <Headroom>
            <div className='backdrop-blur-md shadow-md bg-gray-350/80 z-[999]  pb-2 fixed w-full md:hidden'>
                <img src={logo} alt="logo" width={10} className='ml-1 mt-3 pb-1 text-black'/>
            </div>
            </Headroom>
            <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center text-center lg:items-start items-center'>
                <h1 className='sm:text-5xl text-4xl font-bold text-sky-900'>I'm Emmanuel Akintade</h1>
                <h2 className='mb-3 sm:text-3xl text-2xl pt-4 text-amber-900'>
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
                <div>
                <img className="block mx-auto h-40 rounded-full sm:mx-0 sm:shrink-0" src={Face} alt="Face" />
                </div>
                <div className='flex justify-between pt-6 mb-5 max-w-[200px] w-full'>
                    <a href="https://twitter.com/AkintadeOlumuy3t?=onblQNa72GUAs_PSW-NN6A&s=09"><FaTwitter size={20} className='cursor-pointer'/></a>
                    <FaFacebook size={20} className='cursor-pointer'/>
                    <a href="https://www.linkedin.com/in/AkintadeOlumuyiwa"><FaLinkedinIn size={20} className='cursor-pointer'/></a>
                    <a href="https://www.instagram.com/harkintade.ohlumber"><FaInstagram size={20} className='cursor-pointer'/></a>
                </div>
                <div className="flex justify-center gap-2 text-black text-xl mt-5 md:mt-3 md:gap-6 dark:text-orange-500">
                    <h4 className="text-sm">Tech Stack |</h4>
                    <TbBrandJavascript size={20}/>
                    <SiReact size={20}/>
                    <TbBrandTailwind size={20}/>
                    <FaPython size={20}/>
                    <TbBrandCSharp size={20}/>
                    <TbBrandGit size={20}/>
                </div>


            </div>    
        </div>   
    </div>
  )
}

export default Main