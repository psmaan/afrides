import React, { useState } from 'react';
import Navbar from './Navbar';

import investor from './media/investor.png';
import investorimg from './media/investorimg.png';
import tick from './media/tick.png';
import entrepreneurImage from './media/entrepreneur.png';
import entrepreneurImg from './media/entre.png';

const DealroomPage = () => {
    const [activeTab, setActiveTab] = useState('Investor');

    return (
        <div className='w-full'>
            <Navbar />
            <div className='w-full dealroom p-4 px-8 sm:p-12 sm:px-16'>
                <h1 className='text-4xl sm:text-5xl text-white font-bold'>Welcome to the Afrides Deal Room</h1>
                <h1 className='text-white text-md sm:text-xl mt-8'>
                    Step into the AfriDES Deal Room, where visionaries meet opportunities. This exclusive environment is dedicated to facilitating high-impact interactions between investors and entrepreneurs.<br /><br />
                    Here, connections turn into collaborations and conversations lead to investments. Entrepreneurs, pitch your ventures to potential backers who are eager to support disruptive technologies and visionary projects. Investors, explore a curated selection of promising startups with the potential to reshape industries and drive digital transformation across Africa.<br /><br />
                    The AfriDES Deal Room is more than just a space; it's where the future of the digital economy is being written. Join us to network, negotiate, and make deals that will catalyze growth and success. Let's create the future together.
                </h1>
            </div>
            <div className='flex w-full justify-center my-8'>
                <h1
                    className={`mx-4 text-4xl font-semibold ${activeTab === 'Investor' ? 'text-[#1a1a1a] pb-3 border-b-2 border-b-[#1a1a1a]' : 'text-[#494949] pb-3 border-b-2 hover:border-b-[#1a1a1a]'} duration-200 cursor-pointer`}
                    onClick={() => setActiveTab('Investor')}
                >
                    Investor
                </h1>
                <h1
                    className={`mx-4 text-4xl font-semibold ${activeTab === 'Entrepreneur' ? 'text-[#1a1a1a] pb-3 border-b-2 border-b-[#1a1a1a]' : 'text-[#494949] pb-3 border-b-2 hover:border-b-[#1a1a1a]'} duration-200 cursor-pointer`}
                    onClick={() => setActiveTab('Entrepreneur')}
                >
                    Entrepreneur
                </h1>
            </div>

            {/* Conditionally Render Content */}
            {activeTab === 'Investor' ? (
                <div className='w-[80%] mx-auto bg-[#0572BB] flex'>
                    <div className='w-1/2 flex flex-col justify-center items-start p-6'>
                        <img className='w-12 mt-8' src={investor} />
                        <h1 className='my-4 text-4xl text-white font-semibold'>As an Investor</h1>
                        <p className='text-white'>
                            Explore a curated selection of promising startups with the potential to reshape industries and drive digital transformation across Africa.
                        </p>
                        <button className='text-white border-white border-2 p-2 px-4 text-xl hover:bg-white hover:text-[#0572BB] duration-200 mt-8'>Shortlist as an Investor</button>
                    </div>
                    <div className='w-1/2 h-full'>
                        <img className='w-full h-full' src={investorimg} />
                    </div>
                </div>
            ) : (
                <div className='w-[80%] mx-auto bg-[#95d5b2] flex'>
                    <div className='w-1/2 flex flex-col justify-center items-start p-6'>
                        <img className='w-12 mt-8' src={entrepreneurImage} />
                        <h1 className='my-4 text-4xl text-white font-semibold'>As an Entrepreneur</h1>
                        <p className='text-white'>
                            Pitch your ventures to potential backers who are eager to support disruptive technologies and visionary projects.
                        </p>
                        <button className='text-white border-white border-2 p-2 px-4 text-xl hover:bg-white hover:text-[#95d5b2] duration-200 mt-8'>Shortlist as an Entrepreneur</button>
                    </div>
                    <div className='w-1/2 h-full overflow-hidden'>
                        <img className='h-full' src={entrepreneurImg} />
                    </div>
                </div>
            )}

            <div className='mt-20 flex justify-center w-full'>
                <div className='w-[40%] flex flex-col items-center p-8'>
                    <h1 className='text-4xl font-semibold'>
                        Why shortlist as {activeTab === 'Investor' ? 'an Investor' : 'an Entrepreneur'}
                    </h1>
                    <div className='mt-8'>
                        {activeTab === 'Investor' ? (
                            <>
                                <div className='flex h-[150px]'>
                                    <div className='h-full flex flex-col items-center relative'>
                                        <div className='absolute h-full w-[2px] bg-[#0572BB] z-10'></div>
                                        <div className='w-8 h-8 bg-[#0572BB] flex justify-center items-center z-20 rounded-full'>
                                            <img className='w-[60%]' src={tick} />
                                        </div>
                                    </div>
                                    <h1 className='ml-4 text-xl'>Discover Exceptional: Explore a carefully curated selection of businesses and startups with strong growth potential, meticulously vetted to meet your investment standards.</h1>
                                </div>
                                <div className='flex h-[150px]'>
                                    <div className='h-full flex flex-col items-center relative'>
                                        <div className='absolute h-full w-[2px] bg-[#0572BB] z-10'></div>
                                        <div className='w-8 h-8 bg-[#0572BB] flex justify-center items-center z-20 rounded-full'>
                                            <img className='w-[60%]' src={tick} />
                                        </div>
                                    </div>
                                    <h1 className='ml-4 text-xl'>Maximize Your Returns: Access high-yield investment opportunities that offer the potential for lucrative returns and long-term growth.</h1>
                                </div>
                                <div className='flex h-[150px]'>
                                    <div className='h-full flex flex-col items-center relative'>
                                        <div className='w-8 h-8 bg-[#0572BB] flex justify-center items-center z-20 rounded-full'>
                                            <img className='w-[60%]' src={tick} />
                                        </div>
                                    </div>
                                    <h1 className='ml-4 text-xl'>Connect with Outliers: Engage directly with ambitious entrepreneurs who are revolutionizing industries and shaping the future of business.</h1>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className='flex h-[150px]'>
                                    <div className='h-full flex flex-col items-center relative'>
                                        <div className='absolute h-full w-[2px] bg-[#95d5b2] z-10'></div>
                                        <div className='w-8 h-8 bg-[#95d5b2] flex justify-center items-center z-20 rounded-full'>
                                            <img className='w-[60%]' src={tick} />
                                        </div>
                                    </div>
                                    <h1 className='ml-4 text-xl'>Gain Access to Capital: Pitch your venture to a network of investors eager to support innovative ideas.</h1>
                                </div>
                                <div className='flex h-[150px]'>
                                    <div className='h-full flex flex-col items-center relative'>
                                        <div className='absolute h-full w-[2px] bg-[#95d5b2] z-10'></div>
                                        <div className='w-8 h-8 bg-[#95d5b2] flex justify-center items-center z-20 rounded-full'>
                                            <img className='w-[60%]' src={tick} />
                                        </div>
                                    </div>
                                    <h1 className='ml-4 text-xl'>Build Strategic Partnerships: Establish connections that can provide more than just financial support.</h1>
                                </div>
                                <div className='flex h-[150px]'>
                                    <div className='h-full flex flex-col items-center relative'>
                                        <div className='w-8 h-8 bg-[#95d5b2] flex justify-center items-center z-20 rounded-full'>
                                            <img className='w-[60%]' src={tick} />
                                        </div>
                                    </div>
                                    <h1 className='ml-4 text-xl'>Accelerate Growth: Get the resources and expertise you need to scale your business quickly.</h1>
                                </div>
                            </>
                        )}
                    </div>
                </div>
                <div className='w-[40%] flex flex-col items-center p-8'>
                    <h1 className='text-4xl font-semibold mr-auto'>How it Works</h1>
                    <div className='mt-8'>
                        {activeTab === 'Investor' ? (
                            <>
                                <div className='flex h-[150px]'>
                                    <div className='h-full flex flex-col items-center relative'>
                                        <div className='absolute h-full w-[2px] bg-[#0572BB] z-10'></div>
                                        <div className='w-8 h-8 bg-[#0572BB] flex justify-center items-center z-20 rounded-full'>
                                            <img className='w-[60%]' src={tick} />
                                        </div>
                                    </div>
                                    <h1 className='ml-4 text-xl'>Sign Up: Create an investor profile to gain access to the curated list of startups.</h1>
                                </div>
                                <div className='flex h-[150px]'>
                                    <div className='h-full flex flex-col items-center relative'>
                                        <div className='absolute h-full w-[2px] bg-[#0572BB] z-10'></div>
                                        <div className='w-8 h-8 bg-[#0572BB] flex justify-center items-center z-20 rounded-full'>
                                            <img className='w-[60%]' src={tick} />
                                        </div>
                                    </div>
                                    <h1 className='ml-4 text-xl'>Explore: Browse through the startups, and use filters to find the most relevant opportunities.</h1>
                                </div>
                                <div className='flex h-[150px]'>
                                    <div className='h-full flex flex-col items-center relative'>
                                        <div className='w-8 h-8 bg-[#0572BB] flex justify-center items-center z-20 rounded-full'>
                                            <img className='w-[60%]' src={tick} />
                                        </div>
                                    </div>
                                    <h1 className='ml-4 text-xl'>Invest: Engage with entrepreneurs, negotiate terms, and make your investment.</h1>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className='flex h-[150px]'>
                                    <div className='h-full flex flex-col items-center relative'>
                                        <div className='absolute h-full w-[2px] bg-[#95d5b2] z-10'></div>
                                        <div className='w-8 h-8 bg-[#95d5b2] flex justify-center items-center z-20 rounded-full'>
                                            <img className='w-[60%]' src={tick} />
                                        </div>
                                    </div>
                                    <h1 className='ml-4 text-xl'>Register: Sign up and create a compelling profile for your startup.</h1>
                                </div>
                                <div className='flex h-[150px]'>
                                    <div className='h-full flex flex-col items-center relative'>
                                        <div className='absolute h-full w-[2px] bg-[#95d5b2] z-10'></div>
                                        <div className='w-8 h-8 bg-[#95d5b2] flex justify-center items-center z-20 rounded-full'>
                                            <img className='w-[60%]' src={tick} />
                                        </div>
                                    </div>
                                    <h1 className='ml-4 text-xl'>Pitch: Submit your pitch to attract the attention of potential investors.</h1>
                                </div>
                                <div className='flex h-[150px]'>
                                    <div className='h-full flex flex-col items-center relative'>

                                        <div className='w-8 h-8 bg-[#95d5b2] flex justify-center items-center z-20 rounded-full'>
                                            <img className='w-[60%]' src={tick} />
                                        </div>
                                    </div>
                                    <h1 className='ml-4 text-xl'>Negotiate: Engage with investors, negotiate terms, and secure funding.</h1>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DealroomPage;
