import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import {FaRegHandPointDown} from 'react-icons/fa'

const Contact = () => {
  return (
    <div id='contact' className=' p-10 max-w-[1040px] m-auto md:pl-20 '>
        <div className='mb-14'>
            <h1 className='text-md font-bold text-[#001b5e]'>CONTACT</h1>
            <h5 className='font-bold'>Don't be shy! Hit me up! <FaRegHandPointDown className='inline text  '/> </h5>
        </div>
        <div className='sm:flex gap-10'>
            {/* first */}
            <div className='sm:flex gap-5 shadow-lg rounded-lg p-6 hover:bg-gray-200'>
            <a
              href="mailto:harkintademuyiwa@gmail.com"
              className="text-sky-400"
            >
              <MdOutlineEmail className='mt-3' size={20}/>
            </a>
              <div>
                <h5 className='font-bold mb-2'>Mail</h5>
                <p>Harkintademuyiwa@gmail.com</p>
              </div>
            </div>
            {/*  */}
            <div className='sm:flex gap-5 shadow-lg rounded-lg p-6 hover:bg-gray-200 '>
            <a
              href="https://api.whatsapp.com/send?phone+2349069631465"
              className="text-sky-400"
            >
              <BsWhatsapp className='mt-3' size={20}/>
            </a>
              <div>
                <h5 className='font-bold mb-2'>WhatsApp</h5>
                <p>+2349069631465</p>
              </div>
            </div>
            {/* end */}
        </div>
    </div>
  )
}

export default Contact