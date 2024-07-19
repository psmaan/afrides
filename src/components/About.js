import React from 'react';

import linkarrow from './media/linkarrow.png';
import aboutimg from './media/summithero2.png';
import infrastructure from './media/infrastructure.png';
import fintech from './media/fintech.png';
import education from './media/education.png';
import publics from './media/public-services.png';
import left from './media/leftarrow.png';
import right from './media/rightarrow.png';

import host1 from './media/fummilayohost.jpeg';
import host2 from './media/kelvinhost.jpeg';

const eventHighlights = [
    { img: infrastructure, title: 'Digital Infrastructure and Connectivity' },
    { img: fintech, title: 'Fintech and Financial Inclusion' },
    { img: publics, title: 'E-Government and Public Services' },
    { img: education, title: 'Digital Skills and Education' },
    { img: education, title: 'Digital Skills and Education' },
    { img: education, title: 'Digital Skills and Education' },
    { img: education, title: 'Digital Skills and Education' },
    { img: education, title: 'Digital Skills and Education' }
];

const About = () => {
    return (
        <div className='w-full flex flex-col items-center my-20 mb-0 about-section'>
            <div className='flex w-[80%] flex-col lg:flex-row'>
                <div className='h-[300px] lg:h-[500px] min-w-full lg:min-w-[400px] rounded-2xl overflow-hidden about-image bg-gray-200'>
                    <img src={aboutimg} alt="About" className='object-cover w-full h-full' />
                </div>
                <div className='lg:ml-8 pt-12'>
                    <h1 className='text-4xl lg:text-6xl font-bold text-[#35bc3d] mt-4'>About AfriDES</h1>
                    <h2 className='text-lg lg:text-xl font-light text-[#7b7b7b] mt-8'>
                        The Africa Digital Economy Summit is an impactful and forward-thinking conference designed to expedite the realization of Africa's digital economy aspirations. This summit serves as a dynamic platform where key stakeholders, thought leaders, innovators, policymakers, and industry experts converge to foster collaboration, share insights, and devise strategic solutions for advancing Africa's digital landscape.
                    </h2>
                    <div className='flex mt-8'>
                        <h1 className='mr-8 text-lg lg:text-2xl flex items-center font-light hover:border-b-2 text-[#7b7b7b] hover:scale-110 origin-left duration-200 cursor-pointer'>Read More<img className='h-6' src={linkarrow}></img></h1>
                        <h1 className='mr-8 text-lg lg:text-2xl flex items-center font-light hover:border-b-2 text-[#7b7b7b] hover:scale-110 origin-left duration-200 cursor-pointer'>The Speakers<img className='h-6' src={linkarrow}></img></h1>
                    </div>
                </div>
            </div>
            <div className='flex w-full bg-[#95d5b2] mt-12 justify-center items-center p-4'>
                <div className='w-[95%] flex flex-col items-center justify-between'>
                    <h1 className='text-white font-bold text-4xl lg:text-8xl my-4'>Event Highlights</h1>
                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
                        {eventHighlights.map((event, index) => (
                            <div key={index} className='flex flex-col items-center h-[300px] min-w-[250px] bg-white rounded-xl p-2'>
                                <img className='h-36 w-36 mt-6' src={event.img} alt={event.title}></img>
                                <h1 className='text-xl lg:text-2xl text-center font-bold text-[#707070] mt-6'>{event.title}</h1>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='flex mt-12 justify-center w-full px-8 items-center'>
                <h1 className='text-4xl lg:text-8xl text-[#35bc3d] font-bold w-full lg:w-[400px] hosts'>The Hosts</h1>
                <div className='flex flex-col lg:flex-row'>
                    <div className='flex flex-col items-center w-full lg:w-[400px] mr-16'>
                        <div className='flex h-80 w-80 bg-black rounded-full overflow-hidden'>
                            <img className='h-full' src={host1} alt="Host 1"></img>
                        </div>
                        <h1 className='text-center text-2xl lg:text-4xl font-semibold text-[#005720] mt-8'>Funmilayo Ogunsanmi</h1>
                        <h3 className='text-center text-base lg:text-lg font-light text-[#35bc3d]'>President – Hub for Digital Excellence || CEO – Havens Borderless Group of Companies(Travel & Tour, Property, Staffing)</h3>
                    </div>
                    <div className='flex flex-col items-center w-full lg:w-[400px]'>
                        <div className='flex h-80 w-80 bg-black rounded-full overflow-hidden'>
                            <img className='h-full' src={host2} alt="Host 2"></img>
                        </div>
                        <h1 className='text-center text-2xl lg:text-4xl font-semibold text-[#005720] mt-8 w-60'>Kelvin Tersoo Jiraji</h1>
                        <h3 className='text-center text-base lg:text-lg font-light text-[#35bc3d]'>CEO – Agric Tech Innovation Hub || Africa Digital Economy Limited</h3>
                    </div>
                </div>
            </div>
            <div className='flex flex-col-reverse lg:flex-row-reverse mt-12 justify-center w-full p-8 items-center bg-[#005720] mb-0 '>
                <h1 className='text-4xl lg:text-7xl speakers text-white font-bold w-full lg:w-[400px] text-right'>The Speakers</h1>
                <div className='flex flex-col lg:flex-row'>
                    <div className='flex flex-col items-center w-full lg:w-[360px] mr-4'>
                        <div className='flex h-80 w-80 bg-black rounded-full overflow-hidden'>
                            <img className='h-full' src={host1} alt="Speaker 1"></img>
                        </div>
                        <h1 className='text-center text-2xl lg:text-4xl font-semibold text-[#35bc3d] mt-8'>Adetunji Anthony Adeleke</h1>
                        <h3 className='text-center text-base lg:text-lg font-light text-gray-300'>Co-Founder at CHIMENET, Indianapolis, Indiana, USA</h3>
                    </div>
                    <div className='flex flex-col items-center w-full lg:w-[450px]'>
                        <div className='flex h-80 w-80 bg-black rounded-full overflow-hidden'>
                            <img className='h-full' src={host2} alt="Speaker 2"></img>
                        </div>
                        <h1 className='text-center text-2xl lg:text-4xl font-semibold text-[#35bc3d] mt-8 w-[400px]'>Prof. Kelly Kingsly Mua</h1>
                        <h3 className='text-center text-base lg:text-lg font-light text-gray-300'>Finance Engineer | Board Director at ATIDI</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
