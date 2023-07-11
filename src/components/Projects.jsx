import React from 'react'
import Moee from '../assets/Showbox.png'
import Foodi from '../assets/foodie.png'
import ProjectItem from './ProjectItem'
import {BsGithub} from 'react-icons/bs'

const Projects = () => {
  return (
    <div id='project' className='max-w-[1040px] m-auto md:pl-20 py-16'>
        <h1 className='text-lg font-bold text-[#001b5e]'>PROJECTS</h1>
        <p className=' pb-8 pt-1 font-bold text-xl'>
            Each project is a unique piece of development
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img='https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' title='Restaurant App' link='https://frestaurant-app.netlify.app'/>
            <div className='text-center'>
                <h1 className='mb-4 text-orange-500 text-2xl text-center' >A Restuarant App</h1>
                <p className='text-sm text-center'>
                The Restaurant App is a responsive web application that enables users to discover nearby restaurants, browse menus, and place food orders for delivery or pickup. The app features an attractive and user-friendly interface, with options for customizing orders and securely processing payments.
                </p>
                <div className='sm:flex gap-5 justify-center pt-2 mb-3 mt-2'>
                <a href="" className='mt-3 font-bold'> <span className='mr-2'>Github</span><BsGithub size={20} className='inline mt-[-5px]'/></a>
                <a href='https://frestaurant-app.netlify.app' className='text-center p-3 text-gray-700 font-bold cursor-pointer text-md'>Live Demo
                </a>
                </div>
                
                <p className='font-bold'>React</p>
            </div>
        </div>
        {/* second */}
        <div className='grid sm:grid-cols-2 gap-12 mt-20'>
            <div className='text-center'>
                <h1 className='mb-4 text-orange-500 text-2xl text-center'>A Food Ordering App</h1>
                <p className='text-sm text-center'>
                The Food Ordering App is a responsive web application designed to streamlie the process of ordering food online. It enables users to browse menus, and place food orders for delivery or pickup. The app features an attractive and user-friendly interface, with options for customizing orders and securely processing payments. It features a cart management, user registration.
                </p>
                <div className='sm:flex gap-5 justify-center pt-2 mb-3 mt-2'>
                <a href="" className='mt-3 font-bold'> <span className='mr-2'>Github</span><BsGithub size={20} className='inline mt-[-5px]'/></a> 
                <a href='https://lemon-app.netlify.app' className='text-center p-3 text-gray-700 font-bold cursor-pointer text-md'>Live Demo
                </a>
                </div>
                <p className='font-bold'>React</p>
            </div>
            <ProjectItem img={Foodi} title='Food Ordering App' link='https://lemon-app.netlify.app'/>
        </div>
        {/* third */}
        <div className='grid sm:grid-cols-2 gap-12 mt-20'>
        <ProjectItem img={Moee} title='Search Movie App' link='https://search4movie-app.netlify.app'/>
            <div className='text-center'>
                <h1 className='mb-4 text-orange-500 text-2xl text-center'>A Movie App</h1>
                <p className='text-sm text-center'>
                The Movie App is a responsive web application that allows users to explore a vast collection of movies. It features a clean and intuitive user interface with a search functionality, movie recommendations, and detailed movie information. The app utilizes the MovieDB API to fetch movie data, including titles, descriptions, ratings, and poster images.
                </p>
                <div className='sm:flex gap-5 justify-center pt-2 mb-3 mt-2 '>
                <a href="" className='mt-3 font-bold'> <span className='mr-2'>Github</span><BsGithub size={20} className='inline mt-[-5px]'/></a>
                <a href='https://search4movie-app.netlify.app' className='text-center p-3 text-gray-700 font-bold cursor-pointer text-md'>Live Demo
                </a>
                </div>
                <p className='font-bold'>React</p>
            </div>
        </div>
    </div>
  )
}

export default Projects