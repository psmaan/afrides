import React from 'react'

import linkarrow from './media/linkarrow.png'
import aboutimg from './media/summithero2.png'

const About = () => {
    return (
        <div className='w-full flex flex-col items-center my-20 about-section'>
            <div className='flex w-[80%]'>
                <div className='h-[500px] min-w-[400px] rounded-2xl overflow-hidden about-image'>
                </div>
                <div className='ml-8 pt-12'>
                    <h1 className='text-6xl font-bold text-[#35bc3d] mt-4'>About AfriDES</h1>
                    <h2 className='text-xl font-light text-[#7b7b7b] mt-8'>The Africa Digital Economy Summit is an impactful and forward-thinking conference designed to expedite the realization of Africa's digital economy aspirations. This summit serves as a dynamic platform where key stakeholders, thought leaders, innovators, policymakers, and industry experts converge to foster collaboration, share insights, and devise strategic solutions for advancing Africa's digital landscape.</h2>
                    <div className='flex mt-8'>
                        <h1 className='mr-8 text-2xl flex items-center font-light hover:border-b-2 text-[#7b7b7b] hover:scale-110 origin-left duration-200 cursor-pointer'>Read More<img className='h-6' src={linkarrow}></img></h1>
                        <h1 className='mr-8 text-2xl flex items-center font-light hover:border-b-2 text-[#7b7b7b] hover:scale-110 origin-left duration-200 cursor-pointer'>The Speakers<img className='h-6' src={linkarrow}></img></h1>
                    </div>
                </div>
            </div>
            <div className='flex h-[400px] w-full bg-[#35bc3d] mt-12 justify-center items-center'>
                <div className='h-[300px] w-[90%] bg-white'>
                    <div className=''></div>
                </div>
            </div>
        </div>
    )
}

export default About
