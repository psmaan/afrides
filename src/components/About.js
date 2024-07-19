import React from 'react'

import linkarrow from './media/linkarrow.png'
import aboutimg from './media/summithero2.png'
import infrastructure from './media/infrastructure.png'
import fintech from './media/fintech.png'
import education from './media/education.png'
import publics from './media/public-services.png'
import left from './media/leftarrow.png'
import right from './media/rightarrow.png'

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
            <div className='flex h-[400px] w-full bg-[#95d5b2] mt-12 justify-center items-center'>
                <div className='h-[300px] w-[95%] flex items-center justify-between'>
                    <div className='flex items-center overflow-hidden'>
                        <div className='flex flex-col items-center h-[300px] min-w-[250px] bg-white rounded-xl p-2 mr-4'>
                            <img className='h-36 w-36 mt-6' src={infrastructure}></img>
                            <h1 className='text-2xl text-center font-bold text-[#707070] mt-6'>Digital Infrastructure and Connectivity</h1>
                        </div>
                        <div className='flex flex-col items-center h-[300px] min-w-[250px] bg-white rounded-xl p-2 mr-4'>
                            <img className='h-36 w-36 mt-6' src={fintech}></img>
                            <h1 className='text-2xl text-center font-bold text-[#707070] mt-6'>Fintech and Financial Inclusio</h1>
                        </div>
                        <div className='flex flex-col items-center h-[300px] min-w-[250px] bg-white rounded-xl p-2 mr-4'>
                            <img className='h-36 w-36 mt-6' src={publics}></img>
                            <h1 className='text-2xl text-center font-bold text-[#707070] mt-6'>E-Government and Public Services</h1>
                        </div>
                        <div className='flex flex-col items-center h-[300px] min-w-[250px] bg-white rounded-xl p-2 mr-4'>
                            <img className='h-36 w-36 mt-6' src={education}></img>
                            <h1 className='text-2xl text-center font-bold text-[#707070] mt-6'>Digital Skills and Education</h1>
                        </div>
                    </div>
                    <div>
                        <div className='flex flex-col h-[300px] w-[350px] bg-[#35bc3d] rounded-xl p-4 justify-center ml-4'>
                            <h1 className='text-6xl mt-4 font-bold text-white'>Event Highlights</h1>
                            <div className='flex items-center mt-8'>
                                <div className='h-20 w-20 rounded-full bg-[#005720] mr-4 flex justify-center items-center'>
                                    <img src={left} className='hover:scale-110 duration-200'></img>
                                </div>
                                <div className='h-20 w-20 rounded-full bg-[#005720] ml-4 flex justify-center items-center'>
                                    <img src={right} className='hover:scale-110 duration-200'></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex mt-12 justify-start w-full px-8 items-center'>
                <h1 className='text-8xl text-[#35bc3d] font-bold w-[400px]'>The Hosts</h1>
                <div>

                </div>
            </div>
        </div>
    )
}

export default About
