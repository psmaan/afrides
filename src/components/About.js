import React from 'react';

import linkarrow from './media/linkarrow.png';
import aboutimg from './media/aboutimage.jpeg';
import infrastructure from './media/infrastructure.png';
import fintech from './media/fintech.png';
import education from './media/education.png';
import publics from './media/public-services.png';
import innovation from './media/innovation.png';
import cyber from './media/cybersecurity.png';
import sustain from './media/sustainable.png';
import investment from './media/investment.png';
import left from './media/leftarrow.png';
import right from './media/rightarrow.png';

import host1 from './media/fummilayohost.jpeg';
import host2 from './media/kelvinhost.jpeg';

const eventHighlights = [
    { img: infrastructure, title: 'Digital Infrastructure and Connectivity' },
    { img: fintech, title: 'Fintech and Financial Inclusion' },
    { img: publics, title: 'E-Government and Public Services' },
    { img: education, title: 'Digital Skills and Education' },
    { img: innovation, title: 'Entrepreneurship and Innovation' },
    { img: cyber, title: 'Cybersecurity and Data Protection' },
    { img: sustain, title: 'Sustainable Development' },
    { img: investment, title: 'Smart Investment' }
];

const About = () => {
    return (
        <div className='w-full flex flex-col items-center my-20 mb-0 about-section'>
            <div className='flex w-[80%] flex-col lg:flex-row'>
                <div className='h-[300px] lg:h-[500px] min-w-full lg:min-w-[400px] rounded-2xl overflow-hidden about-image bg-gray-200'>
                    <img src={aboutimg} alt="About" className='object-cover w-full h-full' />
                </div>
                <div className='lg:ml-8 lg:pt-4 xl:pt-12'>
                    <h1 className='text-4xl lg:text-4xl xl:text-6xl font-bold text-[#35bc3d] mt-4'>About the Event</h1>
                    <h2 className='text-lg lg:text-lg xl:text-xl font-light text-[#7b7b7b] mt-8'>
                        The Africa Digital Economy Summit is an impactful and forward-thinking conference designed to expedite the realization of Africa's digital economy aspirations. This summit serves as a dynamic platform where key stakeholders, thought leaders, innovators, policymakers, and industry experts converge to foster collaboration, share insights, and devise strategic solutions for advancing Africa's digital landscape.
                    </h2>
                    <div className='flex mt-8'>
                        <h1 className='mr-8 text-lg lg:text-2xl flex items-center font-light hover:border-b-2 text-[#7b7b7b] hover:scale-110 origin-left duration-200 cursor-pointer'>Read More<img className='h-6' src={linkarrow}></img></h1>
                        <h1 className='mr-8 text-lg lg:text-2xl flex items-center font-light hover:border-b-2 text-[#7b7b7b] hover:scale-110 origin-left duration-200 cursor-pointer'>The Speakers<img className='h-6' src={linkarrow}></img></h1>
                    </div>
                </div>
            </div>
            <div className='flex w-full bg-[#95d5b2] mt-12 justify-center items-center md:p-8 lg:p-4'>
                <div className=' lg:w-[95%] flex flex-col items-center justify-between'>
                    <h1 className='text-white font-bold text-6xl lg:text-8xl my-4 text-center'>Event Highlights</h1>
                    <div className='flex  sm:grid-cols-2 gap-1 sm:grid md:grid-rows-auto md:grid-cols-2 lg:grid-cols-4 sm:gap-12 overflow-scroll w-[500px] lg:w-[1000px] cards'>
                        {eventHighlights.map((event, index) => (
                            <div key={index} className='flex flex-col items-center h-[300px] min-w-[230px] w-[230px] bg-white rounded-xl p-2 m-2'>
                                <img className='h-36 w-36 mt-6' src={event.img} alt={event.title}></img>
                                <h1 className='text-xl lg:text-2xl text-center font-bold text-[#707070] mt-6'>{event.title}</h1>
                            </div>
                        ))}
                    </div>
                    <div className='md:hidden flex items-center'>
                        <img src={left}></img>
                        <img src={right}></img>
                    </div>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row mt-12 justify-center w-full px-8 items-center'>
                <h1 className='text-4xl lg:text-6xl xl:text-8xl text-[#35bc3d] font-bold w-full lg:w-[250px] hosts xl:w-[400px] my-4'>The Hosts</h1>
                <div className='flex flex-col sm:flex-row'>
                    <div className='flex flex-col items-center w-full lg:w-[400px] mr-16 my-8'>
                        <div className='flex h-40 w-40 sm:h-40 sm:w-40 lg:h-60 lg:w-60 xl:h-80 xl:w-80 bg-black rounded-full overflow-hidden'>
                            <img className='h-full' src={host1} alt="Host 1"></img>
                        </div>
                        <h1 className='text-center md:text-xl lg:text-2xl xl:text-4xl font-semibold text-[#005720] mt-8'>Funmilayo Ogunsanmi</h1>
                        <h3 className='text-center text-base lg:text-md xl:text-lg font-light text-[#35bc3d]'>President – Hub for Digital Excellence || CEO – Havens Borderless Group of Companies(Travel & Tour, Property, Staffing)</h3>
                    </div>
                    <div className='flex flex-col items-center w-full lg:w-[400px] my-8'>
                        <div className='flex h-40 w-40 sm:h-40 sm:w-40 lg:h-60 lg:w-60 xl:h-80 xl:w-80 bg-black rounded-full overflow-hidden'>
                            <img className='h-full' src={host2} alt="Host 2"></img>
                        </div>
                        <h1 className='text-center  md:text-xl lg:text-2xl xl:text-4xl font-semibold text-[#005720] mt-8 w-60'>Kelvin Tersoo Jiraji</h1>
                        <h3 className='text-center text-base lg:text-md xl:text-lg font-light text-[#35bc3d]'>CEO – Agric Tech Innovation Hub || Africa Digital Economy Limited</h3>
                    </div>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row-reverse mt-12 justify-center w-full p-8 items-center bg-[#005720] mb-0 sm:p-'>
                <h1 className='text-4xl lg:text-7xl speakers text-white font-bold w-full sm:text-center lg:w-[400px] text-center lg:text-right my-4'>The Speakers</h1>
                <div className='flex flex-col sm:flex-row'>
                    <div className='flex flex-col items-center w-full lg:w-[360px] mr-4 my-8'>
                        <div className='flex h-40 w-40 sm:h-40 sm:w-40 lg:h-60 lg:w-60 xl:h-80 xl:w-80 bg-black rounded-full overflow-hidden'>
                            <img className='h-full' src={host1} alt="Speaker 1"></img>
                        </div>
                        <h1 className='text-center text-xl lg:text-2xl xl:text-4xl font-semibold text-[#35bc3d] mt-8'>Adetunji Anthony Adeleke</h1>
                        <h3 className='text-center text-base md:text lg:text-lg font-light text-gray-300'>Co-Founder at CHIMENET, Indianapolis, Indiana, USA</h3>
                    </div>
                    <div className='flex flex-col items-center w-full lg:w-[360px] my-8'>
                        <div className='flex h-40 w-40 sm:h-40 sm:w-40 lg:h-60 lg:w-60 xl:h-80 xl:w-80 bg-black rounded-full overflow-hidden'>
                            <img className='h-full' src={host2} alt="Speaker 2"></img>
                        </div>
                        <h1 className='text-center text-xl lg:text-2xl xl:text-4xl font-semibold text-[#35bc3d] mt-8'>Prof. Kelly Kingsly Mua</h1>
                        <h3 className='text-center text-base lg:text-lg font-light text-gray-300'>Finance Engineer | Board Director at ATIDI</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
