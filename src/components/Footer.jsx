import React from 'react'
import Fooda from '../assets/react.svg'
import { AiOutlineCopyright } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='text-center bg-gray-950 p-6'>
        <div className='sm:flex gap-3 justify-center'>
            <div className='text-white'>
                <img src={Fooda} alt="logo" className='m-auto mb-3'/>
            </div>
            <div>
                <h5 className='text-white'>EmyraldCorp</h5>
            </div>
            <div>
                <p className='text-white'><AiOutlineCopyright size={20} className='inline mr-1'/>2022</p>
            </div>
        </div>
    </div>
  )
}

export default Footer