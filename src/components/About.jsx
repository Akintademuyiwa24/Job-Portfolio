import React from 'react'

const About = () => {
  return (
    <div id='about' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl fot-bold text-center text-[#001b5e]'>About</h1>

        <div className='md:flex gap-10 pt-10 border-l border-stone-200'>
            {/* image */}
            <div className='hidden md:flex md:pl-1'>
                <img width={400} className='rounded-xl' src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            {/* text */}
            <div>
            <div class="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
                <div class="shrink-0">
                <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" 
                src="https://images.pexels.com/photos/13024849/pexels-photo-13024849.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Woman's Face" />
                </div>
                <div>
                    <div class="text-xl font-medium pb-2 text-[#001b5e]">About Me</div>
                    <h5 className='font-bold'>A passionate Front-end Developer <br /> based in Nigeria</h5>
                    <p class="text-slate-500 pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolor asperiores quos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia error facere non?</p>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About