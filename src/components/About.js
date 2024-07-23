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
import bluestar1 from './media/bluestar1.jpeg';
import bluestar2 from './media/bluestar2.jpeg';

import host1 from './media/fummilayohost.jpeg';
import host2 from './media/kelvinhost.jpeg';
import host3 from './media/host3.jpeg';
import linkedin from './media/linkedin.png';

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
            <div className='w-full flex md:flex-row flex-col bg-[#35bc3d] mt-12 p-4 sm:p-8 sm:px-12'>
                <div className='w-full md:w-1/3 lg:w-1/2 ml-0 lg:ml-12 md:h-[450px] flex flex-col items-start md:py-20 xl:p-20'>
                    <h1 className='text-[#005720] font-bold text-4xl lg:text-6xl'>The Venue</h1>
                    <h2 className=' text-xl lg:text-3xl font-normal text-[#95d5b2] mt-4'>Blue Tree Premium Morumbi, Sau Paulo</h2>
                    <a className='text-white mt-2 text-2xl font-light underline underline-offset-4 hover:scale-110 duration-150 origin-left' href='https://www.bluetree.com.br/hotel/blue-tree-premium-morumbi' target='blank'>Hotel Website</a>
                    <a className='mt-8' href='#maps'>
                        <button className=' w/60 lg:w-80 p-2 px-4 bg-[#35bc3d] text-white font-semibold border-2 border-white hover:bg-transparent hover:text-[#005720] hover:border-[#005720] duration-300 mt-auto'>Get Directions</button>
                    </a>
                </div>
                <div className='relative h-[400px] pt-12 lg:w-1/2 md:w-2/3 w-full'>
                    <img className='absolute h-[200px] xl:h-[250px] rounded-3xl' src={bluestar1}></img>
                    <img className='relative top-[120px] left-[60px] sm:top-[120px] sm:left-[150px] xl:top-[150px] xl:left-[200px] h-[200px] xl:h-[250px] rounded-3xl' src={bluestar2}></img>
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
                <div className='flex sm:flex-row hosts-container'>
                    <div className='flex flex-col items-center w-full lg:w-[280px] my-8'>
                        <div className='flex h-40 w-40 sm:h-40 sm:w-40 lg:h-52 lg:w-52 xl:h-64 xl:w-64 bg-black rounded-full relative'>
                            <a href='https://www.linkedin.com/in/funmilayo-ogunsanmi-0971ab32?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='blank'>
                                <div className='absolute lg:top-3 lg:right-3 xl:top-4 xl:right-4 bg-[#005720] h-12 w-12 rounded-full hover:scale-110 duration-200 flex justify-center items-center'>

                                    <img className='h-[50%]' src={linkedin}></img>

                                </div>
                            </a>
                            <img className='h-full rounded-full' src={host1} alt="Host 1"></img>
                        </div>
                        <h1 className='text-center md:text-xl lg:text-2xl xl:text-4xl font-semibold text-[#005720] mt-8 w-[200px] lg:w-[250px]'>Funmilayo Ogunsanmi</h1>
                        <h2 className='text-center text-[#35bc3d] font-light text-lg lg:text-2xl mt-2'>Co-chair Africa Digital Economy Summit</h2>
                    </div>
                    <div className='flex flex-col items-center w-full lg:w-[280px] my-8'>
                        <div className='flex h-40 w-40 sm:h-40 sm:w-40 lg:h-52 lg:w-52 xl:h-64 xl:w-64 bg-black rounded-full relative'>
                            <a href='https://www.linkedin.com/in/drtammyfrancis?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='blank'>
                                <div className='absolute lg:top-3 lg:right-3 xl:top-4 xl:right-4 bg-[#005720] h-12 w-12 rounded-full hover:scale-110 duration-200 flex justify-center items-center'>

                                    <img className='h-[50%]' src={linkedin}></img>

                                </div>
                            </a>
                            <img className='h-full rounded-full' src={host3} alt="Host 2"></img>
                        </div>
                        <h1 className='text-center  md:text-xl lg:text-2xl xl:text-4xl font-semibold text-[#005720] mt-8 w-40 lg:w-56'>Dr. Tammy Francis</h1>
                        <h2 className='text-center text-[#35bc3d] font-light text-lg lg:text-2xl mt-2'>Co-chair Africa Digital Economy Summit</h2>
                    </div>
                    <div className='flex flex-col items-center w-full lg:w-[280px] my-8'>
                        <div className='flex h-40 w-40 sm:h-40 sm:w-40 lg:h-52 lg:w-52 xl:h-64 xl:w-64 bg-black rounded-full relative' target='blank'>
                            <a href='https://www.linkedin.com/in/kelvinjiraji?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
                                <div className='absolute lg:top-3 lg:right-3 xl:top-4 xl:right-4 bg-[#005720] h-12 w-12 rounded-full hover:scale-110 duration-200 flex justify-center items-center'>

                                    <img className='h-[50%]' src={linkedin}></img>

                                </div>
                            </a>
                            <img className='h-full rounded-full' src={host2} alt="Host 2"></img>
                        </div>
                        <h1 className='text-center  md:text-xl lg:text-2xl xl:text-4xl font-semibold text-[#005720] mt-8 w-40 lg:w-56'>Kelvin Tersoo Jiraji</h1>
                        <h2 className='text-center text-[#35bc3d] font-light text-lg lg:text-2xl mt-2'>CEO Hub For Digital Excellence</h2>
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
